import React, { Component } from 'react';
import Component1 from './Componen/Componen';
import './App.css';
class App extends Component {
  state = {
    data1: 'manusia',
    data2: 'adalah',
    data3: 'makhluk tuhan'
  };

  render() {
    return (
      <div className="App">
        <h1>Judul</h1>
        <Component1
          nama1={this.state.data1}
          nama2={this.state.data2}
          nama3={this.state.data3}
        />
        {/* <Counter nama="Score Liverpool" />
        <Counter nama="Score Barca" />
        <Counter nama="Score Chelsea" /> */}
      </div>
    );
  }
}

// class Header extends Component {
//   render() {
//     return <h1>judul</h1>;
//   }
// }

// class Counter extends Component {
//   state = {
//     num: 0
//   };

//   naik = () => {
//     console.log('naik kemana');
//     this.setState({
//       num: this.state.num + 1
//     });
//   };
//   turun = () => {
//     this.setState({
//       num: this.state.num - 1
//     });
//   };

//   render() {
//     return (
//       <div>
//         <h1>{this.props.nama}</h1>
//         <h1>{this.state.num}</h1>
//         <button onClick={this.naik}>naik</button>
//         <button onClick={this.turun}>turun</button>
//       </div>
//     );
//   }
// }

export default App;
