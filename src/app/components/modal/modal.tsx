"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import styles from "./modal.module.css";
import React from "react";
import { useRouter } from "next/navigation";

type modalPosition = {
  top: number;
  left: number;
};

type modalProps = {
  no: number;
  name: string;
  store: string;
  photo: string;
  comments: string;
};
type parentsProps = {
  ModalContents: modalProps;
  closemodal: () => void;
  modalPosition: modalPosition;
};

export function Modal({
  ModalContents,
  closemodal,
  modalPosition,
}: parentsProps) {
  const fadeRef = useRef(null);
  const [fuwatto, Setfuwatto] = useState(false);
  const router = useRouter();

  const voteSmile: () => void = () => {
    router.push(`/kanryo/${ModalContents.no}`);
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
        threshold: 0,
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
        <div
          className={styles.modalContent}
          style={{
            top: modalPosition.top + "px",
            left: modalPosition.left + "px",
          }}
        >
          <div
            className={`${styles.fuwatto_fade_in} ${
              fuwatto ? styles.is_visible : ""
            }  ${styles.result} `}
            ref={fadeRef}
          >
            <div className={styles.font}>
              <img src={ModalContents.photo} />
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
