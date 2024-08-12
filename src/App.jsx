import { useState, useEffect, useRef } from 'react'
import './App.css'
import { FaBars, FaSearch, FaArrowRight, FaRegEnvelope, FaRegFlag, FaMapMarkedAlt } from "react-icons/fa"
import { TbPhoto } from "react-icons/tb";
import SideNav from './sideNav'
import { useSpring, animated } from 'react-spring'

function App() {

  const Number = ({ n }) => {
    const { number } = useSpring({
      from: {number: 0},
      number: n,
      delay: 200,
      config: { mass: 1, tension: 20, friction: 10 }
    });
    return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
  }

  const list = [
    "MEET THE TEAM",
    "SEARCH FOR HOMES",
    "OUR COMMUNITIES",
    "HOME EVALUATION",
    "SERVICES",
    "HOMES ACROSS AMERICA",
    "TESTIMONIALS",
    "CONTACT US"
  ]

  const [scrollData, setScrollData] = useState({
    y:0,
    lastY: 0
  })

  const [showNav, setShowNav] = useState('')
  const [showSideNav, setShowSideNav] = useState(false);
  const [searchBar, setSearchBar] = useState('searchBar');

  const [firstCount, setFirstCount] = useState(0);
  const timerIdRef = useRef(null);

  const onLoad = () => {
    timerIdRef.current = setInterval(() => {
      setFirstCount(firstCount + 1);
    }, 1000);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollData(prevState => {
        return {
          y: window.scrollY,
          lastY: prevState.y
        }
      })
    }
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    console.log(scrollData)
    

    if(scrollData.y > scrollData.lastY && scrollData.y > 200) {
      setShowNav('navBar hideNav');
      setSearchBar('searchBar')
    } 
    else if(scrollData.y > 200) {
      setShowNav('otherNavBar');
      setSearchBar('otherSearchBar')
    }
    else {
      setShowNav('navBar');
    }
  }, [scrollData])

  return (
    <>
      <div>
        <SideNav showSideNav={showSideNav} setShowSideNav={setShowSideNav}/>
        <nav className={showNav}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            1
          </div>
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'space-between'}}>
            {list.map((text, i) => (
              <div className='navBarText' onClick={() => console.log("I am Clicked")}>
                {text}
              </div>
            ))}
          </div>
          <div onClick={() => setShowSideNav(true)} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer'}}>
            <FaBars size={30}/>
          </div>
        </nav>

        <div className='mainDiv'>
          <div className='homeHeader'>
            <h1>
              Services
            </h1>
          </div>  
          
          <div className={searchBar}>
            <div style={{ display: 'flex', flexDirection: 'row', columnGap: '10px', justifyContent: 'center', alignItems: 'center' }}>
              <div style={{ color: 'white' }}>
                <FaSearch size={30}/>
              </div>
              <div>
                <input type="text" placeholder='Search by Address or Area' style={{ width: '30vw', height: '2rem', border: 'none', backgroundColor: '#474747', fontSize: '18px', color: 'white' }}/>
              </div>
            </div>
            <div className="searchBarLabel" style={{ cursor: 'pointer', columnGap: '20px' , display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold', color: 'white' }}>
              <div>
                BOOK AN APPOINTMENT
              </div>
              <div>
                <FaArrowRight size={30}/>
              </div>
            </div>
          </div>

          <div className='secondSection'>
            <div style={{ fontSize: '3.5rem'}}>
              Comprehensive Marketing Plan
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', columnGap: '200px' }}>
              <div className='secondSectionLogo'>
                <div>
                  <FaRegEnvelope size={100}/>
                </div>
                <div style={{fontSize: '3rem'}}>
                  Responsive
                </div>
                <div className='secondSectionText'>
                  I am always available via phone, text, or email.
                </div>
              </div>
              <div className='secondSectionLogo'>
                <div>
                  <FaRegFlag size={100}/>
                </div>
                <div style={{fontSize: '3rem'}}>
                  Syndication
                </div>
                <div className='secondSectionText'>
                  I market your property locally, nationally, and internationally.
                </div>
              </div>
            </div>
            <div className='secondSectionPhoto'>
              
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'row', columnGap: '200px', justifyContent: 'center', alignItems: 'center', padding: '80px' }}>
            <div className='secondSectionLogo'>
              <div>
                <FaMapMarkedAlt size={100}/>
              </div>
              <div style={{fontSize: '3rem'}}>
                Virtual Tour
              </div>
              <div className='secondSectionText'>
                Let's make your home stand out with a high quality virtual tour.
              </div>
            </div>
            <div className='secondSectionLogo'>
              <div>
                <TbPhoto size={100}/>
              </div>
              <div style={{fontSize: '3rem'}}>
                Photography
              </div>
              <div className='secondSectionText'>
                Beautiful, high-end photography is a central part of our marketing plan for your property.
              </div>
            </div>
          </div>

          <div className="theSellingProcess">
            <div className="theSellingProcessTitle">
              <h1 style={{ color: 'white' }}>
                The Selling Process
              </h1>
            </div>
            <div className="theSellingProcessGrid">
              <div className="sampleItem">
                <div className='sampleItemNumber'>
                  <Number n={1}/>
                </div>
                <div className='sampleItemTitle'> 
                  INITIAL CONSULTATION & PLANNING
                </div>
              </div>
              <div className="sampleItem">
                <div className='sampleItemNumber'>
                  <Number n={2}/>
                </div>
                <div className='sampleItemTitle'>
                  DEVISE & EXECUTE MARKETING PLAN
                </div>
              </div>
              <div className="sampleItem">
                <div className='sampleItemNumber'>
                  <Number n={3}/>
                </div>
                <div className='sampleItemTitle'>
                  REVIEW OFFERS & REACH <br/>AGREEMENT WITH BUYER
                </div>
              </div>
              <div className="sampleItem">
                <div className='sampleItemNumber'>
                  <Number n={4}/>
                </div>
                <div className='sampleItemTitle'>
                  COMPLETE TRANSACTION PROCESS
                </div>
              </div>
              <div className="sampleItem">
                <div className='sampleItemNumber'>
                  <Number n={5}/>
                </div>
                <div className='sampleItemTitle'>
                  AFTER - SALE SERVICE
                </div>
              </div>
            </div>
          </div>

          <div className="theBuyingProcess">
            <div className='theBuyingProcessTitle'>
              <h1 style={{ color: 'white' }}>
                The Buying Process
              </h1>
            </div>
            <div className='theBuyingProcessGrid'>
              <div className="sampleItem">
                <div className='sampleItemNumber'>
                  <Number n={1}/>
                </div>
                <div className='sampleItemTitle'> 
                  INITIAL CONSULTATION & PLANNING
                </div>
              </div>
              <div className="sampleItem">
                <div className='sampleItemNumber'>
                  <Number n={2}/>
                </div>
                <div className='sampleItemTitle'> 
                  SEARCH FOR A HOME & GET PRE-APPROVED
                </div>
              </div>
              <div className="sampleItem">
                <div className='sampleItemNumber'>
                  <Number n={3}/>
                </div>
                <div className='sampleItemTitle'> 
                  SUBMIT AN OFFER
                </div>
              </div>
              <div className="sampleItem">
                <div className='sampleItemNumber'>
                  <Number n={4}/>
                </div>
                <div className='sampleItemTitle'> 
                  COMPLETE SETTLEMENT PROCES
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
