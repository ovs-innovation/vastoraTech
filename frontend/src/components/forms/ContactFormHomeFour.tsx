"use client";

import * as yup from "yup";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

interface FormData {
  fullName: string;
  email: string;
  phone?: string;
  website?: string;
  company?: string;
  hearAboutUs?: string;
  message: string;
}

const schema = yup
  .object({
    fullName: yup.string().required("Name is required").label("Name"),
    email: yup
      .string()
      .required("Email is required")
      .email("Please enter a valid email")
      .label("Email"),
    phone: yup.string().optional().label("Phone"),
    website: yup.string().optional().label("Website"),
    company: yup.string().optional().label("Company"),
    hearAboutUs: yup.string().optional().label("How did you hear about us"),
    message: yup
      .string()
      .required("Please tell us more about your project")
      .label("Tell us more"),
  })
  .required();

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8081/api";

const ContactFormHomeFour = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const [submitting, setSubmitting] = useState(false);
  const [modalContent, setModalContent] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const onSubmit = async (data: FormData) => {
    if (submitting) return;
    setSubmitting(true);
    setModalContent(null);
    try {
      const payloadData = {
        fullName: data.fullName,
        email: data.email,
        phone: data.phone || "",
        website: data.website || "",
        company: data.company || "",
        hearAboutUs: data.hearAboutUs || "",
        subject: data.company
          ? `Inquiry from ${data.company}`
          : `Website Inquiry from ${data.fullName}`,
        message: [
          data.message,
          data.phone ? `Phone: ${data.phone}` : null,
          data.website ? `Website: ${data.website}` : null,
          data.company ? `Company: ${data.company}` : null,
          data.hearAboutUs ? `Heard via: ${data.hearAboutUs}` : null,
        ]
          .filter(Boolean)
          .join("\n\n"),
      };

      const response = await fetch(`${API_URL}/contact-submissions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payloadData),
      });

      const payload = await response.json();
      if (!response.ok || payload?.success === false) {
        throw new Error(
          payload?.message || "Unable to send your message right now."
        );
      }

      setModalContent({
        type: "success",
        message:
          payload?.message ||
          "Thank you! Your inquiry has been sent. We will get in touch with you shortly.",
      });
      reset();
    } catch (error: any) {
      setModalContent({
        type: "error",
        message: error?.message || "Something went wrong. Please try again.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const closeModal = () => setModalContent(null);

  const modalStyles = useMemo(
    () => ({
      overlay: {
        position: "fixed" as const,
        inset: 0,
        backgroundColor: "rgba(3, 11, 40, 0.75)",
        backdropFilter: "blur(6px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        padding: "20px",
      },
      box: {
        background: "#0d1b45",
        border: "1px solid rgba(56, 189, 248, 0.3)",
        borderRadius: "16px",
        width: "100%",
        maxWidth: "440px",
        boxShadow: "0 25px 60px rgba(0, 0, 0, 0.5), 0 0 30px rgba(37, 99, 235, 0.3)",
        padding: "32px 28px",
        textAlign: "center" as const,
      },
      title: {
        fontSize: "22px",
        fontWeight: 700,
        marginBottom: "10px",
        color: "#ffffff",
      },
      message: {
        fontSize: "15px",
        lineHeight: 1.6,
        marginBottom: "24px",
        color: "#cbd5e1",
      },
      button: (type: "success" | "error") => ({
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        padding: "13px 0",
        borderRadius: "9999px",
        border: "none",
        fontWeight: 700,
        fontSize: "15px",
        cursor: "pointer",
        color: "#fff",
        background:
          type === "success"
            ? "linear-gradient(135deg, #10b981 0%, #059669 100%)"
            : "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
        boxShadow:
          type === "success"
            ? "0 4px 15px rgba(16, 185, 129, 0.4)"
            : "0 4px 15px rgba(239, 68, 68, 0.4)",
      }),
    }),
    []
  );

  return (
    <>
      <div className="connect-form-container">
        <h3 className="connect-form-title">Connect With Us</h3>

        <form onSubmit={handleSubmit(onSubmit)} className="connect-form-grid" noValidate>
          {/* Row 1: Name * and Email * */}
          <div className="connect-field-group">
            <label className="connect-field-label" htmlFor="connect-name">
              Name <span className="required-star">*</span>
            </label>
            <input
              id="connect-name"
              type="text"
              className={`connect-field-input ${errors.fullName ? "is-invalid" : ""}`}
              placeholder=""
              {...register("fullName")}
              autoComplete="name"
            />
            {errors.fullName && (
              <span className="connect-field-error">{errors.fullName.message}</span>
            )}
          </div>

          <div className="connect-field-group">
            <label className="connect-field-label" htmlFor="connect-email">
              Email <span className="required-star">*</span>
            </label>
            <input
              id="connect-email"
              type="email"
              className={`connect-field-input ${errors.email ? "is-invalid" : ""}`}
              placeholder=""
              {...register("email")}
              autoComplete="email"
            />
            {errors.email && (
              <span className="connect-field-error">{errors.email.message}</span>
            )}
          </div>

          {/* Row 2: Phone and Website */}
          <div className="connect-field-group">
            <label className="connect-field-label" htmlFor="connect-phone">
              Phone
            </label>
            <input
              id="connect-phone"
              type="tel"
              className={`connect-field-input ${errors.phone ? "is-invalid" : ""}`}
              placeholder=""
              {...register("phone")}
              autoComplete="tel"
            />
            {errors.phone && (
              <span className="connect-field-error">{errors.phone.message}</span>
            )}
          </div>

          <div className="connect-field-group">
            <label className="connect-field-label" htmlFor="connect-website">
              Website
            </label>
            <input
              id="connect-website"
              type="url"
              className={`connect-field-input ${errors.website ? "is-invalid" : ""}`}
              placeholder=""
              {...register("website")}
              autoComplete="url"
            />
            {errors.website && (
              <span className="connect-field-error">{errors.website.message}</span>
            )}
          </div>

          {/* Row 3: Company and How did you hear about us */}
          <div className="connect-field-group">
            <label className="connect-field-label" htmlFor="connect-company">
              Company
            </label>
            <input
              id="connect-company"
              type="text"
              className={`connect-field-input ${errors.company ? "is-invalid" : ""}`}
              placeholder=""
              {...register("company")}
              autoComplete="organization"
            />
            {errors.company && (
              <span className="connect-field-error">{errors.company.message}</span>
            )}
          </div>

          <div className="connect-field-group">
            <label className="connect-field-label" htmlFor="connect-hear">
              How did you hear about us
            </label>
            <input
              id="connect-hear"
              type="text"
              className={`connect-field-input ${errors.hearAboutUs ? "is-invalid" : ""}`}
              placeholder=""
              {...register("hearAboutUs")}
            />
            {errors.hearAboutUs && (
              <span className="connect-field-error">{errors.hearAboutUs.message}</span>
            )}
          </div>

          {/* Row 4: Tell us more (full width) */}
          <div className="connect-field-group full-width">
            <label className="connect-field-label" htmlFor="connect-message">
              Tell us more
            </label>
            <textarea
              id="connect-message"
              rows={4}
              className={`connect-field-textarea ${errors.message ? "is-invalid" : ""}`}
              placeholder=""
              {...register("message")}
            ></textarea>
            {errors.message && (
              <span className="connect-field-error">{errors.message.message}</span>
            )}
          </div>

          {/* Row 5: Centered "Get in touch" pill button */}
          <div className="connect-submit-wrapper">
            <button
              type="submit"
              className="connect-submit-pill-btn"
              disabled={submitting}
            >
              {submitting ? "Sending..." : "Get in touch"}
            </button>
          </div>
        </form>
      </div>

      {modalContent && (
        <div
          style={modalStyles.overlay}
          role="alertdialog"
          aria-live="assertive"
          aria-modal="true"
          aria-label="Submission feedback"
          onClick={closeModal}
        >
          <div style={modalStyles.box} onClick={(e) => e.stopPropagation()}>
            <p style={modalStyles.title}>
              {modalContent.type === "success" ? "Message Received" : "Submission Failed"}
            </p>
            <p style={modalStyles.message}>{modalContent.message}</p>
            <button
              type="button"
              onClick={closeModal}
              style={modalStyles.button(modalContent.type)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactFormHomeFour;
