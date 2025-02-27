import React, {useEffect} from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/src/ScrollTrigger'
import { updateStorageItem } from './SideBar'


export default function Footer() {
  gsap.registerPlugin(ScrollTrigger)
  useEffect(() => {
    ScrollTrigger.matchMedia({
      "(min-width: 768px)": function(){
        gsap.to('.white-text-two', 2.5,{
          width: '110%',
          stagger: {
            amount: .8
          },
          scrollTrigger:{
            trigger: '.footer',
            start: 'top 60%',
            end: '+=600',
            scrub: 1,
          },
        })
      }
    })
    ScrollTrigger.matchMedia({
      "(max-width: 768px)": function(){
        gsap.to('.white-text-two', 2.5,{
          width: '110%',
          stagger: {
            amount: .8
          },
          scrollTrigger:{
            trigger: '.footer',
            start: 'top 70%',
            end: '+=200',
            scrub: 1,
          },
        })
      }
    })
      
  })

  return (
    <div className='footer'>
        <div className="footer__block">
            <div className="footer__text">
                <div className='footer__text__row'>
                    <div className="grey-text">LET'S COOK SOMETHING</div>
                    <div className="white-text-two">LET'S COOK SOMETHING</div>
                </div>
                <div className='footer__text__row'>
                    <div className="grey-text">AWESOME TOGETHER</div>
                    <div className="white-text-two">AWESOME TOGETHER</div>
                </div>
                <p>Your ideas as ingredients, my skills as the recipe to bring them to life.</p>
            </div>
            <div>
                <div className="circul"><a href="#"><img src="https://assets-global.website-files.com/65455474e0ea54684cf7da15/6546a1aaba58cdd4e0ee5738_Red%20Star.svg" alt="#" /></a></div>
            </div>
        </div>
        <div id='contact' className="footer__contacts">
            <a href='mailto:jeffanthonycartago@gmail.com'>my email</a>
            <a href="tel:09959853107">09959853107</a>
            <a target='_blank' href='https://www.linkedin.com/in/jeff-anthony-cartago-4b171a17b/'>my linkedin</a>
        </div>
        <div style={{width: '110%'}} className="line"></div>
        <div className="footer__services">
            <a href="#"><p>Created by JEFF</p></a>
            <div className='footer__links'>
              {/* <div>
                <a onClick={() => updateStorageItem(0)} href="guide"><p>Style Guide</p></a>
                <a onClick={() => updateStorageItem(1)} href="help"><p>Instructions</p></a>
              </div>
              <div>
                <a onClick={() => updateStorageItem(2)} href="licensing"><p>Licensing</p></a>
                <a onClick={() => updateStorageItem(3)} href="log"><p>Change Log</p></a>
              </div> */}
            </div>
            {/* <a href="#"><p>Powered by WEBFLOW</p></a> */}
        </div>
    </div>
  )
}
