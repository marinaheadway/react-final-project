import Carousel from "./Carousel";

function Products ({itemForSale}) {
    return (
        <div className="product">
{itemForSale.map ((index => {
    const {id, name, price, img} = index;

             
    return (
        <div className="product-card" key ={id}>
         
            
       

           <div className="info-container">
           <Carousel img={img}/>
            <div className="product-info">
                <h3>{name}</h3>
              
                <div className="product-buy">
                <h4>$ {price}</h4>  
                <button className="btn-buy">Купить</button>
                </div>
                 </div>
                   </div>
                   </div>
                  

                )
}))}
        </div>)
}


export default Products;