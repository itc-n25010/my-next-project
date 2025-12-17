import type { category } from "@/app/_libs/microcms";
import styles from "./index.module.css";
import { resourceUsage } from "process";

type Props = {
  category: category;
};
export default function Category({ category }: Props) {
  return <span className={styles.tag}>{category.name}</span>;
}
