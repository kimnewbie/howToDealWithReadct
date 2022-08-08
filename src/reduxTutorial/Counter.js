import { useSelector, useDispatch } from "react-redux";
import { increase, decrease, selectCount } from "../modules/counter";

const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector(selectCount);
    const onClickIncrease = () => {
        dispatch(increase());
    };

    const onClickDecrease = () => {
        dispatch(decrease());
    };

    return (
        <div>
            <h1>{counter}</h1>
            <div>
                <button onClick={onClickIncrease}>+1</button>
                <button onClick={onClickDecrease}>-1</button>
            </div>
        </div>
    );
};

export default Counter;