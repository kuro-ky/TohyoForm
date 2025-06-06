import styles from "./main.module.css";
import { entrySmile } from "../deta/deta";

export default function Main() {
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
            </ul>
          </div>
        </div>

        <div className={styles.main_font}>
          あなたの1票で「ベスト・オブ・すまいるさん」が決まる！
        </div>
        <div className={styles.font}>
          全国のガイアから素敵な「すまいるさん」が大集合！
        </div>
        <div className={styles.font}>
          予選を勝ち上がった「すまいるさん」の中からグッときた「すまいるさん」に投票してください。
        </div>
        <div className={styles.font}>投票期間は〇月〇日～★月★日</div>
        <div className={styles.font}>結果発表は▽月▽日を予定！！</div>

        <a className={styles.midashi_font}>投票する</a>

        <div className={styles.main_font}>社員部門</div>
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

              <button className={styles.button}>投票する！</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
// className={styles.list_leyout}
