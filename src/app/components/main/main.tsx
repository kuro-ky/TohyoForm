"use client";

import { useEffect, useState } from "react";
import { Op } from "../opning/opning";

export default function Main() {
  const [opAnime, setOpAnime] = useState(true);

  useEffect(() => {
    const OpTimer = setTimeout(() => {
      setOpAnime(false);
    }, 6000);

    return () => clearTimeout(OpTimer);
  }, []);
  return (
    <>
      {opAnime && <Op />}
      <p>こんにちは</p>
    </>
  );
}
