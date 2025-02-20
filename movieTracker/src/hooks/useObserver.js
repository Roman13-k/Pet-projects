import { useEffect, useRef } from "react";

export const useObserver = (ref, callback, isLoading, canLoad) => {
  const observer = useRef();
  useEffect(() => {
    if (isLoading) return;
    if (observer.current) observer.current.disconnect();

    const cb = (entries, observer) => {
      if (entries[0].isIntersecting) {
        callback();
      }
    };
    observer.current = new IntersectionObserver(cb);

    observer.current.observe(ref.current);
  }, [isLoading]);
};
