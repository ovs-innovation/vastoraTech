"use client";


import * as yup from "yup";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';


interface FormData {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}

const schema = yup.object({
  fullName: yup.string().required().label("Full Name"),
  email: yup.string().required().email().label("Email"),
  subject: yup.string().required().label("Subject"),
  message: yup.string().required().label("Message"),
}).required();

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8081/api";


const ContactFormHomeFour = () => {

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const [submitting, setSubmitting] = useState(false);
  const [modalContent, setModalContent] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const onSubmit = async (data: FormData) => {
    if (submitting) return;
    setSubmitting(true);
    setModalContent(null);
    try {
      const response = await fetch(`${API_URL}/contact-submissions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const payload = await response.json();
      if (!response.ok || payload?.success === false) {
        throw new Error(payload?.message || "Unable to send your message right now.");
      }
      setModalContent({
        type: "success",
        message: payload?.message || "Thanks! We will reach out soon.",
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
  const modalStyles = useMemo(() => ({
    overlay: {
      position: "fixed" as const,
      inset: 0,
      backgroundColor: "rgba(0,0,0,0.45)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 9999,
      padding: "20px",
    },
    box: {
      background: "#fff",
      borderRadius: "12px",
      width: "100%",
      maxWidth: "420px",
      boxShadow: "0 20px 45px rgba(15,23,42,0.15)",
      padding: "30px",
      textAlign: "center" as const,
    },
    title: {
      fontSize: "20px",
      fontWeight: 600,
      marginBottom: "10px",
      color: "#0f172a",
    },
    message: {
      fontSize: "16px",
      marginBottom: "20px",
      color: "#475569",
    },
    button: (type: "success" | "error") => ({
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      padding: "12px 0",
      borderRadius: "8px",
      border: "none",
      fontWeight: 600,
      cursor: "pointer",
      color: "#fff",
      backgroundColor: type === "success" ? "#059669" : "#dc2626",
    }),
  }), []);


  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="tpcontact-from-wrapper">
          <div className="row gx-6">
            <div className="col-lg-6">
              <div className="tpcontact-form-input mb-20">
                <input type="text" {...register("fullName")} placeholder="Full name" />
                <p className="form_error">{errors.fullName?.message}</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="tpcontact-form-input mb-20">
                <input type="email" {...register("email")} placeholder="Email Address" />
                <p className="form_error">{errors.email?.message}</p>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="tpcontact-form-input mb-20">
                <input type="text" {...register("subject")} placeholder="Subject" />
                <p className="form_error">{errors.subject?.message}</p>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="tpcontact-form-textarea mb-25">
                <textarea {...register("message")} placeholder="Message" rows={4}></textarea>
                <p className="form_error">{errors.message?.message}</p>
              </div>
            </div>
          </div>
          <div className="tpcontact-form-check d-flex align-items-center mb-25">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault01" />
            <label className="contact-form-label" htmlFor="flexCheckDefault01">
              By submitting, I'm agreed to the Terms &amp; Conditions
            </label>
          </div>
          <div className="tpcontact-form-submit">
            <button type="submit" disabled={submitting}>
              {submitting ? "Sending..." : "Send Message"}
            </button>
          </div>
        </div>
      </form>
      {modalContent && (
        <div
          style={modalStyles.overlay}
          role="alertdialog"
          aria-live="assertive"
          aria-modal="true"
          aria-label="Contact form submission feedback"
          onClick={closeModal}
        >
          <div style={modalStyles.box} onClick={(event) => event.stopPropagation()}>
            <p style={modalStyles.title}>
              {modalContent.type === "success" ? "Message Sent" : "Submission Failed"}
            </p>
            <p style={modalStyles.message}>{modalContent.message}</p>
            <button type="button" onClick={closeModal} style={modalStyles.button(modalContent.type)}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactFormHomeFour;
