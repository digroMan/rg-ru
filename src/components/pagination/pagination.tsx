import styles from "./pagination.module.css";
import clsx from "clsx";

type TPaginationProps = {
  onNext: () => void;
  onPrev: () => void;
};

export const Pagination = ({
  onNext,
  onPrev,
}: TPaginationProps): React.JSX.Element => {
  return (
    <div className={styles.buttons_container}>
      <button
        className={clsx(styles.button, styles.button_pre)}
        type="button"
        onClick={onPrev}
      >
        pre
      </button>
      {/* <p>{page}</p> */}
      <button
        className={clsx(styles.button, styles.button_next)}
        type="button"
        onClick={onNext}
      >
        next
      </button>
    </div>
  );
};
