'use client';

import React, { useState } from 'react'; 
import PostComments from './PostComments'; 
import SocialLinks from '@/components/common/social-links';
import CommentForm from '@/components/forms/CommentForm';
import BlogSidebar from '@/components/inner-pages/blog-sidebar';


const BlogDetailsPostboxArea = ({ blog }: { blog: any }) => {
  if (!blog) return null;
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  return (
    <section className="postbox-area mt-90 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="postbox-area-wrap">
              <div className="postbox-main">
                {/* Removed image, title, meta (category, author, date) - now in breadcrumb */}
                <article style={{ fontSize: 18, lineHeight: 1.6 }}>
                  <div dangerouslySetInnerHTML={{ __html: blog.content || blog.description || '' }} />
                </article>
              </div>

              {/* FAQ Section */}
              {Array.isArray(blog.faqs) && blog.faqs.length > 0 && (
                <div className="blog-faq-area mt-60 mb-60">
                  <h3 className="mb-30">Frequently Asked Questions</h3>
                  <div className="accordion" id="blogFaqAccordion">
                    {blog.faqs.map((faq: any, index: number) => {
                      const itemId = `blog-faq-${index}`;
                      if (!faq?.question && !faq?.answer) return null;
                      return (
                        <div key={itemId} className="accordion-item blog-faq-item">
                          <h2 className="accordion-header" id={`heading-${itemId}`}>
                            <button
                              className={`accordion-button blog-faq-toggle ${activeIndex === index ? "is-open" : "collapsed"}`}
                              type="button"
                              onClick={() =>
                                setActiveIndex(prev => (prev === index ? null : index))
                              }
                              aria-expanded={activeIndex === index}
                              aria-controls={`collapse-${itemId}`}
                              style={{ display: 'flex', alignItems: 'center', width: '100%', position: 'relative', textAlign: 'left' }}
                            >
                              <span className="blog-faq-question-text">
                                {faq.question || `Question ${index + 1}`}
                              </span>
                              <svg
                                width="12"
                                height="8"
                                viewBox="0 0 12 8"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                style={{
                                  position: 'absolute',
                                  right: 20,
                                  top: '50%',
                                  transform: `translateY(-50%) rotate(${activeIndex === index ? 180 : 0}deg)`,
                                  transition: 'transform 0.3s ease',
                                  flexShrink: 0
                                }}
                              >
                                <path
                                  d="M1 1L6 6L11 1"
                                  stroke={activeIndex === index ? "#111827" : "#9CA3AF"}
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </button>
                          </h2>
                          <div
                            id={`collapse-${itemId}`}
                            className={`accordion-collapse collapse ${activeIndex === index ? "show" : ""}`}
                            aria-labelledby={`heading-${itemId}`}
                          >
                            <div className="accordion-body">
                              {faq.answer || ""}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Author & Comments sections can also be replaced with API data if available */}
              <div className="postbox-author d-flex mb-95">
                <div className="postbox-author-thumb">
                  <img
                    src={`https://ui-avatars.com/api/?name=${encodeURIComponent(blog.author || 'Author')}&background=random`}
                    alt={blog.author || 'Author'}
                  />
                </div>
                <div className="postbox-author-content">
                  <span>About Author</span>
                  <h4 className="postbox-author-title">{blog.author}</h4>
                  {/* Optionally show bio/description if in API */}
                  {/* <p>{blog.authorBio || ''}</p> */}
                  <div className="postbox-author-social"> 
                    <SocialLinks />
                  </div>
                </div>
                <span></span>
              </div>
              {/* Comments & comment form can be added if hooked to backend */}
              <div className="postbox-comment mb-100">
                {/* Optionally fetch and render comments from API */}
                <h3 className="postbox-comment-title mb-35">Comments</h3>
                <PostComments blogId={blog._id || ""} />
              </div>
              <div className="postbox-comment-form">
                <h3 className="postbox-comment-form-title">Leave a Comment</h3>
                <p>Your email address will not be published. Required fields are marked *</p>
                <CommentForm blogId={blog._id || ""} />
              </div>
            </div>
          </div>
          <BlogSidebar />
        </div>
      </div>
    </section>
  );
};

export default BlogDetailsPostboxArea;