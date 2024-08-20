// import { useState } from "react";

function AllProduct ({itemSelection}) {

    // const [index, setIndex]= useState(0)
    return (
        <div className="product">
{itemSelection.map((item=>{
    const {id, name, title, img}= item;
    return  (
        <div className="product-card" key="id">
            <img src = {img} width="400px" height="500px"/>
            <div className="product-info">
                <h3>{name}</h3>

            </div>
        </div>
    )
}))}
        </div>
    )
}

export default AllProduct;