import "./App.css";
// import DaisyNav from "./components/DaisyNav/DaisyNav";

function App() {
  return (
    <>

<header>
<Navbar></Navbar>
  {/* <DaisyNav></DaisyNav> */}
</header>

      <h1 className="p-20 text-4xl font-bold">Hey tailwind + DaisyUI </h1>
     
    </>
  );
}
import DaisyNav from "./components/DaisyNav/DaisyNav";
import Navbar from "./Navbar/Navbar";

export default App;
