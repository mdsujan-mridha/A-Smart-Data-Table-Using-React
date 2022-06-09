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
         const result = datas?.filter((d)=>{
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
            cell:row => <button className='btn btn-danger' onClick={()=> handleDelete(datas.id)}> Delete </button>
        }
        
     ] 

    return <DataTable  columns={colums} data={filterData} pagination fixedHeader
    fixedHeaderScrollHeight='500px' selectableRows selectableRowsHighlight highlightOnHover actions={
           <button className='btn btn-primary w-25'>Export </button>
    }
    subHeader
    subHeaderComponent={
        <input className='form-control w-25 p-3 border border-primary' type="text" placeholder='Search Here' value={search} onChange={(e) => setSearch(e.target.value)} />
    }
    subHeaderAlign="left"/>
};

export default Datas;