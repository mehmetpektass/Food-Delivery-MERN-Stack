import React, { useState } from "react";
import "./Home.css";
import Header from "../../components/Header/Header.jsx";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu.jsx";
import FoodDisplay from "../../components/FoodDisplay./FoodDisplay.jsx";
import AppDownload from "../../components/AppDownload/AppDownload";

const Home = () => {
    const [category , setCategory] = useState('all')
  return (
    <>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category}/>
      <AppDownload/>
    </>
  );
};

export default Home;
