import Image from "next/image";
import type { News } from "@/app/_libs/microcms";
import Date from "../Date";
import Category from "../Category";
import styles from "./index.module.css";

type Props = {
  date: News;
};

export default function Article({ date }: Props) {
  return (
    <main>
      <h1 className={styles.title}>{date.title}</h1>
      <p className={styles.description}>{date.description}</p>
      <div className={styles.meta}>
        <Category category={date.category} />
        <Date date={date.publishedAt ?? date.createdAt} />
      </div>
      {date.thumbnail && (
        <Image
          src={date.thumbnail.url}
          alt=""
          className={styles.thumbnail}
          width={date.thumbnail.width}
          height={date.thumbnail.height}
        />
      )}
      <div
        className={styles.contents}
        dangerouslySetInnerHTML={{
          __html: date.content,
        }}
      />
    </main>
  );
}
