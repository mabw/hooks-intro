import React, { useEffect } from "react";

const UnmountEffect = () => {
  useEffect(() => {
    return () => alert("page is about to unmount");
  });

  return (
    <div>
      <h1>Unmount state example</h1>
    </div>
  );
};

export default UnmountEffect;
