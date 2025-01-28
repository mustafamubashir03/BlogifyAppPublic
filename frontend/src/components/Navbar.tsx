import { Link } from "react-router-dom";
import ButtonMain from "./ButtonMain";
import { useGetUser } from "../hooks/useGetUser";
import { toast } from "react-toastify";

function Navbar() {
  const { user } = useGetUser();
  const logOut = () => {
    toast.success("You have been logged out")
    localStorage.clear();
  };
  return (
    <div className="fixed w-full bg-white shadow-slate-200 shadow-lg z-20">
      <div className="max-w-full px-8 flex justify-between py-4">
        <Link to={"/blogs"}>
          <div className="flex gap-2 items-center">
            <img
              className="h-10"
              src="https://tse3.mm.bing.net/th?id=OIP.SrY63gxlKO6DvQxft08h2QHaHa&pid=Api&P=0&h=220"
              alt="logo"
            />
            <h3 className="text-xl font-bold text-slate-700">Blogify</h3>
          </div>
        </Link>
        <div className="flex content-center gap-2">
          <Link to={"/sign-up"}>
            <ButtonMain onClick={logOut} type={"logout"}>
              Log out
            </ButtonMain>
          </Link>
          <Link to={"/new-blog"}>
            <ButtonMain>New</ButtonMain>
          </Link>
          <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-600 rounded-full dark:bg-gray-600">
            <span className="font-medium text-slate-100">
              {user?.name[0].toUpperCase()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
