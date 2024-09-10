import React from "react";

function Props(props) {
  const { name, age, email } = props;
  return (
    <>
      {name} {age} {email}
    </>
  );
}

export default Props;
