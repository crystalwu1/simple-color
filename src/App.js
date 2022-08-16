import React from "react";
import { SketchPicker } from 'react-color';
import Color from './Color';

let hexToDec = {
  '0' : 0, '1' : 1,
  '2' : 2, '3' : 3,
  '4' : 4, '5' : 5,
  '6' : 6, '7' : 7,
  '8' : 8, '9' : 9,
  'a' : 10, 'b' : 11,
  'c' : 12, 'd' : 13,
  'e' : 14, 'f' : 15
}

let decToHex = {
  0 : '0', 1 : '1',
  2 : '2', 3 : '3',
  4 : '4', 5 : '5',
  6 : '6', 7 : '7',
  8 : '8', 9 : '9',
  10 : 'a', 11 : 'b',
  12 : 'c', 13 : 'd',
  14 : 'e', 15 : 'f'
}

function hexadecimalComplement(hex) {
  let first = 15 - hexToDec[hex.slice(0,1)]
  let second = 15 - hexToDec[hex.slice(1)]
  return decToHex[first] + decToHex[second]
}


export default class App extends React.Component {
  state = {
    selectedColor: '#ffffff',
    complement: "#000000"
  };

  handleChangeComplete = (color) => {
    this.setState({ selectedColor: color.hex, complement: this.findComplement(color.hex)});
  };

  findComplement = (color) => {
    let r = color.slice(1,3);
    let g = color.slice(3, 5);
    let b = color.slice(5);
    return "#" + hexadecimalComplement(r) + hexadecimalComplement(g) + hexadecimalComplement(b)
  }

  render() {
    return (
      <div>
        <SketchPicker
        color={ this.state.selectedColor }
        onChangeComplete={ this.handleChangeComplete }
        />
        <Color color={this.state.selectedColor} id={"box1"}/>
        <Color color={this.state.complement} id={"box2"}/>
      </div>
      
    );
  }
}
