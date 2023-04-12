import React, {useState} from "react";

const RadioButton = () => {
    const[value, setValue] = useState("apple");
    const handleChange = (e) => {
        setValue(e.target.value);
    }


    return(
        <div>
            <input type="radio" name="fruits" value="apple" onChange={handleChange} />
            <label>사과</label>
            <br />
            <input type="radio" name="fruits" value="orange" onChange={handleChange} />
            <label>오렌지</label>
            <br />
            <input type="radio" name="fruits" value="strawberry" onChange={handleChange} />
            <label>딸기</label>
            <br />
            <input type="radio" name="fruits" value="grape" onChange={handleChange} />
            <label>포도</label>
            <br />
            <p>선택된 항목은 {value}입니다.</p>
        </div>
    );
}
export default RadioButton;