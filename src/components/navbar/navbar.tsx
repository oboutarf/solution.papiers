'use client';

import React, { useRef, useState, useEffect } from 'react';
import { LINKS_NAVBAR } from '@/utils/constants/constant';

import '@/styles/navbar/navbar.css';

export default function Navbar({

}: {

    
})      {
    
    return (
        <nav className={`wrapnavbarctn`}>
            <div className="wrpnavbarcntnt">
                <a href="/">
                    <img src="https://ptgtzkrlzagjqwcntumc.supabase.co/storage/v1/object/public/solution_papiers/image_services/solutionpapierlogo-removebg-preview.png" alt=""/>
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
