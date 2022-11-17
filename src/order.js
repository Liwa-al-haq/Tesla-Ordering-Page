import React from 'react'
import './order.css'
// import Teslalogo from '../assets/teslaLogoSmall.svg'
import { useState } from "react";
import images from "./images";
import ImageSlider from "./ImageSlider";

const month = ["January","Feb","March","April","May","June","July","August","September","October","November","Dec"];
const month1 = ["January","Feb","March","April","May","June","July","August","September","October","November","December","January","Feb","March","April","May","June","July","August","September","October","November","December"];
const d = new Date();
let name1 = month[d.getMonth()+1];
let name2=month1[d.getMonth()+3];

const inputHandler = (e) => {
    const { value, maxLength } = e.target;
    if (String(value).length >= maxLength) {
      e.preventDefault();
      return;
    }
  };

let add=true;
// function handleChange()
// {
//     if(add===true)
//      add=false;
//     else
//     add=true;
// }



const Order = () => {
    let [changeText, setChangeText] = useState(true);
    const handleChange = () => {
        return setChangeText(!changeText);
    };
    let [changeText1, setChangeText1] = useState(true);
        const handleChange1 = () => {
      return setChangeText1(!changeText1);
    };
    return(
        <div className='order'>
            <div className='header_logo'>
            <a href="home.html" className="logo">
            <svg className="tds-icon tds-icon-logo-wordmark tds-site-logo-icon" viewBox="0 0 342 35" xmlns="http://www.w3.org/2000/svg"><path d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zM308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7z" fill="currentColor"></path></svg>
            </a>
            {/* <ImageSlider images={images}/> */}
            <img className="image" id= "image" alt ='' src="https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MT322,$PPSW,$W41B,$IBB1&view=STUD_FRONT34&model=m3&size=1920&bkba_opt=1&crop=1300,500,300,300&version=v0120-33320d20d202210200636" style={{height:"400px",width:"1100px",position: "fixed",marginLeft:"-100px"}}/>
            <div style={{marginLeft:"1100px",width:"500px",position:'fixed',backgroundColor:"white",marginTop:"-45px"}}>
                <p>ssds</p>
             <p style={{marginLeft:"310px",marginTop:"2px",fontSize:"20px",textDecoration:"none",position:"fixed",marginTop:"-10px"}}>US</p>
            <svg class="tds-icon tds-icon-globe" style={{height:"30px",marginLeft:"280px",marginTop:"-10px",position:"sticky"}}viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-.5 5.477a9.475 9.475 0 0 1-3.032-.66c.732-1.763 1.816-2.99 3.032-3.258v3.918zm0 1V11.5H7.514c.044-1.349.262-2.622.613-3.742 1.068.424 2.206.664 3.373.719zm0 4.023v3.023a10.475 10.475 0 0 0-3.373.719 14.132 14.132 0 0 1-.613-3.742H11.5zm0 4.023v3.918c-1.216-.268-2.3-1.495-3.032-3.258a9.475 9.475 0 0 1 3.032-.66zm1 0a9.475 9.475 0 0 1 3.032.66c-.732 1.763-1.816 2.99-3.032 3.258v-3.918zm0-1V12.5h3.986a14.132 14.132 0 0 1-.613 3.742 10.475 10.475 0 0 0-3.373-.719zm0-4.023V8.476a10.47 10.47 0 0 0 3.374-.714c.35 1.119.568 2.39.612 3.738H12.5zm0-4.024V3.56c1.217.268 2.301 1.497 3.034 3.262-.96.384-1.983.6-3.034.655zm2.582-3.389a8.5 8.5 0 0 1 2.544 1.558 9.47 9.47 0 0 1-1.168.74c-.377-.9-.84-1.681-1.376-2.298zM7.544 6.382a9.47 9.47 0 0 1-1.172-.734 8.499 8.499 0 0 1 2.546-1.561c-.535.616-.998 1.397-1.374 2.295zm-.353.948c-.396 1.237-.633 2.651-.677 4.17H3.525a8.453 8.453 0 0 1 2.129-5.135c.485.369 1.001.688 1.537.965zm-.677 5.17c.044 1.519.28 2.933.677 4.17-.536.277-1.052.596-1.537.965A8.453 8.453 0 0 1 3.525 12.5h2.99zm1.03 5.118c.376.898.839 1.679 1.374 2.295a8.5 8.5 0 0 1-2.546-1.56 9.465 9.465 0 0 1 1.172-.735zm8.912 0a9.38 9.38 0 0 1 1.172.734 8.5 8.5 0 0 1-2.546 1.561c.535-.616.998-1.397 1.374-2.295zm.353-.948c.396-1.237.633-2.651.677-4.17h2.989a8.453 8.453 0 0 1-2.129 5.135 10.468 10.468 0 0 0-1.537-.965zm.677-5.17c-.044-1.516-.28-2.93-.676-4.164a10.475 10.475 0 0 0 1.533-.975 8.452 8.452 0 0 1 2.132 5.139h-2.99z" fill="currentColor"></path></svg> 
            </div>
            </div>
            <svg style={{marginLeft:"30px",border:"rgb(213,212,213) solid",borderRadius:"30px",height:"30px",width:"30px",padding:"3px",paddingLeft:"10px",paddingTop:"10px",paddingRight:"4px",paddingBottom:"4px",position:"fixed",marginTop:"500px"}} className="chat" id="chat" xmlns="http://www.w3.org/2000/svg" class="tw-chat--tds-icon tw-chat--avaya-chat__bubble_icon"><path d="M19.5 4h-15A2.5 2.5 0 0 0 2 6.5v9A2.5 2.5 0 0 0 4.5 18H7v2.07a.928.928 0 0 0 1.507.725l3.22-2.576A1 1 0 0 1 12.35 18h7.15a2.5 2.5 0 0 0 2.5-2.5v-9A2.5 2.5 0 0 0 19.5 4zm1 11.5a1 1 0 0 1-1 1h-7.15a2.5 2.5 0 0 0-1.56.548L8.5 18.879V17a.5.5 0 0 0-.5-.5H4.5a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h15c.551 0 1 .449 1 1v9zM9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path></svg>
            <div>
            <h1 className='model'>Your Model 3</h1>
            <p>Model 3 Rear-Wheel Drive</p>
                <p>Pearl White Paint</p>
                <p>19’’ Sport Wheels</p>
                <p>Black and White Partial Premium Interior</p>
                <p>Autopilot</p>
                <p><u>30-Day Premium Connectivity Trial</u></p>
                <br></br>
                <h2>267 mi &nbsp;&nbsp;&nbsp;140mph &nbsp;&nbsp;5.8sec</h2>
                <p>Range (est.) &nbsp;&nbsp;&nbsp;&nbsp;Top Speed &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;0-60mph</p>
            <br></br>
            <h3>Paint</h3>
            <br></br>
            <div className='paint'>
                <img onclick=" " id ="white" src="https://digitalassets.tesla.com/image/upload/f_auto,q_auto/prod/coin/static_assets/MODEL3/UI/Paint_White.png?version=v0121-a180d830d202211100724"/>
                <img onClick=" " id ="grey"src="https://digitalassets.tesla.com/image/upload/f_auto,q_auto/prod/coin/static_assets/MODEL3/UI/Paint_MidnightSilver.png?version=v0121-a180d830d202211100724"/>
                <img onClick=" " id ="blue"src="https://digitalassets.tesla.com/image/upload/f_auto,q_auto/prod/coin/static_assets/MODEL3/UI/Paint_Blue.png?version=v0121-a180d830d202211100724"/>
                <img onClick=" " id ="black"src="https://digitalassets.tesla.com/image/upload/f_auto,q_auto/prod/coin/static_assets/MODEL3/UI/Paint_Black.png?version=v0121-a180d830d202211100724"/>
                <img onClick=" " id ="red"src="https://digitalassets.tesla.com/image/upload/f_auto,q_auto/prod/coin/static_assets/MODEL3/UI/Paint_Red.png?version=v0121-a180d830d202211100724"/>
            </div>
            </div>
            <h2 className='fixed1' style={{marginLeft:"410px",fontSize:"17px",marginTop:"150px",color:"rgb(56,60,64)",position:"fixed"}}>$49,490 Vehicle Price</h2>
            <p className='fixed2' style={{color:"rgb(56,60,64)",marginLeft:"600px",marginTop:"150px",position:"fixed"}}>|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$42,890 After potential savings</p>
            <br></br>
            <h2>Enhanced Autopilot</h2>
            <p style={{marginLeft:"1290px",fontWeight:"bold",color:"rgb(56,60,64)"}}>$6000</p>
            <ul>
                <li>Navigate on Autopilot</li>
                <li>Auto Lane Change</li>
                <li>Autopark</li>
                <li>Summon</li>
                <li>Smart Summon</li>
            </ul>
            <br></br>
            
            <button className='add1' id="add1" onClick={() => handleChange()}> {changeText ? "Add" : "Remove"}</button> 
            <button className='feature1' style={{marginLeft:"20px",paddingLeft:"10px",paddingRight:"10px",paddingTop:"2px",paddingBottom:"2px"}}>Feature Details</button><br></br>
            <br></br>
            <h2>Full Self-Driving Capability</h2>
            <p style={{marginLeft:"1310px",fontWeight:"bold",color:"rgb(56,60,64)"}}>$15000</p>
            <ul>
                <li>Navigate on Autopilot</li>
                <li>Auto Lane Change</li>
            </ul>
            <br></br>
            <button className='add2' onClick={() => handleChange1()}>{changeText1 ? "Add" : "Remove"}</button>
            <button className='feature2' style={{marginLeft:"20px",paddingLeft:"10px",paddingRight:"10px",paddingTop:"2px",paddingBottom:"2px"}}>Feature Details</button>
            <br></br><br></br>
            <h1>Order Your Model 3 </h1>
            <br></br>
            <p style={{fontWeight:"bold",marginLeft:"1210px"}}>Est. Delivery: {name1} 2022 - {name2} 2023</p>
            <br></br>
            <p>---------------------------------------</p>
            <p>Vehicle Price&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$46,990</p>
            <p>Destination fee &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$1,200</p>
            <p>Order fee &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$250</p>
            <br></br>
            <p>---------------------------------------</p>
            <p style={{fontFamily:"bold"}}>Your Model 3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$48,440</p>
            <p>Excluding taxes & other fees</p>
            <br></br>
            <h4 style={{marginLeft:"1200px",fontSize:"18px",color:"#383C40"}}>Due Today&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$250</h4>
            <p>Non-refundable Order Free</p>
            <br></br><br></br>
            <h2>Enter Account Details</h2>
            <br></br>
            <form action="" method="post" id="cusCreate" autocomplete="off">
            <label for="fname">First Name</label><br></br>
            <input type="text" className='fname' name='fname' required></input><br></br><br></br>
            <label for="fname">Last Name</label><br></br>
            <input type="text" className='lname' required></input><br></br>
            <br></br>
            <label for="email">Email Address</label><br></br>
            <input type="email" id="email" name="email" required></input><br></br><br></br>
            <p style={{fontSize:"13px"}}>We won't spam you in any way</p><br></br>
            <label for="phone">Mobile Phone Number</label><br></br>
             <input
                type="number"
                maxlength="10"
                onKeyPress={inputHandler}
                class="no-arrow"
                id="phone"
                name='phone'
                required
                />
                <br></br>
                <p style={{fontSize:"13px"}}>By entering my account details above, I agree to be contacted about Tesla products, including through automated calls or texts. This is not a condition of purchase.</p>
                <br></br><br></br>

                <h1>Card</h1>
                <label for="fname">Name on Card</label><br></br>
                <input type="text" className='fname' name='fname' required></input><br></br><br></br>
                <label for="phone">Card Number</label><br></br>
                 <input
                    type="number"
                    maxlength="16"
                    onKeyPress={inputHandler}
                    class="no-arrow"
                    id="phone"
                    name='phone'
                    required
                    />
                    <br></br><br></br>
                <label for="lang">Expiration Month</label><br></br>
      <select name="expmonth" id="expmonth"><br></br>
        <option value="01">01</option>
        <option value="02">02</option>
        <option value="03">03</option>
        <option value="04">04</option>
        <option value="05">05</option>
        <option value="06">06</option>
        <option value="07">07</option>
        <option value="08">08</option>
        <option value="09">09</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
      </select>
      <br></br>
      <br></br>
                <label for="expyear">Expiration Year</label><br></br>
      <select name="expyear" id="expyear"><br></br>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
        <option value="2024">2024</option>
        <option value="2025">2025</option>
        <option value="2026">2026</option>
        <option value="2027">2027</option>
        <option value="2028">2028</option>
        <option value="2029">2029</option>
        <option value="2030">2030</option>
        <option value="2031">2031</option>
        <option value="2032">2032</option>
        <option value="2033">2033</option>
        </select><br></br><br></br>
                <label for="cvv">CVV</label><br></br>
                 <input
                    type="number"
                    maxlength="3"
                    onKeyPress={inputHandler}
                    class="no-arrow"
                    id="cvv"
                    name='cvv'
                    required
                    />
        <br></br><br></br>

        <label for="cvv">Billing Zip Code</label><br></br>
         <input
            type="number"
            maxlength="10"
            onKeyPress={inputHandler}
            class="no-arrow"
            id="cvv"
            name='cvv'
            required
            />
<br></br><br></br>
        <h3 style={{marginLeft:"1200px"}}>Due Today&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$250</h3>
        <p>Non-refundable Order Fee</p>
        <p>By placing this order, I agree to the Model 3 Order Agreement, Terms of Use, and Privacy Notice.View additional information</p>
            <a style={{color:"blue" ,marginLeft: "1200px"}}>View additional information</a>
            <br></br><br></br>
            <button type="submit" className='submit'>Place Order</button>
            <br></br>
            </form>
            <svg style={{marginLeft:"30px",border:"black solid",borderRadius:"30px",height:"30px",width:"30px",padding:"3px",paddingLeft:"10px",paddingTop:"10px",paddingRight:"4px",paddingBottom:"4px",position:"fixed"}} className="chat" xmlns="http://www.w3.org/2000/svg" class="tw-chat--tds-icon tw-chat--avaya-chat__bubble_icon"><path d="M19.5 4h-15A2.5 2.5 0 0 0 2 6.5v9A2.5 2.5 0 0 0 4.5 18H7v2.07a.928.928 0 0 0 1.507.725l3.22-2.576A1 1 0 0 1 12.35 18h7.15a2.5 2.5 0 0 0 2.5-2.5v-9A2.5 2.5 0 0 0 19.5 4zm1 11.5a1 1 0 0 1-1 1h-7.15a2.5 2.5 0 0 0-1.56.548L8.5 18.879V17a.5.5 0 0 0-.5-.5H4.5a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h15c.551 0 1 .449 1 1v9zM9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path></svg>
            <br></br>
        </div>
    )
}



export default Order