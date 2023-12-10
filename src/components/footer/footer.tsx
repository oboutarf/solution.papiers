
'use client';
import React, { useRef, useState, useEffect } from 'react';
import { LIST_REDIRECTS_SERVICES } from "@/utils/constants/constant";

import '@/styles/footer/footer.css';

export default function Footer({

}: {

    
})  {

    useEffect(() => {

    }, []);

    return (
        <footer className="mainctnfooterwrp">
            <div className="wrpfootercntnt">
                <div className="ctnaproposfooter">
                    <h3>A PROPOS</h3>
                    <div className="ctncntntaproposfooter">
                        <span className="cntntapropostxt">Simplifiez vos démarches administratives, pour l’obtention de la nationalité française ou d’un titre de séjour. Nos spécialistes vous conseillent et vous guident, prenez dès maintenant rendez-vous avec l’un d’entre eux.</span>
                        <a
                            href="/contact"
                            className="cntctusfooter"
                        >
                            Nous contacter
                        </a>
                    </div>
                </div>
                <div className="ctnanosservicesfooter">
                    <h3>NOS SERVICES</h3>
                    <div className="ctncntntnsoservicesfooter">
                        {LIST_REDIRECTS_SERVICES.map((redirect, idx) => (
                            <a
                                href={redirect.link}
                                className="ctnservicestxtfooter"
                            >
                                &bull; {redirect.text}
                            </a>
                        ))}
                    </div>
                </div>
                <div className="ctncontactusfooter">
                    <h3>NOUS CONTACTER</h3>
                    <div className="ctncntntcontactusfooter">
                       <span className="ctnaddrfootercontactus">
                        Pl. de l'Hôtel de Ville<br/>75004 Paris, France
                       </span>
                       <div className="ctncontactinfofooter">
                            <img
                                alt=""
                                src="https://ptgtzkrlzagjqwcntumc.supabase.co/storage/v1/object/public/solution_papiers/icons/lucidephoneicon.svg"
                            />
                            <span>+33 1 23 74 23 12</span>
                       </div>
                       <div className="ctncontactinfofooter">
                            <img
                                alt=""
                                src="https://ptgtzkrlzagjqwcntumc.supabase.co/storage/v1/object/public/solution_papiers/icons/lucidemailicon.svg"
                            />
                            <span>contact@solution-papiers.fr</span>
                       </div>
                    </div>
                </div>
                <div className="ctnnewsletterfooter">
                    <div className="ctntxtnewsletterftr">
                        <h3>S'abonner à la newsletter</h3>
                        <span className="subtxtfooter">Restez informé de toute l’actualité des différentes démarches !</span>
                        <div className="ctninptnewsletterftr">
                            <label className="indicinputlblfooter">
                                Adresse email
                            </label>
                            <input
                                type="text"
                                className="inputnewsletter"
                            />
                            <button className="btnfooternewsletter">
                                S'abonner
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    );
};
