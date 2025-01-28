import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";

type BlogSpecificType = {
  id: string;
  title: string;
  content: string;
  author: {
    name: string;
  };
};

export const useGetSpecificBlog = (id: string) => {
  const [blog, setBlog] = useState<BlogSpecificType>();
  const [loading,setLoading] = useState(false)


  useEffect(()=>{
    const getSpecificBlog = async (id:string) => {
      setLoading(true)
      const response = await axios.get(
        `${BACKEND_URL}/api/v1/blog/${id}`, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("authorization")}`,
          },
        });
      setBlog(response.data.getBlog)
      setLoading(false)
  };
    getSpecificBlog(id)
},[id])
return {loading,blog}
};
