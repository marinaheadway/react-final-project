function Products ({itemForSale}) {
    return (
        <div className="product">
{itemForSale.map ((item => {
    const {id, name,  searchTerm, price, img}= item;

             
    return (
        <div className="product-card" key ={id}>
            {/* <img src ={`./${Backet.img}.jpg`} width="400px" height="300px"/> */}
            {/* <img src ={img} width="400px" height="300px" alt ="icon"/> */}
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