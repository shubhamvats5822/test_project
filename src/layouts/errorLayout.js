import React from "react";

const ErrorLayout = ({ children, ...rest }) => {
   return (
      <div
         className="errorPage"
      >
         <main className="main">{children}</main>
      </div>
   );
};

export default ErrorLayout;
