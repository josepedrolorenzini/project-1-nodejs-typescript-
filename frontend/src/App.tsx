import { useState } from 'react' 
import './App.css'
import SupabaseGetCustomers from './fetchData/SupabaseGetCustomers';

function App() {

  const [trueOrFalse, setTrueOrFalse] = useState(false)
   
  return (
    <>
      <div className="card">
        <h1>Project 1</h1>
        
        <button onClick={() => setTrueOrFalse((prevData) => !prevData)}>
          click {trueOrFalse.toString()}
        </button>
     
      </div>
      <div>
      <p className="read-the-docs">
        Click on the button to display the data
      </p>

              {trueOrFalse && 
              <SupabaseGetCustomers/>
            } 


      </div>
    </>
  )
}

export default App