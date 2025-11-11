import React, { use, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import './Bottles.css';
import { addToLocal } from '../../Utills/localStorage';

const Bottles = ({bottlesPromise}) => {

    const bottles = use(bottlesPromise)

    const [cart, setCart] = useState([])

    const handleAddToCart =(bottle) => {
        // console.log('bottle will be added to the cart', bottle)
        const newCart = [...cart, bottle];
        setCart(newCart);

        // save bottle id in the storage
        addToLocal(bottle.id)
    }
    // console.log(bottles)
    return (
        <div >
            <p>Added to cart:{cart.length}</p>
            <div className='bottles-container'>
                {
                bottles.map(bottle => <Bottle
                     key={bottle.id} bottle={bottle}
                     handleAddToCart={handleAddToCart}>
                        
                     </Bottle>)
                }
            </div>
            
        </div>
    );
};

export default Bottles;