import type React from "react";
import { useState, type ReactNode } from "react";
import { ListPostsContext, ListPostsSetterContext } from "./list-posts-context";
import { type IListPostsDTO } from "../hooks/use-get-list-posts";

type TListPostsProviderProps = {
  children: ReactNode;
};
export const ListPostsProvider = ({
  children,
}: TListPostsProviderProps): React.JSX.Element => {
  const [listPosts, setListPosts] = useState<IListPostsDTO[]>([]);

  return (
    <ListPostsContext value={listPosts}>
      <ListPostsSetterContext value={setListPosts}>
        {children}
      </ListPostsSetterContext>
    </ListPostsContext>
  );
};
