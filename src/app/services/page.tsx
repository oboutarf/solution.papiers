import Image from 'next/image';
import React from 'react';
import OQTF from '@/components/services/oqtf';
import Services from '@/components/services/services';
import TitreDeSejour from '@/components/services/titre-de-sejour';
import Renouvellement from '@/components/services/renouvellement';
import Naturalisation from '@/components/services/naturalisation';

export default function ServicesServerAppRouter({
	params,
	searchParams,
} : {
	params: {
		slug: string
	},
	searchParams: {
		[key: string]: string | string[] | undefined
	}
}) {

	if (!Object.keys(searchParams).length)
		return (console.log('no key'), <Services />);
	else if (searchParams.key === 'renouvellement')
		return (console.log('renouvellement'), <Renouvellement />);
	else if (searchParams.key === 'titre-de-sejour')
		return (console.log('titre-de-sejour'), <TitreDeSejour />);
	else if (searchParams.key === 'naturalisation')
		return (console.log('naturalisation'), <Naturalisation />);
	else if (searchParams.key === 'oqtf')
		return (console.log('oqtf'), <OQTF />);
	return (<></>);
};
