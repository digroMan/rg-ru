import type React from "react";
import {
  useListPosts,
  useSetListPosts,
} from "../../context/list-posts-context";
import type { IListPostsDTO } from "../../hooks/use-get-list-posts";
import { Pagination } from "../pagination";
import styles from "./list-posts.module.css";
import { useEffect, useMemo, useState } from "react";
import { ITEMS_PER_PAGE } from "../../utils/constants";

export type TListPosts = {
  listPosts: IListPostsDTO[];
};

export function ListPosts({ listPosts }: TListPosts): React.JSX.Element {
  const ctxListPosts = useListPosts();
  const [page, setPage] = useState(1);
  const setListPosts = useSetListPosts();

  useEffect(() => {
    setListPosts(listPosts);
  }, []);

  const totalPages = Math.max(1, Math.ceil(listPosts.length / ITEMS_PER_PAGE));

  const currentPosts = useMemo(() => {
    const start = (page - 1) * ITEMS_PER_PAGE;
    return ctxListPosts.slice(start, start + ITEMS_PER_PAGE);
  }, [ctxListPosts, page]);

  const handleClickNext = (): void => {
    setPage((p) => Math.min(p + 1, totalPages));
  };

  const handleClickPrev = (): void => {
    setPage((p) => Math.max(p - 1, 1));
  };

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Posts list</h2>
      <Pagination onNext={handleClickNext} onPrev={handleClickPrev} />
      <ul className={styles.list}>
        {currentPosts.map((i, index) => {
          // const isLast = index === todoItems.length - 1;
          return (
            <li key={i.id} className={styles.item}>
              <h3>{i.title}</h3>
              <p>{i.body}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
