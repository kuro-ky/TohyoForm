import styles from "./header.module.css";
export function Header() {
  return (
    <>
      <div className={styles.header__flex}>
        <ul>
          <a href="/">TOP</a>
          <a>投票する</a>
          <a>結果発表</a>
        </ul>
      </div>
    </>
  );
}
