import './App.css';

function App() {
  const member = {
    name : "곰돌이사육사",
    job : "개발자",
    addr : "경기도 수원시",
    gender : "남성"
  };
function getGeeting(user) {
  return (user) ? (<h1>환영합니다 {member.name}님.</h1>) : (<h1>환영합니다 방문자님.</h1>)
}
  return (
    // class 키워드는 JSX문법에서는 className으로 변경해야함.(카멜표기법)

    <div className="App">
      <p className="title-name">안녕하세요. 저는 {member.name}입니다.</p>  
      <p className="title-name">직업은 {member.job}입니다.</p>  
      <br></br>
      <p className="title-name">주소는 {member.addr}입니다.</p>  
      <p className="title-name">성별은 {member.gender}입니다.</p>  
      <div>{getGeeting(true)}</div>
    </div>
  );
}

export default App;
