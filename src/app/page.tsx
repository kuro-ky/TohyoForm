import Image from "next/image";
import styles from "./page.module.css";
import { Op } from "./components/opning/opning";
import { Suspense } from "react";
import Main from "./components/main/main";

export default function Home() {
  return (
    <>
      <Suspense fallback={<div>Loading…</div>}>
        <Main />
      </Suspense>
    </>
  );
}
