import { useState } from 'react';
import './App.css';

function App() {

  const[weight,setweight] = useState(0)
  const[height,setheight] = useState(0)
  const[bmi,setbmi] = useState('')
  const[massage,setMassage] = useState('') 

  function calcbmi(e){
   e.preventDefault()
   if(height==0 || weight==0){
    alert("Please enter a valid weight and height")
   }else{
     let bmi = (weight/(height*height)*703)
     setbmi(bmi.toFixed(1))

     if(bmi<25){
      setMassage("you are under weight")
     }else if(bmi>=25 && bmi<30){
        setMassage("You are a healthy weight")
     }else{
      setMassage("You are a overweight")
     }
   }
  }
 
let Reload =()=>{
  window.location.reload()
}

  return (
   <>
   <div className="app">
    <div className="container">
    <h2>BMI Calculator</h2>
    <form onSubmit={calcbmi}>
      <div>
        <label>Weight (ibs)</label>
        <input type="text" placeholder='Enter Weight Value' value={weight} onChange={(e)=>setweight(e.target.value)}/>
      </div>
      <div>
        <label>Height (in)</label>
        <input type="text" placeholder='Enter Weight Value' value={height} onChange={(e)=>setheight(e.target.value)}/>
      </div>
       <div>
       <button className='btn'type='submit'>Submit</button>
       <button className='btn btn-outline' type='submit'onClick={Reload}>Reload</button>
       </div>
       <div className="center">
        <h3>Your BMI id {bmi}</h3>
        <p>{massage}</p>
       </div>
    </form>
    </div>
    </div>
   </>
  );
}

export default App;
