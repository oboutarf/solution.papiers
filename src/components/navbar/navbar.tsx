'use client';

import React, { useRef, useState, useEffect } from 'react';
import { LINKS_NAVBAR } from '@/utils/constants/constant';
import ReactDOM from 'react-dom';
import { PopupWidget } from 'react-calendly';

import '@/styles/navbar/navbar.css';

export default function Navbar({

}: {

    
})      {

    const [rootElem, setRootElem] = useState<HTMLDivElement>();
    const [menuDropDown, setMenuDropDown] = useState<boolean>(false);


    useEffect(() => {
        // console.log(document.querySelector('.calendly-badge-widget'));
        // const rootElem = document.createElement('div');
        // document.body.appendChild(rootElem);
        // const popupWidget = (
        //   <PopupWidget
        //     url="https://calendly.com/solutionpapiers/30min?month=2023-12"
        //     // @ts-ignore
        //     rootElement={rootElem}
        //     text="Appuyer sur ce bouton pour prendre rendez-vous"
        //     textColor="#ffffff"
        //     color="#0055A4"
        //   />
        // );
        // ReactDOM.render(popupWidget, rootElem);
    
        // return () => {
        //   ReactDOM.unmountComponentAtNode(rootElem);
        //   document.body.removeChild(rootElem);
        // };

      }, []);
    

    return (
        <nav className={`wrapnavbarctn`}>
            <div className="wrpnavbarcntnt">
                <a href="/">
                    <img
                        alt=""
                        src="https://ptgtzkrlzagjqwcntumc.supabase.co/storage/v1/object/public/solution_papiers/logo/okq1MGt0.jpg"
                    />
                </a>
                <div className="ctnnavredirectslnks">
                {LINKS_NAVBAR.map((link, idx) => (
                    <a
                        onClick={() => {
                            return (false); 
                        }}
                        href={link.link}
                    >
                        {link.text}
                    </a>
                ))}
                </div>
                <div className="ctninteractbtnsnav">
                    <a
                        href="/nous-contacter"
                        className="takeapointmentrdrct"
                    >
                        <img
                            alt=""
                            src="https://ptgtzkrlzagjqwcntumc.supabase.co/storage/v1/object/public/solution_papiers/icons/luciderdvicon.svg"
                        />
                        Prendre rendez-vous
                    </a>
                </div>
            </div>
            <div className="wrpnavcntntresponsive">
                <img
                    className="hamburgermenunavmbl"
                    onClick={() => setMenuDropDown(!menuDropDown)}
                    src="https://ptgtzkrlzagjqwcntumc.supabase.co/storage/v1/object/public/solution_papiers/icons/hamburgermenusvg.svg" 
                />
                <a href="/">
                    <img
                        alt=""
                        className="logonav"
                        src="https://ptgtzkrlzagjqwcntumc.supabase.co/storage/v1/object/public/solution_papiers/logo/okq1MGt0.jpg"
                    />
                </a>
            </div>
            <div className={`ctnmenudropdownnavrspnsv${menuDropDown ? ' active' : ''}`}>
                <div className="ctnnavredirectslnks">
                {LINKS_NAVBAR.map((link, idx) => (
                    <a
                        onClick={() => {
                            return (false); 
                        }}
                        href={link.link}
                    >
                        {link.text}
                    </a>
                ))}
                </div>
                <div className="ctninteractbtnsnav">
                    <a
                        href="/nous-contacter"
                        className="takeapointmentrdrct"
                    >
                        <img
                            alt=""
                            src="https://ptgtzkrlzagjqwcntumc.supabase.co/storage/v1/object/public/solution_papiers/icons/luciderdvicon.svg"
                        />
                        Prendre rendez-vous
                    </a>
                </div>
            </div>
            <div className={`opendropdownbg${menuDropDown ? ' active' : ''}`}></div>
        </nav>
    );
};