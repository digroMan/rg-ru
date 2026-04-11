import {
  createContext,
  useContext,
  type Dispatch,
  type SetStateAction,
} from "react";
import type { IListPostsDTO } from "../hooks/use-get-list-posts";

export const ListPostsContext = createContext<IListPostsDTO[] | undefined>(
  undefined,
);
export const ListPostsSetterContext = createContext<
  Dispatch<SetStateAction<IListPostsDTO[]>> | undefined
>(undefined);

export const useListPosts = () => {
  const ctx = useContext(ListPostsContext);
  if (ctx === undefined) throw new Error("ListPostsContext === undefined");
  return ctx;
};

export const useSetListPosts = () => {
  const ctx = useContext(ListPostsSetterContext);
  if (ctx === undefined)
    throw new Error("ListPostsSetterContext === undefined");
  return ctx;
};
