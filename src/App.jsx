import { Suspense } from "react";
import "./App.css";
// import DaisyNav from "./components/DaisyNav/DaisyNav";



const pricingPromise = fetch('pricingData.json').then(res => res.json())

const marksPromise = axios.get('marksData.json');




function App() {
  return (
    <>
      <header>
        <Navbar></Navbar>
        {/* <DaisyNav></DaisyNav> */}
      </header>

        

      <main>

          <Suspense fallback={<span className="loading loading-dots loading-lg"></span>}>
            <MarksChart marksPromise={marksPromise}></MarksChart>
          </Suspense>





        <ResultChart></ResultChart>

        <Suspense fallback={<span className="loading loading-dots loading-lg"></span>}>
          <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
        </Suspense>



      </main>
    </>
  );
}

import Navbar from "./components/Navbar/Navbar";
import PricingOptions from "./components/PricingOptions/PricingOptions";
import ResultChart from "./components/ResultChart/ResultChart";
import axios from "axios";
import MarksChart from "./components/MarksChart/MarksChart";

export default App;
