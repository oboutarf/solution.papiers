import React from 'react';
import OQTF from '@/components/services/oqtf';
import TitreDeSejour from '@/components/services/titre-de-sejour';
import Naturalisation from '@/components/services/naturalisation';

export default function ServicesServerAppRouter({
	params,
} : {
	params: {
        id: string
    }
}) {

	if (params.id === 'titre-de-sejour')
		return (console.log('titre-de-sejour'), <TitreDeSejour />);
	else if (params.id === 'naturalisation')
		return (console.log('naturalisation'), <Naturalisation />);
	else if (params.id === 'oqtf')
		return (console.log('oqtf'), <OQTF />);
	return (<></>);
};
