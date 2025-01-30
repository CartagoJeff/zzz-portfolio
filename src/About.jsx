import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/src/ScrollTrigger'


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
        <img className='top-img' src="https://scontent.fmnl13-4.fna.fbcdn.net/v/t39.30808-6/448256578_2093181031048647_3530053220970700205_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=G6ZN7VUWcVYQ7kNvgFBOLPF&_nc_zt=23&_nc_ht=scontent.fmnl13-4.fna&_nc_gid=AbaisstTqVZ8AnYuc80IOoS&oh=00_AYDF1Zc4NSwDfVDq6_AEEAm4L8eE3RL4YsTQCdkikIcC5A&oe=679BCF60" alt="#" />

        
      </div>
        <div className='about__block bottom-img'>
          <img src="https://scontent.fmnl13-4.fna.fbcdn.net/v/t39.30808-6/441904772_2093174601049290_3766476344922191662_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=107&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=yK6VWYxM05cQ7kNvgGCU-EB&_nc_zt=23&_nc_ht=scontent.fmnl13-4.fna&_nc_gid=AYJFPZvk0VevdHkfyekCE7N&oh=00_AYBFtECNvuMBvhQcfp6aoOVikVxbi-fIMv1C22_5fp62CA&oe=679BCDD9" alt="#" />
          <img ref={bottomImg} src="https://scontent.fmnl13-2.fna.fbcdn.net/v/t39.30808-6/402608009_1963146037385481_7599734517801306514_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=RIgd_lsexQAQ7kNvgGUyLiO&_nc_zt=23&_nc_ht=scontent.fmnl13-2.fna&_nc_gid=A9zOKRAJAX-CZ8wogpg92GR&oh=00_AYAUpQN2K1hGi_T_R2fRTYYF6CIRoMfn99q8J1CA3d2LiQ&oe=679BDADD" alt="#" />
        </div>
        {/* <div className='about__block bottom-img'>
          <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="#" />
          <img ref={bottomImg} src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="#" />
        </div> */}
    </div>
  )
}
