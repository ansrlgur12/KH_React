import React, {useState, useEffect} from "react";
import './App.css';
// 배열로 구성된 객체를 전달받아 map으로 화면에 표시하고, 표시된 화면 영역에 이벤트 연결하기
const TableMap = () => {
    const data = [
        {id : 100, name : "카즈하", age : 21},
        {id : 200, name : "유나", age : 21},
        {id : 300, name : "안유진", age : 21}
    ];
    const [mapData, setMapData] = useState("");

    useEffect(()=>{
        setMapData(data);
    },[]); // [] 안에 아무 조건이 없을 경우, 화면이 처음 실행되었을때 한번 작동한다

    const tableClickEvent = (item) => {
        console.log(item);
    }

    return(
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>이름</th>
                    <th>나이</th>
                </tr>
            </thead>
            <tbody>
                {mapData && mapData.map(item => (
                    <tr key={item.id} onClick={() => tableClickEvent(item)}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
export default TableMap;