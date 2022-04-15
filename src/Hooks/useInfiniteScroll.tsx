import { MutableRefObject, useState, useEffect, useRef, useMemo } from "react";
import { post } from "../Components/Post/Post";
import { getPost } from "../Lib/Api/post/post";

export type useInfiniteScrollType = {
  containerRef: MutableRefObject<HTMLDivElement | null>;
  postList: post[];
};

const NUMBER_OF_ITEMS_PER_PAGE = 10;

const useInfiniteScroll = function (posts: post[]): useInfiniteScrollType {
  const containerRef: MutableRefObject<HTMLDivElement | null> =
    useRef<HTMLDivElement>(null);

  const [count, setCount] = useState<number>(1);

  const observer: IntersectionObserver = new IntersectionObserver(
    (entries, observer) => {
      if (!entries[0].isIntersecting) return;

      setCount((value) => value + 1);
      getPost(count);
      observer.disconnect();
    },
  );

  useEffect(() => {
    if (
      NUMBER_OF_ITEMS_PER_PAGE * count >= posts.length ||
      containerRef.current === null ||
      containerRef.current.children.length === 0
    )
      return;

    observer.observe(
      containerRef.current.children[containerRef.current.children.length - 1],
    );
  }, [count]);

  return {
    containerRef,
    postList: posts.slice(0, count * NUMBER_OF_ITEMS_PER_PAGE),
  };
};

export default useInfiniteScroll;
