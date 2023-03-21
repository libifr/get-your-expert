import "./DictionaryLetterCard.css";
import React from "react";
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import SendToMobileIcon from '@mui/icons-material/SendToMobile';
interface UsersProps {
    user: any
}

function DictionaryLetterCard(props:UsersProps): JSX.Element {
    return (
        <div className="DictionaryLetterCard">
			<h2>{props.user.name}</h2>
            <span className="experts">EXPERT IN: </span><h4>{props.user.expert}</h4>
			<span><MailOutlineIcon/>{props.user.email}</span>
		    <span><SendToMobileIcon/>{props.user.phone}</span>
            {/* <ExpandCircleDownIcon className="DictionaryLetterCard-arrow"/> */}
        </div>
    );
}

export default DictionaryLetterCard;
