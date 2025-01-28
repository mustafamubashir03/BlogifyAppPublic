import { SignInType } from "@itz____mmm/blog-common";
import { useState } from "react";
import Heading from "../components/Heading";
import Label from "../components/Label";
import SecondaryButton from "../components/SecondaryButton";
import Input from "../components/Input";
import PrimaryButton from "../components/PrimaryButton";
import IntroReview from "../components/IntroReview";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../config.ts";
import { toast } from "react-toastify";

function Signin() {
  const [signInData, setSignInData] = useState<SignInType>({
    email: "",
    password: "",
  });
   const [loading,setLoading] = useState(false);
  const navigate = useNavigate()

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSignInData((signInData: SignInType) => ({
      ...signInData,
      email: e.target.value,
    }));

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSignInData((signInData: SignInType) => ({
      ...signInData,
      password: e.target.value,
    }));

    const handleSignIn = async () => {
      try{
        setLoading(true)
        const response = await axios.post(
          `${BACKEND_URL}/api/v1/auth/signin`,
          signInData
        );
        setLoading(false)
        toast.success("Signed in!")
        localStorage.setItem("authorization", response.data.jwt);
        navigate("/blogs")
      }catch(error){
        console.log(error);
        toast.error("Couldn't sign in")
      }
    };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
      <div className="flex items-center justify-center">
        <div className="flex flex-col rounded-sm px-8 py-8 w-full gap-4 ">
          <div className="flex justify-center items-center flex-col text-center gap-2">
            <Heading>Sign in to your account</Heading>
            <div className="flex gap-1">
              <Label>Don't have an account?</Label>
              <Link to={"/sign-up"}>
                <SecondaryButton>Sign up</SecondaryButton>
              </Link>
            </div>
          </div>
          <div className="py-4 flex flex-col gap-2 w-full ">
            <Input
              type="email"
              label="Email"
              onChange={handleEmail}
              value={signInData["email"]}
            />
            <Input
              type="text"
              label="Password"
              onChange={handlePassword}
              value={signInData["password"]}
            />
          </div>
          <PrimaryButton onClick={handleSignIn}>{loading?"Loading":"Sign in"}</PrimaryButton>
        </div>
      </div>
      <IntroReview />
    </div>
  );
}

export default Signin;
