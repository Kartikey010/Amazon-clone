import React from 'react'
import './Home.css';
import Product from './Product.js'
function Home() {
  return (
    <div className='Home'>
    <div className='home_container'>
        <img className='home_image'
        //  src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/march2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE_XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt='img' />
        src="https://m.media-amazon.com/images/I/71YXavU5enL._SX3000_.jpg" alt="img" />
        <div className='home_row'>
         <Product
          id="1r"
          title="Rishabh Home Decoration Elegant Clear Glass for Home Decor | Decorative Lighting | Lantern with Jute Handle (Clear, Large) (RHD-07 (2))"
          price={15.5}
          image="https://m.media-amazon.com/images/I/51fuD3e0BAL.jpg"
          rating={2}

         />
         <Product
          id="2a"
          title="ATC Enterprise Wine Decanter - 1500 ml Hand Blown Lead-Free Crystal Glass - Red Wine Carafe - Wine Gift - Wine Accessories"
          price={999}
          image="https://m.media-amazon.com/images/I/51QaedulJxL.jpg"
          rating={4}

         />
        </div>
        <div className='home_row'>
        <Product
          id="3h"
          title="Helix by TIMEX SMART 2.0 Large 1.55 inch display Full Touch Smart Watch with continuous Body Temperature Monitor, IP68(Dustproof and 3m Water resistant), HRM, Sleep and Activity Tracking, 10 Sports Modes and Up to 15 Days of Battery Life"
          price={1899}
          image="https://m.media-amazon.com/images/I/61M1GZ51WRS._UX522_.jpg"
        />
        <Product
          id="4i"
          title="IMEX SMART 2.0 Large 1.55 inch display Full Touch Smart Watch with continuous Body Temperature Monitor, IP68(Dustproof and 3m Water resistant), HRM, Sleep and Activity Tracking, 10 Sports Modes and Up to 15 Days"
          price={649}
          image="https://m.media-amazon.com/images/I/61M1GZ51WRS._UX522_.jpg"
        />
        <Product
          id="5i"
          image="https://m.media-amazon.com/images/I/61M1GZ51WRS._UX522_.jpg"
          price={456}
          title="IMEX SMART 2.0 Large 1.55 inch display Full Touch Smart Watch with continuous Body Temperature Monitor, IP68(Dustproof and 3m Water resistant), HRM, Sleep and Activity Tracking, 10 Sports Modes and Up to 15 Days"

        />
        </div>
        <div className='home_row'>
        <Product
          id="6o"
          price={14999}
          title="OnePlus 80 cm (32 inches) Y Series HD Ready LED Smart Android TV 32Y1 (Black)
OnePlus 80 cm (32 inches) Y Series HD Ready LED Smart Android TV 32Y1 (Black)"
          image="https://m.media-amazon.com/images/I/71vZypjNkPS._SX522_.jpg"
        />
        </div>
    </div>
    </div>
  )
}

export default Home