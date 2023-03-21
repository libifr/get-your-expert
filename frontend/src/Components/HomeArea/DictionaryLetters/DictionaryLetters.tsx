import "./DictionaryLetters.css";
import axios from "axios"
import React, {useEffect, useState} from "react";
import DictionaryLetterCard from "../DictionaryLetterCard/DictionaryLetterCard";
import usersService from "../../../Services/UsersService";

function DictionaryLetters(props:any): JSX.Element {

    const [users, setUsers] = useState([])

    async function getUsers() {
        const result = await usersService.getAllUsers()
        setUsers(result.data)
    }

    
    useEffect(()=>{
        getUsers().then(()=>{console.log(`users = ${users}`)}).catch((err)=>console.log(err.message))
    },[])

    return (
        <div className="DictionaryLetters">
            {users.map(user => <DictionaryLetterCard user={user}/>)}
        </div>
    );
}

export default DictionaryLetters;
