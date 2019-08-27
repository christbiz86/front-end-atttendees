import React from "react";
// import { MDBContainer } from "mdbreact";
import "./ScrollbarPage.css";

const ScrollBarPage = () => {
  const scrollContainerStyle = { width: "800px", maxHeight: "400px" };
  return (
        <div className="scrollbar mx-auto" style={scrollContainerStyle}>
          <img alt="" src="https://mdbootstrap.com/img/Photos/Others/img%20(51).jpg" />
        </div>
  );
};

export default ScrollBarPage;
