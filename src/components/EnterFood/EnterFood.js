import "./styles.css";
import { useRef, useState } from "react";

const EnterFood = () => {
    const [foodList, setFoodList] = useState(["", "", ""]);

    const inputRef = useRef();

    const handleOnChange = (e, indx) => {
        let currFoods = [...foodList];
        foodList[indx] = e.target.value;
        setFoodList(currFoods);
    };

    const onAddNewRow = (e) => {
        let currFoods = [...foodList, ""];
        inputRef.current.focus();
        setFoodList(currFoods);
        console.log(inputRef);
    };

    return (
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
        </div>
    );
};
export default EnterFood;
