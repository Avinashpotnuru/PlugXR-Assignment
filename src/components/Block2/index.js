import React, { useEffect, useState } from "react";
import "./index.css";

import { store } from "../../App";
import { AiOutlineClose } from "react-icons/ai";

import { useContext, useRef } from "react";

const Block2 = () => {
  const [popupId, setId, active, setActive] = useContext(store);
  const containerRef = useRef(null);
  const boxRef = useRef(null);

  const isClicked = useRef(false);

  console.log("active", active);

  const axis = useRef({
    startX: 0,
    startY: 0,
    lastX: 0,
    lastY: 0,
  });

  useEffect(() => {
    if (!boxRef.current || !containerRef.current) return;

    const box = boxRef.current;
    const container = containerRef.current;

    const onMouseDown = (e) => {
      isClicked.current = true;

      axis.current.startX = e.clientX;
      axis.current.startY = e.clientY;
    };

    const onMouseUp = (e) => {
      isClicked.current = false;

      axis.current.lastX = box.offsetLeft;
      axis.current.lastY = box.offsetTop;
    };

    const onMouseMove = (e) => {
      if (!isClicked.current) return;

      const nextX = e.clientX - axis.current.startX + axis.current.lastX;
      const nextY = e.clientY - axis.current.startY + axis.current.lastY;

      box.style.top = `${nextY}px`;
      box.style.left = `${nextX}px`;
    };

    box.addEventListener("mousedown", onMouseDown);
    box.addEventListener("mouseup", onMouseUp);

    container.addEventListener("mousemove", onMouseMove);
    container.addEventListener("mouseleave", onMouseUp);

    const cleanup = () => {
      box.removeEventListener("mousedown", onMouseDown);
      box.removeEventListener("mouseup", onMouseUp);
      container.removeEventListener("mousemove", onMouseMove);
      container.removeEventListener("mouseleave", onMouseUp);
    };

    return cleanup;
  }, []);

  return (
    <div ref={containerRef} className="block2">
      <div ref={boxRef} className={`${active && "popup"}`}>
        <div className={`${active ? "close" : "deactive"}`}>
          {active && <AiOutlineClose onClick={() => setActive(false)} />}
        </div>

        {active && popupId}
      </div>
    </div>
  );
};

export default Block2;
