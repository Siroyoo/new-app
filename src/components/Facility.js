import React, {useEffect, useState} from 'react'
import "../css/Facility.css"
import axios from 'axios';
import { Link } from "react-router-dom";

export default function Facility() {
    const [fac, setfac] = useState([]);
    const getFac = async ()=> {
        axios
            .get("http://localhost:8082/facility")
            .then((res) => {
              setfac(res.data);
              console.log(res.data);
              console.log(res);
            })
            .catch((err) => {
              console.log(err);
            })
    };
    useEffect(() => {
      getFac();
    }, []);
    console.log(fac);
  return (
    <div>
        <h2>&nbsp;Facility&nbsp;</h2>
        <div className='wrap'>
          <div className='emtbox'>

          </div>
          {fac.map((fa, idx)=> (
            <div key={idx} className='wrapbox'>
                <img src={fa.img} alt='시설이미지'/>
                  <p className='imgtext'>
                  <Link to="/"style={{textDecorationLine:"none", color:"white"}}>
                    {fa.name}
                  </Link>
                  </p>
                
            </div>
          ))}
          <div className='emtbox'>
            
            </div>  
        </div>  
    </div>
  );
}
