import React from 'react'
import { connect } from 'react-redux';
import '../css/burger.css';
import { quantityChange } from '../redux/Actions/mainActions';
function Main(props) {
    const renderSelectBurger = () => {
        return props.burger.hamburger.map((object, index) => {
            return (
                <tr key={index}>
                    <td>{object.name}</td>
                    <td>
                        <div>
                            <button onClick={()=>{props.quantityChange(object,false)}} className='reduce'>-</button>
                            <p>{object.quantity}</p>
                            <button onClick={()=>{props.quantityChange(object,true)}} className='increase'>+</button>
                        </div>
                    </td>
                    <td>{object.price}</td>
                    <td>{money(object.quantity, object.price)}</td>
                </tr>
            );
        });
    };
    const renderBurger = () => {
        
    };
    const money = (quantity, price) => {
        return price * quantity;
    };
    const allMoney = () => {
        let value = 0;
        props.burger.hamburger.map((object,index) => {
            return value += money(object.quantity, object.price)
        });
        return value;
    };
  return (
    <div className='main'>
        <div className="display">
            <div className="bread breadTop"></div>
            {renderBurger()}
            <div className="bread breadBottom"></div>
        </div>
        <div className="customBurger">
            <table>
                <thead>
                    <tr>
                        <th>food</th>
                        <th>quantity</th>
                        <th>price</th>
                        <th>money</th>
                    </tr>
                </thead>
                <tbody>
                    {renderSelectBurger()}
                </tbody>
                <tfoot>
                    <tr>
                        <th colSpan={3}></th>
                        <th>{allMoney()}</th>
                    </tr>
                </tfoot>
            </table>
            <button onClick={()=>{}} className='payment'>payment</button>
        </div>
    </div>
  );
};
const mapStateToProps = state => {
    return {
        burger : state.dataReducer,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        quantityChange : (object, flag) => {
            dispatch(quantityChange(object,flag));
        }
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(Main);