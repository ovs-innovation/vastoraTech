"use client"

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from "react";


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


const ContactUs = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
        resolver: yupResolver(schema),
    });
    const [submitting, setSubmitting] = useState(false);
    const [serverMessage, setServerMessage] = useState<string | null>(null);
    const [serverError, setServerError] = useState<string | null>(null);

    const onSubmit = async (data: FormData) => {
        if (submitting) return;
        setSubmitting(true);
        setServerMessage(null);
        setServerError(null);
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
            setServerMessage(payload?.message || "Thanks! We will reach out soon.");
            reset();
        } catch (error: any) {
            setServerError(error?.message || "Something went wrong. Please try again.");
        } finally {
            setSubmitting(false);
        }
    };


    return (
        <>
            <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
                <div className="contact-form-input">
                    <input type="text" {...register("fullName")} placeholder="Full name" />
                </div>
                <p className="form_error">{errors.fullName?.message}</p>
                <div className="contact-form-input">
                    <input type="email" {...register("email")} placeholder="Your email" />
                </div>
                <p className="form_error">{errors.email?.message}</p>
                <div className="contact-form-input">
                    <input type="text" {...register("subject")} placeholder="Subject" />
                </div>
                <p className="form_error">{errors.subject?.message}</p>
                <div className="contact-form-input">
                    <textarea
                        {...register("message")}
                        placeholder="Your message"
                        rows={4}
                    ></textarea>
                </div>
                <p className="form_error">{errors.message?.message}</p>
                <div className="contact-form-check d-flex align-items-center mb-25">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault01" />
                    <label className="contact-form-label" htmlFor="flexCheckDefault01">By submitting, i'm agreed to the
                        Terms & Conditons</label>
                </div>
                <div className="contact-form-btn">
                    <button type="submit" className="tp-btn" disabled={submitting}>
                        {submitting ? "Sending..." : "Send Message"}
                    </button>
                </div>
                {serverMessage && (
                    <p className="mt-3 text-success" style={{ color: "#059669" }}>
                        {serverMessage}
                    </p>
                )}
                {serverError && (
                    <p className="mt-3 text-danger" style={{ color: "#dc2626" }}>
                        {serverError}
                    </p>
                )}
            </form>
        </>
    );
};

export default ContactUs;