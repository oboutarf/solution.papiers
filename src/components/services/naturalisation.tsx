import Image from 'next/image';
import React from 'react';

import '@/styles/services/naturalisation.css';
import Calendly from '../calendly/calendly-form';

export default function Naturalisation({

} : {

}) {

  	return (
		<main className="ctnservicesinglepage">
			<div className="ctnmainimgsrvsngl">
				<img
					alt=""
					className="mnimgsnglsrv"
					src="https://ptgtzkrlzagjqwcntumc.supabase.co/storage/v1/object/public/solution_papiers/image_services/1600x580-paris-3.avif"
				/>
				<div className="ctnmainimgttlsrvsngl">
					<h1>La Naturalisation Francaise</h1>
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
			<Calendly />
		</main>
	);
};