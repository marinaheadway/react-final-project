import Carousel from "./Carousel";

function Products ({itemForSale}) {
    return (
        <div className="product">
{itemForSale.map ((item => {
    const {id, name,  searchTerm, price, img} = item;

             
    return (
        <div className="product-card" key ={id}>
           <div>
            <Carousel img={img}/>

           </div>
            <div className="product-info">
                <h3>{name}</h3>
                <h4> $ {price}</h4>
                   </div>
                   </div>
                )
}))}
        </div>)
}


export default Products;