"use client";
import { useReward } from "react-rewards";
import { use, useEffect, useRef } from "react";
import classes from "./page.module.css";
import { entrySmile } from "@/app/components/deta/deta";

// callbackにはVoid型で() => { if(!isAnimating){reward();}が入っている（これは下で定義済）
const useInterval = (callback: () => void) => {
  // callbackRefに何もしない関数を入れる。useRefは値は更新されても再レンダリングされない（更新された値が画面に表示されない）フック
  const callbackRef = useRef(() => {});

  useEffect(() => {
    //  callbackRef.current（useRefの中身）にcallbackを入れる
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    // setInterval...第一引数で描いた関数を第二引数で与えられた時間ごとに実行する。ここではcallbackRefを実行している
    const timerId = setInterval(() => callbackRef.current(), 1000);

    // clearInterval...setIntervalで作った処理を止める。ここでは定数timerIdを止めている。
    return () => clearInterval(timerId);
  }, []);
};

export default function TohyoKanryou({
  params,
}: {
  params: Promise<{ tohyoid: Number }>;
}) {
  const { reward, isAnimating } = useReward("rewardId", "confetti", {
    angle: 45,
    position: "absolute",
  });
  const { reward: rewardLeft, isAnimating: isAnimatingLeft } = useReward(
    "rewardLeft",
    "confetti",
    {
      angle: 120,
      position: "absolute",
    }
  );

  // Next.jsのエラーが出るので一旦アンラップ（Promseが非同期処理のため、そのまま値を使うと中身がない可能性があるから）
  const unwrap = use(params);

  useInterval(() => {
    if (!isAnimating || !isAnimatingLeft) {
      reward();
      rewardLeft();
    }
  });

  const _tohyoid = Number(unwrap.tohyoid);
  const search = entrySmile.find((item) => item.no === _tohyoid);

  return (
    <>
      <span id="rewardId"></span>
      <div className={classes.back}>
        <div>投票ありがとう！！</div>
        <img src={search?.URL} alt="投票した人の画像"></img>
        <br></br>
        <br></br>
        <a href="/#Tohyo">他の人にも投票する！</a>
        <a href="/">TOPに戻る</a>
        <span id="rewardLeft"></span>
      </div>
    </>
  );
}
