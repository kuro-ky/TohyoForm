import styles from "./opning.module.css";

export function Op() {
  return (
    <>
      <div className={styles.back_color}></div>

      <div className={styles.vertical_bar}>No.1は誰？</div>
      <div className={styles.horizontal_bar}>選ばれし10人</div>
    </>
  );
}
