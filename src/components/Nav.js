import React,{useState,useEffect} from 'react';
import './Nav.css';

function Nav() {
    const [show,setShow] = useState(false)

    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY>500){
                setShow(true)
            }
            else{
                setShow(false)
            }
        })
    },[])

    console.log(show);
  return (
    <div className={`nav ${show && "nav_black"}`} >
        <img 
        style={{width:'150px'}}
        src='https://farm6.staticflickr.com/5821/20639706793_8c038faa4a_o.png'
        alt='netflix logo'
        />
    </div>
  )
}

export default Nav