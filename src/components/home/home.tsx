'use client';

import React, { useRef, useState, useEffect } from 'react';
import { InlineWidget } from "react-calendly";
import { LINKS_SERVICES_HOMEPAGE } from "@/utils/constants/constant";

import '@/styles/home/home.css';

export default function Home({

}: {

    
})  {
    const [formContactUs, setFormContactUs] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone: ''
    });

    useEffect(() => {

    }, []);

    return (
        <main className="wraphomepg">
            <div className="ctnwrapmainimg">
                <div className="ctnservicesrdrctsmainimg">
                {LINKS_SERVICES_HOMEPAGE.map((srv, idx) => (
                    <a className="wrapservicehmpg">
                        <span>{srv.text}</span>
                        <img src={srv.img} alt=""/>
                    </a>
                ))}
                </div>
                <img className="menuimghmpgpg" src="https://transcendance-avatars.s3.eu-west-3.amazonaws.com/imagebureausolutionpapier.jpg"/>
            </div>
            <div className="ctntxthmpgmain">
                <h1>Faire valoir vos droits auprès des administrations françaises, nous sommes là pour vous guider !</h1>
                <span>
                    Bienvenue sur SolutionPapiers, votre guide fiable pour la naturalisation en France. Nous comprenons les défis rencontrés par les sans-papiers dans leur quête de devenir citoyens français. Notre mission est de vous accompagner à chaque étape, en simplifiant les procédures complexes et en vous connectant avec des experts juridiques. Chez SolutionPapiers, chaque parcours de naturalisation est une histoire de succès en devenir.
                </span>
            </div>
            <div className="ctncalendlyappointment">
                <InlineWidget styles={{
                    height: '100%',
                    width: '800px',
                    flexDirection: 'row'
                }} url="https://calendly.com/solutionpapiers/30min"/>
            </div>
            <div className="gtherprsnlinfoctn-hmpg">
                <h2>Contacter nos experts pour un accompagnement juridique sur mesure</h2>
                <div className="wrpcnctusinptdescrpt">
                    <div className="ctninfosapointmenthmpg">
                        <span>
                            Notre équipe d’expert juridique en droit du sol se tient prête à vous assister dans vos démarches administratives.<br/><br/>
                            Pl. de l'Hôtel de Ville<br/>
                            75004 Paris<br/>
                            France
                        </span>
                        <button>Nous contacter</button>
                        <button>Voir sur la carte</button>
                        <button>Nous contacter par email</button>
                    </div>
                    <div className="ctninptscntct">
                        <div className={`inputctnhmpgcntctus${formContactUs.first_name.length ? ' active' : ''}`}>
                            <input value={formContactUs.first_name} onChange={(e) => {
                                setFormContactUs(prev => ({
                                    ...prev,
                                    first_name: e.target.value
                                }))
                            }} type="text" />
                            <label>Prénom</label>
                        </div>
                        <div className={`inputctnhmpgcntctus${formContactUs.last_name.length ? ' active' : ''}`}>
                            <input value={formContactUs.last_name} onChange={(e) => {
                                setFormContactUs(prev => ({
                                    ...prev,
                                    last_name: e.target.value
                                }))
                            }} type="text" />
                            <label>Nom</label>
                        </div>
                        <div className={`inputctnhmpgcntctus${formContactUs.email.length ? ' active' : ''}`}>
                            <input value={formContactUs.email} onChange={(e) => {
                                setFormContactUs(prev => ({
                                    ...prev,
                                    email: e.target.value
                                }))
                            }} type="text" />
                            <label>E-mail</label>
                        </div>
                        <div className={`inputctnhmpgcntctus${formContactUs.phone.length ? ' active' : ''}`}>
                            <input value={formContactUs.phone} onChange={(e) => {
                                setFormContactUs(prev => ({
                                    ...prev,
                                    phone: e.target.value
                                }))
                            }} type="text" />
                            <label>Numéro de téléphone</label>
                        </div>
                        <button>Envoyer le formulaire</button>
                    </div>
                </div>
            </div>
        </main>
    );
};
