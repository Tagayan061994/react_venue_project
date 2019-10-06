<<<<<<< HEAD
import React from 'react';
import Carrousel from './Carrousel.jsx';
import TimeUntil from './TimeUntil.jsx';


const Featured = () => {
    return (
         <div style={{position:'relative'}}>

             <Carrousel/>
            
            <div className="artist_name">
                <div className="wrapper">
                    Ariana Grande
                </div>

            </div>

            <TimeUntil/>

         </div>
    );
};

=======
import React from 'react';
import Carrousel from './Carrousel';


const Featured = () => {

    return(
       <div style={{position:'relative'}}>
            
            <Carrousel/>

            <div className="artist_name">
                <div className="wrapper">
                    Arianna Grande
                </div>
            </div>
       </div>
    );
}

>>>>>>> fd1d944e851517e1cfa52a5436f2d143b58c6821
export default Featured;