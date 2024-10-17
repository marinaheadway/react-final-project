import { useEffect } from "react";
import image from "./asset/order.jpg";


function Order () {

    useEffect (()=>{
        document.body.style.backgroundImage = `url(${image})`;
        document.body.style.backgroundSize = '50%';
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.backgroundPosition = 'center';
        document.body.style.backgroundAttachment = 'fixed';
 

        return () => {
         document.body.style.backgroundImage= '';
         document.body.style.backgroundSize = '';
        document.body.style.backgroundRepeat = '';
        document.body.style.backgroundPosition = '';
        document.body.style.backgroundAttachment = '';
        };
        
    }, []);

    return (
    
       
      
    <h1>Мои заказы</h1>
    )
}
 export default Order;