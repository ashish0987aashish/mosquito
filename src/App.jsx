import React, { useRef,useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { use } from 'react'


const App = () => {


   const [positionX, setPositionX] = useState(0)
   const [positionY, setpositionY] = useState(0)

 const mosref = useRef()

   useGSAP(()=>{
       gsap.to(mosref.current,{
           x:positionX,
           y:positionY,
           duration:.7

       })
   },{scope:'main',dependencies:[positionX,positionY]})


    const setX=()=>{
      return gsap.utils.random(-300,300,100)  
    }
   
    const   setY = ()=>{
      return gsap.utils.random(-300,300,100)
    }
    

  return (
   <main>

    <div
       onClick={()=>{
          setPositionX(setX())
          setpositionY(setY())}
       }
    
    ref={mosref} className="box">



    </div>
   </main>
  )
}

export default App