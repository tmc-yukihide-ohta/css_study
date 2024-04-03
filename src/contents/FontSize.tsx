import styles from ''

const FontSize = () => {
  return (
    <div className={styles.fontSizePage}>
      CSSで文字の大きさを指定するのに「font-size: 20px;」といった指定を使けど、具体的に何が20pxなの？？
      <pre></pre>
      <p className={styles.fontSizeP}></p>
    </div>
  )
}

export default FontSize
