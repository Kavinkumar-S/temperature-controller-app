import './Style.css';
import { useState } from 'react';

function App() {
 
    const [tempvalue,setTempvalue] = useState(15);
    const [colorvalue,setColorvalue] =useState("cold")


    const handleIncrement =()=>{
     const temp = tempvalue +1;
      if(temp >=18){
        setColorvalue("hot");
}

setTempvalue(temp);

  }

    const handleDecrement= ()=>{
      const temp = tempvalue -1;
    
      if(temp<=17){
        setColorvalue("cold");
}
setTempvalue(temp);


}

    console.log("val",tempvalue)

  return (
    <div className="container">


    <div className='card'>

      <h3 className='title'>Temperature</h3>


      <div className={`circle ${colorvalue}`}
      
      // 'circle'
      
      >

        <h3 className='temperature-value' >
          {tempvalue}
        <sup>
        &#8451;
        </sup>
        </h3>

      </div>


      <div className='control-buttons'>

        <button 
        className="decrement"
        onClick={handleDecrement}
        >
-
        </button>
        
        <button
        className="increment"
        onClick={handleIncrement}

        >
          +
        </button>

        </div>  



    </div>
      </div>
  );
}

export default App;
