import React from "react";
import UserContext from "../../context/Context";

const withContext = (WrappedComonent) => {
  return function WithContext(props) {
    return (
      <UserContext.Consumer>
        {(ctx) => <WrappedComonent {...props} {...ctx} />}
      </UserContext.Consumer>
    );
  };
};
export default withContext;
