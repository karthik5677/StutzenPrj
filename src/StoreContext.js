import { createContext,useContext, useState } from "react";
import img1 from './images/imgs/Rectangle 1.png'
import img2 from './images/imgs/Rectangle 2.png'
import img3 from './images/imgs/Rectangle 9.png'
import img4 from './images/imgs/dds.png'
import img5 from './images/imgs/ss.png'
import img6 from './images/imgs/ssx.png'
import img7 from './images/imgs/Rectangle 4.png'
import img8 from './images/imgs/a.png'
import img9 from './images/imgs/dds.png'
import img10 from './images/imgs/Group 34.png'
import img11 from './images/imgs/Rectangle 9.png'
import img12 from './images/imgs/Rectangle 9.png'
import img13 from './images/imgs/mailerbox1.png'
import img14 from './images/imgs/mailerbox2.png'
import img15 from './images/imgs/mailerbox3.png'
import img16 from './images/imgs/mailerbox4.png'
import img17 from './images/imgs/mailerbox5.png'
import img18 from './images/imgs/mailerbox6.png'
import img19 from './images/imgs/image-Photoroom 1.png'
import img20 from './images/imgs/epe-foam-roll-Photoroom 1.png'
import img21 from './images/imgs/image 47.png'
import img22 from './images/imgs/image 45.png'
import img23 from './images/imgs/image 46.png'
import img24 from './images/imgs/mailerbox6.png'
import img26 from './images/India Packaging/asxx.png'
import img27 from './images/India Packaging/as.png'
import img28 from './images/India Packaging/ax.png'
import img29 from './images/India Packaging/Rectangle 11.png'
import img25 from './images/imgs/Gr69.png'
import img30 from './images/imgs/image 55.png'
import img31 from './images/imgs/image 48.png'
import img32 from './images/imgs/image 50.png'
import img33 from './images/imgs/image 54.png'
import img34 from './images/imgs/ddd 2.png'
import img35 from './images/imgs/image 47.png'
import img36 from './images/imgs/image 52.png'
import img37 from './images/imgs/image 53.png'
import img38 from './images/imgs/Gr69.png'
import img39 from './images/imgs/Group 69.png'
import img40 from './images/imgs/Groupdd 69.png'


const Store = createContext();
function StoreContext({children}){

  const[productCatelog,setProductCatelog]=useState([
    {id:'1',name:'MAILER BOXES',image:img1,category:"categorybox"},
    {id:'1',name:'KRAFT SHIPPING BOXES',image:img2,category:"categorybox"},
    {id:'1',name:'WHITE SHIPPING BOXES',image:img3,category:"categorybox"},
    {id:'1',name:'FOLDING CARTONS',image:img4,category:"categorybox"},
    {id:'1',name:'PAKING TAPES',image:img5,category:"categorybox"},
    {id:'1',name:'CORRUGATED SHEETS',image:img6,category:"categorybox"},
    {id:'1',name:'COLOUR SHIPPING BOXES',image:img7,category:"categorybox"},
    {id:'1',name:'HONEYCOMB PAPER BUBBLE',image:img8,category:"categorybox"},
    {id:'1',name:'MAILING TUBES',image:img9,category:"categorybox"},
    {id:'1',name:'CARRY BAGS',image:img10,category:"categorybox"},
    {id:'1',name:'SHREDDED TISSUES',image:img11,category:"categorybox"},
    {id:'1',name:'BUBBLE ROLL WRAP',image:img12,category:"categorybox"},
    {id:'1',name:'MAILER BOX',image:img13,category:"premiummailbox",price:"From Rs.9.63",description:"kraft-4x4x1 inch"},
    {id:'1',name:'MAILER BOX',image:img14,category:"premiummailbox",price:"From Rs.9.63",description:"Pink & white-4x4x1 inch"},
    {id:'1',name:'MAILER BOX',image:img15,category:"premiummailbox",price:"From Rs.11.36",description:"Black-4x4x1 inch"},
    {id:'1',name:'MAILER BOX',image:img1,category:"premiummailbox",price:"From Rs.8.43",description:"white-4x4x1 inch"},
    {id:'1',name:'MAILER BOX',image:img17,category:"premiummailbox",price:"From Rs.9.63",description:"Red & white-4x4x1 inch"},
    {id:'1',name:'MAILER BOX',image:img18,category:"premiummailbox",price:"From Rs.9.63",description:"Orange & white-4x4x1 inch"},
    {id:'1',name:'MAILER BOX',image:img1,category:"easyfold",price:"From Rs.9.63",description:"Orange & white-4x4x1 inch"},
    {id:'1',name:'MAILER BOX',image:img2,category:"easyfold",price:"From Rs.9.63",description:"Orange & white-4x4x1 inch"},
    {id:'1',name:'MAILER BOX',image:img3,category:"easyfold",price:"From Rs.9.63",description:"Orange & white-4x4x1 inch"},
    {id:'1',name:'MAILER BOX',image:img4,category:"easyfold",price:"From Rs.9.63",description:"Orange & white-4x4x1 inch"},
    {id:'1',name:'MAILER BOX',image:img5,category:"easyfold",price:"From Rs.9.63",description:"Orange & white-4x4x1 inch"},
    {id:'1',name:'MAILER BOX',image:img6,category:"easyfold",price:"From Rs.9.63",description:"Orange & white-4x4x1 inch"},
    {id:'1',name:'MAILER BOX',image:img7,category:"Eco",price:"From Rs.9.63",description:"Orange & white-4x4x1 inch"},
    {id:'1',name:'MAILER BOX',image:img8,category:"Eco",price:"From Rs.9.63",description:"Orange & white-4x4x1 inch"},
    {id:'1',name:'MAILER BOX',image:img9,category:"Eco",price:"From Rs.9.63",description:"Orange & white-4x4x1 inch"},
    {id:'1',name:'MAILER BOX',image:img10,category:"Eco",price:"From Rs.9.63",description:"Orange & white-4x4x1 inch"},
    {id:'1',name:'MAILER BOX',image:img11,category:"Eco",price:"From Rs.9.63",description:"Orange & white-4x4x1 inch"},
    {id:'1',name:'MAILER BOX',image:img1,category:"Eco",price:"From Rs.9.63",description:"Orange & white-4x4x1 inch"},
    {id:'1',name:'MAILER BOX',image:img2,category:"PrePrinted",price:"From Rs.9.63",description:"Orange & white-4x4x1 inch"},
    {id:'1',name:'MAILER BOX',image:img1,category:"PrePrinted",price:"From Rs.9.63",description:"Orange & white-4x4x1 inch"},
    {id:'1',name:'MAILER BOX',image:img4,category:"PrePrinted",price:"From Rs.9.63",description:"Orange & white-4x4x1 inch"},
    {id:'1',name:'MAILER BOX',image:img17,category:"PrePrinted",price:"From Rs.9.63",description:"Orange & white-4x4x1 inch"},
    {id:'1',name:'MAILER BOX',image:img9,category:"PrePrinted",price:"From Rs.9.63",description:"Orange & white-4x4x1 inch"},
    {id:'1',name:'MAILER BOX',image:img8,category:"PrePrinted",price:"From Rs.9.63",description:"Orange & white-4x4x1 inch"},
    {id:'1',name:'Edge Protector',image:img19,category:"protrctpackage",price:"₹120.00"},
    {id:'1',name:'EPE Foam Rolls',image:img20,category:"protrctpackage",price:"₹120.00"},
    {id:'1',name:'Gift Wrapping Paper',image:img21,category:"protrctpackage",price:"₹120.00"},
    {id:'1',name:'Mailing Tubes',image:img22,category:"protrctpackage",price:"₹120.00"},
    {id:'1',name:'Air Cushion',image:img23,category:"protrctpackage",price:"₹120.00"},
    {id:'1',name:'BUBBLE ROLL WRAP',image:img24,category:"protrctpackage",price:"₹120.00"},
    {id:'1',name:'BUBBLE ROLL WRAP',image:img26,category:"protrctpackage",price:"₹120.00"},
    {id:'1',name:'BUBBLE ROLL WRAP',image:img27,category:"protrctpackage",price:"₹120.00"},
    {id:'1',name:'BUBBLE ROLL WRAP',image:img28,category:"protrctpackage",price:"₹120.00"},
    {id:'1',name:'BUBBLE ROLL WRAP',image:img29,category:"protrctpackage",price:"₹120.00"},
  ]);
  const[reviews,setReviews]=useState([
    {name:"Sam Paul",image:img38,review:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem quia provident non totam maxime sed maioresione explicabo magni."},
    {name:"Stephen",image:img39,review:"Est laboriosam nemo numquam quis. Cupiditate dolorem aspernatur esse sunt accusamus voluptate nostrum eum perlique harum, provident optio."},
    {name:"Anna Sen",image:img40,review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem minima, provident accusantium ducimus, autem cum placeaquam fugit at earum minus laboriosam."},
    {name:"Phil M",image:img38,review:" Dolorem quia provident non totam maxime sed recusandae ipsam ratione explicabo magni."},
    {name:"John elf",image:img40,review:"Rem minima, provident accusantium ducimus, autem cum placeat quidem amet sunt ullam officia! Consectetur quas dolor quisquam fugit at earum minus laboriosam."},
    {name:"Tina",image:img38,review:" Est laboriosam nemo numquam quis. Cupiditate dolorem aspernatur esse sunt accusamus voluptate nostrum eum per harum, provident optio."}
  ]);
  const[featured,setFeautured]=useState([
    {id:'1',name:'BUBBLE ROLL WRAP',image:img29,category:"featured",price:"₹120.00"},
    {id:'1',name:'BUBBLE ROLL WRAP',image:img30,category:"featured",price:"₹120.00"},
    {id:'1',name:'BUBBLE ROLL WRAP',image:img31,category:"featured",price:"₹120.00"},
    {id:'1',name:'BUBBLE ROLL WRAP',image:img32,category:"featured",price:"₹120.00"},
    {id:'1',name:'BUBBLE ROLL WRAP',image:img33,category:"featured",price:"₹120.00"},
  ])
  const[boaxes,setBoaxes]=useState([
    {id:'1',name:'BUBBLE ROLL WRAP',image:img34,category:"boaxes",price:"₹120.00"},
    {id:'1',name:'BUBBLE ROLL WRAP',image:img35,category:"boaxes",price:"₹120.00"},
    {id:'1',name:'BUBBLE ROLL WRAP',image:img37,category:"boaxes",price:"₹120.00"},
    {id:'1',name:'BUBBLE ROLL WRAP',image:img29,category:"boaxes",price:"₹120.00"},
    {id:'1',name:'BUBBLE ROLL WRAP',image:img36,category:"boaxes",price:"₹120.00"},
  ])

  return(
    <Store.Provider value={{
        productCatelog,setProductCatelog,reviews,setReviews,featured,setFeautured,boaxes,setBoaxes
      }}>
        {children}
    </Store.Provider>
  )
    
}
export const StoreState=()=>{
    return useContext(Store);
};
export default StoreContext;