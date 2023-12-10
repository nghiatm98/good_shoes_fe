import { useEffect } from "react";

export const useOnClickOutside = (ref: any, handler: any) => {
  useEffect(() => {
    const headerEle = document.getElementById("header");
    const listener = (event: any) => {
      if (
        !ref.current ||
        ref.current.contains(event.target) ||
        headerEle?.contains(event.target)
      ) {
        return;
      }
      handler(event);
      document.body.style.overflow = "initial";
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
};
