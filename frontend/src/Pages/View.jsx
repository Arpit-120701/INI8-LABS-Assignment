import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'; // Correct imports
import axios from 'axios';
import "./View.css"

function View() {
    const [user, setUser] = useState(0);
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            getSingleUser(id);
        }
    }, [id]);

    const getSingleUser = async (id) => {
        try {
            const response = await axios.get(`http://localhost:4080/oneuser/${id}`);
            if (response.status === 200) {
                setUser({ ...response.data[0] });
            }
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };

    return (
        <>
            <div style={{ marginTop: "150px" }}>
                <div className='card'>
                    <div className='card-header'>
                        <b><p>User Details</p></b>
                    </div>
                    <div className='container'>
                        {user ? (
                            <>
                                <strong>ID: </strong>
                                <span>{id}</span>
                                <br /><br />
                                <strong>Name:</strong>
                                <span>{user && user.fullName}</span>
                                <br /><br />
                                <strong>Email ID:</strong>
                                <span>{user && user.email}</span>
                                <br /><br />
                                <strong>Location:</strong>
                                <span>{user && user.location}</span>
                                <br /><br />
                                <strong>Graduation:</strong>
                                <span>{user && user.graduation}</span>
                                <br /><br />
                                <strong>Date of Birth:</strong>
                                <span>{user && user.dob}</span>
                                <br /><br />
                                <strong>Mobile Number:</strong>
                                <span>{user && user.mobile}</span>
                                <br /><br />
                            </>
                        ) : (
                            <p>Loading user data...</p>
                        )}
                        <Link to='/'>
                            <button className='btn btn-edit'>Go Back</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default View;
