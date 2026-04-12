import { memo, useCallback, useMemo } from "react";
import styles from "./list-pages.module.css";
import type { TUseSwitchPageResult } from "../../hooks/use-switch-page";

export type TListPagesProps = Pick<
  TUseSwitchPageResult,
  "totalPages" | "navigateToPage"
>;

const ListPages = memo(
  ({ totalPages, navigateToPage }: TListPagesProps): React.JSX.Element => {
    const pageNumbering = useMemo(
      () => Array.from({ length: totalPages }, (_, i) => i + 1),
      [totalPages],
    );

    const handleClick = useCallback((event) => {
      navigateToPage(Number(event.target.textContent));
    }, []);

    return (
      <ul className={styles.container}>
        {pageNumbering.map((i, index) => (
          <li key={index} className={styles.item} onClick={handleClick}>
            {i}
          </li>
        ))}
      </ul>
    );
  },
);

ListPages.displayName = "ListPages";
export { ListPages };
