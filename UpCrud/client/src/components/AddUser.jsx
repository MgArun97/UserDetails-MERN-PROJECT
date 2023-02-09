
import {useState} from 'react';
import { FormGroup, InputLabel, FormControl,Input,Typography,styled, Button } from "@mui/material";
import {addUser} from '../service/api';
import { useNavigate } from 'react-router-dom';
const Container=styled(FormGroup)`
    width:30%;
    margin:5% auto 0 auto;
    & > div{
        margin-top:20px;
    }
`
const initialValues={
    name:'',
    username:'',
    email:'',
    phone:''

}
const AddUser=()=>{

    const [user, setUser]=useState(initialValues);

    const navigate = useNavigate();

    const onValueChange=(e)=>{
        console.log(e.target.name,e.target.value)
        setUser({...user,[e.target.name]:e.target.value})
        console.log(user);
    }
    const addUserDetails=async ()=>{
        await addUser(user);
        navigate('/all')
    }


    return(
        <Container>
            <Typography variant='h3'>Add User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="name"/>
            </FormControl>
            <FormControl>
                <InputLabel>Username</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="username"/>
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="email"/>
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="phone"/>
            </FormControl>
            <FormControl>
             <Button variant="contained" onClick={()=>addUserDetails()}>Add</Button>
            </FormControl>
        </Container>
        
    );
}

export default AddUser;