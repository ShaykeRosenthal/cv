import logo from './logo.svg';
import './App.css';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { useRef, useState, useEffect } from 'react'
import { useScrollData } from "scroll-data-hook";
import { useSpring, animated } from 'react-spring'
// import GEAR1 from '../src/assets/gear1.png'
import GEAR1 from '../src/assets/gg1.png'
import GEAR2 from '../src/assets/gg2.png'
import GEAR3 from '../src/assets/gg3.png'
import GEAR_BAR from '../src/assets/ggbar.png'
import SideBar from './cmps/SideBar/SideBar';
import BRASS_WEIGHT from '../src/assets/brassWeight.png'
import FORCES from '../src/assets/LDR.png'
import GITHUB_IMG from '../src/assets/github2.png'
// import { useEffect } from 'react/cjs/react.production.min';
import { useScrollDirection } from 'react-use-scroll-direction'
function App() {
  const url = (name, wrap = false) =>
    `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`
  const ref1 = useRef()
  const ref2 = useRef()
  const ref3 = useRef()
  const cardContRef = useRef()
  const {
    scrolling,
    time,
    speed,
    direction,
    position,
    relativeDistance,
    totalDistance
  } = useScrollData({})
  const [cardNum, setCardNum] = useState(0)
  const [scrollDirection, setScrollDirection] = useState(String)
  const { isScrollingUp, isScrollingDown } = useScrollDirection()
  let BarWidth = (window.innerWidth <= 900) ? 130 : 0.1 * window.innerWidth;
  let weightStartHeight = (50 + (BarWidth / 2))
  let weightStringLength = 1 * (window.outerHeight - weightStartHeight)
  let blah = 'Fullstack Developer < / >'
  let card1 = <div className={'card1'}>
    <span className={'card1-bold'} style={{ fontWeight: '700' }}>
      Hello, I'm Shay.
    </span>
    <span className={'card1-bold'}>
      {blah},
    </span>
    <span className={'card1-bold'}>
      Mechanical Engineer ⚙️,
    </span>
    <span className={'card1-bold'}>
      & Physics Teacher 👨‍🏫.
    </span>
    <span className={'content'}>
      I’m excited about learning,
    </span>
    <span className={'content'}>
      building things and sharing my passions through teaching.
    </span>
  </div>
  let card2 = <div className={'card1'}>
    <span className={'card1-bold'} style={{ textDecoration: 'underline' }}>
      Fullstack Projects
    </span>
    <span className={'content'}>
      here are a few projects I've made with React.js and MongoDB.
    </span>
    <ul>
      <li>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <a href="http://kaloot.herokuapp.com/">
            <span style={{ fontWeight: 600 }}>KALOOT!</span>
          </a>
          <span>kahoot-like app that allows its users to create, play and share questionnaires.</span>
        </div>
      </li>
      <li>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <a href="http://turtle-house.herokuapp.com/">
            <span style={{ fontWeight: 600 }}>TURTLE-HOUSE</span>
          </a>
          <span>An Airbnb-like app that connects renters with apartment owners.</span>
        </div>
      </li>
    </ul>
  </div>
  let card3 = <div className={'card3'} style={(window.innerWidth >= 800) ? { height: `${0.5 * 0.7 * window.innerWidth}px` } : { height: 'auto' }}>
    <span className={'card1-bold'} style={{ textDecoration: 'underline', alignSelf: 'center' }}>
      Let's Join Forces!
    </span>
    <div className={'contact-details-container'}>
      {(window.innerWidth >= 800) && <p style={{ alignSelf: 'center', maxWidth: '420px' }}>
        If you’re looking to hire a highly motivated Fullstack Developer,<br />
        who is a continuous learner with an analytical mind and an ability to think outside the box to join your company,<br /><span style={{ fontWeight: 600 }}>LET'S JOIN FORCES!</span>
      </p>}
      {(window.innerWidth < 800) && <p style={{ alignSelf: 'center', maxWidth: '420px' }}>
        If you’re looking to hire a highly motivated Fullstack Developer,<br />
        who is a continuous learner with an analytical mind and an ability to think outside the box to join your company, <span style={{ fontWeight: 600 }}>LET'S JOIN FORCES!</span>
      </p>}
      <ul className={'card3-contact-details'} style={{ alignSelf: 'center', padding: '0' }}>
        <li>phone:+972-526-307-715</li>
        <li>mail: shayke.rosenthal@gmail.com</li>
        <li>
          {/* <img src={GITHUB_IMG} style={{ width: '20px' }}></img> */}
          <span>Github: </span>
          <a href="https://gitHub.com/ShaykeRosenthal">
            <span>ShaykeRosenthal</span>
          </a>
        </li>
      </ul>
      <img src={FORCES} className={'card3-background'}></img>
    </div>
  </div>
  function showCard() {
    switch (cardNum) {
      case 0:
        return '';
      case 1:
        return card1;
      case 2:
        return card2;
      case 3:
        return card3;
      default:
        return 'nothing here...';
    }
  }
  function vhToPixels(vh) {
    return Math.round(window.innerHeight / (100 / vh));
  }
  useEffect(() => {
    isScrollingDown && setScrollDirection('down')
    isScrollingUp && setScrollDirection('up')
  }, [isScrollingDown, isScrollingUp])
  useEffect(() => {

    console.log('position.y is: ', position.y)
    setScrollDirection(direction.y)
    console.log('window.scrollY is: ', window.scrollY)
    // window.addEventListener('wheel', funkyFunc)
    return () => {
      // window.removeEventListener('wheel', funkyFunc)
    }
  }, [position.y])

  useEffect(() => {
    document.querySelector('body').style.height = `${2 * weightStringLength}px`
    document.querySelector('body').style.position = 'relative'
    document.querySelector('body').style.backgroundColor = 'black'
    document.querySelector('body').style.overflowX = 'hidden'
    document.querySelector('body').style.overflowY = 'scroll'
  }, [])
  useEffect(() => {
    console.log('card number is: ', cardNum)
    if (cardNum !== 0) {
      cardContRef.current.style.zIndex = '2'
    }
  }, [cardNum])
  return (
    <div id={'mech-cont'} style={{ position: "relative", backgroundColor: "black" }}>
      <animated.div className={'instructions'}>
        <span>SCROLL AND CLICK THE WEIGHTS</span>
      </animated.div>
      <div className={'cards-container'} ref={cardContRef} style={window.innerWidth >= 800 ? {
        left: `0px`,
        width: `calc(100% - ${3.1 * BarWidth}px)`
      } : {
        width: '100vw',
        zIndex: '0'
      }}>
        <div className={(cardNum === 1) ? 'card' : 'card-none'} style={(window.innerWidth >= 800) ? {
          top: '50vh',
          opacity: '1',
          left: `0px`,
          width: `calc(100% - ${3.1 * BarWidth}px)`
        } : {}}>
          {showCard()}
          <span className={'close-btn'} style={(window.innerWidth >= 800) ? {
            left: `calc(100% - ${3.1 * BarWidth}px - 5px)`,
            top: `50vh`
          } : {}} onClick={() => {
            setCardNum(0);
            cardContRef.current.style.zIndex = '0'
          }}>X</span>
        </div>
        <div className={(cardNum === 2) ? 'card' : 'card-none'} style={(window.innerWidth >= 800) ? {
          top: '50vh',
          opacity: '1',
          left: `0px`,
          width: `calc(100% - ${3.1 * BarWidth}px)`
        } : {}}>
          {showCard()}
          <span className={'close-btn'} style={(window.innerWidth >= 800) ? {
            left: `calc(100% - ${3.1 * BarWidth}px - 5px)`,
            top: `50vh`
          } : {}} onClick={() => {
            setCardNum(0);
            cardContRef.current.style.zIndex = '0'
          }}>X</span>
        </div>
        <div className={(cardNum === 3) ? 'card-contact' : 'card-none'} style={(window.innerWidth >= 800) ? {
          top: '15vh',
          opacity: '1',
          left: `0px`,
          width: `calc(100% - ${3.1 * BarWidth}px)`
        } : {}}>
          {showCard()}
          <span className={'close-btn-2-card3'} style={(window.innerWidth >= 800) ? {
            left: `calc(100% - ${3.1 * BarWidth}px - 5px)`,
            top: `16vh`
          } : {}} onClick={() => {
            setCardNum(0);
            cardContRef.current.style.zIndex = '0'
          }}>X</span>
        </div>
      </div>
      <SideBar elWidth={BarWidth} numOfElements={Math.ceil(1 + 2 * weightStringLength / BarWidth)} />
      <img src={GEAR3} className={'gear1'} style={{ width: `${1.1 * BarWidth}px`, left: `calc(100% - ${0.185 * BarWidth}px - ${BarWidth}px)`, transform: `rotate(${(weightStringLength - position.y <= weightStartHeight) ? 0 : -1 * Math.floor((position.y / window.innerHeight) * 360)}deg)` }} />
      <div className={'kanenet1'} style={{ width: `${1.1 * BarWidth}px`, height: `${1.1 * BarWidth}px`, backgroundColor: 'rgba(255,255,255,0.55)', borderRadius: '50%', left: `calc(100% - ${0.185 * BarWidth}px - ${BarWidth}px)`, transform: `rotate(${(weightStringLength - position.y <= weightStartHeight) ? 0 : -1 * Math.floor((position.y / window.innerHeight) * 360)}deg)` }} ></div>
      <img src={GEAR1} style={{ width: `${2 * BarWidth}px`, position: 'fixed', left: `calc(100% - ${0.185 * BarWidth}px - ${BarWidth}px - ${2 * BarWidth}px + 10px)`, top: '-10px', transform: `rotate(${(weightStringLength - position.y <= weightStartHeight) ? 0 : 0.5 * Math.floor(2 * (position.y / window.outerHeight) * 360)}deg)` }} />
      {/* <div style={{
        width: `${0.5 * BarWidth}px`, height: `${0.5 * BarWidth}px`, backgroundColor: 'saddlebrown', position: 'fixed', borderRadius: '50%',
        left: `calc(100% - ${(3.26 * BarWidth)}px + ${2 * 0.46 * BarWidth}px)`,
        top: `${0.68 * BarWidth}px`,  
        transform: `rotate(${(weightStringLength - position.y <= weightStartHeight) ? 0 : 0.5 * Math.floor(2 * (position.y / window.outerHeight) * 360)}deg)`
      }} ></div> */}

      <div className={'string'} id={'string-1'} style={{
        width: '3px',
        position: 'fixed',
        left: `calc(100% - ${0.185 * BarWidth}px - ${1.2 * BarWidth}px + 28px)`,
        top: `115px`,
        height: `${(weightStringLength - position.y <= weightStartHeight) ? weightStringLength - 115 : (weightStartHeight + position.y) - 115}px`
      }}></div>
      <div className={'string'} id={'string-2'} style={{
        width: '3px',
        position: 'fixed',
        left: `calc(100% - ${0.185 * BarWidth}px - ${1.2 * BarWidth}px + 28px + ${1.1 * BarWidth}px)`,
        top: `115px`,
        height: `${(weightStringLength - position.y <= weightStartHeight) ? weightStartHeight - 115 : (weightStringLength - position.y) - 115}px`
      }}></div>
      <div className={'rope'} style={{
        position: 'fixed',
        left: `calc(100% - ${(3.1 * BarWidth)}px + ${2 * 0.36 * BarWidth}px)`,
        top: `${0.65 * BarWidth + 0.5 * 0.53 * BarWidth}px`,
        width: '8px',
        height: `${(weightStringLength - position.y <= weightStartHeight) ? 2.5 * weightStartHeight - (0.65 * BarWidth + 0.5 * 0.53 * BarWidth) : 2.5 * (weightStringLength - position.y) - (0.65 * BarWidth + 0.5 * 0.53 * BarWidth)}px`,
        backgroundColor: 'white'
      }}></div>
      <div className={'brass-weight-container'} style={{
        width: `${0.3 * BarWidth}px`,
        position: 'fixed', left: `calc(100% - ${0.185 * BarWidth}px - ${1.2 * BarWidth}px)`, top: `${(weightStringLength - position.y <= weightStartHeight) ? weightStringLength : (weightStartHeight + position.y)}px`
      }} onClick={() => { setCardNum(1); }}>
        <div className={'pook'}>
          <img src={BRASS_WEIGHT} className={'brass-weight-img'} ref={ref1} />
          <span className={'brass-weight-label'}>#1</span>
        </div>
      </div>
      <div className={'brass-weight-container'} ref={ref2}
        style={{ width: `${0.3 * BarWidth}px`, position: 'fixed', right: '0px', top: `${(weightStringLength - position.y <= weightStartHeight) ? weightStartHeight : (weightStringLength - position.y)}px` }}
        onClick={() => { setCardNum(2); }} >
        <div className={'pook'}>
          <img src={BRASS_WEIGHT} className={'brass-weight-img'} />
          <span className={'brass-weight-label'} >#2</span>
        </div>
      </div>
      <div className={'brass-weight-container'}
        ref={ref3}
        style={{
          width: `${0.3 * BarWidth}px`, position: 'fixed',
          left: `calc(100% - ${(3.1 * BarWidth)}px + ${2 * 0.28 * BarWidth}px)`,
          top: `${(weightStringLength - position.y <= weightStartHeight) ? 2.5 * weightStartHeight : 2.5 * (weightStringLength - position.y)}px`
        }}
        onClick={() => { setCardNum(3); }}>
        <div className={'pook'}>
          <img src={BRASS_WEIGHT} className={'brass-weight-img'} />
          <span className={'brass-weight-label'} >#3</span>
        </div>

      </div>
    </div >
  );
}

export default App;