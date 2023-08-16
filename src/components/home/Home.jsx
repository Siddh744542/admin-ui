import React, { useEffect, useContext } from 'react';
import "./home.css";
import { DataContext } from '../context/DataProvider';
const Home = () => {
    const { setMembers } = useContext(DataContext);

    useEffect(()=>{
        fetch("https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json")
        .then((response) => response.json())
        .then((data) => {setMembers(data)})
        .catch((error) => console.error(error))
      // eslint-disable-next-line react-hooks/exhaustive-deps
      },[])
  return (
    <div>
        Home
    </div>
  )
}

export default Home