import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./index.css";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import { Bounce, ToastContainer } from "react-toastify";
import BlogsPage from "./pages/BlogsPage";
import BlogView from "./pages/BlogView";
import CreateBlog from "./pages/CreateBlog";

function App() {
  return (
    <div className="font-[Poppins]">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path={"/sign-up"} element={<Signup />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/blog/:id" element={<BlogView />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/new-blog" element={<CreateBlog />} />
      </Routes>
    </div>
  );
}

export default App;
