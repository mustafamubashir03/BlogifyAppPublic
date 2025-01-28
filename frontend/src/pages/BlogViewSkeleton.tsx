function BlogViewSkeleton() {
  return (
    <div
      className="grid grid-cols-1 lg:grid-cols-12  w-full py-16 lg:px-4 animate-pulse"
      role="status"
    >
      <div className="col-span-8 py-16">
        <div className="flex flex-col gap-3 border-slate-200 p-4 cursor-pointer w-full">
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
        </div>
      </div>
      <div className="col-span-4 py-16 flex flex-col">
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
}

export default BlogViewSkeleton;
