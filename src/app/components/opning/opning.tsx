import styles from "./opning.module.css";

// stopOpAnime:voidの形で渡すことが出来ないのでこの形で引数の型を定義している
export function Op({ stopOpAnime }: { stopOpAnime: () => void }) {
  return (
    <>
      <div className={styles.back_color}>
        <button className={styles.button} onClick={stopOpAnime}>
          Skip
        </button>
      </div>

      <div className={styles.vertical_bar}>No.1は誰？</div>
      <div className={styles.horizontal_bar}>選ばれし10人</div>
    </>
  );
}
