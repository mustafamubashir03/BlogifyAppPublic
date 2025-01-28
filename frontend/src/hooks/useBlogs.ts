import axios from "axios";
import { BACKEND_URL } from "../config";
import { useEffect, useState } from "react";

type getBlogsType = {
  author:{
    name:string
  }
  date: string;
  title: string;
  content: string;
  id:string
}

export const useBlogs = (limit:number) => {
  const [blogs, setBlogs] = useState<getBlogsType[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getBlogs = async () => {
      setLoading(true);
      const response = await axios.get(
        `${BACKEND_URL}/api/v1/blog/bulk?limit=${limit}`,{
          headers: {
            authorization: `Bearer ${localStorage.getItem("authorization")}`,
          },
        }
      );
      setBlogs(response.data.getBlogs);
      setLoading(false);
    };
    getBlogs();
  }, [limit]);
  return {loading,blogs};
};
