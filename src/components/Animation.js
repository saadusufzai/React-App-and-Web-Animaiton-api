import React from 'react'
import classes from './Animation.module.css'
import fighter from '../images/3.png'
import runner from '../images/run.png'
import useWebApnimation from '@wellyshen/use-web-animations'

const Animations = () => {
    const {ref:figure, getAnimation:j1 } = useWebApnimation({
            keyframes:[
                {transform:'translateX(0)'},
                {transform:'translateX(-100%)'},
            ],
            timing:{
                duration:1000,       
                easing:'steps(6,end)',
                playbackRate: 1,
            }
    })
    const {ref:run } = useWebApnimation({
            keyframes:[
                {transform:'translateX(0)'},
                {transform:'translateX(-100%)'},
            ],
            timing:{
                duration:5000,
                iterations:Infinity,
                easing:'steps(6,end)',
                playbackRate: 1,
            }
    })

    const jump = ()=>{
        

    }

    return (
        <div >
            <div className={classes.box}>
              <div><img ref={figure} className={classes.fig} src={fighter} alt={'figher'}/></div>  
            </div>     
            <div>
                <button onClick={()=>jump()}>JUMP</button>
                <button>RUN</button>
                <button>PUNCH`</button>
           </div>
        </div>
    )
}

export default Animations
