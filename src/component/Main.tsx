import styles from './Main.module.scss'
const Main = () => {
  return (
    <div className={styles.mainComponent}>
      <h2>main要素のh2要素</h2>
      <a href="https://chot.design/html-css-beginner/5cac8c19c5ec/" target="_blank" className={styles.reference}>
        HTML5タグ参考
      </a>
      <p>pタグの文章、1行目を書いています。</p>
      <p>pタグの文章、2行目を書いています。</p>
    </div>
  )
}

export default Main
