import React from 'react'
import styles from './styles.module.css'
import ReactHtmlParser from "react-html-parser";
const content = `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas vitae scel<span id="dots">...</span><span id="more">erisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta.</span></p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas vitae scel<span id="dots">...</span><span id="more">erisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta.</span></p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas vitae scel<span id="dots">...</span><span id="more">erisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta.</span></p>`
export default class ExampleComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heightContent: "200px",
      showMore: false
    }
  }
  showMoreAndLess = () => {
    this.setState({
      showMore: !this.state.showMore,
      heightContent: this.state.showMore ? "200px" : "max-content"
    })
  }
  render() {
  let {description = "", detailList = [], firstTitle = "", secondTitle = ""} = this.props
  let {heightContent = "200px", showMore} = this.state
  return (
    <div className = {styles.container}>
    <h2 className = {styles.titleDetail}>{firstTitle ? firstTitle : "Thông tin chi tiết"}</h2>
    <div className = {styles.detailContainer}>
    <table className = {styles.table}>
    {detailList.map((detail,index) => {
      return(
      <tr>
        <th className = {styles.th}>{detail.key}</th>
        <th className = {styles.thValue}>{detail.value}</th>
      </tr>
      )
    })}
    </table>
    </div>
    <h2 className = {styles.titleDescription}>{secondTitle ? secondTitle : "MÔ TẢ SẢN PHẨM"}</h2>
    <div className = {styles.containerContent}>
      <div className = {styles.content} style ={{maxHeight: heightContent}}>
      {description && ReactHtmlParser(description)}
      </div>
      {!showMore && description && <div className = {styles.gradient}></div>}
    </div>
    <button className = {styles.btnSeemore} onClick = {() => this.showMoreAndLess()}>{showMore ? "See less" : "See more"}</button>
    </div>
  )
}
}
