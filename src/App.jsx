import React, { useEffect, useState } from "react";
import { OrbitProgress } from "react-loading-indicators";
import Header from "./Components/Header/header";
import Hero from "./Components/Hero/hero";
import Kichkina from "./Components/KIchkina/Kichkina";
import Main from "./Components/Main/Main";
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
          text="CLONE"
        />
      </div>
    );
  }

  return (
    <div>
      <Header/>
      <Hero/>
      <Kichkina/>
      <Main/>
    </div>
  );
}

export default App;
