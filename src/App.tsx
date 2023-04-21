import { useEffect } from "react";
import { createRoutesFromElements } from "react-router";
import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import "./App.css";
import Card from "./Card/Card";
import FirstBlock from "./firstBlock/FirstBlock";
import Home from "./Home/Home";

import Layout from "./Layout/Layout";
import NewArrivals from "./NewArrivals/NewArrivals";
import NotFound from "./NotFound/NotFound";
import { startCardFetching } from "./redux/slices/cardSlice";
import { useAppDispatch } from "./redux/store";
import SinglePage from "./SinglePage/SinglePage";
import Store from "./Store/Store";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/card" element={<Card />} />
      <Route path="/store" element={<Store />} />
      <Route path="/sheakers/:id" element={<SinglePage />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(startCardFetching());
  }, [dispatch]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
