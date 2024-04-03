import styles from './FontSize.module.scss'

const FontSize = () => {
  return (
    <div className={styles.fontSizePage}>
      CSSで文字の大きさを指定するのに「font-size: 20px;」といった指定を使けど、具体的に何が20pxなの？？
      <p className={styles.YuGothic}>
        <span>Pタグ内ののspan要素pppppppppp</span>
      </p>
      <div className={`${styles.YuGothic} ${styles.p}`}>
        <span>divタグ内のspan要素LLLLLLLLLL</span>
      </div>
      <div className={`${styles.YuGothic} ${styles.p}`}>
        <span>divタグ内のspan要素LLLLLLLLLL</span>
      </div>
      <div className={styles.text}>
        spanの高さが20px、p,divの高さが30px(pはデフォルトでmargin上下にはいる)
        <br />
        font-size:20px;と指定した場合、文字の高さが20pxとなり、p1行分（行ボックス）の高さは、font-sizeとline-heightの組み合わせで決まる
      </div>
      <div className={styles.text}>
        今回の例ではpにline-heightを指定していないので、CSSの仕様として、デフォルト値のnormalとなります。
      </div>
      <div className={styles.text}>
        これらの結果、Chromeはline-heightの値を1.5と解釈したようで、font-sizeの20pxに1.5をかけた、30pxがpの高さとなりました。
      </div>
      <div className={styles.text}>
        font-sizeの数字は行の中のインライン部分の高さになるんだなあ
        <br />
        1行（行ブロック）の高さは、font-sizeの値とline-heightの値で決まるんだなあ
        <br />
        line-heightは、何も指定しなかったらnormalになって、normalは1.5と同じ結果になるんだなあ
        <br />
        font-sizeとline-heightを必ず一緒に指定し、行ブロックの高さが環境によって変わらないようにしていくのが良さそう
      </div>
    </div>
  )
}

export default FontSize
