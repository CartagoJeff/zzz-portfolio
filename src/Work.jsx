import React, { useEffect, useLayoutEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/src/ScrollTrigger'
import natureImage from "./img/naturesown-au.png";
import ostelinImage from "./img/ostelin-au.png";
import bisolvonImage from "./img/bisolvon-au.png";
import cenovisImage from "./img/cenovis-au.png";
import telfastImage from "./img/telfast-en-au.png";



export default function Work({titlePage, elem}) {
    gsap.registerPlugin(ScrollTrigger)

    useEffect(() => {
        ScrollTrigger.matchMedia({
            "(min-width: 982px)": function(){
                gsap.to('.work__block ', .5, {
                    y: 30,
                    height: 130,
                    opacity: 1,
                    stagger: {
                        amount: .2
                    },
                    scrollTrigger: {
                        trigger: '.work__block',
                        scrub: true,
                        start: 'top 80%',
                        end: '+=300'
                    }
                })
            }
        })

    })

    
    const obj = {
        'title': 'Works',
        // 'title': 'LOREM IPSUM',
        'elem': -1
    }
    
    useLayoutEffect(() => {
        const items = document.querySelectorAll('.work__items__block')
        items.forEach((link, idx) => {
            if(idx == elem && elem !== null){
                link.style.display = 'none'
            }else{
                link.style.display = 'block'
            }
        })
    })
        

    function mouseEnter (order) {
        if(document.documentElement.clientWidth > 992){
            const image = document.querySelectorAll('.work__image')[order]
            image.classList.add('active')
        }
    }


    function mouseLeave (order){
        if(document.documentElement.clientWidth > 992){
            const image = document.querySelectorAll('.work__image')[order]
            image.classList.remove('active')
        }
    }

  return (
    <div id='work' className='work'>
        <h2 className='work-title'>{titlePage !== undefined ? titlePage : obj['title']}</h2>
        <div className='work__items'>
            <div>
                <a href='https://www.telfast.com.au' target='_blank' rel="noreferrer" className='work__items__block'>
                    <div onMouseEnter={() => mouseEnter(0)} onMouseLeave={() => mouseLeave(0)} className="work__block">
                        <div>
                            <h2>CHC AU</h2>
                            <h2>TELFAST</h2>
                        </div>
                    </div>
                    <div className="work__items__image">
                        <img className='work__image' src={telfastImage} alt="#" />
                    </div>
                </a>
                <a href='https://www.naturesown.com.au' target='_blank' rel="noreferrer" className='work__items__block'>
                    <div onMouseEnter={() => mouseEnter(1)} onMouseLeave={() => mouseLeave(1)} className="work__block">
                        <div>
                            <h2>CHC AU</h2>
                            <h2>NATURES</h2>
                        </div>
                    </div>
                    <div className="work__items__image">
                        <img className='work__image' src={natureImage} alt="#" />
                    </div>
                </a>
                <a href='https://www.cenovis.com.au' target='_blank' rel="noreferrer" className='work__items__block'>
                    <div onMouseEnter={() => mouseEnter(2)} onMouseLeave={() => mouseLeave(2)} className="work__block">
                        <div>
                            <h2>CHC AU</h2>
                            <h2>CENOVIS</h2>
                        </div>
                    </div>
                    <div className="work__items__image">
                        <img className='work__image' src={cenovisImage} alt="#" />
                    </div>
                </a>
                {/* <div className='work__items__block'>
                    <a href='https://www.ostelin.com.au' target='_blank' rel="noreferrer"  onMouseEnter={() => mouseEnter(3)} onMouseLeave={() => mouseLeave(3)} className="work__block">
                        <div>
                            <h2>CHC AU</h2>
                            <h2>OSTELIN</h2>
                        </div>
                    </a>
                    <div className="work__items__image">
                        <img className='work__image' src={ostelinImage} alt="#" />
                    </div>
                </div> */}
                <a href='https://www.ostelin.com.au' target='_blank' rel="noreferrer" className='work__items__block'>
                    <div  onMouseEnter={() => mouseEnter(3)} onMouseLeave={() => mouseLeave(3)} className="work__block">
                        <div>
                            <h2>CHC AU</h2>
                            <h2>OSTELIN</h2>
                        </div>
                    </div>
                    <div className="work__items__image">
                        <img className='work__image' src={ostelinImage} alt="#" />
                    </div>
                </a>

                <a href='https://www.bisolvon.com.au' target='_blank' rel="noreferrer" className='work__items__block'>
                    <div  onMouseEnter={() => mouseEnter(4)} onMouseLeave={() => mouseLeave(4)} className="work__block">
                        <div>
                            <h2>CHC AU</h2>
                            <h2>BISOLVON</h2>
                        </div>
                    </div>
                    <div className="work__items__image">
                        <img className='work__image' src={bisolvonImage} alt="#" />
                    </div>
                </a>
            </div>
            <div className="work__images">
            </div>
        </div>
    </div>
  )
}