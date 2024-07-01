import React, {useState}from 'react'
import Slider from "react-slick"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css';
import './MediaQuerry.css';
import logo from './images/imgs/image (1) 1.png'
import searchLogo from './images/imgs/Group 89.png'
import profileLogo from './images/imgs/Item → SVG.png'
import heartLogo from './images/imgs/Link → SVG.png'
import cartLogo from './images/imgs/SVG.png'
import banner1 from './images/imgs/Frame 3 1.png'
import img1 from './images/imgs/Rectangle 18.png'
import img2 from './images/imgs/sds.png'
import img3 from './images/imgs/Rectangle 20.png'
import img4 from './images/imgs/df.png'
import img5 from './images/imgs/Rectangle 36.png'
import img6 from './images/imgs/Rectangle 35.png'
import img7 from './images/imgs/box 1.png'
import img8 from './images/India Packaging/div.rating.png'
import img41 from './images/India Packaging/Frame 17.png'
import img42 from './images/India Packaging/Frame 25.png'
import img43 from './images/India Packaging/Frame 27.png'
import img44  from './images/India Packaging/image 44.png'
import img45  from './images/India Packaging/image 39.png'
import img46  from './images/India Packaging/Frame 25.png'
import reviwimg  from './images/imgs/sdssd.png'
import ftlogo1  from './images/imgs/sdfvc.png'
import ftlogo2  from './images/imgs/call.png'
import ftlogo3  from './images/imgs/mail.png'
import ftlogo4  from './images/imgs/fb.png'
import ftlogo5  from './images/imgs/Group.png'
import ftlogo6  from './images/imgs/Isolation_Mode.png'
import ftlogo7  from './images/imgs/Group 83.png'
import star  from './images/imgs/Star.png'
import linklogo  from './images/imgs/Link (1).png'
import downarrow  from './images/imgs/Icon (2).png'
import { StoreState } from './StoreContext';


function App() {

  const{productCatelog,reviews,featured,boaxes}=StoreState();
  const [activeTab, setActiveTab] = useState('Premium');
  const categorybox = productCatelog.filter((a)=>a.category === "categorybox")
  const mailerpremium = productCatelog.filter((a)=>a.category === "premiummailbox")
  const easyfold = productCatelog.filter((a)=>a.category === "easyfold")
  const PrePrinted = productCatelog.filter((a)=>a.category === "PrePrinted")
  const Eco = productCatelog.filter((a)=>a.category === "Eco")
  const protrctpackage = productCatelog.filter((a)=>a.category === "protrctpackage")
  const settings = {
    dots: false,
    infinite: true,
    speed: 900,
    slidesToShow: 4,
    slidesToScroll: 3,autoplay:true,autoplaySpeed:1500,speed:2000
  };
  const settings7 = {
    dots: false,
    infinite: true,
    speed: 900,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  // $settings7.slick({
  //   slidesToShow: 1, 
  //   slidesToScroll: 1,

  //   });
  const settings6 = {
    vertical:true,verticalSwiping:true,slidesToShow:4,autoplay:true,autoplaySpeed:2000,speed:500
  }
  const settings61 = {
    vertical:true,verticalSwiping:true,slidesToShow:4,autoplay:true,autoplaySpeed:2000,speed:1000
  }
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  function scroll(a){
    if(a==="cardboardbox"){window.scrollTo(0,2050)}
    if(a==="tapes"){window.scrollTo(0,1300)}
    if(a==="bags"){window.scrollTo(0,2850)}
    if(a==="rolls"){window.scrollTo(0,4350)}
    if(a==="protective"){window.scrollTo(0,3450)}
    if(a==="blogs"){window.scrollTo(0,5500)}
    if(a==="top"){window.scrollTo(0,0)}
  }

  return (
    <div className='App'>
      <div className='orange'><p className='orangeanim'>MEGA SALE &nbsp;70%OFF</p></div>




      <header>
        <img src={logo} className='logo1'/>
        {/* scrollToTopFunction */}
        <p className='popup' onClick={()=>scroll("top")}><img src={linklogo} className='popupimg'/></p>
        <div className='headersec1'>
          <p onClick={()=>scroll("cardboardbox")} className='a123'>CARDBOARD BOXES<img src={downarrow} className='downarrow'/></p>
          <p onClick={()=>scroll("tapes")} className='a123'>TAPES<img src={downarrow} className='downarrow'/></p>
          <p onClick={()=>scroll("bags")} className='a123'>BAGS<img src={downarrow} className='downarrow'/></p>
          <p onClick={()=>scroll("rolls")} style={{color:'orange'}}>ROLLS AND SHEETS<img src={downarrow} className='downarrow'/></p>
          <p onClick={()=>scroll("protective")}>PROTECTIVE<img src={downarrow} className='downarrow'/></p>
          <p onClick={()=>scroll("blogs")}>BLOG<img src={downarrow} className='downarrow'/></p>
        </div>
        <div className='headersec2'>
          <img src={searchLogo} className='logo2'/>
          <div className='cartcount'>0</div>
          <img src={profileLogo} className='logo3'/>
          <img src={heartLogo} className='logo3'/>
          <img src={cartLogo} className='logo3'/>
        </div>
      </header>




      <main>
        <img src={banner1} className='banner1'/>
        {/* grid1 */}
        <div className='grid1'>
          {categorybox.map((prod)=>
            <div key={prod.id} className='grid1box'>
              <img src={prod.image} className='grid1img'/>
              <p className='grid1name'>{prod.name}</p>
            </div>
          )}
        </div>
        <button className='categorybtn'>View All Categories</button>







        {/* grid2 */}
        <div className='grid2'>
          <div className='grid2-A'>
            <p className='grid2name'>CARDBOARD BOXES</p>
            <p className='grid2subname'>Ship securely and efficiently with our wide selection of high-quality cardboard boxes in all sizes.</p>
            <img className='grid2img' src={img1}/>
          </div>
          <div className='grid2-A'>
            <img className='grid2img' src={img2}/>
            <p className='grid2name'>Corrugated Tape</p>
            <p className='grid2subname'>Secure your shipments with out strong reliable corrugated box sealing tapes.</p>
            
          </div>
          <div className='grid2-A'>
            <p className='grid2name'>Courier Bags</p>
            <p className='grid2subname'>Lightweight and water resistant, our courier bags are perfect for secre and affordable shipping.</p>
            <img className='grid2img' src={img3}/>
          </div>
          <div className='grid2-A'>
            <img className='grid2img' src={img4}/>
            <p className='grid2name'>Packing Materials</p>
            <p className='grid2subname'>Find everything you need for a seamless packing experience, form bubble wrap and tape to void fill and peanuts.</p>
          </div>
        </div>












        {/* grid3   */}
        <div className='grid3'>
        <h1 className='grid3heading'>Mailer Boxes</h1>
        <p className='grid3subheading'>Get sturdy, protective shipping for your products without the bulk.
          Ideal for shipping items like cloths ,books or small gifts.</p>
        <div className="tab">
        <button onClick={() => handleTabClick('Premium')}>
          Premium Mailers
        </button>
        <img src={img7} className='grid3logo'/>
        <button onClick={() => handleTabClick('easy')}>
          Easy Fold
        </button>
        <img src={img7} className='grid3logo'/>
        <button onClick={() => handleTabClick('Eco')}>
          Eco Mailer Boxes
        </button>
        <img src={img7} className='grid3logo'/>
        
        <button onClick={() => handleTabClick('PrePrinted')}>
          Pre Printed Mailers
        </button>
        
      </div>

      <div className="tab-content">
        {activeTab === 'Premium' && (

          <div className='tabcontbox'>
            {mailerpremium.map((prod)=> 
            <div key={prod.id} className='grid3box'>
              <p className='grid3ratnum'>8</p>
              <img src={img8} className='grid3rav'/>
              <img src={prod.image} className='grid3img'/>
              <p className='grid3name'>
                <p>{prod.name}<br></br>{prod.description}<br></br>{prod.price}</p>
              </p>
            </div>
          )}
          </div>
        )}
        {activeTab === 'easy' && (
          <div className='tabcontbox'>
            {easyfold.map((prod)=>
            <div key={prod.id} className='grid3box'>
              <p className='grid3ratnum'>8</p>
              <img src={img8} className='grid3rav'/>
              <img src={prod.image} className='grid3img'/>
              <p className='grid3name'>
                <p>{prod.name}<br></br>{prod.description}<br></br>{prod.price}</p>
              </p>
            </div>
          )}
          </div>
        )}
        {activeTab === 'Eco' && (
          <div className='tabcontbox'>
            {Eco.map((prod)=>
            <div key={prod.id} className='grid3box'>
              <p className='grid3ratnum'>8</p>
              <img src={img8} className='grid3rav'/>
              <img src={prod.image} className='grid3img'/>
              <p className='grid3name'>
                <p>{prod.name}<br></br>{prod.description}<br></br>{prod.price}</p>
              </p>
            </div>
          )}
          </div>
        )}
        {activeTab === 'PrePrinted' && (
          <div className='tabcontbox'>
            {PrePrinted.map((prod)=>
            <div key={prod.id} className='grid3box'>
              <p className='grid3ratnum'>8</p>
              <img src={img8} className='grid3rav'/>
              <img src={prod.image} className='grid3img'/>
              <p className='grid3name'>
                <p>{prod.name}<br></br>{prod.description}<br></br>{prod.price}</p>
              </p>
            </div>
          )}
          </div>
        )}
      </div>

      </div>






      <div className='grid4'>
        <h1 className='gridd4heding'>Special Products</h1>
        <p className='grid4subheading'>Discover Premium Boxes, Customize options, and essential supplies for all your shopping needs.</p>
        <div className='grid4boxgird'>
          <div className='grid4boxgrid1'>
            <button className='grid4hov1'>Premium Carton Boxes</button>
            <img src={img41} className='grid41'/>
            <div style={{display:'flex',height:'240px',margin:'12px auto',justifyContent:'space-between'}}>
              <button className='grid4hov2'>Bubble Wraps</button>
              <img src={img42} className='grid42'/>
              <button className='grid4hov3'>Carry Bags</button>
              <img src={img43} className='grid43'/>
            </div>
          </div>
          <div className='grid4boxgrid2'>
            <button className='grid4hov4'>Customized Products</button>
            <img src={img44} className='grid44'/> 
          </div>
          <div className='grid4boxgird3'>
            <button className='grid4hov5'>Corugatted Rolls</button>
            <img src={img45} className='grid45'/>
            <button className='grid4hov6'>Masking Tapes</button>
            <img src={img46} className='grid46'/>
          </div>

        </div>
      </div>
   




      <div className='grid5'>
        <h1 className='grid5headding'>Protect your Package</h1>
        <Slider {...settings}  className='sliderbox1'>
          {protrctpackage.map((prod)=>
            <div key={prod.id} className='grid5box'>
              <img src={prod.image} className='grid5img'/>
              <p className='grid5name'>{prod.name}</p>
              <p className='grid5pr'>{prod.price}</p>
            </div>
          )}
        </Slider>



      </div>
      <img src={img6} style={{height:"320px",width:"100%"}} className='a234'/>


      <div className='grid6'>
        <h1 className='grid6headding'>Die cut Boxes</h1>
        <p className='grid6subheaing'>Create a lasting impression with our custom-cut boxess in any size or shape imaginable perfect for adding a unique touch to your packaging and elevating your brand</p>
        <p style={
          {fontSize:'24px',fontWeight:'500',backgroundColor:'white',position:'absolute',
            zIndex:'10',marginLeft:'665px',width:'170px',textAlign:'end',}
          } className='grig6'>
          <p style={{marginRight:'20px'}}>Freatured</p>
        </p>
        <p  className='grig6' style={{fontSize:'24px',fontWeight:'500',backgroundColor:'white',position:'absolute',zIndex:'10',marginLeft:'1050px',width:'120px',textAlign:'center'}}>
          Boxes
        </p>
        <div className='grid6-A'>
          <div className='layebox6'>
            <button style={{
                height:'30px',width:'120px',backgroundColor:'orange',borderRadius:'5px',fontSize:'10px',marginTop:'10px',
                textAlign:'center',color:'white'
              }}>
              Man Fashion
            </button>
            <p style={{
              fontSize:'27px',fontWeight:'700',letterSpacing:'2px',marginTop:'2px',
              }}>
              MEGA SALE
            </p>
            <p style={{
              fontSize:'11px',fontWeight:'500',letterSpacing:'1px',marginTop:'2px',color:'blue'
              }}>
              GET SPECIAL DISCOUNT
            </p>
            <p style={{
              fontSize:'11px',fontWeight:'500',letterSpacing:'1px',marginTop:'10px'
              }}>
              UP TO
            </p>
            <div style={{display:'flex'}}>
            <p style={{
              fontSize:'60px',fontWeight:'700',letterSpacing:'1px',marginTop:'0px',color:'blue'
              }}>
              70
            </p>
            <p style={{fontSize:'30px',fontWeight:'600',marginTop:'30px',color:'blue'}}>%OFF</p>
            </div>
            <p style={{fontSize:'11px',fontWeight:'500',marginTop:'0px'}}>FOR SELECTED ITEMS</p>
            <p style={{fontSize:'11px',fontWeight:'500',marginTop:'2px',color:'blue'}}>USE CODE: PREMAIL098</p>
            
          </div>
          <img src={img5} className='grid6img'/>
        <div className='grid6-B'>
          <div style={{display:"flex"}} className='a145'>
            <p className='respo1'><p style={{marginRight:'20px'}}>Freatured</p></p>
            <Slider {...settings6} className='silderbox2'>
              {featured.map((a)=>
              <div className='grid6box'>
                <div style={{display:'flex'}}>
                  <img src={a.image} className='grid6img1'/>
                  <p style={{fontSize:'14px',margin:'32px 0px  0px 10px'}}>{a.name}<p style={{margin:'10px 0px 0px 0px',fontSize:'12px'}}>{a.price}</p></p>
                </div>
              </div>
              )}   
            </Slider>   
            <p className='respo2'><p style={{marginRight:'20px'}}>Boxes</p></p>   
            <Slider {...settings61} className='silderbox2'>
            {boaxes.map((a)=>
              <div className='grid6box'>
                <div style={{display:'flex'}}>
                  <img src={a.image} className='grid6img1'/>
                  <p style={{fontSize:'14px',margin:'32px 0px  0px 10px'}}>{a.name}<p style={{margin:'10px 0px 0px 0px',fontSize:'12px'}}>{a.price}</p></p>
                </div>
              </div>
              )}
            </Slider>     
          </div>
           
        </div>
        </div>
          
      </div>

      <div className='grid7'>
        <h1 style={{marginLeft:'690px',fontWeight:'600'}} className='a7j'>Reviews</h1>
        <h1 style={{marginLeft:'90px',fontWeight:'600'}}>Reviews</h1>
        <Slider {...settings7}  className='sliderbox7'>
          {reviews.map((prod)=>
            <div key={prod.id} className='grid7box'>
              <div style={{display:'flex',backgroundColor:'white'}}>
                <img src={prod.image} style={{height:'50px',margin:'15px 0px 0px 15px'}}/>
                <p style={{margin:'28px 0px 0px 25px'}}>{prod.name}</p>
                <img src={star} className='reviwimg7'/>
              </div>
              <div style={{display:'flex',backgroundColor:'white',height:'180px',alignItems:'center',textAlign:'center',justifyContent:'center',fontSize:'12px'}} >
                <p style={{width:'350px'}}>{prod.review}</p>
              </div>
            </div>
          )}
        </Slider>
        
      </div>
      


      </main>


      {/* Footer Area*/}


      <footer>
        <div className='fot1'>
          <div className='fot2'>
            <img src={reviwimg} className='gridfologo'/>
            <div className='fottc'>
              FREE SHIPPING<br></br><p>From all orders above $200</p>
            </div>
          </div>
          <div className='fot3'>
          <img src={reviwimg} className='gridfologo'/>
          <div className='fottc'>
              FREE RETURNS<br></br><p>Return money within 30 days</p>
            </div>
          </div>
          <div className='fot4'>
          <img src={reviwimg} className='gridfologo'/>
          <div className='fottc'>
              SECURE SHOPPING<br></br><p>You'rein safe hands</p>
            </div>
          </div>
          <div className='fot5'>
          <img src={reviwimg} className='gridfologo'/>
          <div className='fottc'>
              OVER 10,000 STYLES<br></br><p>We have everything you need</p>
            </div>
          </div>
        </div>
      </footer>



      <div className='foter2'>
        <div className='foter2a1'>
          <img src={logo}  className='foterlogo'/>
          <div style={{display:'flex'}}><img src={ftlogo1} className='ftlogo'/><p className='f1'>Sivakasi, Sivakasi, Tamilnadu, India, 626123</p></div>
          <div style={{display:'flex'}}><img src={ftlogo2} className='ftlogo'/><p className='f1a'>76390 01664</p></div>
          <div style={{display:'flex'}}><img src={ftlogo3} className='ftlogo'/><p className='f1a'>mohana@Stutzen.me  </p></div>
        </div>
        <div className='foter2a2'>
          <p className='f2'>CATEGORIES</p>
          <p className='f3'>cardboard Boxes</p>
          <p className='f3'>Die Cuts</p>
          <p className='f3'>Mailers</p>
          <p className='f3'>Tapes</p>
          <p className='f3'>Bags</p>
          <p className='f3'>Rolls and  Sheets</p>
          <p className='f3'>Protective</p>
        </div>
        <div className='foter2a3'>
        <p className='f2'>INFORMATION</p>
          <p className='f3'>Home</p>
          <p className='f3'>Shop</p>
          <p className='f3'>About Us</p>
          <p className='f3'>Contact</p>
        </div>
        <div className='foter2a4'>
        <p className='f2'>GET HELP</p>
          <p className='f3'>Your Orders</p>
          <p className='f3'>Your  Account</p>
          <p className='f3'>Track Order</p>
          <p className='f3'>Your Whishlist</p>
          <p className='f3'>Search</p>
          <p className='f3'>Faq's</p>
        </div>
        <div className='foter2a5'>
          <p className='f2'>FOLLOW US</p>
          <div style={{display:'flex'}}>
            <img src={ftlogo4} className='ftlogo1'/>
            <img src={ftlogo5} className='ftlogo1'/>
            <img src={ftlogo6} className='ftlogo1'/>
            <img src={ftlogo7} className='ftlogo1'/>
          </div>
          <p className='f21'>NEWSLETTER SIGN UP</p>
          <p className='f3  '>Receive our latest updates about our products & promotions.</p>
          <input className='fotinput' placeholder='Your E-mail Here...'></input><button className='fotbutton'>SUBSCRIBE</button>
        </div>
      </div>
      <div className='lastorangefoter'>@ Copyright 2024, All Rights Reserved by Inida Packing</div>
    </div>
  )
}

export default App