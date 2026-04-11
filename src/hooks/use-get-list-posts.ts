import { useEffect, useState } from "react";
const BASE_URL = "https://jsonplaceholder.typicode.com";

export interface IListPostsDTO {
  body: string;
  id: number;
  title: string;
  userId: number;
}

export const useGetListPosts = (): [IListPostsDTO[], boolean] => {
  const [listPosts, setListsPosts] = useState<IListPostsDTO[]>([]);
  const [isLoading, setLoader] = useState(true);

  useEffect(() => {
    fetch(`${BASE_URL}/posts`)
      .then((res) => res.json())
      .then((res: IListPostsDTO[]) => {
        setLoader(false);
        setListsPosts(res);
      });
  }, []);

  return [listPosts, isLoading];
};
