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
        console.log(props.burger.hamburger);
        let render = [];
        props.burger.hamburger.map((object , index) => {
            for ( let i = 0; i < object.quantity; i++ ) {
                render.push(object.name);
            };
            return true;
        });
        return render.map((object, index) => {
            return <div className={object} key={index}></div>
        });
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
            <div className='content'>
                <div className="bread breadTop"></div>
                {renderBurger()}
                <div className="bread breadBottom"></div>
            </div>
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