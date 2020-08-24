import { useRef, useState, useEffect } from 'react';

export const useIsInView = (margin = '0px') => {
  const [isIntersecting, setIntersecting] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const { current } = ref;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
      },
      { rootMargin: margin }
    );
    if (current) observer.observe(current);

    return () => {
      observer.unobserve(current);
    };
  }, [margin]);

  return [ref, isIntersecting];
};
