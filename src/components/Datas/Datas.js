import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';

const Datas = () => {
    const [search,setSearch] = useState("");
    const[datas,setDatas] = useState([]);
    const[filterData ,setFilterData] = useState([]);
    
    console.log(filterData);

    useEffect( ()=>{
       
     fetch("fakeData.json")
      .then(res => res.json())
       .then(data => {
           setDatas(data)
           setFilterData(data)
          });

    } ,[]);

    const handleDelete = (id) =>{
        setDatas();
    }

    useEffect( () => {
         const result = datas.filter((d)=>{
             return d.name.toLowerCase().match(search.toLowerCase())
         });
         setFilterData(result);

    } ,[search]);
    
     const colums = [
        {
            name: "Picture",
            selector:(row) => <img width={50} height={50} src={row.img} alt="user img" />
        },
         {
             name: "Full Name",
             selector:row => row.name,
             sortable:true
         },
         {
            name: "username",
            selector:row => row.username
        },
         {
            name: "Email",
            selector:row => row.email
        },
        {
            name:"Action",
            cell:row => <button className='btn btn-primary' onClick={()=> handleDelete(datas.id)}>Delete </button>
        }
        
     ] 

    return <DataTable title= "User Information" columns={colums} data={filterData} pagination fixedHeader
    fixedHeaderScrollHeight='600px' selectableRows selectableRowsHighlight highlightOnHover actions={
           <button>Export </button>
    }
    subHeader
    subHeaderComponent={
        <input type="text" placeholder='Search Here' value={search} onChange={(e) => setSearch(e.target.value)} />
    }
    subHeaderAlign="left"/>
};

export default Datas;