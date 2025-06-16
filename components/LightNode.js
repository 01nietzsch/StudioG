import React from "react";
import { useRef, useEffect } from "react";

export default function LightNode(props) {
  // Pointing to background spotlights DOM elements
  const element = useRef(null);

  // Genereates a random integer in a specified range (between 'min' and 'max')
  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  useEffect(() => {
    var r = document.querySelector(":root");

    // Setting up first spotlight's default properties (on page render)
    const node = element.current;
    node.style.transition = "all";
    node.style.transitionDuration = "2000ms";
    node.style.backgroundColor = "rgba(0, 0, 0)";

    // Animating spotlights
    function animate() {
      node.style.opacity = `${randomIntFromInterval(10, 50)}%`;
      node.style.backgroundColor = "rgba(214, 127, 82, 0.5)";

      if (props.position == "top-left") {
        node.style.top = `${randomIntFromInterval(5, 25)}%`;
        node.style.left = `${randomIntFromInterval(5, 15)}%`;
      } else if (props.position == "bottom-right") {
        node.style.bottom = `${randomIntFromInterval(5, 25)}%`;
        node.style.right = `${randomIntFromInterval(5, 15)}%`;
      }

      setTimeout(animate, 2000);
    }

    animate();
  }, []);

  return (
    <span
      ref={element}
      style={{ zIndex: -1 }}
      className=" absolute md:w-[600px] md:h-[600px] w-1/3 h-40 lightNode overflow-hidden second blur-[80px] rounded-full"
    ></span>
  );
}
