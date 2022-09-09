import { ACTIONS } from "./App"

export default function OperationButton({dispatch, operation}){
    return <button onClick={() => 
        dispatch({ type: ACTIONS.choose_opeartion, payload: { operation }})}>{operation}</button>

}