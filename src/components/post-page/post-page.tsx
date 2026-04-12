import type React from "react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import type { IListPostsDTO } from "../../hooks/use-get-list-posts";
import type { TListPostsProps } from "../list-posts/list-posts";
import styles from "./post-page.module.css";

export const PostPage = ({ listPosts }: TListPostsProps): React.JSX.Element => {
  const [post, setPost] = useState<IListPostsDTO>();
  const { pId } = useParams<string>();

  useEffect(() => {
    if (listPosts.length > 0) console.log(pId);
    console.log(listPosts);
    setPost(listPosts.find((i) => i.id === Number(pId)));
  }, [pId, listPosts]);

  if (!post)
    return (
      <p className={styles.paragraph}>
        Не найдено, перейти к{" "}
        <Link to="/" className={styles.link}>
          списку постов
        </Link>
      </p>
    );

  return (
    <article className={styles.container} key={pId}>
      <h3 className={styles.title}>{post.title}</h3>
      <p className={styles.body}>{post.body}</p>
      <button className={styles.button} type="button">
        <Link to={"/"} className={styles.anchor}>
          Назад
        </Link>
      </button>
    </article>
  );
};
