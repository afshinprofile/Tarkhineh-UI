// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

let sum = (num1: number, num2: number): number | string => {
  if (num1 && num2) {
    return "this numbers negetive";
  }
  return num1 + num2;
};

let priceCount: number = sum(23, 442) as number; 
console.log(priceCount);

function App() {
  
  return (
    <>
      <div className='bg-emerald-500 text-white'>this hello world for test</div>
    </>
  )
}

export default App;
