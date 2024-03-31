import styles from './OverView.module.scss'

const Overview = () => {
  return (
    <div className={styles.overViewPage}>
      <p>
        現在ではさまざまな大きさのデバイスで、解像度もディスプレイの縦横比も違うため、フォントサイズを1つだけに指定するのには限界があります。
      </p>
      <p>
        デバイスのサイズや解像度にも考慮してホームページをデザインしていくのが、これからのWebデザインのあるべき姿です
      </p>
      <p>そこで、CSSで記載する一般的な下記の単位について学習</p>
      <ul>
        <li>px</li>
        <li>em</li>
        <li>rem</li>
        <li>%</li>
        <li>vw</li>
        <li>vh</li>
      </ul>
      <p>CSSで使える単位は、絶対単位と相対単位に分類されます。</p>
      <p>絶対単位 親要素や他要素のサイズに影響されることなく、指定したサイズそのものを表す単位です。</p>
      <p>
        相対単位 他の要素と比較することで大きさが決まる単位のことであり、比較することで大きさが変わります。
        絶対単位とは違い、常に別の要素を基準として、「○○(他要素)に対する割合」という指定をします。
      </p>
      <table>
        <thead>
          <tr>
            <th>分類</th>
            <th>単位</th>
            <th>説明</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>絶対単位</td>
            <td>px</td>
            <td>他要素のことを気にせずにピクセル数で大きさを指定する</td>
          </tr>
          <tr>
            <td>相対単位</td>
            <td>%</td>
            <td>親要素の大きさに対する割合で指定</td>
          </tr>
          <tr>
            <td>相対単位</td>
            <td>em</td>
            <td>親要素のフォントサイズを1としてその比率を指定</td>
          </tr>
          <tr>
            <td>相対単位</td>
            <td>rem</td>
            <td>html要素に指定されたフォントサイズを1としてその比率を指定</td>
          </tr>
          <tr>
            <td>相対単位</td>
            <td>vw</td>
            <td>ブラウザの画面サイズを基準とした幅を指定</td>
          </tr>
          <tr>
            <td>相対単位</td>
            <td>vh</td>
            <td>ブラウザの画面サイズを基準とした高さを指定</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Overview
