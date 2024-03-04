/* eslint-disable react/prop-types */
import "./category.css";

const Category = (props) => {
  return (
    <main
      className={!props.col ? "category-container" : "category-container-color"}
    >
      <div className="category-icon-div">
        <img src={props.icon} alt="icon" className="category-icon" />
      </div>
      <div className={!props.col ? "category-text" : "category-text-color"}>
        {props.text}
      </div>
    </main>
  );
};

export default Category;
