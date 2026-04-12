import { useGetListPosts } from "../../hooks";
import { ListPosts } from "../list-posts";
import styles from "./app.module.css";

export function App() {
  const [listPostsDTO, isLoading] = useGetListPosts();

  return (
    <>
      {isLoading && <h2 className={styles.title}>Loading ...</h2>}
      {listPostsDTO.length > 0 && <ListPosts listPosts={listPostsDTO} />}
    </>
  );
}
