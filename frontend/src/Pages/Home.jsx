import React , { useState , useEffect }from 'react'
import { Link } from "react-router-dom";
import "./Home.css"
import axios from 'axios'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Home() {
    const [ data , setData ] =  useState([])

    useEffect (() => {
        getUsers();
    }, [])

    const getUsers = async() => {
        const response = await axios.get("http://localhost:4080/getuser")
        if(response.status ===200)
        {
            setData(response.data)
        }
    };

    const onDeleteUser = async(id) => {
        if(window.confirm("Are You sure that you wnat to delete this record?")){
            const response = await axios.delete(`http://localhost:4080/deleteuser/${id}`);
            if(response.status === 200){
                toast.success(response.data);
                getUsers()
            }
        }

    }
        
        return (
    <div style= {{ marginTop:" 150px"}}>
    <table className='styled-table'>
    <thead>
        <tr>
        <th style={{ textAlign:"center"}}>Sr.No</th>
            <th style={{ textAlign:"center"}}>Full Name </th>
            <th style={{ textAlign:"center"}}>Email</th>
            <th style={{ textAlign:"center"}}>Location</th>
            <th style={{ textAlign:"center"}}>Graduation</th>
            <th style={{ textAlign:"center"}}>Date of Birth</th>
            <th style={{ textAlign:"center"}}>Contact No.</th>
            <th style={{ textAlign:"center"}}></th>
        </tr>
    </thead>
    <tbody>
        {data && 
        data.map((item , index ) => {
            return(
                <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <th>{item.fullName}</th>
                    <th>{item.email}</th>
                    <th>{item.location}</th>
                    <th>{item.graduation}</th>
                    <th>{item.dob}</th>
                    <th>{item.mobile}</th>

                    <td>
                        <Link to={`/update/${item.id}`}>
                            <button className='btn btn-edit'>Edit</button>
                        </Link>
                        <button className='btn btn-delete' onClick={(()=> onDeleteUser(item.id))}>Delete</button>
                        <Link to={`/view/${item.id}`}>
                            <button className='btn btn-view'>View</button>
                        </Link>
                    </td>
                </tr>
            )
        })}
    </tbody>
    </table>
      
    </div>
  )
}

export default Home
