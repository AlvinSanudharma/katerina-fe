"use client";

import ArrowCircleLeft from "@/assets/image/arrow-circle-left.svg";
import ThumbsUp from "@/assets/image/thumbsup.svg";
import Dots4 from "@/assets/image/dots4.svg";
import Link from "next/link";
import { MouseEventHandler } from "react";
import { useRouter } from "next/navigation";

type TBack = {
  historyBack: boolean;
} & (
  | {
      historyBack: true;
    }
  | {
      historyBack: false;
      url: string;
    }
);

type TThumbsUp = {
  display: boolean;
} & (
  | {
      display: false;
    }
  | {
      display: true;
      onClick: MouseEventHandler<HTMLSpanElement>;
    }
);

type TMore = {
  display: boolean;
} & (
  | {
      display: false;
    }
  | {
      display: true;
      onClick: MouseEventHandler<HTMLSpanElement>;
    }
);

type Props = {
  appendClassName: string;
  back: TBack;
  thumbsUp: TThumbsUp;
  more: TMore;
  title?: string;
};

function Header({ appendClassName, back, title, more, thumbsUp }: Props) {
  const router = useRouter();

  return (
    <header
      className={[
        "flex items-center justify-between px-4 w-full gap-x-4",
        appendClassName,
      ].join(" ")}
    >
      {back.historyBack ? (
        <span
          onClick={router.back}
          className="flex items-center justify-center bg-white rounded-full w-[52px] aspect-square text-color2 cursor-pointer"
        >
          <ArrowCircleLeft />
        </span>
      ) : (
        <Link
          href={back.url}
          className="flex items-center justify-center bg-white rounded-full w-[52px] aspect-square text-color2"
        >
          <ArrowCircleLeft />
        </Link>
      )}
      {!!title ? (
        <>
          <h1 className="mx-auto text-lg font-semibold">{title}</h1>
          {!more.display && !thumbsUp.display && (
            <span className="ml-auto"></span>
          )}
        </>
      ) : (
        <span className="mx-auto"></span>
      )}
      {thumbsUp.display && (
        <span
          onClick={thumbsUp.onClick}
          className="flex items-center justify-center bg-white rounded-full w-[52px] aspect-square text-color2"
        >
          <ThumbsUp />
        </span>
      )}
      {more.display && (
        <span
          onClick={more.onClick}
          className="flex items-center justify-center bg-white rounded-full w-[52px] aspect-square text-color2"
        >
          <Dots4 />
        </span>
      )}
    </header>
  );
}

export default Header;
