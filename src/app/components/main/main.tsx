import styles from "./main.module.css";
import { entrySmile, haikei } from "../deta/deta";
import { useEffect, useRef, useState } from "react";
import { Dela_Gothic_One } from "next/font/google";
import { Modal } from "../modal/modal";
import Image from "next/image";

const delaGothicOne = Dela_Gothic_One({
  weight: "400",
  subsets: ["latin"],
});

export default function Main() {
  const fadeRef = useRef(null);
  const [fuwatto, Setfuwatto] = useState(false);
  const [showModal, setShowModal] = useState(false); //モーダルを表示させる用
  const [modalPosition, setModalPosition] = useState<{
    top: number;
    left: number;
  } | null>(null);
  const [ModalContents, setModalContents] = useState<{
    no: number;
    name: string;
    store: string;
    photo: string;
    comments: string;
  } | null>(null);
  //  ↑ボタンを押したときの記録用

  const handleModal = (
    smile: {
      no: number;
      name: string;
      store: string;
      photo: string;
      comments: string;
    },
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    const position = e.currentTarget.getBoundingClientRect();

    setModalPosition({
      top: position.bottom + window.scrollY,
      left: position.left + window.scrollX,
    });
    setModalContents(smile);
    setShowModal(true);
  };

  // モーダルを閉じる用
  const closemodal = () => {
    setShowModal(false);
  };

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
      {/* <div className={styles.window_body}> */}
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
              {haikei.map((h, index) => (
                <li className={styles.scroll_infinity__item} key={index}>
                  <Image
                    src={h.back}
                    alt={"全国のスマイルさん"}
                    width={500}
                    height={300}
                  />
                </li>
              ))}
            </ul>
          </div>
          {/* <div className={styles.scroll_infinity__wrap}>
            <ul className={styles.scroll_infinity__list}>
              <li className={styles.scroll_infinity__item}>
                <img src="仮画像.png" />
              </li>
            </ul>
          </div> */}
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

        <section id="Tohyo">
          <div className={styles.midashi_font}>投票する</div>
          <div className={styles.font}>
            以下の10名からあなたが一番「すまいるさん」だと思う人に投票してください。
          </div>
          <div className={styles.font}>
            何票でも投票可能ですが、1票ずつの投票となります。
          </div>
          <br />
          <br />

          {/* <div
            className={`${styles.fuwatto_fade_in} ${
              fuwatto ? styles.is_visible : ""
            }`}
            ref={fadeRef}
          > */}
          <div>
            {/* <h1>社員部門</h1> */}
            <div className={styles.container}>
              {entrySmile.map((smilesan, index) => (
                <div key={index}>
                  <li
                    className={`${styles.list_style} ${delaGothicOne.className}`}
                  >
                    {smilesan.no}.{smilesan.store}
                  </li>
                  <li
                    className={`${styles.list_style} ${delaGothicOne.className}`}
                  >
                    {smilesan.name}さん
                  </li>
                  <video
                    controls
                    className={styles.movie_style}
                    src={smilesan.URL}
                  />
                  <div></div>

                  <button
                    className={styles.button}
                    onClick={(e) => handleModal(smilesan, e)}
                  >
                    {/* <div
                      style={{
                        fontSize: 15,
                        justifyContent: "center",
                        display: "grid",
                      }}
                    >
                      {smilesan.name}さんに
                    </div> */}
                    <div>投票する！</div>
                  </button>
                </div>
              ))}
            </div>
          </div>
          {/* ModalContents={ModalContents} */}
          {showModal && ModalContents && modalPosition && (
            <Modal
              ModalContents={ModalContents}
              closemodal={closemodal}
              modalPosition={modalPosition}
            />
          )}
          {/* </div> */}
        </section>
        <br></br>
        <br></br>

        <section id="Kekka">
          <div className={styles.midashi_font}>結果発表について</div>
          <div
            className={`${styles.fuwatto_fade_in} ${
              fuwatto ? styles.is_visible : ""
            }  ${styles.result} `}
            ref={fadeRef}
          >
            発表日時：▽月▽日(予定)
            <div className={styles.result}>
              ホスピタリティコンテスト内で発表！
            </div>
          </div>
        </section>

        <br></br>
        <br></br>
        <div className={`${styles.fotter} ${delaGothicOne.className}`}>
          たくさんの投票お待ちしております！！
        </div>
      </div>
    </>
  );
}
// className={styles.list_leyout}
