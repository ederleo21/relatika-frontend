import React from "react";

export const PostCard = ({ post }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 border border-gray-200 hover:shadow-lg transition">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-lg">{post.username}</h3>
        <span className="text-sm text-gray-500">
          {new Date(post.created_at).toLocaleDateString()}
        </span>
      </div>

      {/* Title */}
      <h2 className="text-xl font-bold mb-2">{post.title}</h2>

      {/* Content */}
      <p className="text-gray-700 leading-relaxed whitespace-pre-line">
        {post.content}
      </p>
    </div>
  );
};
