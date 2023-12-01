import { imageCarousel } from "../imageCarousel"
import style from '../css/modules/carousel.module.css';
import { useState } from "react";


export default function TheMain() {

    const [counter, setCounter] = useState(0);

    function isActive (index) {
        if(index === counter) {
            return " " + style.active 
        } else {
            return " " + style.hidden
        }
    }
    function isActiveMinus(index) {
        if(index === 0) {
            return " " + style.hidden
        }else{
            return " " + style.activeButton
        }
    }
    function isActivePlus(index) {
        if(index === imageCarousel.length - 1) {
            return " " + style.hidden
        }else{
            return " " + style.activeButton
        }
    }
    
    function increment () {

        const indexAumentato = counter + 1
        setCounter(indexAumentato)
        return indexAumentato
    }
    function decrement () {

        const indexDiminuito = counter - 1
        setCounter(indexDiminuito)
        return indexDiminuito
    }
    return (
      <>
        <main className='flex justify-center items-center gap-5'>

            <div className={isActiveMinus(counter)} onClick={decrement}>-</div>

            {
                imageCarousel.map((el) => {
                    return(
                        <>
                        <div className={isActive(el.id)}>
        
                            <img src={`/meme/${el.image}`} key={el.id} alt="mac" className=" max-w-full h-auto"/>
        
                        </div>
                        </>
                    )
                })
            }

            <div className={isActivePlus(counter)} onClick={increment}>+</div>

        </main>

      </>
    )
  }