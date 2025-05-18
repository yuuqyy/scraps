import { ReactElement } from "react";
import styles from "./index.module.css";

type ScrapsProps = {
  title: string;
  count: number;
};

export function Scraps({ title, count }: ScrapsProps): ReactElement {
  return (
    <div className={styles.module}>
      <div className={styles.scrap}>
        <div className={styles.content}>
          <h1>{title}</h1>
        </div>
      </div>
      <div className={styles.badge}>{count}</div>
    </div>
  );
}
