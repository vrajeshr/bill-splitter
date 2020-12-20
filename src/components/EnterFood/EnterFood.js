import "./styles.css";
import { useRef, useState } from "react";
import { NavLink, Redirect } from "react-router-dom";

const EnterFood = (props) => {
    const [foodList, setFoodList] = useState(["", "", ""]);

    const inputRef = useRef();

    const handleOnChange = (e, indx) => {
        let currFoods = [...foodList];
        currFoods[indx] = e.target.value;
        setFoodList(currFoods);
    };

    const onAddNewRow = (e) => {
        let currFoods = [...foodList, ""];
        inputRef.current.focus();
        setFoodList(currFoods);
    };

    return props.partySize === 0 ? (
        <Redirect to="/" />
    ) : (
        <div className="enter-food">
            <p>Enter the food you ate : </p>
            {foodList.map((element, indx) => {
                return (
                    <input
                        key={indx}
                        onChange={(e) => handleOnChange(e, indx)}
                        type="text"
                        placeholder={"Food " + (indx + 1)}
                        ref={inputRef}
                    />
                );
            })}
            <input className="more-rows" onFocus={onAddNewRow} type="text" placeholder="+" />
            <NavLink
                onClick={() => {
                    props.submit(foodList);
                }}
                to="/food"
            >
                Next
            </NavLink>
        </div>
    );
};
export default EnterFood;
