import axios from "axios";
import { BACKEND_URL } from "../config";
import { useEffect, useState } from "react";


type getUserType = {
  id: string;
  email: string;
  name: string;
  password: string;
};

export const useGetUser = () => {
  const userInfo = localStorage.getItem("userInfo")
  const [user, setUser] = useState<getUserType>(()=>{
    if(userInfo){
      return JSON.parse(userInfo)
    }
  });
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getUser = async () => {
      setLoading(true);
      const response = await axios.get(`${BACKEND_URL}/api/v1/user`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("authorization")}`,
        },
      });
      setUser(response.data);
      localStorage.setItem("userInfo", JSON.stringify(response.data));
      setLoading(false);
    };

    getUser();
  }, []);
  return { loading, user };
};
