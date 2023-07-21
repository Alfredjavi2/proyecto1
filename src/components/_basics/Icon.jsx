import React from "react";

const Icon = ({ icon: CustomIcon, className, stroke = 1, size }) => {
  return <CustomIcon className={className} stroke={stroke} size={size} />;
};

export default Icon;
