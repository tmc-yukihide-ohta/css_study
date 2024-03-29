import styles from "./OverView.module.scss"

const Overview=()=>{
  return(
    <div className={styles.overViewPage}>
      HTMLが登場した当初のフォントサイズ指定
      <blockquote>
        &lt;FONT SIZE=“3”&gt;フォントサイズ3がデフォルトサイズ&lt;/FONT&gt;
      </blockquote>
    </div>
  )
}

export default Overview