import { memo, type ReactNode } from "react";
import styles from "./pagination.module.css";
import clsx from "clsx";

type TPaginationProps = {
  onNext: () => void;
  onPrev: () => void;
  children?: ReactNode;
};

const Pagination = memo(
  ({ onNext, onPrev, children }: TPaginationProps): React.JSX.Element => {
    return (
      <div className={styles.container}>
        <button
          className={clsx(styles.button, styles.button_pre)}
          type="button"
          onClick={onPrev}
        >
          pre
        </button>
        {children}
        <button
          className={clsx(styles.button, styles.button_next)}
          type="button"
          onClick={onNext}
        >
          next
        </button>
      </div>
    );
  },
);

Pagination.displayName = "Pagination";
export { Pagination };
