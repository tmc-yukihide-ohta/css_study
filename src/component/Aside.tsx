import styles from './Aside.module.scss'
const Aside = () => {
  return (
    <div className={styles.asideComponent}>
      <h2>aside要素のh2要素</h2>
      <ul>
        <li>
          <a href="https://chot.design/html-css-beginner/5cac8c19c5ec/" target="_blank" className={styles.reference}>
            HTML5タグ参考
          </a>
        </li>
        <li>
          <a
            href="https://coliss.com/articles/build-websites/operation/css/relative-length-units-based-on-font.html"
            target="_blank"
            className={styles.reference}
          >
            知っておくと便利なCSSの単位: フォントに基づく相対単位（em, rem, cap, ch, ex, ic,
            lhなど）の便利な使い方を解説
          </a>
        </li>
        <li>
          <a href="https://ferret-plus.com/7062" target="_blank" className={styles.reference}>
            CSSでフォントサイズ（font size）を指定するには？適切な単位の選び方
          </a>
        </li>
        <li>
          <a
            href="https://qiita.com/AbridgeOkinawa/items/4ef48d62a6c9ff750739"
            target="_blank"
            className={styles.reference}
          >
            CSSの単位についてお勉強
          </a>
        </li>
        <li>
          <a href="https://web.havincoffee.com/css/value/length/" target="_blank" className={styles.reference}>
            CSSの長さの単位
          </a>
        </li>
        <li>
          <a href="https://retval.jp/blog/css-line-height/" target="_blank" className={styles.reference}>
            line-heightプロパティについて
          </a>
        </li>
        <li>
          <a href="https://oshin.tokyo/entry/2019-css-font-size" target="_blank" className={styles.reference}>
            CSSの「font-size: 20px;」という指定について調べたら奥が深かった
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Aside
