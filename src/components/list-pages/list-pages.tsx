import { memo, useCallback, useMemo } from "react";
import styles from "./list-pages.module.css";
import type { TUseSwitchPageResult } from "../../hooks/use-switch-page";
import clsx from "clsx";

export type TListPagesProps = Pick<
  TUseSwitchPageResult,
  "totalPages" | "navigateToPage"
> & { page: string };

const ListPages = memo(
  ({
    totalPages,
    navigateToPage,
    page,
  }: TListPagesProps): React.JSX.Element => {
    const pageNumbering = useMemo(
      () => Array.from({ length: totalPages }, (_, i) => i + 1),
      [totalPages],
    );

    const handleClick = useCallback(
      (event: React.MouseEvent<HTMLLIElement>) => {
        navigateToPage(event.currentTarget.textContent);
      },
      [],
    );

    return (
      <ul className={styles.container}>
        {pageNumbering.map((i, index) => (
          <li
            key={index}
            className={clsx(
              styles.item,
              Number(page) === i && styles.item_select,
            )}
            onClick={handleClick}
          >
            {i}
          </li>
        ))}
      </ul>
    );
  },
);

ListPages.displayName = "ListPages";
export { ListPages };
