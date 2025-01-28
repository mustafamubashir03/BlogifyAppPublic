import EditBlog from "../components/EditBlog";
import Heading from "../components/Heading";
import Navbar from "../components/Navbar";

function CreateBlog() {
  return (
    <div>
      <Navbar />
      <div className="m-auto max-w-xl py-24 px-8">
      <Heading>Create Blog</Heading>
        <EditBlog />
      </div>
    </div>
  );
}

export default CreateBlog;
