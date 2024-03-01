/* eslint-disable react/prop-types */
import "./button.css";

const Button = (props) => {
  // eslint-disable-next-line react/prop-types
  return (
    <main
      className="btn-container"
      style={{
        width: `${props.wid}px`,
        backgroundColor: !props.addCheck ? props.bg : props.bg2,
        height: props.hei,
        border: `${props.bod}px`,
        color: !props.addCheck ? props.col : props.bg,
        fontSize: `${props.font}px`,
        borderRadius: `${props.br}px`,
      }}
    >
      {props.btn}
    </main>
  );
};

export default Button;
