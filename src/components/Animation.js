import React from 'react'
import classes from './Animation.module.css'
import fighter from '../images/3.png'
import useWebApnimation from '@wellyshen/use-web-animations'

import { keyHandler, KEYPRESS } from 'react-key-handler';
const Animations = () => {

    const {ref:figure, getAnimation } = useWebApnimation({
            keyframes:[
                {transform:'translateX(0)'},
                {transform:'translateX(-100%)'},
            ],
            timing:{
                duration:800,       
                easing:'steps(6,end)',
                playbackRate: 1,
                iterations:Infinity
                
            }
    })
   
    const play = () => {
        getAnimation().play();
      };
    
      const pause = () => {
        figure.current.style.bottom = '5em'
        getAnimation().pause();
      };
    
      const reverse = () => {
        getAnimation().reverse();
      };
    
      const cancel = () => {
        getAnimation().cancel();
      };
    
      const finish = () => {
        getAnimation().finish();
      };
    
    const stay = ()=>{

        figure.current.style.bottom = '5em'
      
    }



    const jump = ()=>{

        figure.current.style.bottom = '25em'
        const stay = ()=>{

            figure.current.style.bottom = '5em'
          
        }
        setTimeout(()=>{
            stay()
        },500)
    }
    const run = ()=>{

        figure.current.style.bottom = '45em'
      
    }
    const punch = ()=>{

        figure.current.style.bottom = '65em'
        const stay = ()=>{

            figure.current.style.bottom = '5em'
          
        }
        setTimeout(()=>{
            stay()
        },500)
    }

   

    return (
        <div >
            <div className={classes.box}>
              <div><img ref={figure} className={classes.fig} src={fighter} alt={'figher'}/></div>  
            </div>     
            <div className={classes.buttons}>
                <button  onClick={()=>stay()} >STAY</button>
                <button onClick={()=>jump()}>JUMP</button>
                <button onClick={()=>run()}>RUN</button>
                <button onClick={()=>punch()}>PUNCH`</button>
           </div>
        </div>
    )
}

export default Animations
