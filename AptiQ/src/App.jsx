import { useState } from 'react';
import MCQ from './MCQ';
import Home from './Home';
import Quiz from './Quiz';
import ConnectUs from './ConnectUs';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Certification from './components/Certification';




function App() {
  const [count, setCount] = useState(0)


    
    
    return (
      <>
      {/* <BrowserRouter> */}
      <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<>
        <Home></Home></>}></Route>
        <Route path="/MCQ" element={<>
        <MCQ></MCQ></>}></Route>
        <Route path="/Quiz" element={<>
        <Quiz></Quiz></>}></Route>
        <Route path="/components/Certification" element={<>
        <Certification></Certification></>}></Route>
        <Route path="/ConnectUs" element={<>
        <ConnectUs></ConnectUs></>}></Route>
        
       
      </Routes>
      </Router>
      {/* </BrowserRouter> */}
      </>
    );



}

export default App;

    