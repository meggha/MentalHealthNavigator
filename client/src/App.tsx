import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useNavigate,
} from "react-router-dom";
import { Home } from "./pages/home.tsx";
import { Login } from "./pages/login.tsx";
import { Sign } from "./pages/signup.tsx";
import { Blog } from "./pages/journaling.tsx";
import { UpdateUserBlog } from "./pages/updateBlog.tsx";
import { UserBlogs } from "./pages/showblog.tsx";
import { Profile } from "./pages/profile.tsx";
//import Tracker from "./pages/Tracker.tsx";
//import { Habit } from "./pages/new-habit.js";
import { store } from "./redux/store"; 
// import { PersonalityTest } from "./pages/personality.tsx";
import { PersonalityTest } from "./pages/pe.tsx";
import config from "./bot/config.js";
import MessageParser from "./bot/MessageParser.jsx";
import ActionProvider from "./bot/ActionProvider.jsx";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import { FaComment } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "./redux/store.ts";
import chatbotIcon from './img/chatbot.png';

type RootState = {
  isLogin: boolean;
};

const MyComponent = ({ onClose }) => {
  return (
    <div
      style={{ position: "fixed", top: "10px", right: "10px", zIndex: "9999" }}
    >
      <button
        onClick={onClose}
        style={{
          marginBottom: "10px",
          background: "f00",
          color: "fff",
          width: "30px",
        }}
      >
        X
      </button>
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
};

function App() {
  const dispatch = useDispatch();
  const [chatbotOpen, setChatbotOpen] = React.useState(false);

  const toggleChatbot = () => {
    setChatbotOpen(!chatbotOpen);
  };
  const iconStyle = {
    fontSize: "24px", // Adjust the icon size
    marginRight: "40px",
    marginLeft: "auto", // Adjust spacing between icon and text
    cursor: "pointer",
    color: "fff",
    width:"45px",
    height:"45px"
  };
  const isLogin = useSelector((state: RootState) => state.isLogin);
  const handleLogout = () => {
    try {
      dispatch(logout());
      alert("Logout Successfully");
      localStorage.clear();
      window.location.href = "/"; 
    } catch (error) {
      console.log(error);
    }
  };
  //console.log(isLogin)
  const linkStyle = {
    marginLeft: "10px",
    marginRight: "10px",
    textDecoration: "none",
    color: "#FFF6E9",
    fontFamily: "",
    width: "135px",
    // fontWeight: "",
    textAlign: "center",
    // align-items:'center'
  };

  return (
    <div>
      <Router>
        <nav
          className="navbar navbar-expand-lg "
          style={{ backgroundColor: "#3468C0", height: "60px" }}
        >
          <Link to="/" style={linkStyle}>
            Home
          </Link>
          {!isLogin && (
            <>
              <Link to="/login" style={linkStyle}>
                Login
              </Link>
              <Link to="/signup" style={linkStyle}>
                Sign up
              </Link>
            </>
          )}
          {isLogin && (
            <>
              <Link to="/journaling" style={linkStyle}>
                Journaling
              </Link>
              <Link to="/profile" style={linkStyle}>
                Profile
              </Link>
              <Link to="/pe" style={linkStyle}>
                Personality Test
              </Link>
              <img
  src={chatbotIcon}
  alt="Chatbot"
  style={iconStyle} // Apply your existing styles
  onClick={toggleChatbot}
/>

              {/* <button style={{ marginLeft: '10px', marginRight: '10px', }} >Logout</button> */}
              <div style={{ marginRight: "10px" }}>
                <button onClick={handleLogout} className="Btn">
                  <div className="sign">
                    <svg viewBox="0 0 512 512">
                      <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
                    </svg>
                  </div>

                  <div className="text">Logout</div>
                </button>
              </div>
            </>
          )}
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Sign />} />
          <Route path="/journaling" element={<Blog />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/showblog" element={<UserBlogs />} />
          <Route path="/pe" element={<PersonalityTest />} />
          <Route path="*" element={<h1>you are not in a page</h1>} />
          <Route path="/updateBlog/:blogId" element={<UpdateUserBlog />} />
        </Routes>
        {/* Render the Chatbot component conditionally */}
        {chatbotOpen && <MyComponent onClose={toggleChatbot} />}
        {chatbotOpen && (
          <MyComponent onClose={toggleChatbot}>
            {/* Pass necessary props to Chatbot component */}
            <Chatbot
              config={config}
              messageParser={MessageParser}
              actionProvider={ActionProvider}
            />
          </MyComponent>
        )}
      </Router>
    </div>
  );
}
export default App;
