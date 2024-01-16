"use client";

import { useEffect } from "react";

function AdjustClient() {
  useEffect(() => {
    function adjustZoom() {
      const screenWidth = window.innerWidth;
      const baseScreenWidth = 1920;
      const scaleFactor = screenWidth / baseScreenWidth;

      const bodyElement = document.querySelector("body");
      // console.log("adjsut : ", screenWidth);
      if (screenWidth > 1023) {
        bodyElement.style.zoom = `${scaleFactor}`;
      }
    }

    adjustZoom();
    // window.addEventListener("resize", () => {
    //   if (window.innerWidth > 1920)
    //     document.querySelector("body").style.zoom = 1;
    // });

    return () => {
      window.removeEventListener("resize", adjustZoom);
    };
  }, []);

  return <></>;
}

export default AdjustClient;
