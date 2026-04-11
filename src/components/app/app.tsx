import { ListPostsProvider } from "../../context/list-posts-provider";
import { useGetListPosts } from "../../hooks";
import { ListPosts } from "../list-posts";

export function App() {
  const [listPostsDTO, isLoading] = useGetListPosts();

  return (
    <ListPostsProvider>
      {isLoading && <h2>Loading ...</h2>}
      {listPostsDTO.length > 0 && <ListPosts listPosts={listPostsDTO} />}
    </ListPostsProvider>
  );
}
