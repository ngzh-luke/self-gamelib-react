import btnIcon from "../assets/totop.svg";

const ToTopBTN = () => {
  return (
    <>
      <a href="#" className="back-to-top">
        <span>
          <img
            src={btnIcon}
            style={{
              width: "45px",
              height: "auto",
            }}
          ></img>
        </span>
      </a>
    </>
  );
};

export default ToTopBTN;
