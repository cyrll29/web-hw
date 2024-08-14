import { useState, useEffect, useRef } from 'react'
import './App.css'
import { FaBars, FaSearch, FaArrowRight, FaRegEnvelope, FaRegFlag, FaMapMarkedAlt, FaCameraRetro } from "react-icons/fa"
import { TbPhoto } from "react-icons/tb";
import SideNav from './sideNav';
import { useSpring, animated } from 'react-spring';
import image_1 from './assets/image-025.jpeg';
import image_2 from './assets/image_2.jpg';
import image_3 from './assets/image_3.jpg';
import image_4 from './assets/image_4.jpg';
import image_5 from './assets/image_5.jpeg';
import image_6 from './assets/image_6.jpeg';
import image_7 from './assets/image_7.jpeg';
import image_8 from './assets/image_8.jpeg';
import image_9 from './assets/image_9.jpeg';
import image_10 from './assets/image_10.jpeg';
import image_11 from './assets/image_11.jpeg';
import image_12 from './assets/image_12.jpeg';
import image_13 from './assets/image_13.jpeg';
import image_14 from './assets/image_14.jpeg';

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

          <div className="gridSection">
            <div className="item-1">
              Decor <br/>Guidance
            </div>
            <div className="item-2">
              <img src={image_1}></img>
            </div>
            <div className="item-3">
              <img src={image_2}></img>
            </div>
            <div className="item-4">
              <p>My Staging Expertise</p>
              <ul>
                <li>Unclutter and organize your home</li>
                <li>Neatly arrange drawers and cabinets</li>
                <li>Keep pets outdoors or off the premises</li>
                <li>Play soft music</li>
              </ul>
            </div>
          </div>

          <div className="gridSection">
            <div className="item-1">
              Intentional <br/>Layout
            </div>
            <div className="item-2">
              <img src={image_3}></img>
            </div>
            <div className="item-3">
              <img src={image_4}></img>
            </div>
            <div className="item-4">
              <ul>
                <li>Unclutter and organize your home</li>
                <li>Neatly arrange drawers and cabinets</li>
                <li>Keep pets outdoors or off the premises</li>
                <li>Play soft music</li>
              </ul>
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

          <div className="realEstateSuccessSection">
            <div className="ressText">
              <div className="ressTextHeader">
                Over 33 Years of Real Estate Success
              </div>
              <div className="ressTextDescription">
                We provide every one of our clients with a level of service they won't find anywhere else. We give them what they need, 
                often before they know they need it. In real estate, almost everything can be negotiated. When you choose Hansen Partners,
                its experience is 100% negotiable and it is an experience like no other.
              </div>
            </div>
            <div className="ressPhoto">
              <img src={image_5}></img>
            </div>
          </div>

          <div className="realEstateSuccessSection">
            <div className="ressPhoto">
              <img src={image_6}></img>
            </div>
            <div className="ressText">
              <div className="ressTextHeader">
                We Want To Create An Unforgettable Experience For You...
              </div>
              <div className="ressTextDescription">
                We combine data gained from your home’s Comparative Market Analysis with local market research to create a marketing plan 
                designed to help you meet your selling goals. Your home’s carefully designed plan will include a range of online, print, and 
                other marketing tools targeted to the best-qualified pool of buyers. ​​​​​​​ Successfully marketing a home in today’s real estate 
                environment requires a firm with experience and flexibility. Hansen Partners provides both.
              </div>
            </div>
          </div>

          <div className="realEstateSuccessSectionTwo">
            <div className="ressText">
              <div className="ressTextHeader">
                The Hansen Partners Communications Tablet
              </div>

              <div className="ressTextDescription">
                We have created this as a wonderful tool so that we can communicate with you daily, provide you with updates on what is happening 
                with your home. We are available at the with a click of your tablet.
              </div>

              <div className="ressTextBenefits">
                Benefits:
                <ul>
                  <li>Review all documents and sign in the comfort of your home or anywhere.</li>
                  <li>Stay up to date on all marketing activities, review materials, photos, etc. in real time.</li>
                  <li>Meet with us face to face on our Gotomeeting.com platform to go over and discuss the events of the week.</li>
                  <li>You have your own email assigned just for you and your common space to quickly write a note, or quickly send a video 
                      message to us for fast communication using our Bomb bomb video messaging system.</li>
                </ul>
              </div>

              <div className="ressTextDescription">
                We believe that transparency and guiding you and your family through the process is key to having the best experience.  During 
                these uncertain times. It is a good feeling to know you have some one with a proven track record you can count on.  We will be 
                here to handle your needs during the Real Estate process.  We think of it before a need even arises. Because, that is just what 
                we do.  Who you work with does matter! 
              </div>
            </div>

            <div className="ressPhoto">
              <img src={image_7}></img>
            </div>
          </div>

          <hr />

          <div className='marketing-strategy'>
            <div className="item-1a">
              <div>
                <h2 style={{ fontSize: '50px' }}>We Market Your Home to The World</h2>
              </div>
              <div>
                <p>Our Online Marketing Strategy</p>
              </div>
              <div>
                <p>​​​​​​​The Bay Area remains one of the world's most sought-after regions to live in, and when looking to sell, it is vital that your home be marketed online to audiences locally, nationally, and internationally.</p>
              </div>
            </div>
            <div className="item-2a">
              <div className="item-a-header" style={{ fontWeight: 'bolder' }}>
                Local Exposure
              </div>
              <div className="item-a-text">
                Through our partnership with Nextdoor, the private online social network now used in over 80% of U.S. neighborhoods and virtually 
                all Bay Area neighborhoods, we make sure your home receives targeted local exposure. When you list your home with Hansen Partners 
                it will automatically appear on Nextdoor in your neighborhood
              </div>
            </div>
            <div className="item-3a">
              <div className="item-a-header" style={{ fontWeight: 'bolder' }}>
                National Exposure
              </div>
              <div className="item-a-text">
                We secure strategic positioning and enhancement on Realtor.com, Trulia, and Zillow, driving more consumers to your home and 
                increasing exposure. We  will receive every inquiry about your property directly.
              </div>
            </div>
            <div className="item-4a">
              <div className="item-a-header" style={{ fontWeight: 'bolder' }}>
                International Exposure
              </div>
              <div className="item-a-text">
                To expose your luxury listing to millions of potential homebuyers worldwide, we promote on prominent international real 
                estate portals, including: Wall Street Journal, LuxuryPortfolio.com, LuxuryRealEstate.com, LeadingRE.com, UniqueHomes.com, 
                China.apr.com, Caimeiju, Juwai, Country Life UK
              </div>
            </div>
          </div>

          <div className="three-logo-picture" style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'row' }}>
            <img src={image_8} alt="Logo" />
          </div>

          <div className="partner-section-one">
            <div className="partner-section-one-text">
              <div className='partner-section-one-text-logos'>
                <img src={image_9} alt="Logo" />
                <img src={image_10} alt="Logo" />
                <img src={image_11} alt="Logo" />
              </div>

              <div className="partner-section-one-actual-text">
                <strong>Leading Real Estate Companies of The World® & Luxury Portfolio International</strong> <br/><br/>
               <strong>JRockcliff</strong> is a founding member of Luxury Portfolio International®, the luxury 
               division of Leading Real Estate Companies of the World®. With more than 500 member 
               firms around the world, Our luxury listings are exposed to a vast global audience 
               and reach potential buyers and investors in over 50 countries. <br/><br/>
               <strong>Who's Who in Luxury Real Estate</strong> <br/><br/>
               Who’s Who in Luxury Real Estate is a global collection of luxury real estate brokers.
              </div>
            </div>

            <div className="partner-section-one-photo">
              <img src={image_12} alt="Photo" />
            </div>
          </div>

          <div className="partner-section-one">
            <div className="partner-section-one-photo">
              <img src={image_13} alt="Photo" />
              <div className='partner-section-one-photo-text'>
                Through our international affiliations, we have a strong presence in over 50 countries. Our luxury 
                listings are sent to prominent international real estate sites, reaching over 70 million potential 
                buyers and investors worldwide through our relationships with:
              </div>
            </div>

            <div className="partner-section-one-text">
              <div className="partner-section-one-actual-text">
                Through our international affiliations, we have a strong presence in over 50 countries. Our luxury 
                listings are sent to prominent international real estate sites, reaching over 70 million potential 
                buyers and investors worldwide through our relationships with:
              </div>

              <div className='partner-section-one-text-logos'>
                <img src={image_9} alt="Logo" />
                <img src={image_10} alt="Logo" />
                <img src={image_11} alt="Logo" />
              </div>

              <div className="partner-section-one-actual-text">
                We also have several well-positioned affiliate offices in China, providing our clients with access 
                to buyers in Hong Kong, Shanghai, and Beijing. 
              </div>
            </div>
          </div>
          
          <div className='ipad-section'>
            <div className="ipad-section-logos">
              <div className="isp-1">
                <div>
                  <FaRegEnvelope size={70}/>
                </div>
                <div style={{ fontSize: '40px'}}>
                  Responsive
                </div>
                <div className='isp-body'>
                  I am always available via phone, text, or email to answer your questions in a timely manner.
                </div>
              </div>
              <div className="isp-2">
                <div>
                <FaRegFlag size={70}/>
                </div>
                <div style={{ fontSize: '40px'}}>
                  Syndication
                </div>
                <div className='isp-body'>
                  I market your property locally, nationally, and internationally.
                </div>
              </div>
              <div className="isp-3">
                <div>
                  <FaMapMarkedAlt size={70}/>
                </div>
                <div style={{ fontSize: '40px'}}>
                  Virtual Tour
                </div>
                <div className='isp-body'>
                  Let’s make your home stand out with a high quality virtual tour.
                </div>
              </div>
              <div className="isp-4">
                <div>
                  <FaCameraRetro size={70}/>
                </div>
                <div style={{ fontSize: '40px'}}>
                  Drone Photography
                </div>
                <div className='isp-body'>
                  Beautiful photography is a central part of our marketing plan for your property.
                </div>
              </div>
            </div>
            <div className="ipad-section-photo">
              <img src={image_14} alt="Photo" />
            </div>
          </div>

          <div className="last-section">
            <div style={{ fontSize: '50px', color: 'white' }}>
              Work With Us
            </div>
            <div style={{ fontSize: '50px', color: 'white' }}>
              ________
            </div>
            <div className='last-section-text'>
              With decades of experience in luxurious Tri Valley real estate, our team is here to 
              ensure that your dreams are a reality. Let us guide you through your home buying journey, 
              contact us today!
            </div>
            <div>
              <button className='last-section-button'>
                CONTACT US
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
