import { useState } from "react";
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
  const [modal, setModal] = useState("");
  const voteSmile: () => void = () => {
    window.location.href = `./kanryo/${ModalContents.no}`;
  };

  return (
    <>
      <div className={styles.overlay}>
        <div className={styles.modalContent}>
          <div className={styles.font}>
            <img className={styles.smileImg} src={ModalContents.URL} />
            <div>{ModalContents.store}</div>
            <div>{ModalContents.name}さん</div>
          </div>

          <div>{ModalContents.comments}</div>
          <button className={styles.ok} onClick={voteSmile}>
            {/* `${ }` */}
            <div
              style={{
                fontSize: 15,
                justifyContent: "center",
                display: "grid",
              }}
            >
              {ModalContents.name}さんに 投票する！！
            </div>
          </button>

          {/* <p onClick={OKCheckBox}>
                投票する！！
              </p> */}
          <span className={styles.batsu} onClick={closemodal}>
            ×
          </span>
        </div>
      </div>
    </>
  );
}
