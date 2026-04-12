import type React from "react";
import { useEffect, useState } from "react";
import {
  Link,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import type { IListPostsDTO } from "../../hooks/use-get-list-posts";
import type { TListPostsProps } from "../list-posts/list-posts";
import styles from "./post-page.module.css";

export const PostPage = ({ listPosts }: TListPostsProps): React.JSX.Element => {
  const [post, setPost] = useState<IListPostsDTO>();
  const navigate = useNavigate();
  const [searchParams, _] = useSearchParams();
  const { pId } = useParams<string>();

  useEffect(() => {
    setPost(listPosts.find((i) => i.id === Number(pId)));
  }, [pId, listPosts]);

  const handleClick = () => {
    const backPage = searchParams.get("returnPage");
    navigate(`/list/${backPage}`);
  };

  if (!post)
    return (
      <p className={styles.paragraph}>
        Пост не найден, перейти к{" "}
        <Link to="/" className={styles.link}>
          списку постов
        </Link>
      </p>
    );

  return (
    <article className={styles.container} key={pId}>
      <h3 className={styles.title}>{post.title}</h3>
      <p className={styles.body}>{post.body}</p>
      <button className={styles.button} type="button" onClick={handleClick}>
        Назад
      </button>
    </article>
  );
};
