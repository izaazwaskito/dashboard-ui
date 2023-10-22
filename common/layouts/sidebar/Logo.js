import React from "react";
import { Gallery } from "iconsax-react";

const Logo = () => {
  return (
    <>
      <div className="col-md-12 d-flex my-4">
        <div
          className="col-md-10 h-14 mt-2 mb-2 d-flex mx-auto"
          style={{ backgroundColor: "#C4C4C4" }}
        >
          <Gallery
            className="my-auto mx-auto"
            size="32"
            color="#292d32"
            variant="Bold"
          />
        </div>
      </div>
    </>
  );
};

export default Logo;
