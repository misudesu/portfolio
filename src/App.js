import NavBar from './component/NavBar';
import {BrowserRouter as Router,Route,Routes,Link,useLocation,Nav} from 'react-router-dom'
import Home from './Page/Home'
import Flegaye from './Page/Flegaye'
import Dashbord from './Page/Dashbord'
import China from './Page/China';
import Nora from './Page/Nora';
export default function App() {
  return (
     <> 
    <Router>
<NavBar/>
  <Routes> 
   
    <Route  path="/" element={<Flegaye />}/>
    <Route  path="/pro1" element={<Home />}/>
   {/* <Route exact path="/Dashbord" element ={<Dashbord/>} /> */}
   <Route exact path="/china" element ={<China/>} />
   {/* <Route exact path="/Nora" element ={<Nora/>} /> */}
    </Routes>
    <div className=' bg-black text-white p-2 text-xl flex flex-wrap justify-center mx-auto'><footer>
    <h1>All right reservied @misudesu 2022 </h1>
    </footer></div>
  </Router> 
 </>
  );
}


