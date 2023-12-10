export const LINKS_NAVBAR = [
    {  
        text: 'Nos services',
        link: '/nos-services'
    },
    {  
        text: 'Qui sommes-nous?',
        link: '/qui-sommes-nous'
    }
];

export const LINKS_SERVICES_HOMEPAGE = [
    {
        text: 'Naturalisation française',
        img: 'https://ptgtzkrlzagjqwcntumc.supabase.co/storage/v1/object/public/solution_papiers/image_services/naturalisationpapierssolution.jpg'
    },
    {  
        text: 'Renouvellement titre de séjour',
        img: 'https://ptgtzkrlzagjqwcntumc.supabase.co/storage/v1/object/public/solution_papiers/image_services/renouvellementsolutionpapiers.jpg'
    },
    {  
        text: 'Titre de séjour',
        img: 'https://ptgtzkrlzagjqwcntumc.supabase.co/storage/v1/object/public/solution_papiers/image_services/passeportsolutionspapier.jpeg'
    },
    {  
        text: 'Recours OQTF',
        img: 'https://ptgtzkrlzagjqwcntumc.supabase.co/storage/v1/object/public/solution_papiers/nonaloqtfsolutionpapier.jpg'
    }
];

export const PERSONNES_HISTOIRES_HOMEPAGE = [
    {
        people_img: "https://ptgtzkrlzagjqwcntumc.supabase.co/storage/v1/object/public/solution_papiers/photos_personnes/0-removebg-preview.png",
        name: "Carlos",
        histoire: " Carlos, un ingénieur brésilien, vit en France depuis cinq ans. Il est marié à une Française et veut obtenir la nationalité française.Le processus d'acquisition de la nationalité semble intimidant pour Carlos, en particulier la préparation de l'entretien et la constitution du dossier.Votre service offre à Carlos un accompagnement personnalisé. Un expert le guide à travers le processus, l'aidant à rassembler les documents nécessaires et à se préparer pour l'entretien.Carlos réussit son entretien et obtient la nationalité française. Il est extrêmement satisfait du soutien reçu, qui a rendu ce moment important de sa vie beaucoup plus facile et moins stressant."
    },
]

export const DROPDOWN_CONTACT_US = [
    "VISA",
    "Recours OQTF",
    "Titre de séjour",
    "Renouvellement de titre de séjour",
    "Naturalisation française"
];

export const LIST_REDIRECTS_SERVICES = [
    {
        link: "/contact",
        text: "Naturalisation française"
    },
    {
        link: "/contact",
        text: "Recours OQTF"
    },
    {
        link: "/contact",
        text: "Titre de séjour"
    },
    {
        link: "/contact",
        text: "Renouvellement de titre de séjour"
    }
];
export const EMAIL_VALIDATOR = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const PHONE_VALIDATOR = /^\+?\d{5,15}$/;
