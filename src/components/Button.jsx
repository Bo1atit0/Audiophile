import PropTypes from "prop-types";

const sizeClasses = {
  sm: "min-w-20 px-3 py-1.5 text-sm",
  md: "min-w-40 px-4 py-2.5",
  lg: "min-w-80 px-4 py-2 text-lg",
};
const Button = ({
  children,
  color,
  textColor,
  hoverColor,
  onClick,
  size = "md",
}) => {
  return (
    <button
      className={` font-semibold  flex items-center justify-center gap-2 ${color} ${sizeClasses[size]}
      cursor-pointer scale-100 hover:scale-102 transition-all duration-400 ease-in-out 
       ${textColor} ${hoverColor} ${
         color === "bg-transparent" ? "border border-dark1" : "border-none"
       }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
};

export default Button;
