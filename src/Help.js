import { useEffect } from "react";
import assetImage from "./asset/contact.jpg";
import { Accordion } from "./Accordion/Accordion";



function Help () {


        useEffect (()=>{
            document.body.style.backgroundImage = `url(${assetImage})`;
            // document.body.style.backgroundSize = 'cover';
            // document.body.style.backgroundRepeat = 'no-repeat';
            // document.body.style.backgroundPosition = 'center';
            // document.body.style.backgroundAttachment = 'fixed';
    
            return () => {
             document.body.style.backgroundImage= '';
             document.body.style.backgroundSize = 'cover';
            document.body.style.backgroundRepeat = 'no-repeat';
            document.body.style.backgroundPosition = 'center';
            document.body.style.backgroundAttachment = 'fixed';
            };
            
        }, []);


    return (
        <div>
        <div className="header" >
        <h2 >Вопросы и контакты</h2>
        </div>
             <div>
        <Accordion/>
        </div>
        </div>
    )
}

export default Help;