import Home from "./pages/home/Home";
import { BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom"
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Profile from "./pages/profile/Profile";
import Post from "./post/Post";
import { useContext } from "react";
import { AuthContext } from "./state/AuthContext";


function App() {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/login" element={user ? <Navigate to ="/post" />:<Login />} />
     <Route path="/register" element={user ? <Navigate to ="/" />:<Register />} />
     <Route path="/post" element={<Post />} />
     <Route path="/profile/:username" element={<Profile />} />
    </Routes>
    </Router>
    
);
}

export default App;
