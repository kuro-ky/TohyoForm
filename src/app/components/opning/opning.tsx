import styles from "./opning.module.css";

export function Op() {
  return (
    <>
      <div className={styles.back_color}></div>

      <div className={styles.vertical_bar}>ここに文字</div>
      <div className={styles.horizontal_bar}>ここに文字</div>
    </>
  );
}
