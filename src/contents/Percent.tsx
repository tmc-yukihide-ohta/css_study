import styles from './Rem.module.scss'
const Rem = () => {
  return (
    <div className={styles.pageDefault}>
      <h2>単位：rem</h2>
      .pageDefault = 20px
      <div className={styles.componentDefault}>
        .componentDefault = 10px
        <div className={styles.divRemFontSize}>文字：2rem abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ</div>
        <div className={styles.divPxFontSize}>文字：32px abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ</div>
        <div className={styles.divRemWidth}>横幅：2rem abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ</div>
        <div className={styles.divPxWidth}>横幅：32px</div>
      </div>
    </div>
  )
}
export default Rem
