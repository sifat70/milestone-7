import React from 'react';

import './Sunglass.css'
import Watch from '../Watch/Watch';
import { add, multiply, theFirstNumberByTheSecondNumber as divide } from '../Utils/Calculate';
// import add from '../Utils/Calculate';

const Sunglass = () => {

    const first = 15;
    const second = 25;
    const sum = add(first, second);
    const multifly = multiply(first, second);
    const divide = divide(first, second)
    return (
        <div>
            <Watch></Watch>
        </div>
    );
};

export default Sunglass;