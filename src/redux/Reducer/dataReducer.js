/* eslint-disable no-unreachable */
/* eslint-disable no-lone-blocks */
import data from '../../data/store.json';
import { QUANTITYCHANGE } from '../Types/mainTypes';
const stateData = {
    hamburger: data.burger
};
const dataReducer = ( state = stateData, action ) => {
    switch ( action.type ) {
        case QUANTITYCHANGE: {
            let updateReducer = state.hamburger;   
            let index = -1;
            for (let i = 0; i < updateReducer.length; i++) {
                if (updateReducer[i].name === action.object.name) {
                    index = i;
                };
            };
            if ( index !== -1 ) {
                if ( action.flag === true ) {
                    if (updateReducer[index].quantity < 10) {
                        updateReducer[index].quantity += 1;
                    };
                } else {
                    if ( updateReducer[index].quantity > 0 ) {
                        updateReducer[index].quantity += -1;
                    };
                };
            };
            state.hamburger = updateReducer;
            return {...state};
        }; break;
        default: ;
    };
    return {...state};
};
export default dataReducer;