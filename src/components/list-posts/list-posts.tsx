import type React from "react";
import type { IListPostsDTO } from "../../hooks/use-get-list-posts";
import { Pagination } from "../pagination";
import styles from "./list-posts.module.css";
import { useSwitchPage } from "../../hooks";
import { useEffect } from "react";
import { ListPages } from "../list-pages";

export type TListPostsProps = {
  listPosts: IListPostsDTO[];
};

export const ListPosts = ({
  listPosts,
}: TListPostsProps): React.JSX.Element => {
  const {
    page,
    currentPosts,
    totalPages,
    handleClickNext,
    handleClickPrev,
    navigateToPage,
  } = useSwitchPage({
    listPosts,
  });

  useEffect(() => navigateToPage(1), []);

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Posts list</h2>
      <Pagination onNext={handleClickNext} onPrev={handleClickPrev}>
        {/* Возможно нужно сделать стабильную ссылку на компонент ListPages*/}
        {/* Для предотвращения ререндера Pagination */}
        <ListPages navigateToPage={navigateToPage} totalPages={totalPages} />
      </Pagination>
      <ul className={styles.list_posts}>
        {currentPosts.map((i, index) => {
          // const isLast = index === listPosts.length - 1;
          return (
            <li key={i.id} className={styles.item_post}>
              <h3>{i.title}</h3>
              <p>{i.body}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
