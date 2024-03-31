import styles from './Px.module.scss'
const Px = () => {
  return (
    <div className={styles.pageDefault}>
      <h2>単位：px</h2>
      .pageDefault = 20px
      <div className={styles.componentDefault}>
        .componentDefault = 10px
        <div className={styles.divPxFontSize}>文字：32px abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ</div>
        <div className={styles.divPxWidth}>横幅：32px abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ</div>
      </div>
    </div>
  )
}
export default Px
