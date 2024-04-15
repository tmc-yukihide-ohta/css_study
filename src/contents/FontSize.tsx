import styles from './FontSize.module.scss'

const FontSize = () => {
  return (
    <div className={styles.fontSizePage}>
      <h3>フォントサイズ</h3>
      <p className={styles.text}>
        CSSで文字の大きさを指定するのに「font-size: 40px;」といった指定をするけど、具体的に何が40pxなの？？
      </p>
      <p className={styles.text}>Pタグの中にspan、divタグの中にspanで確認</p>
      <p className={styles.text}>
        Pタグ、divタグ；背景色<span className={styles.square1}>■ rgba(245, 144, 201, 0.5)</span>
        <br />
        span；背景色<span className={styles.square2}>■ rgba(126, 152, 238, 0.5)</span>
      </p>
      <hr />
      {/*ここからが検証しているコード*/}
      <h4>Pタグの中にspan</h4>
      <p className={styles.YuGothic}>
        <span>Pタグ内のspan要素pppppppppp</span>
      </p>
      <p className={styles.YuGothic}>
        <span>Pタグ内のspan要素pppppppppp</span>
      </p>
      <h4>divタグの中にspan</h4>
      <div className={`${styles.YuGothic} ${styles.p}`}>
        <span>divタグ内のspan要素LLLLLLLLLL</span>
      </div>
      <div className={`${styles.YuGothic} ${styles.p}`}>
        <span>divタグ内のspan要素LLLLLLLLLL</span>
      </div>
      <hr />
      <p className={styles.text}>
        <b>spanの高さが40px、p,divの高さが60px</b>
        <br />
        (pはデフォルトで「margin-block-start:1em, margin-block-end:1em」がはいる、marginは重なる)
      </p>
      <p className={styles.text}>
        font-size:40px;と指定した場合、<b>文字の高さが40px</b>
        <br />
        <b>p, div 1行分（行ボックス）の高さは60px</b>
        <br />
        これは、<b>font-sizeとline-heightの組み合わせで決まる</b>
      </p>
      <p className={styles.text}>
        pにline-heightを指定していないので、CSSの仕様として、<b>line-heightはデフォルト値のnormalとなる</b>
      </p>
      <p className={styles.text}>
        Chromeはline-heightの値を1.5と解釈
        <br />
        font-sizeの40pxに1.5をかけた、60pxがp, divの高さとなった
      </p>
      <h3>結論</h3>
      <p className={styles.text}>
        <ul>
          <li>
            font-sizeの数字は行の中のインライン部分の高さ・・・背景色<span className={styles.square2}>■</span>の部分
          </li>
          <li>1行（行ブロック）の高さは、font-sizeの値とline-heightの値で決まる</li>
          <li>
            line-heightは、何も指定しなかったらnormalになる
            <br />
            normalは1.5と同じ結果になる
          </li>
          <li>
            font-sizeとline-heightを必ず一緒に指定し、行ブロックの高さが環境によって変わらないようにしていくのが良さそう
          </li>
          <li>行間は「[line-height] － [font-size] = 行間」という式によって計算される</li>
        </ul>
      </p>
      <h3>参考) line-height:1の場合</h3>
      <p className={`${styles.YuGothic} ${styles.lineHeight}`}>
        <span>Pタグ内のspan要素pppppppppp</span>
      </p>
      <p className={`${styles.YuGothic} ${styles.lineHeight}`}>
        <span>Pタグ内のspan要素pppppppppp</span>
      </p>
      <div className={`${styles.YuGothic} ${styles.p} ${styles.lineHeight}`}>
        <span>divタグ内のspan要素pppppppppp</span>
      </div>
      <div className={`${styles.YuGothic} ${styles.p} ${styles.lineHeight}`}>
        <span>divタグ内のspan要素LLLLLLLLLL</span>
      </div>
      <p className={styles.text}>pなどの下に突き出る文字は、1行の高さからはみ出ている・・・下の文字と重なりそう</p>
    </div>
  )
}

export default FontSize
