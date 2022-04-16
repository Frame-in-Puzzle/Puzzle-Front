import { useRef, useState, useEffect } from "react";

export const useTargetOnScreen = (
  options: IntersectionObserverInit | undefined,
) => {
  const [isVisible, setIsVisible] = useState<"true" | "false">("false");
  const containerRef = useRef<any>(null);

  const callback = (entries: any) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      setIsVisible("true");
    } else {
      setIsVisible("false");
    }
  };

  useEffect(() => {
    const targetElem = containerRef.current;
    const observer = new IntersectionObserver(callback, options);

    if (targetElem) {
      observer.observe(targetElem);
    }

    return () => {
      if (targetElem) {
        observer.unobserve(targetElem);
      }
    };
  }, [containerRef]);

  return { containerRef, isVisible };
};
