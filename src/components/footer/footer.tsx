'use client';

import React, { useRef, useState, useEffect } from 'react';

import '@/styles/footer/footer.css';

export default function Footer({

}: {

    
})  {

    useEffect(() => {

    }, []);

    return (
        <footer className="mainctnfooterwrp">
            <img onClick={() => { 
                window.scrollTo({top: 0, behavior: 'smooth'});
             }} className="logofooterimg"
                src="https://transcendance-avatars.s3.eu-west-3.amazonaws.com/Capture_d_e%CC%81cran_2023-12-04_a%CC%80_13.52.09-removebg-preview.png" alt=""/>
        </footer>
    );
};
