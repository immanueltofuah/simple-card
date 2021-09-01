import '../App.css';
import Title from './Title'
import Description from './Description';
import Image from './Image';

function SimpleCard() {
    return (
     <>
        <div className="container">
         <div className="tit"> 
            <Title title='Heading'/>
         </div>
        
        
        <div className="des"> 
            <Description text="Description"/>
         </div>
       
        <div className="img"> 
            <Image image="../image/logo.svg" />
         </div>

     </div>

     </>
  
  
     
    );
  }
  export default SimpleCard;