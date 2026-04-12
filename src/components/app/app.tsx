import { Route, Routes } from "react-router-dom";
import { useGetListPosts } from "../../hooks";
import { ListPosts } from "../list-posts";
import styles from "./app.module.css";
import { PostPage } from "../post-page";
import { Page404 } from "../page-404";

export function App() {
  const [listPostsDTO, isLoading] = useGetListPosts();

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            {isLoading && <h2 className={styles.title}>Loading ...</h2>}
            {listPostsDTO.length > 0 && <ListPosts listPosts={listPostsDTO} />}
          </>
        }
      />
      <Route
        path="/post/:pId"
        element={<PostPage listPosts={listPostsDTO} />}
      />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}
