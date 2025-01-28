import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useGetSpecificBlog } from "../hooks/useGetSpecificBlog";
import Label from "../components/Label";
import BlogViewSkeleton from "./BlogViewSkeleton";

function BlogView() {
  const { id } = useParams();
  const { loading, blog } = useGetSpecificBlog(id || "");
  const content = blog?.content || ""
  return (
    <div>
      <Navbar />
      {loading ? (
        <BlogViewSkeleton />
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12  w-full py-16 lg:px-4">
          <div className="col-span-8 py-16">
            <div className="flex flex-col gap-3 border-slate-200 p-4 cursor-pointer w-full">
              <h2 className="font-bold text-3xl text-slate-700">
                {blog?.title}
              </h2>
              <p className="text-slate-400 font-semibold">
                Posted on .Dec23,2025
              </p>
              <p className="text-slate-700 text-lg">{blog?.content}</p>
              <p className="text-slate-600 text-sm">
                {Math.ceil(content?.length / 120)} min read
              </p>
            </div>
          </div>
          <div className="col-span-4 py-16 flex flex-col">
            <Label>Author</Label>
            <p className="font-semibold text-slate-700 text-xl">
              {blog?.author?.name || "Anonymous"}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default BlogView;
