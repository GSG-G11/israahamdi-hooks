import React from 'react';
import Exr1 from './component/Exr1';
import Exr2 from './component/Exr2';
import Exr3 from './component/Exr3';
import Exr4 from './component/Exr4';
import Exr5 from './component/Exr5';

const App = () =>  {


 return(
      <div className="app">
       <Exr1 />
       <hr/>
       <Exr2/>
       <hr/>
       <Exr3 />
       <hr/>
       <Exr4 />
       <hr/>
       <Exr5/> 
      </div>
    );
  
  }

export default App;
