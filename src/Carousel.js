import { useState } from "react";
import {data} from "./data";



function Carousel ({img}) {

    const [index, setIndex] = useState(0);
    
const previosPlace = () => {
    setIndex((index => {
        index --;
        if (index < 0) {
            index = data.length - 1;
        }
        return index;
    }))
}

const nextPlace = () => {
    setIndex((index => {
        index ++;
        if (index > data.length-1) {
            index=0;
        }
        return index;
    }))
}
    return (
       
  <div className="box">
        <img src={img[index]} width="300px"  alt ="item"/>
     
    
             <div className="btn-container">
                <button className="btn" onClick={previosPlace}>Previos</button>
                <button className="btn" onClick={nextPlace}>next</button>
                </div>      
                   </div>


   

    )
}

export default Carousel;