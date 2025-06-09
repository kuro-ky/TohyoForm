import styles from "./header.module.css";
export function Header() {
  return (
    <>
      <div className={styles.header__flex}>
        <ul>
          <nav>
            <a href="/">TOP</a>
            <a href="#Tohyo">投票する</a>
            <a href="#Kekka">結果発表</a>
          </nav>
        </ul>
      </div>
    </>
  );
}
