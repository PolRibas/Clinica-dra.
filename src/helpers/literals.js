const literals = {
    eng: {
        home: 'Home',
        homeDescripcion: 'La mejora constante, garantía de un servicio excelente.',
        about: 'Team',
        services: 'Cirugy',
        titleCirugi: 'Cirugy treatments',
        contact: 'Contact',
        cuadro: 'Medical Team',
        secre: 'Secretary',
        instalations: 'Intalations',
        changeLenguage: 'Change Lenguage',
        sanitaria: 'Sanitary unit',
        sin: 'without cirugy',
        estetic: 'Estetic M.',
        con: 'With cirugy',
        medicalTeam: [{
            name: 'Dra. Sonia Rovira Vallvé',
            num: '19149',
            img: '../../public/drAvatar.png',
            smallDescription: '',
            bigDescription: '',
            especialidades: [],
            id: 'SoniaRovira'
            },{
            name: 'Dr. Ricardo Coronel Gagliardi',
            num: '37579',
            smallDescription: '',
            bigDescription: '',
            especialidades: [],
            id: 'RicardoCoronel'
            },{
            name: 'Dr. J. Ramón Lázaro Hijazo',
            num: '25761',
            smallDescription: '',
            bigDescription: '',
            especialidades: [],
            id: 'RamonLazaro'
            },
        ],
        sanitaryTeam: [{
            name: 'Merche Miquel Bono',
            smallDescription: '',
            bigDescription: '',
            especialidades: [],
            url: 'https://firebasestorage.googleapis.com/v0/b/clinica-dra-sonia-rovira-eace9.appspot.com/o/fotos-consulta%2Fmerche.jpg?alt=media&token=d62d9ddb-7fb2-4b54-879f-72b5b13f7628',
            id: 'MercedesMiquel'
            },{
            name: 'Silvia Palacios Diaz-Carralero',
            smallDescription: '',
            bigDescription: '',
            especialidades: [],
            url: 'https://firebasestorage.googleapis.com/v0/b/clinica-dra-sonia-rovira-eace9.appspot.com/o/fotos-consulta%2Fsilvia.jpg?alt=media&token=870a08ee-6606-4642-8d07-947406d4ad5f',
            id: 'SilviaPalacios'
            },{
            name: 'Mertxe Bello Villegas',
            smallDescription: '',
            bigDescription: '',
            especialidades: [],
            id: 'MertxeBello'
        }
        ],
        secretaria: [{
            name: 'Miriam González Rodriguez',
            id: 'MiriamGonzalez',
            smallDescription: '',
            bigDescription: '',
            especialidades: [],
            }],
        withCirugy: [{
            name:'Blefaroplastia',
            smallDescription: 'Descripción pendiente',
            bigDescription: '',
            question: '',
            id: 'Blefaroplastia',
            detils: [{
                name: 'completa',
                description: ''
            },{
                name: 'inferior',
                description: ''
            },{
                name: 'superior',
                description: ''
            }]
        },{
            name:'Prótesis de mamas',
            smallDescription: 'Descripción pendiente',
            bigDescription: '',
            question: '',
            id: 'ProtesisMamas'
        },{
            name:'Recambio Prótesis de mamas',
            smallDescription: 'Descripción pendiente',
            bigDescription: '',
            question: '',
            id: 'RecambioProtesisMamas',
            detils: [{
                name: 'paciente',
                description: ''
            },{
                name: 'no paciente',
                description: ''
            }]
        },{
            name:'Capsulectomia',
            smallDescription: 'Descripción pendiente',
            bigDescription: '',
            question: '',
            id: 'Capsulectomia'
        },{
            name:'Mastopexia',
            smallDescription: 'Descripción pendiente',
            bigDescription: '',
            question: '',
            id: 'Mastopexia'
        },{
            name:'Ginecomastia',
            smallDescription: 'Descripción pendiente',
            bigDescription: '',
            question: '',
            id: 'Ginecomastia'
        },{
            name:'Reducción mamaria',
            smallDescription: 'Descripción pendiente',
            bigDescription: '',
            question: '',
            id: 'ReduccionMamaria'
        },{
            name:'Prótesis',
            smallDescription: 'Descripción pendiente',
            bigDescription: '',
            question: '',
            id: 'Protesis',
            detils: [{
                name: 'Prótesis de glúteos',
                description: ''
            },{
                name: 'Prótesis de pectoral',
                description: ''
            },{
                name: 'Prótesis de gemelos',
                description: ''
            },{
                name: 'Prótesis de mentón',
                description: ''
            }]
        },{
            name:'Abdominoplastia',
            smallDescription: 'Descripción pendiente',
            bigDescription: '',
            question: '',
            id: 'Abdominoplastia',
            detils: [{
                name: 'Abdominoplastia con malla',
                description: ''
            },{
                name: 'Miniabdominoplastia',
                description: ''
            }]
        },{
            name:'Varselipo',
            smallDescription: 'Descripción pendiente',
            bigDescription: '',
            question: '',
            id: 'Varselipo',
            detils: [{
                name: 'Anestesia local',
                description: ''
            },{
                name: 'Anestesia general',
                description: ''
            }]
        },{
            name:'Nanograft ojeras',
            smallDescription: 'Descripción pendiente',
            bigDescription: '',
            question: '',
            id: 'Nanograft'
        },{
            name:'Bolas de bichat',
            smallDescription: 'Descripción pendiente',
            bigDescription: '',
            question: '',
            id: 'BolasDeBichat'
        },{
            name:'Rinoplastia',
            smallDescription: 'Descripción pendiente',
            bigDescription: '',
            question: '',
            id: 'Rinoplastia',
            detils: [{
                name: 'Rinoplastia secundaria',
                description: ''
            }]
        },{
            name:'Otoplastia',
            smallDescription: 'Descripción pendiente',
            bigDescription: '',
            question: '',
            id: 'Otoplastia'
        },{
            name:'Lifting',
            smallDescription: 'Descripción pendiente',
            bigDescription: '',
            question: '',
            id: 'Lifting',
            detils: [{
                name: 'Lifting crural',
                description: ''
            },{
                name: 'Lifting brazos',
                description: ''
            },{
                name: 'Lifting cuello',
                description: ''
            },{
                name: 'Lifting cervicofacial',
                description: ''
            },{
                name: 'Lifting de punto o minilifting',
                description: ''
            },{
                name: 'Lifting temporal',
                description: ''
            },{
                name: 'Lifting frontal',
                description: ''
            }]
        },{
            name:'Nuez de adan',
            smallDescription: 'Descripción pendiente',
            bigDescription: '',
            question: '',
            id: 'Nuez'
        },{
            name:'Reducción de frente',
            smallDescription: 'Descripción pendiente',
            bigDescription: '',
            question: '',
            id: 'ReduccionFrente'
        },{
            name:'Labioplastia',
            smallDescription: 'Descripción pendiente',
            bigDescription: '',
            question: '',
            id: 'Labioplastia'
        },{
            name:'Lóbulo rasgado',
            smallDescription: 'Descripción pendiente',
            bigDescription: '',
            question: '',
            id: 'LobuloRasgado'
        }]
    },
    esp: {
        home: 'Inicio',
        homeDescripcion: 'La mejora constante, garantía de un servicio excelente.',
        about: 'Equipo',
        services: 'Cirugía',
        titleCirugi: 'Tratamientos con cirugía',
        estetic: 'M. Estética',
        instalations: 'Instalaciones',
        contact: 'Contacto',
        cuadro: 'Cuadro Médico',
        secre: 'Secretaria',
        changeLenguage: 'Cambiar Idioma',
        sanitaria: 'Unidad sanitaria',
        sin: 'sin cirugía',
        con: 'Con cirugía',
        medicalTeam: [{
            name: 'Dra. Sonia Rovira Vallvé',
            num: '19149',
            smallDescription: '',
            img: './images/drAvatar.png',
            bigDescription: '',
            especialidades: [],
            id: 'SoniaRovira'
            },{
            name: 'Dr. Ricardo Coronel Gagliardi',
            num: '37579',
            smallDescription: '',
            bigDescription: '',
            especialidades: [],
            id: 'RicardoCoronel'
            },{
            name: 'Dr. J. Ramón Lázaro Hijazo',
            num: '25761',
            smallDescription: '',
            bigDescription: '',
            especialidades: [],
            id: 'RamonLazaro'
            },
        ],
        sanitaryTeam: [{
            name: 'Merche Miquel Bono',
            smallDescription: '',
            bigDescription: '',
            especialidades: [],
            id: 'MercedesMiquel'
            },{
            name: 'Silvia Palacios Diaz-Carralero',
            smallDescription: '',
            bigDescription: '',
            especialidades: [],
            id: 'SilviaPalacios'
            },{
            name: 'Mertxe Bello Villegas',
            smallDescription: '',
            bigDescription: '',
            especialidades: [],
            id: 'MertxeBello'
        }
        ],
        secretaria: [{
            name: 'Miriam González Rodriguez',
            id: 'MiramGonzalez',
            smallDescription: '',
            bigDescription: '',
            especialidades: [],
            }],
        withCirugy: [{
            name:'Blefaroplastia',
            smallDescription: 'Descripción pendiente',
            bigDescription: '',
            question: '',
            id: 'Blefaroplastia',
            detils: [{
                name: 'completa',
                description: ''
            },{
                name: 'inferior',
                description: ''
            },{
                name: 'superior',
                description: ''
            }]
        },{
            name:'Prótesis de mamas',
            smallDescription: 'Descripción pendiente',
            bigDescription: '',
            question: '',
            id: 'ProtesisMamas'
        },{
            name:'Recambio Prótesis de mamas',
            smallDescription: 'Descripción pendiente',
            bigDescription: '',
            question: '',
            id: 'RecambioProtesisMamas',
            detils: [{
                name: 'paciente',
                description: ''
            },{
                name: 'no paciente',
                description: ''
            }]
        },{
            name:'Capsulectomia',
            smallDescription: 'Descripción pendiente',
            bigDescription: '',
            question: '',
            id: 'Capsulectomia'
        },{
            name:'Mastopexia',
            smallDescription: 'Descripción pendiente',
            bigDescription: '',
            question: '',
            id: 'Mastopexia'
        },{
            name:'Ginecomastia',
            smallDescription: 'Descripción pendiente',
            bigDescription: '',
            question: '',
            id: 'Ginecomastia'
        },{
            name:'Reducción mamaria',
            smallDescription: 'Descripción pendiente',
            bigDescription: '',
            question: '',
            id: 'ReduccionMamaria'
        },{
            name:'Prótesis',
            smallDescription: 'Descripción pendiente',
            bigDescription: '',
            question: '',
            id: 'Protesis',
            detils: [{
                name: 'Prótesis de glúteos',
                description: ''
            },{
                name: 'Prótesis de pectoral',
                description: ''
            },{
                name: 'Prótesis de gemelos',
                description: ''
            },{
                name: 'Prótesis de mentón',
                description: ''
            }]
        },{
            name:'Abdominoplastia',
            smallDescription: 'Descripción pendiente',
            bigDescription: '',
            question: '',
            id: 'Abdominoplastia',
            detils: [{
                name: 'Abdominoplastia con malla',
                description: ''
            },{
                name: 'Miniabdominoplastia',
                description: ''
            }]
        },{
            name:'Varselipo',
            smallDescription: 'Descripción pendiente',
            bigDescription: '',
            question: '',
            id: 'Varselipo',
            detils: [{
                name: 'Anestesia local',
                description: ''
            },{
                name: 'Anestesia general',
                description: ''
            }]
        },{
            name:'Nanograft ojeras',
            smallDescription: 'Descripción pendiente',
            bigDescription: '',
            question: '',
            id: 'Nanograft'
        },{
            name:'Bolas de bichat',
            smallDescription: 'Descripción pendiente',
            bigDescription: '',
            question: '',
            id: 'BolasDeBichat'
        },{
            name:'Rinoplastia',
            smallDescription: 'Descripción pendiente',
            bigDescription: '',
            question: '',
            id: 'Rinoplastia',
            detils: [{
                name: 'Rinoplastia secundaria',
                description: ''
            }]
        },{
            name:'Otoplastia',
            smallDescription: 'Descripción pendiente',
            bigDescription: '',
            question: '',
            id: 'Otoplastia'
        },{
            name:'Lifting',
            smallDescription: 'Descripción pendiente',
            bigDescription: '',
            question: '',
            id: 'Lifting',
            detils: [{
                name: 'Lifting crural',
                description: ''
            },{
                name: 'Lifting brazos',
                description: ''
            },{
                name: 'Lifting cuello',
                description: ''
            },{
                name: 'Lifting cervicofacial',
                description: ''
            },{
                name: 'Lifting de punto o minilifting',
                description: ''
            },{
                name: 'Lifting temporal',
                description: ''
            },{
                name: 'Lifting frontal',
                description: ''
            }]
        },{
            name:'Nuez de adan',
            smallDescription: 'Descripción pendiente',
            bigDescription: '',
            question: '',
            id: 'Nuez'
        },{
            name:'Reducción de frente',
            smallDescription: 'Descripción pendiente',
            bigDescription: '',
            question: '',
            id: 'ReduccionFrente'
        },{
            name:'Labioplastia',
            smallDescription: 'Descripción pendiente',
            bigDescription: '',
            question: '',
            id: 'Labioplastia'
        },{
            name:'Lóbulo rasgado',
            smallDescription: 'Descripción pendiente',
            bigDescription: '',
            question: '',
            id: 'LobuloRasgado'
        }]
    },
}

export default literals