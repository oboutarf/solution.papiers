import React from 'react';
import MultiServiceReceptacle from '@/components/services/multi-service-receptacle';
import { SERVICES_PAGES_PROVIDE_CONTENT } from '@/utils/constants/constant';

export default function ServicesServerAppRouter({
	params,
} : {
	params: {
        id: string
    }
}) {
	var index_content_provider = 0;

	if (params.id === 'oqtf')
		index_content_provider = 0;
	else if (params.id === 'naturalisation')
		index_content_provider = 1;
	else if (params.id === 'titre-de-sejour')
		index_content_provider = 2;

	return (
		<MultiServiceReceptacle
			idx={index_content_provider}
			title={SERVICES_PAGES_PROVIDE_CONTENT[index_content_provider].title}
			sub_title={SERVICES_PAGES_PROVIDE_CONTENT[index_content_provider].sub_title}
			explanation_text={SERVICES_PAGES_PROVIDE_CONTENT[index_content_provider].explanation_text}
			background_main_image={SERVICES_PAGES_PROVIDE_CONTENT[index_content_provider].background_main_image}
			background_sub_image={SERVICES_PAGES_PROVIDE_CONTENT[index_content_provider].background_sub_image}
		/>
	);
};
