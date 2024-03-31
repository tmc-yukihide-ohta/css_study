import styles from './Em.module.scss'
const Em = () => {
  return (
    <div className={styles.pageDefault}>
      <h2>単位：em</h2>
      .pageDefault = 20px
      <div className={styles.componentDefault}>
        .componentDefault = 10px
        <div className={styles.divEmFontSize}>文字：2em abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ</div>
        <div className={styles.divPxFontSize}>文字：20px abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ</div>
        <div className={styles.divEmWidth}>横幅：2em abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ</div>
        <div className={styles.divPxWidth}>横幅：20px</div>
      </div>
    </div>
  )
}
export default Em
