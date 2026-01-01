import Button from "./Button";
import { Link } from "react-router-dom";

const Items = ({ name, image, description, reverse, category, slug }) => {
  return (
    <div
      className={`flex flex-col lg:flex-row items-center justify-center gap-20 py-8 mx-5 ${
        reverse ? "lg:flex-row-reverse" : ""
      }`}
    >
      <div className="lg:w-[25%] w-full flex items-center justify-center  bg-light3 p-10  rounded-lg">
        <img
          src={image}
          alt=""
          className="lg:w-full object-contain object-top  w-[50%]"
        />
      </div>

      <div className="lg:w-[30%] flex flex-col gap-3 lg:items-start items-center lg:text-start text-center  justify-center">
        <h1 className="text-darkbutton font-medium">NEW PRODUCT</h1>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold ">{name}</h2>
        <p className="text-sm ">{description}</p>
        <Link to={`/${category}/${slug}`}>
          <Button
            color={"bg-darkbutton"}
            textColor={"text-light2"}
            hoverColor={"hover:bg-lightbutton"}
          >
            SEE PRODUCT
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Items;
