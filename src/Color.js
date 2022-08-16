import './Color.css';
import React from "react";
// function Color() {
  
//   return (
//     <div className="colorBox">
      
//     </div>
//   );
// }

export default class ColorBox extends React.Component {
  render() {
    return (
      <div className={'colorBox ' + this.props.id}>
        <style>{'.' + this.props.id + '{background-color:' + this.props.color + ';}'}</style>
        <p> {this.props.color} </p>
      </div>
    );
  }
}
