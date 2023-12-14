"use client"
import {useState} from 'react'
import Image from 'next/image'
import HappyCoco from '../../..//assets/images/happy-coco.8907ee78.webp'
import DeterminedCoco from '../../../assets/images/determined-coco.5399a2c0.webp'

export const NavHome = () =>{
    const [isHover, setIsHover] = useState<boolean>(false)
  
    const handleMouseEnter = () => {
      setIsHover(true);
  }
  
    const handleMouseLeave = () => {
      setIsHover(false);
  }
    return (
      <div className="nav-home">
          <a className="flex items-center" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <Image src={!isHover ? HappyCoco : DeterminedCoco} alt="Happy Coco Logo" width={100} height={50} />
          <p className="ml-2">Interview GPT</p>
          </a>
      </div>
      )
  }