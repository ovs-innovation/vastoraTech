'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
// import ReplyIcon from '@/svg/blogs_icon/ReplyIcon';

interface Props {
  blogId: string;
}

interface APICOmment {
  _id: string;
  name: string;
  comment: string;
  createdAt: string;
}

const PostComments: React.FC<Props> = ({ blogId }) => {
  const [comments, setComments] = useState<APICOmment[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string|null>(null);

  useEffect(() => {
    if (!blogId) return;
    setLoading(true);
    fetch(
      process.env.NEXT_PUBLIC_API_URL
        ? `${process.env.NEXT_PUBLIC_API_URL}/blog-comments/${blogId}`
        : `http://localhost:8081/api/blog-comments/${blogId}`
    )
      .then(res => res.json())
      .then(data => setComments(data.data || []))
      .catch(() => setError('Could not load comments'))
      .finally(() => setLoading(false));
  }, [blogId]);

  if (loading) return <p>Loading comments...</p>;
  if (error) return <p>{error}</p>;
  if (!comments.length) return <p>No comments yet.</p>;

  return (
    <ul>
      {comments.map(comm => (
        <li key={comm._id}>
          <div className="postbox-comment-box p-relative">
            <div className="postbox-comment-info d-flex align-items-center mb-10">
              <div className="postbox-comment-avater">
                <img src={`https://ui-avatars.com/api/?name=${encodeURIComponent(comm.name || 'User')}&background=random`} alt={comm.name || 'User'} width={40} height={40} />
              </div>
              <div className="postbox-comment-name d-flex align-items-center">
                <h5>{comm.name}</h5>
                <span className="post-meta"> {new Date(comm.createdAt).toLocaleString()}</span>
              </div>
            </div>
            <div className="postbox-comment-text ml-65 grey-bg-2">
              <p>{comm.comment}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default PostComments;