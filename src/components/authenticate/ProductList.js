import { useEffect, useState } from "react";
import {  onSnapshot } from "firebase/firestore";
import {q} from "../../lib/dataList"

export const ProductList = () => {
  useEffect(()=>{
    onSnapshot(q, (querySnapshot) => {
      const data = [];
      querySnapshot.forEach((doc) => {
          data.push(doc.data().text);
      });
      setDataList(data)
    });
  },[])
  const[dataList, setDataList]=useState(null)
  return (
    <div>
    {dataList && dataList.map((allData)=><p>{allData}</p>)}
  </div>
  )
}
