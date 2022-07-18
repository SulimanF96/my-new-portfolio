const Project = (props) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="md:shrink-0">{props.children.image}</div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {props.children.type}
          </div>
          <a
            href="#"
            className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
          >
            {props.children.title}
          </a>
          <p className="mt-2 text-slate-500">{props.children.decription}</p>
        </div>
      </div>
    </div>
  );
};

export default Project;
