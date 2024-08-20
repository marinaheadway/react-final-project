
import Button from "./Button";
import {data} from "./data";
import { useState } from "react";
import Products from "./Products";



function Home () {

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
// {/* <AllProduct itemSelection={products} /> */}

      
    )
}
export default Home;