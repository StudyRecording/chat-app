import React from 'react';
import Login from './main/Login';
import Room from './main/Room';
import Chose from "./main/Chose";
import './App.css'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      com: 0, // 0选择，1创建或进入， 2聊天室
      loginState: 'c', // c:创建聊天室, i:进入聊天室
    }
  }

  /**
   * 变更状态
   * @param {*} ch 0选择，1创建或进入， 2聊天室
   * @param {*} ls c:创建聊天室, i:进入聊天室
    }
   */
  changeCom = (ch, ls) => {
    this.setState({com: ch, loginState: ls});
  }

  render() {
    const {com, loginState} = this.state;

    let element;
    if (com === 0) {
      element = <Chose changeCom={this.changeCom} />;
    } else if (com === 1) {
      element = <Login loginState={loginState}/>;
    } else {
      element = <Room />;
    }

    return (
      <div className={'my-app'}>
        {element}
      </div>
    )
  }
}

export default App;
