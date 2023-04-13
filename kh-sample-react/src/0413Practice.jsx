import React, {useState} from "react";
import "./App.css";

// 연습문제
// - 이름, 직책, 회사명, 회사주소, 이메일, 전화번호를 입력 받아 명함 형태로 출력
// - 명함은 객체 리터럴로 관리
// - 입력값의 변경은 useState 사용
// - 제출 버튼을 만들어서 제출 누르면 명함 형태로 출력

const Practice = () => {
    const [nameCard, setNameCard] = useState([]);
    const [name, setName] = useState("");
    const [job, setJob] = useState("");
    const [coName, setCoName] = useState("");
    const [coAddr, setCoAddr] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const onChangeName = e => setName(e.target.value);
    const onChangeJob = e => setJob(e.target.value);
    const onChangeCoName = e => setCoName(e.target.value);
    const onChangeCoAddr = e => setCoAddr(e.target.value);
    const onChangeEmail = e => setEmail(e.target.value);
    const onChangePhone = e => setPhone(e.target.value);

    const onClick = () => {
        const nextCard = nameCard.concat({
            name : name,
            job : job,
            coName : coName,
            coAddr : coAddr,
            email : email,
            phone : phone
        })
        setNameCard(nextCard);
        setName(""); // input창 초기화
        setJob("");
        setCoName("");
        setCoAddr("");
        setEmail("");
        setPhone("");
    }
    const cardsList = nameCard.map(card => (
        <div key={card.email} className="nameCard">
            <div className="name">{card.name}   {card.job} </div>
            <div className="coName">회사명     {card.coName}</div>
            <div className="coAddr">회사주소     {card.coAddr}</div>
            <div className="email">이메일     {card.email}</div>
            <div className="phone">전화번호     {card.phone}</div>
        </div>
    ));

    return(
        <>
        <div>
            <input type="text" value={name} onChange={onChangeName} placeholder="이름"/>
        </div>
        <div>            
            <input type="text" value={job} onChange={onChangeJob} placeholder="직책"/>
        </div>
        <div>
            <input type="text" value={coName} onChange={onChangeCoName} placeholder="회사명"/>
        </div>
        <div>
            <input type="text" value={coAddr} onChange={onChangeCoAddr} placeholder="회사주소"/>
        </div>
        <div>
            <input type="text" value={email} onChange={onChangeEmail} placeholder="이메일"/>
        </div>
        <div>
            <input type="text" value={phone} onChange={onChangePhone} placeholder="전화번호"/>
        </div>
        <button onClick={onClick}>완료</button>
        <div>{cardsList}</div>
        </>
    );
}

export default Practice;