import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import React, {useState} from "react";
import authService from "../../../Services/AuthService";
import UserModel from "../../../Models/UserModel";
import {
    Button,
    ButtonGroup,
    TextField,
    Typography
} from "@mui/material";
import {Clear, Send} from "@mui/icons-material";
import ReplyIcon from '@mui/icons-material/Reply';

function Register(): JSX.Element {

    const { register, handleSubmit } = useForm<UserModel>();
    const navigate = useNavigate();

    async function send(user:any) {
        try {
            console.log(user)
            // await authService.register(user)
            navigate("/")
        }
        catch(err:any) {
            alert(err.message)
        }
    }


    return (
        <div className="Register Box">

            <form onSubmit={handleSubmit(send)}>


                <Typography variant="h4" sx={{fontWeight: "700", marginLeft: "50px"}}>
                    Register: &nbsp;
                </Typography>
                <TextField label="Full Name::" variant="outlined" className="TextBox" {...register("name")}/>
                <TextField label="Professionalism::" variant="outlined" className="TextBox" {...register("expert")}/>
                <TextField label="Email:" variant="outlined" type="email" className="TextBox" {...register("username")}/>
                <TextField label="Password:" variant="outlined" className="TextBox" {...register("password")}/>
                

                <ButtonGroup variant="contained" fullWidth>
                    <Button color="secondary" type="reset" endIcon={<Clear />}>Clean</Button>
                    <Button color="primary" type="submit" endIcon={<ReplyIcon sx={{padding: "5px"}}/>}>Submit</Button>
                </ButtonGroup>
            </form>

        </div>
    );
}

export default Register;
