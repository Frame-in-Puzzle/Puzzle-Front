import { MutableRefObject, useState, useEffect, useRef, useMemo } from "react";
import { post } from "../Components/Post/Post";

export type useInfiniteScrollType = {
  containerRef: MutableRefObject<HTMLDivElement | null>;
  postList: post[];
};

const NUMBER_OF_POSTS_PER_PAGE = 12;

const useInfiniteScroll = function (posts: post[]): useInfiniteScrollType {
  const containerRef: MutableRefObject<HTMLDivElement | null> =
    useRef<HTMLDivElement>(null);
  const [page, setPage] = useState<number>(1);

  const observer: IntersectionObserver = new IntersectionObserver(
    (entries, observer) => {
      if (!entries[0].isIntersecting) return;

      setPage((value) => value + 1);
      observer.disconnect();
    },
  );

  useEffect(() => {
    if (
      NUMBER_OF_POSTS_PER_PAGE * page >= posts.length ||
      containerRef.current === null ||
      containerRef.current.children.length === 0
    )
      return;

    observer.observe(
      containerRef.current.children[containerRef.current.children.length - 1],
    );
  }, [page]);

  return {
    containerRef,
    postList: posts.slice(0, page * NUMBER_OF_POSTS_PER_PAGE),
  };
};

export default useInfiniteScroll;
