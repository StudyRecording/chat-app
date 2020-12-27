import React from 'react';
import Login from './main/Login';
import Room from './main/Room';
import Chose from "./main/Chose";
import './App.css'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isRoom: 0, // 0选择，1创建或进入， 2聊天室
    }
  }

  render() {
    const {isRoom} = this.state;

    let element;
    if (isRoom === 0) {
      element = <Chose />;
    } else if (isRoom === 1) {
      element = <Login />;
    } else {
      element = <Room />;
    }

    return (
      <div className={'my-app'}>
        {element}
      </div>
    );
  }
}

export default App;
