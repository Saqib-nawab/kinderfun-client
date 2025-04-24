import React from "react";
import { useParams } from "react-router-dom";

interface Blog {
  id: string;
  title: string;
  image: string;
  description: string;
  category: string;
}

interface BlogDetailProps {
  blogs: Blog[];
}

const BlogDetail: React.FC<BlogDetailProps> = ({ blogs }) => {
  // Get the blog ID from the URL
  const { blogId } = useParams<{ blogId: string }>();
  const blog = blogs.find((b) => b.id === blogId);

  // If the blog data is not available (null or undefined), show a message to the user. 
  if (!blog) {
    return <div className="text-center mt-8">Blog not found.</div>;
  }

  return (
    <div className="bg-background text-text-dark min-h-screen mx-auto w-4/5 p-4">
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-64 object-cover rounded mb-6"
      />
      {/* Render the description as HTML */}
      <div
        className="prose"
        dangerouslySetInnerHTML={{ __html: blog.description }}
      />
    </div>
  );
};

export default BlogDetail;
