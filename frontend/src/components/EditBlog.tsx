import { useState } from "react";
import Input from "./Input";
import PrimaryButton from "./PrimaryButton";
import { BlogPostType } from "@itz____mmm/blog-common";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function EditBlog() {
  const [blog, setBlog] = useState<BlogPostType>({ title: "", content: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBlog({ ...blog, title: e.target.value });
  };
  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBlog((blog) => ({ ...blog, content: e.target.value }));
  };

  const postBlog = async () => {
    try {
      if(!blog.title|| !blog.content){
        toast.warn("Kindly fill in the info")
        return
      }
      setLoading(true);
      const response = await axios.post(`${BACKEND_URL}/api/v1/blog`, blog, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("authorization")}`,
        },
      });
      console.log(response.data.newBlog);
      setLoading(false);
      toast.success("Blog created successfully");
      navigate(`/blog/${response.data.newBlog.id}`);
    } catch (err) {
      console.log(err);
      toast.error("Couldn't create Blog");
    }
  };
  return (
    <div>
      <Input
        label="Title"
        onChange={handleTitleChange}
        type="text"
        value={blog.title}
      />

      <div className="px-4 py-2 bg-white rounded-b-lg">
        <label htmlFor="editor" className="sr-only">
          Publish Blog
        </label>
        <textarea
          onChange={handleContentChange}
          value={blog.content}
          id="editor"
          rows={8}
          className="block w-full px-0 text-sm text-gray-800 bg-white"
          placeholder="Write an article..."
          required
        ></textarea>
      </div>
      <PrimaryButton onClick={postBlog}>{loading? "loading": "Publish Blog"}</PrimaryButton>
    </div>
  );
}

export default EditBlog;
