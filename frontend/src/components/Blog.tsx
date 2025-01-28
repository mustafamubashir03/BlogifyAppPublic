import { Link } from "react-router-dom";

export type BlogType = {
  name: string;
  date: string;
  title: string;
  content: string;
  id: string;
};

function Blog({ name, date, title, content, id }: BlogType) {
  return (
    <Link to={`/blog/${id}`}>
      <div className="flex flex-col gap-3 border-b border-slate-200 p-4 cursor-pointer">
        <div className="flex items-center gap-4">
          <div className="flex gap-2 items-center">
            <div className="relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
              <span className="font-medium text-gray-600 dark:text-gray-300">
                {name[0].toUpperCase()}
              </span>
            </div>
            <p className="text-slate-700 font-semibold">{name}</p>
          </div>
          <p className="text-slate-400 font-semibold">.{date}</p>
        </div>
        <h2 className="font-bold text-xl text-slate-700">{title}</h2>
        <p className="text-slate-700 line-clamp-2">{content}</p>
        <p className="text-slate-600 text-sm">
          {Math.ceil(content.length / 120)} min read
        </p>
      </div>
    </Link>
  );
}

export default Blog;
