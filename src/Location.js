import { useEffect, useState } from "react";
import axios from "axios";
import "./Location.css"

import { MdOutlineLocationOn } from 'react-icons/md';

function Location() {
    const [currLocation, setCurrLocation] = useState({});
    // const [currLocationJs, setCurrLocationJs] = useState({});
    useEffect(() => {
      getLocation();
      // getLocationJs();
    }, []);
  
    const getLocation = async () => {
      const location = await axios.get("https://ipapi.co/json");
      
      setCurrLocation(location.data);
    };
  
    // const getLocationJs = () => {
    //   navigator.geolocation.getCurrentPosition((position) => {
    //     console.log(position);
    //     const { latitude, longitude } = position.coords;
  
    //     setCurrLocationJs({ latitude, longitude });
    //   });
    // };
  
    return (
      <div >
        <MdOutlineLocationOn className="icon"/>
        <div className="location">
        {currLocation.city}
        </div>
      </div>
    );
  }
  

export default Location