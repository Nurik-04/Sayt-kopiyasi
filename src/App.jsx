// import React from 'react'
// import { OrbitProgress } from 'react-loading-indicators'

// function App() {
  
//   return (
//     <div>
//       <OrbitProgress 
//       variant="dotted" 
//       dense color="#e20889" 
//       size="medium" 
//       text="😅" 
//      />
//     </div>
//   )
// }
// export default App

import React, { useEffect, useState } from "react";
import { OrbitProgress } from "react-loading-indicators";
import Header from "./Components/Header/header";
import Hero from "./Components/Hero/hero";
import "./App.css"

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 2 soniya loader ko‘rinadi
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loader"  >
        <OrbitProgress className="w-25 h-25"
          variant="dotted"
          dense
          color="red"
          size="medium"
          text="-_-"
        />
      </div>
    );
  }

  return (
    <div>
      <Header/>
      <Hero/>
    </div>
  );
}

export default App;
