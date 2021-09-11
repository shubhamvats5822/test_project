import React from 'react';

const FullPageLayout = ({ children, ...rest }) => {
  return (
    <div>
      <main className=''>{children}</main>
    </div>
  );
};

export default FullPageLayout;
