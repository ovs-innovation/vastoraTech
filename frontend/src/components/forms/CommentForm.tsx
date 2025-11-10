
'use client'
import React, { useState } from 'react';

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

interface Props {
  blogId: string;
}

interface FormData {
    fullName: string;
    email: string;
    comment: string;
}

const schema = yup.object({
    fullName: yup.string().required().label("Full Name"),
    email: yup.string().required().email().label("Email"),
    comment: yup.string().required("Comment is required").min(2),
}).required();

const CommentForm: React.FC<Props> = ({ blogId }) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
        resolver: yupResolver(schema),
    });
    const [message, setMessage] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const onSubmit = async (data: FormData) => {
        setError(null);
        setMessage(null);
        setLoading(true);
        try {
          const resp = await fetch(
            process.env.NEXT_PUBLIC_API_URL
              ? `${process.env.NEXT_PUBLIC_API_URL}/blog-comments/`
              : `http://localhost:8081/api/blog-comments/`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                blogId,
                name: data.fullName,
                email: data.email,
                comment: data.comment,
              }),
            }
          );
          const result = await resp.json();
          if (!result.success) throw new Error(result.message || 'Could not add comment');
          setMessage('Thank you! Your comment is submitted for review. It may appear after admin approval.');
          reset();
        } catch (err: any) {
          setError(err.message || 'Could not submit comment');
        } finally {
          setLoading(false);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row gx-8">
                    <div className="col-xl-12 col-lg-12">
                        <div className="postbox-comment-input">
                            <textarea
                              placeholder="Your Comment"
                              {...register("comment")}
                              disabled={loading}
                            />
                        </div>
                        <p className="form_error">{errors.comment?.message}</p>
                    </div>
                    <div className="col-lg-4">
                        <div className="postbox-comment-input">
                            <input type="text" {...register("fullName")}
                                   placeholder="Full name" disabled={loading} />
                        </div>
                        <p className="form_error">{errors.fullName?.message}</p>
                    </div>
                    <div className="col-lg-4">
                        <div className="postbox-comment-input">
                            <input type="email" {...register("email")}
                                   placeholder="Your email" disabled={loading} />
                        </div>
                        <p className="form_error">{errors.email?.message}</p>
                    </div>
                    <div className="col-lg-4">
                        <div className="postbox-comment-input">
                            <input type="text" placeholder="Website" disabled={loading} />
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="postbox-comment-agree d-flex align-items-start mb-35">
                            <input className="e-check-input" type="checkbox" id="e-agree" disabled={loading} />
                            <label className="e-check-label" htmlFor="e-agree">Save my name, email, and website in this
                                browser for the next time I comment.</label>
                        </div>
                    </div>
                    <div className="col-xxl-12">
                        <div className="postbox-comment-btn">
                            <button type="submit" className="tp-btn" disabled={loading}>{loading ? "Posting..." : "Post Comment"}</button>
                        </div>
                    </div>
                    {message && <div className="col-12"><div className="alert alert-success">{message}</div></div>}
                    {error && <div className="col-12"><div className="alert alert-danger">{error}</div></div>}
                </div>
            </form>
        </>
    );
};

export default CommentForm;