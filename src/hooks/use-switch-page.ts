import { useCallback, useEffect, useMemo, useState } from "react";
import type { TListPostsProps } from "../components/list-posts/list-posts";
import { ITEMS_PER_PAGE } from "../utils/constants";
import type { IListPostsDTO } from "./use-get-list-posts";

export type TUseSwitchPageResult = {
  page: number;
  currentPosts: IListPostsDTO[];
  totalPages: number;
  handleClickNext: () => void;
  handleClickPrev: () => void;
  navigateToPage: (targetPage: number) => void;
};
export const useSwitchPage = ({
  listPosts,
}: TListPostsProps): TUseSwitchPageResult => {
  const [currentPosts, setCurrentPosts] = useState<IListPostsDTO[]>([]);
  const [page, setPage] = useState(1);

  const totalPages = useMemo(
    () => Math.max(1, Math.ceil(listPosts.length / ITEMS_PER_PAGE)),
    [listPosts],
  );

  const handleClickNext = useCallback(() => {
    setPage((p) => Math.min(p + 1, totalPages));
  }, []);

  const handleClickPrev = useCallback(() => {
    setPage((p) => Math.max(p - 1, 1));
  }, []);

  const navigateToPage = useCallback((targetPage: number) => {
    setPage(targetPage);
  }, []);

  useEffect(() => {
    const start = (page - 1) * ITEMS_PER_PAGE;
    setCurrentPosts(listPosts.slice(start, start + ITEMS_PER_PAGE));
  }, [page]);

  return {
    page,
    currentPosts,
    totalPages,
    handleClickNext,
    handleClickPrev,
    navigateToPage,
  };
};
