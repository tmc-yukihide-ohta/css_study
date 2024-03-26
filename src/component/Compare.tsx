import styles from './Main.module.scss'
const Main = () => {
  return (
    <div className={styles.mainComponent}>
      <h2>main要素のh2要素</h2>
      <section>
        <p className={styles.px}>pタグの文章、単位：10pxで書いています。</p>
        <p className={styles.em}>pタグの文章、単位：1emで書いています。</p>
        <p className={styles.rem}>pタグの文章、単位：1remで書いています。</p>
        <p className={styles.percent}>pタグの文章、単位：100%で書いています。</p>
      </section>
      <section>
        <p className={styles.px2}>pタグの文章、単位：20pxで書いています。</p>
        <p className={styles.em2}>pタグの文章、単位：2emで書いています。</p>
        <p className={styles.rem2}>pタグの文章、単位：2remで書いています。</p>
        <p className={styles.percent2}>pタグの文章、単位：200%で書いています。</p>
      </section>
    </div>
  )
}

export default Main
