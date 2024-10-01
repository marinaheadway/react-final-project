
import Button from "./Button";
import {data} from "./data";
import { useState } from "react";
import Products from "./Products";
import { useEffect } from "react";
import assetImage from "./asset/giraffe.jpg";




function Home () {

    useEffect (()=>{
        document.body.style.backgroundImage = `url(${assetImage})`;
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.backgroundPosition = 'center';
        document.body.style.backgroundAttachment = 'fixed';


        return () => {
         document.body.style.backgroundImage= '';
        };
        
    }, []);

const [product, setProduct]= useState(data)
const chosenProduct = (searchTerm) => {
    const newProducts= data.filter (element=> element.searchTerm===searchTerm);
    setProduct(newProducts);
}

    return (
        <div>

<Button setProducts= {setProduct}/>

<Products itemForSale={product}/>
    </div>

        )
}
export default Home;