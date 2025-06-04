"use client";

import { Op } from "./components/opning/opning";
import { Suspense, useEffect, useState } from "react";
import Main from "./components/main/main";
import { Header } from "./components/Header/header";
import styles from "./page.module.css";

export default function Home() {
  const [opAnime, setOpAnime] = useState(true); //最初のアニメーション表示させる用

  useEffect(() => {
    const OpTimer = setTimeout(() => {
      setOpAnime(false);
    }, 6000);

    return () => clearTimeout(OpTimer);
  }, []);
  return (
    <>
      <Suspense fallback={<div>Loading…</div>}>
        {opAnime && <Op />}
        {!opAnime && (
          <div className={styles.fuwatto}>
            <Header />
            <Main />
          </div>
        )}
      </Suspense>
    </>
  );
}
