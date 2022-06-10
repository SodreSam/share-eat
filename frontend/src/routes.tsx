import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import { Menu } from "./pages/Menu/Menu"
import { Home} from "./components/Home"
import { Register } from "./pages/Register/Register"


export function AppRoutes(){

    
    return (
       <Router>
           <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/menu/:estName" element={<Menu />} />               
               <Route path="/register/:estName" element={<Register />} />
           </Routes>
       </Router>
    )
}