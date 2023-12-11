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


    useEffect(() => {
        console.log(document.querySelector('.calendly-badge-widget'));
        const rootElem = document.createElement('div');
        document.body.appendChild(rootElem);
        const popupWidget = (
          <PopupWidget
            url="https://calendly.com/solutionpapiers/30min?month=2023-12"
            // @ts-ignore
            rootElement={rootElem}
            text="Appuyer sur ce bouton pour prendre rendez-vous"
            textColor="#ffffff"
            color="#0055A4"
          />
        );
        ReactDOM.render(popupWidget, rootElem);
    
        return () => {
          ReactDOM.unmountComponentAtNode(rootElem);
          document.body.removeChild(rootElem);
        };

      }, []);
    

    return (
        <nav className={`wrapnavbarctn`}>
            <div className="wrpnavbarcntnt">
                <a href="/">
                    <img
                        alt=""
                        src="https://ptgtzkrlzagjqwcntumc.supabase.co/storage/v1/object/public/solution_papiers/image_services/solutionpapierlogo-removebg-preview.png"
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
                    <button className="takeapointmentrdrct">
                        <img
                            alt=""
                            src="https://ptgtzkrlzagjqwcntumc.supabase.co/storage/v1/object/public/solution_papiers/icons/luciderdvicon.svg"
                        />
                        Prendre rendez-vous
                    </button>
                    <button className="callusbtnnav">
                        <img
                            alt=""
                            src="https://ptgtzkrlzagjqwcntumc.supabase.co/storage/v1/object/public/solution_papiers/icons/lucidephoneicon.svg"
                        />
                        01 23 74 23 12
                    </button>
                </div>
            </div>
        </nav>
    );
};