import { useEffect } from "react";
// import deliveryAsset from "./asset/delivery.jpg";
import assetImage from "./asset/delivery.jpg";


function Delivery () {


    useEffect (()=>{
        // document.body.style.backgroundImage = `url(${deliveryAsset})`;
        document.body.style.backgroundImage = `url(${assetImage})`;
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.backgroundPosition = 'center';
        document.body.style.backgroundAttachment = 'fixed';

        return () => {
         document.body.style.backgroundImage= '';
        };
        
    }, []);
    return (
        <div className="header" >
        <h2>Доставка</h2>
        </div>
    )
}

export default Delivery;