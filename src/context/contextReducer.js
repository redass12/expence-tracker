// Reducer => a function that takes in the old state , and action  => new state and
 
const contextReducer = (state , action) => {
    let transactions;
switch (action.type) {
    case 'DELETE_TRANSACTION':
        console.log('this is state', state)
        transactions = state.filter(item => item.id !== action.payload);
        return transactions;

    case 'ADD_TRANSACTION':
        transactions  = [action.payload , ...state]
        return transactions;

    default:
        return state;
}
}

export default contextReducer;