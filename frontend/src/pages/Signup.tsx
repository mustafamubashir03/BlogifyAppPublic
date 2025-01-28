import { SignUpType } from "@itz____mmm/blog-common";
import Heading from "../components/Heading";
import Input from "../components/Input";
import IntroReview from "../components/IntroReview";
import Label from "../components/Label";
import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { toast } from "react-toastify";

function Signup() {
  const [signUpData, setSignUpData] = useState<SignUpType>({
    name: "",
    email: "",
    password: "",
  });
  const [loading,setLoading] = useState(false)
  const navigate = useNavigate();
  const handleName = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSignUpData((signUpData: SignUpType) => ({
      ...signUpData,
      name: e.target.value,
    }));
  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSignUpData((signUpData: SignUpType) => ({
      ...signUpData,
      email: e.target.value,
    }));
  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSignUpData((signUpData: SignUpType) => ({
      ...signUpData,
      password: e.target.value,
    }));

  const handleSignUp = async () => {
    try{
      setLoading(true)
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/auth/signup`,
        signUpData
      );
      setLoading(false)
      toast.success("Signed up!");
      localStorage.setItem("authorization", response.data.jwt);
      navigate("/blogs");
    }catch(err){
       console.log(err);
       toast.error("Couldn't create your account")
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
      <div className="flex items-center justify-center">
        <div className="flex flex-col rounded-sm px-8 py-8 w-full gap-4 ">
          <div className="flex justify-center items-center flex-col text-center gap-2">
            <Heading>Create an account</Heading>
            <div className="flex gap-1">
              <Label>Already have an account?</Label>
              <Link to={"/sign-in"}>
                <SecondaryButton>Sign in</SecondaryButton>
              </Link>
            </div>
          </div>
          <div className="py-4 flex flex-col gap-2 w-full ">
            <Input
              type="text"
              label="Username"
              onChange={handleName}
              value={signUpData["name"] || ""}
            />
            <Input
              type="email"
              label="Email"
              onChange={handleEmail}
              value={signUpData["email"]}
            />
            <Input
              type="text"
              label="Password"
              onChange={handlePassword}
              value={signUpData["password"]}
            />
          </div>
          <PrimaryButton onClick={handleSignUp}>{loading?"loading":"Sign up"}</PrimaryButton>
        </div>
      </div>
      <IntroReview />
    </div>
  );
}

export default Signup;
