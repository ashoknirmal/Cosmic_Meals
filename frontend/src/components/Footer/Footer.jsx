import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
import { BsInstagram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { MdPhoneIphone } from "react-icons/md";
import { IoIosMail } from "react-icons/io";

const Footer = () => {
  const handleWhatsappClick = () => {
    window.open('https://wa.me/916383297756', '_blank');
  }
  const handleGithubClick=()=>{
    window.open('https://github.com/ashoknirmal','_blank');
  }
  const handleLinkedinClick=()=>{
    window.open('https://www.linkedin.com/in/ashoknirmal-p-s-949566259/','_blank');
  }

  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>dummy footer content provides a clear and concise layout that is typical for eDelivery services.</p>
            <div className="footer-social-icons">
                <FaSquareWhatsapp size={45} onClick={handleWhatsappClick} style={{ cursor: 'pointer' }} />
                <FaGithub size={44} onClick={handleGithubClick} style={{cursor:'pointer'}} />
                <FaLinkedin size={44} onClick={handleLinkedinClick} style={{cursor:'pointer'}} />
                <BsInstagram size={44} />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li><a href='#explore-menu'>Home</a></li>
                <li><a>About Us</a></li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li><MdPhoneIphone/><a href="tel:6383297756">+916383227756</a></li>
                <li><IoIosMail /><a href='mailto:ashoknirmal2004@gmail.com'>ashoknirmal2004@gmail.com</a></li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        copyright 2024 @ eDelivery.com -All Right Reserved.
      </p>
    </div>
  )
}

export default Footer














// import React from 'react'
// import './Footer.css'
// import { assets } from '../../assets/assets'
// import { BsInstagram } from "react-icons/bs";
// import { FaLinkedin } from "react-icons/fa";
// import { FaGithub } from "react-icons/fa6";
// import { FaSquareWhatsapp } from "react-icons/fa6";

// const Footer = () => {
//   return (
//     <div className='footer' id='footer'>
//       <div className="footer-content">
//         <div className="footer-content-left">
//             <img src={assets.logo} alt="" />
//             <p>dummy footer content provides a clear and concise layout that is typical for eDelivery services.</p>
//             <div className="footer-social-icons">
//                 {/* <img src={assets.facebook_icon} alt="" /> */}
//                 {/* <img src={assets.twitter_icon} alt="" /> */}
//                 {/* <img src={assets.linkedin_icon} alt="" /> */}
//                 <FaSquareWhatsapp size={45} href='whatsapp://send?phone=6383297756'/>
//                 <FaGithub size={44}/>
//                 <FaLinkedin size={44}/>
//                 <BsInstagram size={44} />
//             </div>
//         </div>
//         <div className="footer-content-center">
//             <h2>COMPANY</h2>
//             <ul>
//                 <li>Home</li>
//                 <li>About Us</li>
//                 <li>Delivery</li>
//                 <li>Privacy Policy</li>
//             </ul>
//         </div>
//         <div className="footer-content-right">
//             <h2>GET IN TOUCH</h2>
//             <ul>
//                 <li>+916383227756</li>
//                 <li>ashok2004@gmail.com</li>
//             </ul>
//         </div>
//       </div>
//       <hr />
//       <p className="footer-copyright">
//         copyright 2024 @ eDelivery.com -All Right Reserved.
//       </p>
//     </div>
//   )
// }

// export default Footer
