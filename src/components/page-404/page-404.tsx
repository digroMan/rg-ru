import { Link } from "react-router-dom";
import styles from "./page-404.module.css";

export const Page404 = () => {
  return (
    <p className={styles.paragraph}>
      Страница не найдена, перейти к{" "}
      <Link to="/" className={styles.link}>
        списку постов
      </Link>
    </p>
  );
};
