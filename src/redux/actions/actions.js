import { toast } from "react-toastify"

const INCREMENT= 'INCREMENT'
const DECREMENT= 'DECREMENT'

const actions={
     incrementCounter: (counter) => (dispatch) => {
        dispatch({
            type: INCREMENT,
            payload: counter + 1
        })
        toast.success('incremented!')
    }, 
    decrementCounter: (counter)=> (dispatch) =>{
        dispatch({
            type: DECREMENT,
            payload: counter - 1
        })
        toast.success('decremented!')
    },
}

export default actions;