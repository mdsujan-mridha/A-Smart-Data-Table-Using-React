import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';

const Datas = () => {
    const[datas,setDatas] = useState([]);
    console.log(datas);

    useEffect( ()=>{
       
     fetch("fakeData.json")
      .then(res => res.json())
       .then(data => setDatas(data));

    } ,[])
    
     const colums = [
        {
            name: "Picture",
            selector:(row) => <img width={50} height={50} src={row.img} alt="user img" />
        },
         {
             name: "Full Name",
             selector:row => row.name
         },
         {
            name: "username",
            selector:row => row.username
        },
         {
            name: "Email",
            selector:row => row.email
        }
        
     ] 

    return <DataTable title= "User Information" columns={colums} data={datas} pagination fixedHeader
    fixedHeaderScrollHeight='600px'/>
};

export default Datas;