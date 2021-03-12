import React from "react"
import logo from "../images/verdelogo.png" // Tell webpack this JS file uses this image
function HeaderLogo() {
  // Import result is the URL of your image
  return <img src={logo} alt="Al Eka Fishworld Logo" placeholder="blurred" width={60} height={60}  />

}
export default HeaderLogo
