import React from "react";

const Squere = (props) => {
  const { el, className, onClick } = props;
  console.info(className);
  return (
    <div className="square" onClick={() => onClick()}>
      {el}
    </div>
  );
};

export default Squere;
