import React from 'react';
import reactDOM from 'react-dom/client';
import './index.css';
import Calculator from './Calculator';

/* const divRoot = document.querySelector('#root')
 */
/* reactDOM.render(<CounterApp value= {10}/> , divRoot);   
 */

const root = reactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <Calculator/>
    </>
);