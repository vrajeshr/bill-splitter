import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./styles.css";

const EnterNames = (props) => {
    const [names, setNames] = useState(new Array(props.partySize).fill(""));

    const handleOnChange = (e, indx) => {
        let currnames = [...names];
        currnames[indx] = e.target.value;
        setNames(currnames);
    };

    return (
        <div className="enter-names">
            <p>Enter party member names :</p>
            {[...Array(props.partySize)].map((el, indx) => {
                return (
                    <input
                        key={indx}
                        onChange={(e) => handleOnChange(e, indx)}
                        type="text"
                        placeholder="Name"
                    />
                );
            })}
            <NavLink
                onClick={() => {
                    props.submit(names);
                }}
                to="/food"
                className="navinput"
            >
                Next
            </NavLink>
        </div>
    );
};

export default EnterNames;
