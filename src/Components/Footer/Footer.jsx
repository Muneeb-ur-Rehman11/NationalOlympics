import React from 'react'
import Logo from './Poalogo.png'
import Navbar from '../NavBar/Navbar'

const Footer = () => {
  return (
    <>
    <footer>
        <div className="main-footer flex flex-col justify-between w-full pt-14 min-h-[80vh] bg-black ">
            <div className="top  flex justify-between items-center px-10 py-5">
                <div className="left w-52 ">
                    <img className='w-full h-full' src={Logo} alt="" />
                </div>
                <div className="right">
                    <h1 className='text-5xl text-white hover:text-sky-400'>34th National Games 2023 Quetta Pakistan</h1>
                </div>
            </div>
            <div className="mid px-10">
                <a className='text-white text-lg' href="">Tel: +123456890</a>
                <p className='text-white text-lg text-center mt-5'>Sport in Pakistan is a significant part of Pakistani culture. Cricket is the most popular sport in Pakistan.[1] Football has also gained popularity in recent years, and is the second most popular sport in the country.[2][3] Field hockey is the national sport, and was popular for several decades, with some of Pakistan's greatest sporting accomplishments having taken place in this sport, along with squash.[4] Polo and traditional sports like kabaddi and other well-known games are also played.</p>
            </div>
            <div className="bottom-nav">
                <Navbar className='bg-white'/>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer