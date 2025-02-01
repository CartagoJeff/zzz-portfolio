import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/src/ScrollTrigger'
import jepFront from './img/jep-front.jpg'
import jepSide from './img/jep-side.jpg'
import jepBack from './img/jep-back.jpg'



export default function About() {
  const bottomImg = useRef(null)
  gsap.registerPlugin(ScrollTrigger)
  useEffect(() => {
    ScrollTrigger.matchMedia({
      "(min-width: 300px)": function(){
        gsap.to('.top-img', {
          scrollTrigger: {
            trigger: '.about',
            start: 'top center',
            end: 'end -=100%',
            scrub: true,
          },
          x: 100,
        })
        gsap.to(bottomImg.current, {
          scrollTrigger: {
            trigger: '.about',
            start: 'top 40%',
            end: 'end -=100%',
            scrub: true,
          },
          y: -100,
        })
      }
    })

    ScrollTrigger.matchMedia({
      "(max-width: 768px)": function(){
          gsap.to('.white-text', 3.5,{
            width: '150%',
            stagger: {
              amount: 1.5
            },
            scrollTrigger:{
              trigger: '.about',
              start: 'top 60%',
              end: '+=90%',
              scrub: 1,
            }
          })
          
      }
    })
    ScrollTrigger.matchMedia({
      "(min-width: 768px)": function(){
          gsap.to('.white-text', 3.5,{
            width: '110%',
            stagger: {
              amount: 1.5
            },
            scrollTrigger:{
              trigger: '.about',
              start: 'top 60%',
              end: '+=90%',
              scrub: 1,
            }
          })
          
      }
    })
  })

  return (
    <div id='about' className='about'>
      <div className="about__block">
        <div className="about__text">
          <div className='about__text__row'>
            <div className="grey-text">Collaboration drives</div>
            <div className="white-text">Collaboration drives</div>
          </div>
          <div className='about__text__row'>
            <div className="grey-text">my work as a frontend developer.</div>
            <div className="white-text">my work as a frontend developer.</div>
          </div>
          <div className='about__text__row'>
            <div className="grey-text">I excel in environments</div>
            <div className="white-text">I excel in environments</div>
          </div>
          <div className='about__text__row'>
            <div className="grey-text">where ideas flow and</div>
            <div className="white-text">where ideas flow and</div>
          </div>
          <div className='about__text__row'>
            <div className="grey-text">perspectives align.</div>
            <div className="white-text">perspectives align.</div>
          </div>
        </div>
        <img className='top-img' src={jepFront}/>

        
      </div>
        <div className='about__block bottom-img'>
          <img src={jepBack} />
          <img ref={bottomImg} src={jepSide} />
        </div>
    </div>
  )
}
