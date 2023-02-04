import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from '../store/counter/counterSlice';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

export const HomePage = () => {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    return(
    <div className="container mx-auto">
        <h1 className="font-bold">Hay redux toolkit, vite, Font awesome, React router dom </h1>
        <div>
            <button
                aria-label="Increment value"
                className="bg-cyan-500 text-white p-3 rounded"
                onClick={() => dispatch(increment())}
            >
               <FontAwesomeIcon icon={faPlus} /> Increment
            </button>
            <span className="font-bold mx-3">{count}</span>
            <button
                aria-label="Decrement value"
                onClick={() => dispatch(decrement())}
                className="bg-cyan-500 text-white p-3 rounded"
            >
              <FontAwesomeIcon icon={faMinus} />  Decrement
            </button>
      </div>
    </div>
    )
    }