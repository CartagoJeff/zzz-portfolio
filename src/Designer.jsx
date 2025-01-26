import React, {useEffect} from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/src/ScrollTrigger'

export default function Designer() {
  gsap.registerPlugin(ScrollTrigger)
  
  useEffect(() => {
    ScrollTrigger.matchMedia({
      "(min-width: 768px)": function(){
        gsap.to('.carousel', 3.5, {
          y: 250,
          scrollTrigger: {
            trigger: '.designer__block',
            start: 'top 20%',
            scrub: true,
          },
        })
        gsap.from('.hero', .5,{
          opacity: 0,
          y: 100,
          rotateY: 180,
          color: '#63007e',
          stagger:{
            amount: .4
          }
        })

        gsap.to('.hero', 1,{
          y: 100,
          stagger: {
            amount: .6
          },
          color: '#200e26',
          scrollTrigger: {
            trigger: '.hero',
            start: 'top 15%',
            end: '+=300',
            scrub: true,
          }
        })
    }})

    ScrollTrigger.matchMedia({
      "(max-width: 768px)": function(){
        gsap.to('.carousel', 3.5, {
          y: 100,
          scrollTrigger: {
            trigger: '.designer__block',
            start: 'top 50%',
            scrub: true,
          },
        })
        gsap.from('.hero', .5,{
          opacity: 0,
          y: 50,
          rotateY: 180,
          color: '#63007e',
          stagger:{
            amount: .4
          }
        })

        gsap.to('.hero', 1,{
          y: 70,
          stagger: {
            amount: .6
          },
          color: '#200e26',
          scrollTrigger: {
            trigger: '.hero',
            start: 'top 15%',
            end: '+=300',
            scrub: true,
          }
        })
      }})
    
  }, [])

  return (
    <div className="designer">
      <div className='title'>
          <span className='hero'></span>
          <span className='hero'>#</span>
          <span className='hero'>F</span>
          <span className='hero'>R</span>
          <span className='hero'>O</span>
          <span className='hero'>N</span>
          <span className='hero'>T</span>
          <span className='hero'>E</span>
          <span className='hero'>N</span>
          <span className='hero'>D</span>
          <span className='hero'>D</span>
          <span className='hero'>E</span>
          <span className='hero'>V</span>
      </div>
      <div className="designer__block">
        <img src="https://scontent.fmnl13-4.fna.fbcdn.net/v/t39.30808-6/448256578_2093181031048647_3530053220970700205_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=G6ZN7VUWcVYQ7kNvgFBOLPF&_nc_zt=23&_nc_ht=scontent.fmnl13-4.fna&_nc_gid=AbaisstTqVZ8AnYuc80IOoS&oh=00_AYDF1Zc4NSwDfVDq6_AEEAm4L8eE3RL4YsTQCdkikIcC5A&oe=679BCF60" alt="#" />
          <div className="carousel-block">
            <div className="carousel">
              <span>Turn vision into reality</span>
              <span>Turn vision into reality</span>
            </div>
          </div>
          <p>I craft intuitive interfaces <br />that seamlessly blend <br />aesthetics with functionality,<br /> creating a perfect balance.</p>
      </div>
    </div>

  )
}
