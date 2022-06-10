import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contacts } from "./pages/Contacts";
import { Navbar } from "./pages/Navbar";
import { Nomatch } from "./pages/Nomatch";
import { Products } from "./pages/Products/Products";
import { New } from "./pages/Products/New";
import { Featured } from "./pages/Products/Featured";
import { Users } from "./pages/Users";
import { UserDetails } from "./pages/UserDetails";
import { Admin } from "./pages/Admin";
import { Profile } from "./pages/authentication/Profile";
import { AuthProvider } from "./pages/authentication/auth";
import { Login } from "./pages/authentication/Login";
import { RequireAuth } from "./pages/authentication/RequireAuth";

function App() {
  return (
    <>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products" element={<Products />}>
            <Route index element={<Featured />} />
            <Route path="featured" element={<Featured />} />
            <Route path="new" element={<New />} />
          </Route>
          <Route path="about" element={<About />} />

          <Route path="contacts" element={<Contacts />} />

          <Route path="users" element={<Users />}>
            <Route path=":userId" element={<UserDetails />} />
            <Route path="admin" element={<Admin />} />
          </Route>
          <Route
            path="profile"
            element={
              <RequireAuth>
                {" "}
                <Profile />{" "}
              </RequireAuth>
            }
          />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<Nomatch />} />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
