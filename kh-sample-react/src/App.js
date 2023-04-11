import { Fragment } from 'react';
import './App.css';
//import Section from "./컴포넌트합성";
//import MyComponent from './MyComponent';
import Clock from './clock';
import Say from './sale';

const App = () => {
  
  return (
    <>
      {/*<Section title = "오늘의 날씨" content = "오늘은 흐리고 돌풍이 예상됩니다."/>
      <Section title = "오늘의 스포츠" content = "LG vs 두산의 경기가 오늘 진행됩니다."/>*/}
      {/*<MyComponent name ="곰돌이사육사">{insideTag}</MyComponent>*/}
      {/* <Clock /> */}
      <Say />
    </>
  );
}

export default App;
