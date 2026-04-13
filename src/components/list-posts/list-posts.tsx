import type React from "react";
import type { IListPostsDTO } from "../../hooks/use-get-list-posts";
import { Pagination } from "../pagination";
import styles from "./list-posts.module.css";
import { useSwitchPage } from "../../hooks";
import { useEffect } from "react";
import { ListPages } from "../list-pages";
import { Link, useParams } from "react-router-dom";

export type TListPostsProps = {
  listPosts: IListPostsDTO[];
};

export const ListPosts = ({
  listPosts,
}: TListPostsProps): React.JSX.Element => {
  const {
    currentPosts,
    totalPages,
    handleClickNext,
    handleClickPrev,
    navigateToPage,
  } = useSwitchPage({
    listPosts,
  });

  const { pageId } = useParams();

  useEffect(() => navigateToPage(pageId), [navigateToPage, pageId]);

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Posts list</h2>
      <Pagination onNext={handleClickNext} onPrev={handleClickPrev}>
        <ListPages
          navigateToPage={navigateToPage}
          totalPages={totalPages}
          page={pageId ?? `1`}
        />
      </Pagination>
      <ul className={styles.list}>
        {currentPosts.map((i) => {
          return (
            <li key={i.id} className={styles.item}>
              <Link to={`/post/${i.id}?returnPage=${pageId}`}>
                <h3 className={styles.item_title}>{i.title}</h3>
                <p className={styles.item_body}>{i.body}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
