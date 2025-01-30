import React, { useEffect, useLayoutEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/src/ScrollTrigger'

export default function Experience({titlePage, elem}) {
    gsap.registerPlugin(ScrollTrigger)

    useEffect(() => {
        ScrollTrigger.matchMedia({
            "(min-width: 982px)": function(){
                gsap.to('.exp__block ', .5, {
                    y: 30,
                    height: 130,
                    opacity: 1,
                    stagger: {
                        amount: .2
                    },
                    scrollTrigger: {
                        trigger: '.exp__block',
                        scrub: true,
                        start: 'top 80%',
                        end: '+=300'
                    }
                })
            }
        })

    })

    
    const obj = {
        // 'title': 'Experience',
        'title': 'LOREM IPSUM',
        'elem': -1
    }
    
    useLayoutEffect(() => {
        const items = document.querySelectorAll('.exp__items__block')
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
            const image = document.querySelectorAll('.exp__image')[order]
            image.classList.add('active')
        }
    }


    function mouseLeave (order){
        if(document.documentElement.clientWidth > 992){
            const image = document.querySelectorAll('.exp__image')[order]
            image.classList.remove('active')
        }
    }

  return (
    <div id='exp' className='exp'>
        <h2 className='exp-title'>{titlePage !== undefined ? titlePage : obj['title']}</h2>
        <div className='exp__items'>
            <div>
            <a  target='_blank' rel="noreferrer" className='work__items__block'>

                    <div onMouseEnter={() => mouseEnter(0)} onMouseLeave={() => mouseLeave(0)} className="exp__block">
                        <div>
                            <h2>May-Oct 2021</h2>
                            <h2>Sys Admin</h2>
                        </div>
                    </div>
                    <div className="exp__items__image">
                        <img className='exp__image' src="https://www.techopedia.com/wp-content/uploads/2023/02/dreamstime_m_67902514-1.jpg" alt="#" />
                    </div> </a>
                    <a  target='_blank' rel="noreferrer" className='work__items__block'>

                    <div onMouseEnter={() => mouseEnter(1)} onMouseLeave={() => mouseLeave(1)} className="exp__block">
                        <div>
                            <h2>Feb 2022 - Present</h2>
                            <h2>FE DEV</h2>
                        </div>
                    </div>
                    <div className="exp__items__image">
                        <img className='exp__image' src="https://static.vecteezy.com/system/resources/previews/003/416/524/large_2x/frontend-developer-illustration-concept-vector.jpg
" alt="#" />
                    </div>
                </a>

            </div>
            <div className="exp__images">
            </div>
        </div>
    </div>
  )
}