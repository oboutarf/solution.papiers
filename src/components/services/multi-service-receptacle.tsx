'use client';

import Image from 'next/image';
import React, { useEffect } from 'react';

import '@/styles/services/multi-service-receptacle.css';
import Calendly from '../calendly/calendly-form';

export default function MultiServiceReceptacle({
	idx,
	title,
	sub_title,
	explanation_text,
	background_main_image,
	background_sub_image
} : {
	idx: number,
	title: string,
	sub_title: string,
	explanation_text: string,
	background_main_image: string,
	background_sub_image: string
}) {

	useEffect(() => {
		const explanation = document.getElementById('explanation_text') as HTMLDivElement;
		if (explanation)
			explanation.innerHTML = explanation_text;

	}, []);

  	return (
		<main className="ctnservicesinglepage">
			<div className="ctnmainimgsrvsngl">
				<img
					alt=""
					className="mnimgsnglsrv"
					src={background_main_image}
				/>
				<div className={`ctnmainimgttlsrvsngl${idx === 2 ? ' blue' : ''}`}>
					<h1>{title}</h1>
					<a
						href="/nous-contacter"
						className="prendrerdvsingleserv"
					>
						<img
							alt=""
							src="https://ptgtzkrlzagjqwcntumc.supabase.co/storage/v1/object/public/solution_papiers/icons/lucidemailicon.svg"
						/>
						Nous contacter
                    </a>
				</div>
			</div>
			<div className="ctnservicesnaturalisationexpl">
				<div className="ctntxtnaturalisationsrv">
					<h2>{sub_title}</h2>
					<div className="ctnimgexplnsrvice">
						<img src={background_sub_image} alt=""/>
					</div>
					<span id="explanation_text"></span>
					<div className="ctnservicesnaturalisationicns">
						<div className="naturalisationicns">
							<img src="https://ptgtzkrlzagjqwcntumc.supabase.co/storage/v1/object/public/solution_papiers/icons/svgfolderheart%20(1).svg" />
							<span>La satisfaction de nos clients guide nos actions.</span>	
						</div>
						<div className="naturalisationicns">
							<img src="https://ptgtzkrlzagjqwcntumc.supabase.co/storage/v1/object/public/solution_papiers/icons/svgexperticon%20(1).svg" />
							<span>Des résultats rapides grâce à nos experts juridiques.</span>
						</div>
					</div>
				</div>
			</div>
			<div className="ctntakeappointmentexpert">
				<h3>Prenez rendez-vous avec nos experts</h3>
				<img
					alt=""
					src="https://ptgtzkrlzagjqwcntumc.supabase.co/storage/v1/object/public/solution_papiers/icons/calendarsvgicon%20(1).svg"
				/>
			</div>
			<Calendly />
		</main>
	);
};