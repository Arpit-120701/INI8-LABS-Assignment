import React , {useEffect , useState} from 'react'
import { useLocation} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import "./addEdit.css"
import { useParams } from 'react-router-dom';


const initialState = {
    fullName: "", // updated to match input name
    email: "",
    location: "",
    graduation: "",
    dob: "",
    mobile: ""
};

function AddEdit() {
    const [state, setState] = useState(initialState);
    const { fullName, email, location, graduation, dob, mobile } = state;

    const navigate = useNavigate();

    const {id} = useParams();

    useEffect(()=>{
        if(id){
        getSingleUser(id);
            
        }
    }, [id])

    const getSingleUser = async(id)=>{
        const response = await axios.get(`http://localhost:4080/oneuser/${id}`);
        if(response.status === 200){
            setState({ ...response.data[0] })
        }
    }

    const addUser = async (data) => {
        const response = await axios.post('http://localhost:4080/adduser', data);
        if (response.status === 200) {
            toast.success(response.data);
        }
    };


    const updateUser= async (data, id) => {
        const response = await axios.put(`http://localhost:4080/updateuser/${id}`, data);
        if (response.status === 200) {
            toast.success(response.data);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!fullName || !email || !graduation) {
            toast.error("Please provide value on required fields!");
        } else {
            if(!id){
                addUser(state)
            }
            else{
                updateUser(state , id)
            }
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target; // Corrected destructuring
        setState({ ...state, [name]: value });
    };

    return (
        <div style={{ marginTop: "100px" }}>
            <form style={{ margin: "auto", padding: "15px", maxWidth: "400px", alignContent: "center" }} onSubmit={handleSubmit}>
                <label htmlFor="fullName">Full Name</label>
                <input 
                    type="text" 
                    id="fullName" 
                    name="fullName" // Updated to match initial state key
                    placeholder="Enter Your name" 
                    onChange={handleInputChange} 
                    value={fullName} 
                />

                <label htmlFor="email">E-mail</label>
                <input 
                    type="text" 
                    id="email" 
                    name="email"
                    placeholder="email" 
                    onChange={handleInputChange} 
                    value={email}
                />

                <label htmlFor="location">Location</label>
                <input 
                    type="text" 
                    id="location" 
                    name="location"
                    placeholder="Location" 
                    onChange={handleInputChange} 
                    value={location}
                />

                <label htmlFor="graduation">Graduation</label>
                <input 
                    type="text" 
                    id="graduation" 
                    name="graduation"
                    placeholder="Btech etc..." 
                    onChange={handleInputChange} 
                    value={graduation}
                />

                <label htmlFor="dob">Date of Birth</label>
                <input 
                    type="text" 
                    id="dob" 
                    name="dob"
                    placeholder="DD/MM/YYYY" 
                    onChange={handleInputChange} 
                    value={dob}
                />

                <label htmlFor="mobile">Mobile Number</label>
                <input 
                    type="text" 
                    id="mobile" 
                    name="mobile"
                    placeholder="+91 92XXXXXXXX" 
                    onChange={handleInputChange} 
                    value={mobile}
                />

                <input type="submit" value={id ? "Update" : "Add"} />
            </form>
        </div>
    );
}

export default AddEdit;