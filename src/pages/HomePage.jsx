import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from '../store/counter/counterSlice';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

export const HomePage = () => {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    return(
    <div className="container mx-auto flex flex-col justify-center items-center h-screen">
        <h1 className="font-bold mb-10 uppercase mulishBold text-3xl">Redux toolkit, vite, Font awesome, React router dom </h1>
        <h4 className="font-bold mb-10 uppercase mulishRegular text-2xl">y tambien custom fonts </h4>
        <div>
            <button
                aria-label="Increment value"
                className="bg-cyan-500 text-white p-3 rounded mulishLight"
                onClick={() => dispatch(increment())}
            >
               <FontAwesomeIcon icon={faPlus} /> Increment
            </button>
            <span className="font-bold mx-3">{count}</span>
            <button
                aria-label="Decrement value"
                onClick={() => dispatch(decrement())}
                className="bg-cyan-500 text-white p-3 rounded  mulishLight"
            >
              <FontAwesomeIcon icon={faMinus} />  Decrement
            </button>
      </div>
    </div>
    )
    }