'use client';

import React, { useRef, useState, useEffect } from 'react';
import { LINKS_NAVBAR, LINKS_SERVICES_HOMEPAGE } from '@/utils/constants/constant';
import ReactDOM from 'react-dom';
import { PopupWidget } from 'react-calendly';

import '@/styles/navbar/navbar.css';

export default function Navbar({

}: {

    
})      {

    const [rootElem, setRootElem] = useState<HTMLDivElement>();
    const [menuDropDown, setMenuDropDown] = useState<boolean>(false);
    const [navServicesDropDown, setNavServicesDropDown] = useState<boolean>(false);
    const [carrousselIndex, setCarrousselIndex] = useState<number>(0);


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


    useEffect(() => {

        const scrollFlashInfos = () => {
            const carroussel = document.querySelector('.ctntopbarinfosnav') as HTMLDivElement;
            const flashInfo = document.querySelector('.ctnflashinfo') as HTMLDivElement;
            if (carroussel) {
                carroussel.scrollTo({
                    left: carroussel.scrollLeft + flashInfo.clientWidth,
                    behavior: 'smooth'
                  });
                setCarrousselIndex(carrousselIndex + 1);
                if (carrousselIndex === 3)
                    return (setCarrousselIndex(0), carroussel.scrollLeft = 0);
            }
        };
        const intervalCarroussel = setInterval(scrollFlashInfos, 3500);

        return (() =>
            clearInterval(intervalCarroussel)
        );
    }, [carrousselIndex]);


    const manageMenuDropDown = () => {
        if (menuDropDown)   {
            const menu = document.getElementById('menu_dropdown');
            if (menu)   {
                menu.classList.add('close');
                setTimeout(() => {
                    menu.classList.remove('close');
                    setMenuDropDown(!menuDropDown);
                }, 600);
            }
        }
        else {
            setMenuDropDown(true);
        }
    };

    return (
        <nav className={`wrapnavbarctn`}>
            <div className="ctntopbarinfosnav">
                <div className="ctnflashinfo">
                    <img
                        alt=""
                        src="https://ptgtzkrlzagjqwcntumc.supabase.co/storage/v1/object/public/solution_papiers/icons/svgclockwhite.svg"
                    />
                    <span>Lun-Sam de 10h à 18h</span>
                </div>
                <div className="ctnflashinfo">
                    <img
                        alt=""
                        src="https://ptgtzkrlzagjqwcntumc.supabase.co/storage/v1/object/public/solution_papiers/icons/svgphonewhite.svg"
                    />
                    <span>+33 1 23 74 23 12</span>
                </div>
                <div className="ctnflashinfo">
                    <img
                        alt=""
                        src="https://ptgtzkrlzagjqwcntumc.supabase.co/storage/v1/object/public/solution_papiers/icons/svgmailwhite.svg"
                    />
                    <span>contact@solution-papiers.fr</span>
                </div>
		    </div>
            <div className="wrpnavbarcntnt">
                <a href="/">
                    <img
                        alt=""
                        src="https://ptgtzkrlzagjqwcntumc.supabase.co/storage/v1/object/public/solution_papiers/logo/okq1MGt0.jpg"
                    />
                </a>
                <div className="ctnnavredirectslnks">
                {LINKS_NAVBAR.map((link, idx) => (
                    idx === 1 ?
                        <div
                            className="ctndropdownservicesnav"
                            onMouseLeave={() => setNavServicesDropDown(false)}
                        >
                            <a
                                href={link.link}
                                className="dropdownnavserv"
                                onMouseEnter={() => setNavServicesDropDown(true)}
                            >
                                {link.text}
                                <img
                                    alt=""
                                    src="https://ptgtzkrlzagjqwcntumc.supabase.co/storage/v1/object/public/solution_papiers/icons/svgdarkbluechevron.svg"
                                    className="dropdownindicnav"
                                />
                            </a>
                            <div className={`ctnnavsrvddown${navServicesDropDown ? ' active' : ''}`}>
                                <div
                                    style={{
                                        backgroundColor: 'white'
                                    }}
                                    className="ctndropdownnav"
                                >
                                {LINKS_SERVICES_HOMEPAGE.map((srv, idx) => (
                                    <a
                                        href={srv.link}
                                    >
                                        {srv.text}
                                    </a>
                                ))}
                                </div>
                            </div>
                        </div>
                    :
                        <a
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
                    onClick={() => manageMenuDropDown()}
                    src="https://ptgtzkrlzagjqwcntumc.supabase.co/storage/v1/object/public/solution_papiers/icons/hamburgermenusvg%20(1).svg" 
                />
                <a href="/">
                    <img
                        alt=""
                        className="logonav"
                        src="https://ptgtzkrlzagjqwcntumc.supabase.co/storage/v1/object/public/solution_papiers/logo/okq1MGt0.jpg"
                    />
                </a>
            </div>
            <div
                id="menu_dropdown"
                className={`ctnmenudropdownnavrspnsv${menuDropDown ? ' active' : ''}`}
            >
                <div className="ctnnavredirectslnks">
                {LINKS_NAVBAR.map((link, idx) => (
                    idx === 1 ?
                        <div
                            className="ctndropdownservicesnav"
                            onMouseLeave={() => setNavServicesDropDown(false)}
                        >
                            <a
                                href={link.link}
                                className="dropdownnavserv"
                                onMouseEnter={() => setNavServicesDropDown(true)}
                            >
                                {link.text}
                                <img
                                    alt=""
                                    src="https://ptgtzkrlzagjqwcntumc.supabase.co/storage/v1/object/public/solution_papiers/icons/svgdarkbluechevron.svg"
                                    className="dropdownindicnav"
                                />
                            </a>
                            <div className={`ctnnavsrvddown${navServicesDropDown ? ' active' : ''}`}>
                                <div
                                    style={{
                                        backgroundColor: 'white'
                                    }}
                                    className="ctndropdownnav"
                                >
                                {LINKS_SERVICES_HOMEPAGE.map((srv, idx) => (
                                    <a
                                        href={srv.link}
                                    >
                                        {srv.text}
                                    </a>
                                ))}
                                </div>
                            </div>
                        </div>
                    :
                        <a
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