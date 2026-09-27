export const Button = ({
  name = "Button",
  background = "bg-accent-bg",
  width = 2,
  height = 2,
  textOnHover = "white",
}) => {
  return (
    <div
      className={`cursor-pointer border border-accent-border hover:text-${textOnHover} text-[1.1rem] text-nowrap py-2 px-1.5 rounded-xl ${background} text-center h-[${height}rem] w-[${width}rem] ${background === "bg-accent-bg" ? "hover:bg-accent hover:text-black" : "hover:bg-accent-bg"}`}
    >
      {name}
    </div>
  );
};
