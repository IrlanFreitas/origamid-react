import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import Login from "./pages/Login/Login";
import { UserStorage } from "./contexts/UserContext";
import User from "./pages/User/User";
import ProtectedRouter from "./helper/ProtectedRouter";
import PhotoDetails from "./pages/PhotoDetails/PhotoDetails";
import Profile from "./pages/Profile/Profile";
import NotFound from "./components/notFound/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>
          <Header />
          <main className="AppBody">
            <Routes>
              <Route path="/" index element={<Home />} />
              <Route path="/login/*" element={<Login />} />
              <Route
                path="/conta/*"
                element={
                  <ProtectedRouter>
                    <User />
                  </ProtectedRouter>
                }
              />
              <Route
                path="/foto/:id"
                element={
                  <ProtectedRouter>
                    <PhotoDetails />
                  </ProtectedRouter>
                }
              />
              <Route
                path="/perfil/:user"
                element={
                  <ProtectedRouter>
                    <Profile />
                  </ProtectedRouter>
                }
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
