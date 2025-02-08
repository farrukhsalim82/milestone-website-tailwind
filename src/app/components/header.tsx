import Image from "next/image";
import logo from "../images/logo.png"
import Link from "next/link"

export function Header(){
return (

<div className="header"> 
 <div className="left ">
 <Image className="my-image"
      src={logo}
      
      alt="/"
      />
 </div>
 <div className="middle ">
   
    </div>
 <div className="right ">
 <ul className="header-buttons">
        
 <Link href={"/"}>
        <li >Home</li>
        </Link>
        <Link href={"/about-us"}>
        <li >About Us</li>
        </Link>
        <Link href={"/categories"}>
        <li >Categories</li>
        </Link>
             <Link href={"/contact-us"}>
        <li >Contact Us</li>
        </Link>        
    </ul>    
    </div>  
    
</div>
)
}