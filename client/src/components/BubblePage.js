import React, { useState, useEffect } from "react";
import axios from "axios";
import {axiosWithAuth} from '../utils/axiosWithAuth';
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  useEffect(() => {
    axiosWithAuth()
    .get("colors")
    .then(res => setColorList(res.data))
    .catch(err => console.log("GET request failed", err))
  }, []);

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
