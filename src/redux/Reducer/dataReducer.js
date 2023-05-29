import data from '../../data/store.json';
const stateData = {
    hamburger: data.burger
};
const dataReducer = ( state = stateData, action ) => {
    switch ( action.type ) {
        case 1: ; break;
        default: ;
    };
    return {...state};
};
export default dataReducer;