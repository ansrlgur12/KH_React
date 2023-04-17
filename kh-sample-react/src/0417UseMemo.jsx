// useMemo : React 컴포넌트의 성능을 최적화하기 위해 사용 됩니다. (이전에 계산된 값을 재사용할 수 있도록 해주는 Hook)
// React 컴포넌트에서 랜더링하는 동안, 컴포넌트의 상태나 props가 변경되면 해당 컴포넌트와 하위 컴포넌트들이 다시 랜더링되며,
// 이 때 불필요한 랜더링이 발생할 수 있으며 이는 성능 문제를 야기할 수 있음
// useMemo는 두개의 인자값을 받음. 첫번째는 계산하는 함수, 두번쨰는 의존성 배열

// useCallback : 랜더링을 최적화해야 할 상황에서 사용하며, 만들어놓은 함수를 재사용하는 방법

// useRef : DOM 요소에 직접 접근할 때 사용, input 요소에 대한 상호작용 등에 사용

import { useMemo, useState, useCallback, useRef } from "react";

const getAverage = numbers => {
    console.log("평균값 계산중..");
    if(numbers.length === 0) return 0;
    const sum = numbers.reduce((a, b) => a + b);
    return sum / numbers.length;
}

const Average = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState("");
    const inputEl = useRef(null);

    const onChange = useCallback(e => {
        setNumber(e.target.value);
    }, []) // 빈 배열을 넣으면 처음 렌더링될 때만 함수 호출


    const onInsert = useCallback(() => {
        // 현재 입력 받은 숫자를 기존의 리스트에 추가(concat으로 추가했으므로 새로운 배열이 생성됨. 불변성의 원칙)
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber("");
        inputEl.current.focus();
    },[number, list]);

    const avg = useMemo(() => getAverage(list), [list]);

    return(
        <>
             <header>
    <div class="top"></div>
    <div class="logo-line">
      <div class="logo-left"></div>
      <div class="logo"><div class="image"></div></div>
      <div class="logo-right">
        <div class="searchbar">
          <input class="search-txt" type="text" placeholder=""/>
          <div class="search-btn"><i class="fas fa-search"></i></div>
        </div>
        <span class="material-symbols-outlined">
          person
          </span>
      </div>
    </div>
    <div class="nav">
      <div class="menu">
        <a href="#">Perfume</a>
        <a href="#">Community</a>
        <a href="#">Custom</a>
        <a href="#">Notice</a>
      </div>
    </div>
  </header>
        </>
    );
}

export default Average;

