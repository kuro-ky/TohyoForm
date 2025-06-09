import styles from "./main.module.css";
import { entrySmile } from "../deta/deta";
import { useEffect, useRef, useState } from "react";

export default function Main() {
  const fadeRef = useRef(null);
  const [fuwatto, Setfuwatto] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            Setfuwatto(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1, // 10% が表示されたとき
      }
    );

    if (fadeRef.current) {
      observer.observe(fadeRef.current);
    }

    return () => {
      if (fadeRef.current) {
        observer.unobserve(fadeRef.current);
      }
    };
  }, []);

  return (
    <>
      <div className={styles.back}>
        {/* <img src="ドットオレンジ.jpg" alt="オレンジの背景"　className={styles}></img> */}
        <div className={styles.scroll_infinity}>
          <img
            className={styles.logo}
            src="すまいるさんロゴ透過ふちアリ.png"
            alt="すまいるさんのロゴ"
          />
          <div className={styles.scroll_infinity__wrap}>
            <ul className={styles.scroll_infinity__list}>
              <li className={styles.scroll_infinity__item}>
                <img src="仮画像.png" />
              </li>
              <li className={styles.scroll_infinity__item}>
                <img src="仮画像.png" />
              </li>
              <li className={styles.scroll_infinity__item}>
                <img src="仮画像.png" />
              </li>
              <li className={styles.scroll_infinity__item}>
                <img src="仮画像.png" />
              </li>
              <li className={styles.scroll_infinity__item}>
                <img src="仮画像.png" />
              </li>
              <li className={styles.scroll_infinity__item}>
                <img src="仮画像.png" />
              </li>
              <li className={styles.scroll_infinity__item}>
                <img src="仮画像.png" />
              </li>
              <li className={styles.scroll_infinity__item}>
                <img src="仮画像.png" />
              </li>
              <li className={styles.scroll_infinity__item}>
                <img src="仮画像.png" />
              </li>
              <li className={styles.scroll_infinity__item}>
                <img src="仮画像.png" />
              </li>
              <li className={styles.scroll_infinity__item}>
                <img src="仮画像.png" />
              </li>
              <li className={styles.scroll_infinity__item}>
                <img src="仮画像.png" />
              </li>
              <li className={styles.scroll_infinity__item}>
                <img src="仮画像.png" />
              </li>
              <li className={styles.scroll_infinity__item}>
                <img src="仮画像.png" />
              </li>
              <li className={styles.scroll_infinity__item}>
                <img src="仮画像.png" />
              </li>
              <li className={styles.scroll_infinity__item}>
                <img src="仮画像.png" />
              </li>
              <li className={styles.scroll_infinity__item}>
                <img src="仮画像.png" />
              </li>
              <li className={styles.scroll_infinity__item}>
                <img src="仮画像.png" />
              </li>
              <li className={styles.scroll_infinity__item}>
                <img src="仮画像.png" />
              </li>
              <li className={styles.scroll_infinity__item}>
                <img src="仮画像.png" />
              </li>
              <li className={styles.scroll_infinity__item}>
                <img src="仮画像.png" />
              </li>
              <li className={styles.scroll_infinity__item}>
                <img src="仮画像.png" />
              </li>
              <li className={styles.scroll_infinity__item}>
                <img src="仮画像.png" />
              </li>
              <li className={styles.scroll_infinity__item}>
                <img src="仮画像.png" />
              </li>
              <li className={styles.scroll_infinity__item}>
                <img src="仮画像.png" />
              </li>
              <li className={styles.scroll_infinity__item}>
                <img src="仮画像.png" />
              </li>
              <li className={styles.scroll_infinity__item}>
                <img src="仮画像.png" />
              </li>
              <li className={styles.scroll_infinity__item}>
                <img src="仮画像.png" />
              </li>
              <li className={styles.scroll_infinity__item}>
                <img src="仮画像.png" />
              </li>
              <li className={styles.scroll_infinity__item}>
                <img src="仮画像.png" />
              </li>
              <li className={styles.scroll_infinity__item}>
                <img src="仮画像.png" />
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.main_font}>
          あなたの1票で「ベスト・オブ・すまいるさん」が決まる！
        </div>
        <br></br>

        <div className={styles.font}>
          全国のガイアから素敵な「すまいるさん」が大集合！
        </div>
        <div className={styles.font}>
          予選を勝ち上がった「すまいるさん」の中からグッときた「すまいるさん」に投票してください。
        </div>
        <div className={styles.font}>投票期間は〇月〇日～★月★日</div>
        <br></br>
        <br></br>

        <section id="Tohyo">
          <div className={styles.midashi_font}>投票する</div>
          <div
            className={`${styles.fuwatto_fade_in} ${
              fuwatto ? styles.is_visible : ""
            }`}
            ref={fadeRef}
          >
            <div className={styles.font}>
              以下の10名からあなたが一番「すまいるさん」だと思う人に投票してください。
            </div>
            <div className={styles.font}>一人何票でも投票可！</div>
            <br />
            <br />
          </div>

          <div
            className={`${styles.fuwatto_fade_in} ${
              fuwatto ? styles.is_visible : ""
            }`}
            ref={fadeRef}
          >
            {/* <h1>社員部門</h1> */}
            <div className={styles.container}>
              {entrySmile.map((smilesan, index) => (
                <div key={index}>
                  <li className={styles.list_style}>
                    エントリーナンバー{smilesan.no}　
                  </li>
                  <li className={styles.list_style}>{smilesan.store}店</li>
                  <li className={styles.list_style}>{smilesan.name}さん</li>
                  <img className={styles.img_style} src={smilesan.URL} />
                  <div></div>

                  <button className={styles.button}>
                    <div
                      style={{
                        fontSize: 15,
                        justifyContent: "center",
                        display: "grid",
                      }}
                    >
                      {smilesan.name}さんに
                    </div>
                    <div>投票する！</div>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
        <br></br>
        <br></br>

        <section id="Kekka">
          <div className={styles.midashi_font}>結果発表について</div>
          <div className={styles.font}>結果発表日時：▽月▽日(予定)</div>
          <div className={styles.font}>ホスピタリティコンテスト内で発表！</div>
        </section>

        <h3>沢山の投票お待ちしております！！</h3>
      </div>
    </>
  );
}
// className={styles.list_leyout}
