import React, { useEffect, useState } from "react";
import "../../scss/ScrollTop.scss"
export default function ScrollTop(props) {
  const [color, setColor] = useState("white");
  const [bgColor, setBgColor] = useState("rgb(0, 143, 92)");

  useEffect(() => {
    if (props.color) {
      setColor(props.color);
    }
    if (props.bgColor) {
      setBgColor(props.bgColor);
    }
    let scrollButton = document.getElementById("scroll-top");
    if (scrollButton) scrollButton.style.display = "none";
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [props.color, props.bgColor]);

  function handleScroll() {
    let scrollButton = document.getElementById("scroll-top");
    if (scrollButton) {
      scrollButton.style.display = "none";
      if (
        document.body.scrollTop > 300 ||
        document.documentElement.scrollTop > 300
      ) {
        scrollButton.style.display = "block";
      }
    }
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <>
        <button
          onClick={() => scrollToTop()}
          id="scroll-top"
          title="Scroll to top"
          class="rbottom"
          style={{ color: color, backgroundColor: bgColor }}
        >
          Scroll Up
        </button>
   
    </>
  );
}
