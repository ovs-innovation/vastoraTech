
import React from 'react'; 
import Link from 'next/link';
import PrevDetailsIcon from '@/svg/blogs_icon/PrevDetailsIcon';
import NextDetailsIcon from '@/svg/blogs_icon/NextDetailsIcon';
import Image from 'next/image';
import PostComments from './PostComments'; 
import SocialLinks from '@/components/common/social-links';
import CommentForm from '@/components/forms/CommentForm';
import BlogSidebar from '@/components/inner-pages/blog-sidebar';

const fallbackImg = '/default-thumb.jpg'; // adjust as needed

const BlogDetailsPostboxArea = ({ blog }) => {
  if (!blog) return null;
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
              {/* Author & Comments sections can also be replaced with API data if available */}
              <div className="postbox-author d-flex mb-95">
                <div className="postbox-author-thumb">
                  <img src="/assets/img/blog/comments/postbox-author-1.png" alt="theme-pure" />
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