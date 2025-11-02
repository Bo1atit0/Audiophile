import PropTypes from "prop-types";

const Button = ({ children, color, textColor, hoverColor }) => {
  return (
    <button
      className={` font-semibold min-w-40 px-4 py-2.5 flex items-center justify-center gap-2 ${color} 
      cursor-pointer scale-95 hover:scale-100 transition-all duration-400 ease-in-out 
      ${textColor} hover:${hoverColor} ${
        color === "bg-transparent" ? "border border-dark1" : "border-none"
      }`}
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
