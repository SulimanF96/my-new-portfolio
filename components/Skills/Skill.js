const Skill = (props) => {
  return (
    <div className="space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row text-2xl">
      {props.children[0]}
      {props.children[1]}
    </div>
  );
};

export default Skill;
