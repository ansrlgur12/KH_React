// React 함수형 컴포넌트에서 생명주기 메소드를 대체하는 React Hook 중 하나 (필수 사용 Hook)
// useEffect는 컴포넌트가 렌더링 될 때마다 특정 동작을 수행하거나, 특정 상태가 업데이트 될 때 마다 동작
// 첫번째 인수로 콜백함수를 받고, 이 콜백 함수는 컴포넌트가 마운트(화면에 나타남)되거나 언마운트 될 떄,
// 그리고 의존성 배열에 전달된 상태가 변경 될 때 마다 실행
import {useState, useEffect} from "react";

const UseEffectInfo = () => {
    const [name, setName] = useState("");
    const [nickname, setNickname] = useState("");
    
    useEffect(() => {
        console.log("렌더링이 완료되었습니다.");
        // console.log(name, nickname);
        setName("테스트");
    }, [name]);

    const onChangeName = e => {
        setName(e.target.value);
    }

    const onChangeNickname = e => {
        setNickname(e.target.value);
    }

    return(
        <>
            <div>
                <input type="text" value={name} onChange={onChangeName} placeholder="이름" />
                <input type="text" value={nickname} onChange={onChangeNickname} placeholder="닉네임" />
            </div>
            <div>
                <p>이름 : <b>{name}</b></p>
                <p>닉네임 : <b>{nickname}</b></p>
            </div>
        </>
    );
}
export default UseEffectInfo;