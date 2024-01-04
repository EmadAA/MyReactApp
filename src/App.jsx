
import './App.css';
//Importing Module CSS file



function App() { 
  let formChange =(e)=>{
console.log(e.target.value);
  }
  

  return (
    <>
  <div>
   <h1 className='text-center bg-success'>Learning React-Bootstrap </h1>
   <input type="text"placeholder='Type Here' className='form-control' onChange={formChange}/>
  </div>
    </>
  )
}

export default App
