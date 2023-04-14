import React from "react";
import { useState } from "react";
// 이름 직책, 회사명, 회사주소, 이메일, 전화번호를 입력 받아 명함 형태로 출력하기
// 명함 정보 저장을 위한 객체리터럴 생성
// 입력 받은 후 제출을 누르기 전까지는 화면에 출력이 되지 않아야 함

const NameCard = (props) => {
    return(
        <>
            <h3>명함 정보 출력</h3>
            <p>이름 : {props.member.name}</p>
            <p>직책 : {props.member.position}</p>
            <p>회사 : {props.member.company}</p>
            <p>주소 : {props.member.addr}</p>
            <p>메일 : {props.member.email}</p>
            <p>번호 : {props.member.phone}</p>
        </>
    );
}


const UserState = () => {
    const [member, setMember] = useState({name:"",position:"",company:"",addr:"",email:"",phone:""});
    const [submit, setSubmit] = useState(false);
    const onChangeName = (e) => setMember({...member, name: e.target.value});
    const onChangePos = (e) => setMember({...member, position: e.target.value});
    const onChangeComp = (e) => setMember({...member, company: e.target.value});
    const onChangeAddr = (e) => setMember({...member, addr: e.target.value});
    const onChangeEmail = (e) => setMember({...member, email: e.target.value});
    const onChangePhone = (e) => setMember({...member, phone: e.target.value});

    const onSubmit = () => {
        setSubmit(true);
    }
    return(
        <>
            <h1>회원 정보 입력</h1>
            <input type="text" placeholder="이름 입력" value={member.name} onChange={onChangeName}/><br />
            <input type="text" placeholder="직책 입력" value={member.position} onChange={onChangePos}/><br />
            <input type="text" placeholder="회사 입력" value={member.company} onChange={onChangeComp}/><br />
            <input type="text" placeholder="주소 입력" value={member.addr} onChange={onChangeAddr}/><br />
            <input type="text" placeholder="이메일 입력" value={member.email} onChange={onChangeEmail}/><br />
            <input type="text" placeholder="전화번호 입력" value={member.phone} onChange={onChangePhone}/>
            <button onClick={onSubmit}>제출</button>
            {submit && <NameCard member = {member}/>}
        </>
    );
}
export default UserState;