"use client"

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

export default function NavBar() {
    const links = [
        {name: '', link:'/'},
        {name: '', link:'/'},
        {name: '', link:'/'},
        {name: '', link:'/'},
    ]
    const [open, setOpen] = useState(false);

   
    const pathname= usePathname();

    function handleDisp (){
        const cont:HTMLElement | null= document.querySelector('.content-cont');
        if(cont){
            if (open) {
                cont.style.opacity = '0';
                cont.style.pointerEvents = 'none'; 
            }else{
                setTimeout(()=>{
                    cont.style.opacity = '1';
                    cont.style.pointerEvents = 'auto';
                },300)
                
            }
        }
       
    }

    useEffect(()=>{
        if (pathname) {
            const liElement = document.getElementById(`${pathname}`);
            liElement?.classList.add('active');

            const liArray = document.getElementsByClassName('lisElement');
            for (let i = 0; i < liArray.length; i++) {
                const element = liArray[i];
                if (element.getAttribute('id') !== pathname) {
                    element.classList.remove('active');
                }
            }
        }
    },[pathname])

    useEffect(()=>{
        handleDisp();
    },[open])

    return(
        <nav className="md:flex w-full  h-[4.5rem] fixed z-10 items-center justify-between bg-white md:px-10 px-4 ">
            <div></div>
            <div  onClick={()=>{
                setOpen(!open);
            }}>{
                open ? <div className="static md:hidden"><CloseRoundedIcon className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"/></div>
                 : <div className="static  md:hidden"><MenuRoundedIcon className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"/></div>
            }
            </div>
            <ul className={`bg-white md:flex md:w-auto md:pb-0 md:items-center left-0 w-full absolute md:static
            md-pl-0 pl-9 transition-opacity ease-out duration-500

             ${open ? 'top-20 opacity-100' :'opacity-0 top-[-490px]'}
              md:opacity-100`}>
                {links.map(link=>(
                    <li id={link.link} className='lisElement z-2 md:ml-8 text-xl md:my-0 my-7' key={link.name}>
                        <Link onClick={()=>{
                        setOpen(false);
                        
                    }} href={link.link} >
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}