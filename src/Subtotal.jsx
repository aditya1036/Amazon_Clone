import React from 'react'
import './Subtotal.css'
import Currencyformat from 'react-currency-format'
import { useStateValue } from './StateProvider'



function Subtotal() {

    const [{basket} , dispatch] = useStateValue()
    var s=0
    const getBasketTotal = (basket) => {

        
        basket.forEach((item) => {
            s += item.price
        })

    } 


    return (
        
        <div className='subtotal'>

            

            <Currencyformat
            
            renderText = {(value) => (
                <>
                <p>
                    Subtotal ( {basket.length} items) :$ <strong>{s}</strong>
                </p>
                <small className="subtotal__gift">
                    <input type="checkbox" />
                    This Order Contains gift
                </small>

                </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
            />
            <button>Proceed to checkout</button>
        </div>
    )
}

export default Subtotal
