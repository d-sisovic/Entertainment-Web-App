import { useState, useEffect } from "react";
import { WindowSize } from "../ts/enums/window-size.enum";

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (windowSize < 768) { return WindowSize.MOBILE; }

  if (windowSize < 1440) { return WindowSize.TABLET; }

  return WindowSize.DESKTOP;
}