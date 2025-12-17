import style from "./index.module.css";

export default function Footer() {
  return (
    <footer className={style.footer}>
      <nav className={style.nav}>
        <ul className={style.items}>
          <li className={style.items}>
            <a href="/news">ニュース</a>
          </li>
          <li className={style.items}>
            <a href="/members">メンバー</a>
          </li>
          <li className={style.items}>
            <a href="/contact">お問い合わせ</a>
          </li>
        </ul>
      </nav>
      <p className={style.cr}> SIMPLE. ALL Rights Reserved 2024</p>
    </footer>
  );
}
