import React, { useEffect,useState } from 'react'
function App() {

    const [src, setSrc] = useState('');
    const getImage = async () =>{
        const response = await fetch('https://dog.ceo/api/breeds/image/random')
        const data = await response.json();
        setSrc(data.message)
        console.log(data);
    }

return(
    <div className="App">
        <h2>use of API by CODERDOST YOUTUBE</h2>    
    
        
<section className='main-banner'>
        <img src='./src/assets/images/back2.jpg'></img>
        <div className='banner-info'>
          <div className='container'>
            <h3>IMAGE GENERATOR</h3> 
        <button onClick={(e)=>getImage()}>get IMAGE</button>   
<img src={src} alt=""></img>
          </div>
        </div>
        
      </section>
    </div>
    
)

}


export default App;