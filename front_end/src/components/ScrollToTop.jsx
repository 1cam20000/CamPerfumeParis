import React, { useState } from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <button
        onClick={scrollToTop}
        style={{ display: isVisible ? "block" : "none" }}
        id="scroll"
      >
        <FaArrowAltCircleUp size={60} color={"#302aaf"} />
      </button>
    </div>
  );
};

export default ScrollToTop;
