import React from "react";

// 첫번째, 비효율적인 방법 : 배열 그대로 작성하는 방법
// 두번째 방법 컴퍼넌트를 만들고 props로 전달하기

const User = (props) => { // 질문하기
    return(
        <>
             <b>{props.user.userName}</b><span>{props.user.eMail}</span>  
        </>
    );
}

const MapTest = () => {
    
    const users = [
        {
            id : 100,
            userName : "천지훈",
            eMail : "1000won@gmail.com"
        },
        {
            id : 200,
            userName : "백마리",
            eMail : "2000won@gmail.com"
        },
        {
            id : 300,
            userName : "천마리",
            eMail : "3000won@gmail.com"
        },
        {
            id : 400,
            userName : "김마리",
            eMail : "4000won@gmail.com"
        }
    ];

    const numbers = [1,2,3,4,5];
    // const listItems = numbers.map(e => <li>{e}</li>)
    return(
        <>
            {/* <div><User user={users[0]}/></div>
            <div><User user={users[1]}/></div>
            <div><User user={users[2]}/></div> */}
            {/* <ul>{listItems}</ul> */}

            {users && users.map((user) => <div key={user.eMail}><b>{user.userName}</b><span>{user.eMail}</span></div>)}
        </>
    );
}
export default MapTest;