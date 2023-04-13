import React, {useState} from "react";

// useState()는 리액트에서 상태(state)를 관리하기 위해 제공되는 훅(hook)중 하나입니다.
// 상태가 변경될 때마다 컴포넌트가 자동으로 다시 렌더링 됩니다.
// 배열 형태로 반환되며, 첫번째 요소는 현재 상태이고, 두번째 요소는 샹태를 변경하는 함수입니다.
const UseState = () => {
    const [value, setValue] = useState(0); // 초기값을 0으로 지정

    return(
        <>
            <p>현재 카운트는 <b>{value}</b> 입니다.</p>
            <button onClick={()=>setValue(value+1)}>+1</button>
            <button onClick={()=>setValue(value-1)}>-1</button>
        </>
    );
}
export default UseState;