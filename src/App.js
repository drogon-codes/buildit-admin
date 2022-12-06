import Auth from "./Pages/login";
import Dashboard from "./Pages/dashboard";
import ViewUsers from "./Pages/view-users"
import AddBrand from "./Pages/add-brand";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";
import UserDetails from "./Pages/user-details";
import ViewBrands from "./Pages/view-brands";
import UpdateBrand from "./Pages/update-brand";

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path="/" element={<Auth/>}/>
      <Route path="/Dashboard" element={<Dashboard/>}/>
     </Routes>
     <Routes>
        <Route path="/ViewUsers" element={<ViewUsers/>}/>
        <Route path="/userDetail/:userId" element={<UserDetails/>}/>
     </Routes>
     <Routes>
      <Route path="/ViewBrands" element={<ViewBrands/>}/>
      <Route path="/AddBrand" element={<AddBrand/>}/>
      <Route path="/UpdateBrand/:id" element={<UpdateBrand/>}/>
     </Routes>
    </div>
  );
}

export default App;
