import "./Login.css";
import {useForm} from "react-hook-form";
import UserModel from "../../../Models/UserModel";
import {useNavigate} from "react-router-dom";
import authService from "../../../Services/AuthService";
import {Button, ButtonGroup, Checkbox, FormControlLabel, TextField, Typography} from "@mui/material";
import {Clear} from "@mui/icons-material";
import ReplyIcon from "@mui/icons-material/Reply";
import React from "react";

function Login(): JSX.Element {

    const { register, handleSubmit } = useForm<UserModel>();
    const navigate = useNavigate();

    async function send(user:any) {
        try {
            await authService.register(user)
            navigate("/")
        }
        catch(err:any) {
            alert(err.message)
        }
    }

    return (
        <div className="Login Box">
            <form onSubmit={handleSubmit(send)}>

                <Typography variant="h4" sx={{fontWeight: "700", marginLeft: "50px"}}>
                    Login: &nbsp;
                    {/* <Call fontSize="large" /> */}
                </Typography>

                <TextField label="Username:" variant="outlined" className="TextBox" {...register("username")}/>

                <TextField label="Password:" variant="outlined" className="TextBox" {...register("password")}/>

                <ButtonGroup variant="contained" fullWidth>
                    <Button color="secondary" type="reset" endIcon={<Clear />}>Clean</Button>
                    <Button color="primary" endIcon={<ReplyIcon sx={{padding: "5px"}}/>}>Submit</Button>
                </ButtonGroup>

            </form>
        </div>
    );
}

export default Login;
