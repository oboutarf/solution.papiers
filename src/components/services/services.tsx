import Image from 'next/image';
import React from 'react';

import '@/styles/services/services.css';
import { LINKS_SERVICES_PAGE } from '@/utils/constants/constant';

export default function Services({

} : {

}) {

  	return (
  		<main className="wrapservicesallpg">
			<div className="ctnmainttlbgnosservicespg">
				<img
					alt=""
					className="bgimgnoservicespg"
					src="https://ptgtzkrlzagjqwcntumc.supabase.co/storage/v1/object/public/solution_papiers/image_services/serrage-main-avocats-scaled-e1669650763666.jpg"
				/>
				<h1>Nos services</h1>
				<h2>
					Bienvenue chez Solution Papiers, votre partenaire de confiance pour simplifier et faciliter toutes les démarches administratives liées à votre projet de vie.<br/>Notre équipe dédiée d'experts est là pour vous offrir un soutien personnalisé, une expertise inégalée, et une totale transparence. Faites-nous confiance pour rendre votre parcours plus fluide et plus serein.
				</h2>
			</div>
			<div className="ctnservicespgexplainrdrct">
			{ LINKS_SERVICES_PAGE.map((services, idx) => (
				<div
					className={`wrapservicessrvcspg${idx % 2 ? ' reverse' : ' noreverse'}`}
				>
					<div className="wrpservicettltxt">
						<h3>{services.title}</h3>
						<span>{services.descrpition}</span>
						<a
							href={services.link}
							className="txtservicespgbtn"
						>
							Découvrir
							<img
								alt=""
								src="https://ptgtzkrlzagjqwcntumc.supabase.co/storage/v1/object/public/solution_papiers/icons/lucideiconchevron.svg"
							/>
						</a>
					</div>
					<div className="wrpservicesimgrdrct">
						<a
							href={services.link}
							className="wrpsrvcspgimg"
						>
							<img
								src={services.img}
								alt=""
							/>
						</a>
					</div>
				</div>
			))}
			</div>
		</main>
	);
};
