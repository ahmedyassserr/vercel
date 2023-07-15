import { useState } from 'react';
import './App.css';

function App() {
  const [user, setuser] = useState('');
  const [pass, setpass] = useState('');
  const [gmail, setgmail] = useState('');
  return (
    <div className="row   text-center m-auto py-5 d-grid ">
      <div className='col-md-3 d-grid py-5 '>
      <form className='d-grid  '>
        <input type="text" className="form-control m-2"  placeholder='user' 
         onChange={(e)=>{
          setuser(e.target.value)
        }} />
        <input type="password" class="form-control m-2"   placeholder='password' onChange={(e)=>{
                setpass(e.target.value)
        }}  />
        <input type="gmail"   placeholder='gmail'  className="form-control m-2"  onChange={(e)=>{
              setgmail(e.target.value)
        }}  />
        <button type="submit" class="btn btn-primary form-control" 
         onClick={()=>{
          fetch('http://localhost:3200/data',{ 
            method: "POST", 
          headers: {
            "Content-Type": "application/json"}, 

            body: JSON.stringify({user,pass,gmail})
      } )
         } } 
          >submit</button>
                
      </form>
</div>   
    </div>
  );
}

export default App;
