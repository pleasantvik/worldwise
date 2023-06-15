// import React from "react";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "@/pages/Home";
import Pricing from "@/pages/Pricing";
import Product from "@/pages/Product";
import PageNotFound from "@/pages/PageNotFound";
import AppLayout from "@/pages/AppLayout";
import Login from "./pages/Login";
import CityList from "./components/city/CityList";
import axios from "axios";
import { ICities } from "@/models";
import CountryList from "@/components/country/CountryList";
import City from "@/components/city/City";
import Form from "@/components/form/Form";

// export type CityData = ICities[];
const URL = "http://localhost:8000";
const App = () => {
  const [cities, setCities] = useState<ICities[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchCities = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get<ICities[]>(`${URL}/cities`);
      setCities(data);
    } catch (error) {
      alert("Error in loading the data");
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchCities();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="product" element={<Product />} />
        <Route path="login" element={<Login />} />
        <Route path="app" element={<AppLayout />}>
          <Route index element={<Navigate to="cities" replace />} />
          <Route
            path="cities"
            element={<CityList cities={cities} isLoading={isLoading} />}
          />
          <Route
            path="countries"
            element={<CountryList cities={cities} isLoading={isLoading} />}
          />
          <Route path="cities/:id" element={<City />} />
          <Route path="form" element={<Form />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
