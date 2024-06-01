import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Likes from "./pages/Likes";
import Music from "./pages/Music";
import Layout from "./layouts/Layout";
import { useEffect } from "react";
import { GetToken } from "./components/Utiles";
import { useDispatch } from "react-redux";
import { create } from "./redux/authSlice";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    GetToken()
      .then((res) => {
        dispatch(create(res));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/likes"
          element={
            <Layout>
              <Likes />
            </Layout>
          }
        />
        <Route
          path="/music/:id"
          element={
            <Layout>
              <Music />
            </Layout>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
