import { useState} from "react";
import { data } from "./data";

function Button ({setProducts}) {
    const filteredProducts=(searchTerm)=>{
        const newProductsArray=data.filter(item=>item.searchTerm.includes(searchTerm))   //здесь мы пишем item.searchTerm , чтобы фильтровать по категориям//
        setProducts(newProductsArray)
    }
   

const[mySearch, setMySearsh] = useState('')

    const myItemSearch =(e)=> {
       setMySearsh(e.target.value)
       console.log(e.target.value)

    }

    const [wordSubmitted, setWordSubmitted]= useState('');
    // const setWordSubmitted= useState('');

const finalSearch=(e)=> {
    e.preventDefault();
    setWordSubmitted(mySearch)
    const newProductsArray=data.filter(item=>item.name.toLowerCase().includes(mySearch))  //здесь мы пишем item.name , чтобы искать через поисковую строку//
    setProducts(newProductsArray)
}
    


    return (
   
        <div >
      
  
  <div className="cont">
        <form onSubmit={finalSearch}>
            <input className="search" placeholder ="Поиск товара" onChange ={myItemSearch} value={mySearch}/>
            </form>
        </div>

  

        <div className="cont">  
        {/* //чтобы отображались все товары в жанной категории пишем  setProducts(data)// */}
<button className="change" onClick={()=> setProducts(data)}>Все</button>  
<button className="change" onClick={()=> filteredProducts("Мода")}>Мода</button>
<button className="change" onClick={()=> filteredProducts("Путешествия")}>Путешествия</button>
<button className="change" onClick={()=> filteredProducts("Дом")}>Дом</button>
<button className="change" onClick={()=> filteredProducts("Дети")}>Дети</button>
<button className="change" onClick={()=> filteredProducts("Обувь")}>Обувь</button>
<button className="change" onClick={()=> filteredProducts("Красота")}>Красота</button>
<button className="change" onClick={()=> filteredProducts("Спорт")}>Спорт</button>
 </div>
 </div>

    
    )
}

export default Button;