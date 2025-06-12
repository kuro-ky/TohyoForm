"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./modal.module.css";
import React from "react";

type modalProps = {
  no: number;
  name: string;
  store: string;
  URL: string;
  comments: string;
};
type parentsProps = {
  ModalContents: modalProps;
  closemodal: () => void;
};

export function Modal({ ModalContents, closemodal }: parentsProps) {
  const fadeRef = useRef(null);
  const [modal, setModal] = useState("");
  const [fuwatto, Setfuwatto] = useState(false);

  const voteSmile: () => void = () => {
    window.location.href = `./kanryo/${ModalContents.no}`;
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
        threshold: 0, // 10% が表示されたとき
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
      <div className={styles.overlay}>
        <div className={styles.modalContent}>
          <div
            className={`${styles.fuwatto_fade_in} ${
              fuwatto ? styles.is_visible : ""
            }  ${styles.result} `}
            ref={fadeRef}
          >
            <div className={styles.font}>
              <img className={styles.smileImg} src={ModalContents.URL} />
              <div>{ModalContents.store}</div>
              <div>{ModalContents.name}さん</div>
            </div>

            <br />
            <div>{ModalContents.comments}</div>
            <br />
            <button className={styles.ok} onClick={voteSmile}>
              {/* `${ }` */}
              <div
                style={{
                  fontSize: 15,
                  justifyContent: "center",
                  display: "grid",
                }}
              >
                {ModalContents.name}さんに
              </div>
              <div>投票する！！</div>
            </button>

            {/* <p onClick={OKCheckBox}>
                投票する！！
              </p> */}
            <span className={styles.batsu} onClick={closemodal}>
              ×
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
