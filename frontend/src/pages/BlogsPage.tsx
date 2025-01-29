import { useState } from "react";
import Navbar from "../components/Navbar";
import { useBlogs } from "../hooks/useBlogs";

import PrimaryButton from "../components/PrimaryButton";
import Blog from "../components/Blog";
import BlogsPageSkeleton from "./BlogsPageSkeleton";
import Heading from "../components/Heading";
import { useGetUser } from "../hooks/useGetUser";

function BlogsPage() {
  const [limit, setLimit] = useState(10);
  const { loading, blogs } = useBlogs(limit);
  const { user } = useGetUser();
  const incrementLimit = () => {
    setLimit((limit) => limit + 3);
  };
  return (
    <div>
      <Navbar />
      <div className="m-auto max-w-xl py-24">
        <div className="px-6">
          <Heading>Hello, {user?.name || ""}</Heading>
        </div>
        {loading === true ? (
          <BlogsPageSkeleton />
        ) : (
          blogs.map((blog) => (
            <Blog
              name={blog.author.name || "Anonymous"}
              date="Dec3, 2023"
              title={blog.title}
              content={blog.content}
              id={blog.id}
            />
          ))
        )}
        {!loading && (
          <PrimaryButton size={"small"} onClick={incrementLimit}>
            Load More..
          </PrimaryButton>
        )}
      </div>
    </div>
  );
}

export default BlogsPage;
