import {ADD_TODO, REMOVE_TODO} from './action.types'

//when we use this file we are going to be provided with state and action
//action is what type of action is to be done
export default (state, action) => {
    //type is the action which we need to do
    switch (action.type) {
        //... to load the state and payload holds the actual data i.e information
        case ADD_TODO:
            return [...state, action.payload]//payload is nothing but information passed along with action
        case REMOVE_TODO:
            //state is iteratable and is a array so we can  filter based on
            //given condition 
            //todo.id should be equal to the string which is provided i.e. action.payload` 
            return state.filter(todo => todo.id !== action.payload)
        default:
            return state;
    }
}