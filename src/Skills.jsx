import React, { useEffect, useLayoutEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/src/ScrollTrigger'

export default function Skills({titlePage, elem}) {
    gsap.registerPlugin(ScrollTrigger)

    useEffect(() => {
        ScrollTrigger.matchMedia({
            "(min-width: 982px)": function(){
                gsap.to('.skills__block ', .5, {
                    y: 30,
                    height: 130,
                    opacity: 1,
                    stagger: {
                        amount: .2
                    },
                    scrollTrigger: {
                        trigger: '.skills__block',
                        scrub: true,
                        start: 'top 80%',
                        end: '+=300'
                    }
                })
            }
        })

    })

    
    const obj = {
        // 'title': 'Skills',
        'title': 'LOREM IPSUM',
        'elem': -1
    }
    
    useLayoutEffect(() => {
        const items = document.querySelectorAll('.skills__items__block')
        items.forEach((link, idx) => {
            if(idx == elem && elem !== null){
                link.style.display = 'none'
            }else{
                link.style.display = 'block'
            }
        })
    })
        

    // function mouseEnter (order) {
    //     if(document.documentElement.clientWidth > 992){
    //         const image = document.querySelectorAll('.skills__image')[order]
    //         image.classList.add('active')
    //     }
    // }


    // function mouseLeave (order){
    //     if(document.documentElement.clientWidth > 992){
    //         const image = document.querySelectorAll('.skills__image')[order]
    //         image.classList.remove('active')
    //     }
    // }

  return (
    <div id='skills' className='skills'>
        <h2 className='skills-title'>{titlePage !== undefined ? titlePage : obj['title']}</h2>
        <div className='skills__items'>
            <div>
                <a className='skills__items__block'>
                    <div  className="skills__block">
                        <div>
                            <h2></h2>
                            <h2>HTML</h2>
                        </div>
                    </div>
                    {/* <div className="skills__items__image">
                        <img className='skills__image' src="https://assets-global.website-files.com/65455474e0ea54684cf7d9cf/65455474e0ea54684cf7da2f_max-andrey-TlRQin0iwjE-unsplash-min.jpg" alt="#" />
                    </div> */}
                </a>
                <a className='skills__items__block'>
                    <div className="skills__block">
                        <div>
                            <h2></h2>
                            <h2>CSS</h2>
                        </div>
                    </div>
                    {/* <div className="skills__items__image">
                        <img className='skills__image' src="https://assets-global.website-files.com/65455474e0ea54684cf7d9cf/65455474e0ea54684cf7da30_martin-katler-rjASNUw3SDE-unsplash-min.jpg" alt="#" />
                    </div> */}
                </a>
                <a className='skills__items__block'>
                    <div className="skills__block">
                        <div>
                            <h2></h2>
                            <h2>Javascript</h2>
                        </div>
                    </div>
                    {/* <div className="skills__items__image">
                        <img className='skills__image' src="https://assets-global.website-files.com/65455474e0ea54684cf7d9cf/65455474e0ea54684cf7da31_trinity-nguyen-_yMRmwr2OY8-unsplash-min.jpg" alt="#" />
                    </div> */}
                </a>
                <div className='skills__items__block'>
                    <a className="skills__block">
                        <div>
                            <h2></h2>
                            <h2>React</h2>
                        </div>
                    </a>
                    {/* <div className="skills__items__image">
                        <img className='skills__image' src="https://assets-global.website-files.com/65455474e0ea54684cf7d9cf/65455474e0ea54684cf7da32_sarath-p-raj-p8GmCEgSmmo-unsplash-min.jpg" alt="#" />
                    </div> */}
                </div>
                <a className='skills__items__block'>
                    <div   className="skills__block">
                        <div>
                            <h2></h2>
                            <h2>WordPress</h2>
                        </div>
                    </div>
                    {/* <div className="skills__items__image">
                        <img className='skills__image' src="https://assets-global.website-files.com/65455474e0ea54684cf7d9cf/65455474e0ea54684cf7da33_oguz-yagiz-kara-OhC9aDrGsHU-unsplash-min.jpg" alt="#" />
                    </div> */}
                </a>
                <a className='skills__items__block'>
                    <div  className="skills__block">
                        <div>
                            <h2></h2>
                            <h2>Magnolia CMS</h2>
                        </div>
                    </div>
                    {/* <div className="skills__items__image">
                        <img className='skills__image' src="https://assets-global.website-files.com/65455474e0ea54684cf7d9cf/65455474e0ea54684cf7da33_oguz-yagiz-kara-OhC9aDrGsHU-unsplash-min.jpg" alt="#" />
                    </div> */}
                </a>
            </div>
            
            {/* <div className="skills__images">
            </div> */}
        </div>
    </div>
  )
}