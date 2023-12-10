'use client';

import React, { useRef, useState, useEffect } from 'react';
import Calendly from '@/components/calendly/calendly-form';
import { LINKS_SERVICES_HOMEPAGE } from '@/utils/constants/constant';
import { InlineWidget } from "react-calendly";
import PeopleCarroussel from '@/components/home/people-carroussel';

import '@/styles/home/home.css';

export default function Home({

}: {
    
})  {

    useEffect(() => {

    }, [])

    return (
        <main className="wraphomepg">
            <div className="mainbghomepage">
                <div className="wrpttlhmpgmain">
                    <h1>Résider ou obtenir un<br/> emploi en France de manière légale.</h1>
                    <button className="mainhomepagebtnrdctn">
                        Découvrir
                        <img
                            alt=""
                            src="https://ptgtzkrlzagjqwcntumc.supabase.co/storage/v1/object/public/solution_papiers/icons/lucideiconchevron.svg"
                        />
                    </button>
                </div>
                <img
                    alt=""
                    className="mainhmpgimg"
                    src="https://ptgtzkrlzagjqwcntumc.supabase.co/storage/v1/object/public/solution_papiers/homepage/drapeau-francais-scaled-removebg.png"
                />
            </div>
            <h2 className="ttlmainhmpgservices">
                NOS SERVICES 
                <div className="linettlserviceshmpg"></div>
            </h2>
            <div className="mainhmpgservices">
            { LINKS_SERVICES_HOMEPAGE.map((service, idx) => (
                <div className="ctnservicesblckhmpg">
                    <img
                        alt=""
                        className="bgimgservicehmpg"
                        src={service.img}
                    />
                    <div className="ctntxtnosserviceshmpg">
                        <span>{service.text}</span>
                    </div>
                </div>
            ))}
            </div>
            <PeopleCarroussel /> 
            <Calendly />
            {/* <InlineWidget
                styles={{
                    minWidth: '100%',
                    height: '750px',
                    margin: '0 0 5rem 0',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    background: 'rgba(0, 85, 164, .9);'
                }}
                url="https://calendly.com/solutionpapiers/30min?month=2023-12"
            /> */}
        </main>
    );
};
