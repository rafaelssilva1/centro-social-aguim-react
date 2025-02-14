export const schema = [
    {
        name: 'Identificação da criança',
        type: {
            id: 'group'
        },
        columns: {
            value: '1'
        },
        fields: [
            {
                name: 'Nome',
                type: {
                    id: 'text',
                },
                required: true,
                columns: {
                    value: '1',
                },
                validationRule: null,
                min: null,
                max: null,
                fields: []
            },
            {
                name: 'Data de nascimento',
                type: {
                    id: 'date',
                },
                required: true,
                columns: {
                    value: '0.33',
                },
                validationRule: null,
                min: null,
                max: null,
                fields: []
            },
            {
                name: 'Cédula ou Cartão de cidadão',
                type: {
                    id: 'text',
                },
                required: true,
                columns: {
                    value: '0.66',
                },
                validationRule: null,
                min: null,
                max: null,
                fields: []
            },
            {
                name: 'Morada',
                type: {
                    id: 'text',
                },
                required: true,
                columns: {
                    value: '1',
                },
                validationRule: null,
                min: null,
                max: null,
                fields: []
            },
            {
                name: 'Código-Postal',
                type: {
                    id: 'text',
                },
                required: true,
                columns: {
                    value: '0.33',
                },
                validationRule: null,
                min: null,
                max: null,
                fields: []
            },
            {
                name: 'Localidade',
                type: {
                    id: 'text',
                },
                required: true,
                columns: {
                    value: '0.66',
                },
                validationRule: null,
                min: null,
                max: null,
                fields: []
            },
            {
                name: 'Concelho',
                type: {
                    id: 'text',
                },
                required: true,
                columns: {
                    value: '0.33',
                },
                validationRule: null,
                min: null,
                max: null,
                fields: []
            },
            {
                name: 'Distrito',
                type: {
                    id: 'text',
                },
                required: true,
                columns: {
                    value: '0.66',
                },
                validationRule: null,
                min: null,
                max: null,
                fields: []
            },
            {
                name: 'Contacto telefónico',
                type: {
                    id: 'text',
                },
                required: true,
                columns: {
                    value: '0.33',
                },
                validationRule: null,
                min: null,
                max: null,
                fields: []
            },
            {
                name: 'Email',
                type: {
                    id: 'email',
                },
                required: true,
                columns: {
                    value: '0.66',
                },
                validationRule: null,
                min: null,
                max: null,
                fields: []
            },
            {
                name: 'Filho de',
                type: {
                    id: 'text',
                },
                required: true,
                columns: {
                    value: '1',
                },
                validationRule: null,
                min: null,
                max: null,
                fields: []
            },
            {
                name: 'E filho de',
                type: {
                    id: 'text',
                },
                required: false,
                columns: {
                    value: '1',
                },
                validationRule: null,
                min: null,
                max: null,
                fields: []
            },
            {
                name: 'Encarregado de educação',
                type: {
                    id: 'fieldset',
                },
                columns: {
                    value: '1'
                },
                fields: [
                    {
                        name: 'Nome',
                        type: {
                            id: 'text',
                        },
                        required: true,
                        columns: {
                            value: '0.5',
                        },
                        validationRule: null,
                        min: null,
                        max: null,
                        fields: []
                    },
                    {
                        name: 'Parentesco',
                        type: {
                            id: 'text',
                        },
                        required: true,
                        columns: {
                            value: '0.5',
                        },
                        validationRule: null,
                        min: null,
                        max: null,
                        fields: []
                    },
                ]
            },
        ]
    },
    {
        name: 'Composição do Agregado Familiar',
        type: {
            id: 'group'
        },
        columns: {
            value: '1'
        },
        fields: [
            {
                name: 'Familiar A',
                type: {
                    id: 'fieldset',
                },
                columns: {
                    value: '1'
                },
                fields: [
                    {
                        name: 'Nome',
                        type: {
                            id: 'text',
                        },
                        required: true,
                        columns: {
                            value: '0.2',
                        },
                        validationRule: null,
                        min: null,
                        max: null,
                        fields: []
                    },
                    {
                        name: 'Idade',
                        type: {
                            id: 'text',
                        },
                        required: true,
                        columns: {
                            value: '0.2',
                        },
                        validationRule: null,
                        min: null,
                        max: null,
                        fields: []
                    },
                    {
                        name: 'Estado civil',
                        type: {
                            id: 'text',
                        },
                        required: true,
                        columns: {
                            value: '0.2',
                        },
                        validationRule: null,
                        min: null,
                        max: null,
                        fields: []
                    },
                    {
                        name: 'Parentesco',
                        type: {
                            id: 'text',
                        },
                        required: true,
                        columns: {
                            value: '0.2',
                        },
                        validationRule: null,
                        min: null,
                        max: null,
                        fields: []
                    },
                    {
                        name: 'Profissão',
                        type: {
                            id: 'text',
                        },
                        required: true,
                        columns: {
                            value: '0.2',
                        },
                        validationRule: null,
                        min: null,
                        max: null,
                        fields: []
                    },
                ]
            },
            {
                name: 'Familiar B',
                type: {
                    id: 'fieldset',
                },
                columns: {
                    value: '1'
                },
                fields: [
                    {
                        name: 'Nome',
                        type: {
                            id: 'text',
                        },
                        required: false,
                        columns: {
                            value: '0.2',
                        },
                        validationRule: null,
                        min: null,
                        max: null,
                        fields: []
                    },
                    {
                        name: 'Idade',
                        type: {
                            id: 'text',
                        },
                        required: false,
                        columns: {
                            value: '0.2',
                        },
                        validationRule: null,
                        min: null,
                        max: null,
                        fields: []
                    },
                    {
                        name: 'Estado civil',
                        type: {
                            id: 'text',
                        },
                        required: false,
                        columns: {
                            value: '0.2',
                        },
                        validationRule: null,
                        min: null,
                        max: null,
                        fields: []
                    },
                    {
                        name: 'Parentesco',
                        type: {
                            id: 'text',
                        },
                        required: false,
                        columns: {
                            value: '0.2',
                        },
                        validationRule: null,
                        min: null,
                        max: null,
                        fields: []
                    },
                    {
                        name: 'Profissão',
                        type: {
                            id: 'text',
                        },
                        required: false,
                        columns: {
                            value: '0.2',
                        },
                        validationRule: null,
                        min: null,
                        max: null,
                        fields: []
                    },
                ]
            },
            {
                name: 'Familiar C',
                type: {
                    id: 'fieldset',
                },
                columns: {
                    value: '1'
                },
                fields: [
                    {
                        name: 'Nome',
                        type: {
                            id: 'text',
                        },
                        required: false,
                        columns: {
                            value: '0.2',
                        },
                        validationRule: null,
                        min: null,
                        max: null,
                        fields: []
                    },
                    {
                        name: 'Idade',
                        type: {
                            id: 'text',
                        },
                        required: false,
                        columns: {
                            value: '0.2',
                        },
                        validationRule: null,
                        min: null,
                        max: null,
                        fields: []
                    },
                    {
                        name: 'Estado civil',
                        type: {
                            id: 'text',
                        },
                        required: false,
                        columns: {
                            value: '0.2',
                        },
                        validationRule: null,
                        min: null,
                        max: null,
                        fields: []
                    },
                    {
                        name: 'Parentesco',
                        type: {
                            id: 'text',
                        },
                        required: false,
                        columns: {
                            value: '0.2',
                        },
                        validationRule: null,
                        min: null,
                        max: null,
                        fields: []
                    },
                    {
                        name: 'Profissão',
                        type: {
                            id: 'text',
                        },
                        required: false,
                        columns: {
                            value: '0.2',
                        },
                        validationRule: null,
                        min: null,
                        max: null,
                        fields: []
                    },
                ]
            },
            {
                name: 'Familiar D',
                type: {
                    id: 'fieldset',
                },
                columns: {
                    value: '1'
                },
                fields: [
                    {
                        name: 'Nome',
                        type: {
                            id: 'text',
                        },
                        required: false,
                        columns: {
                            value: '0.2',
                        },
                        validationRule: null,
                        min: null,
                        max: null,
                        fields: []
                    },
                    {
                        name: 'Idade',
                        type: {
                            id: 'text',
                        },
                        required: false,
                        columns: {
                            value: '0.2',
                        },
                        validationRule: null,
                        min: null,
                        max: null,
                        fields: []
                    },
                    {
                        name: 'Estado civil',
                        type: {
                            id: 'text',
                        },
                        required: false,
                        columns: {
                            value: '0.2',
                        },
                        validationRule: null,
                        min: null,
                        max: null,
                        fields: []
                    },
                    {
                        name: 'Parentesco',
                        type: {
                            id: 'text',
                        },
                        required: false,
                        columns: {
                            value: '0.2',
                        },
                        validationRule: null,
                        min: null,
                        max: null,
                        fields: []
                    },
                    {
                        name: 'Profissão',
                        type: {
                            id: 'text',
                        },
                        required: false,
                        columns: {
                            value: '0.2',
                        },
                        validationRule: null,
                        min: null,
                        max: null,
                        fields: []
                    },
                ]
            },
            {
                name: 'Familiar E',
                type: {
                    id: 'fieldset',
                },
                columns: {
                    value: '1'
                },
                fields: [
                    {
                        name: 'Nome',
                        type: {
                            id: 'text',
                        },
                        required: false,
                        columns: {
                            value: '0.2',
                        },
                        validationRule: null,
                        min: null,
                        max: null,
                        fields: []
                    },
                    {
                        name: 'Idade',
                        type: {
                            id: 'text',
                        },
                        required: false,
                        columns: {
                            value: '0.2',
                        },
                        validationRule: null,
                        min: null,
                        max: null,
                        fields: []
                    },
                    {
                        name: 'Estado civil',
                        type: {
                            id: 'text',
                        },
                        required: false,
                        columns: {
                            value: '0.2',
                        },
                        validationRule: null,
                        min: null,
                        max: null,
                        fields: []
                    },
                    {
                        name: 'Parentesco',
                        type: {
                            id: 'text',
                        },
                        required: false,
                        columns: {
                            value: '0.2',
                        },
                        validationRule: null,
                        min: null,
                        max: null,
                        fields: []
                    },
                    {
                        name: 'Profissão',
                        type: {
                            id: 'text',
                        },
                        required: false,
                        columns: {
                            value: '0.2',
                        },
                        validationRule: null,
                        min: null,
                        max: null,
                        fields: []
                    },
                ]
            },
            {
                name: 'Familiar F',
                type: {
                    id: 'fieldset',
                },
                columns: {
                    value: '1'
                },
                fields: [
                    {
                        name: 'Nome',
                        type: {
                            id: 'text',
                        },
                        required: false,
                        columns: {
                            value: '0.2',
                        },
                        validationRule: null,
                        min: null,
                        max: null,
                        fields: []
                    },
                    {
                        name: 'Idade',
                        type: {
                            id: 'text',
                        },
                        required: false,
                        columns: {
                            value: '0.2',
                        },
                        validationRule: null,
                        min: null,
                        max: null,
                        fields: []
                    },
                    {
                        name: 'Estado civil',
                        type: {
                            id: 'text',
                        },
                        required: false,
                        columns: {
                            value: '0.2',
                        },
                        validationRule: null,
                        min: null,
                        max: null,
                        fields: []
                    },
                    {
                        name: 'Parentesco',
                        type: {
                            id: 'text',
                        },
                        required: false,
                        columns: {
                            value: '0.2',
                        },
                        validationRule: null,
                        min: null,
                        max: null,
                        fields: []
                    },
                    {
                        name: 'Profissão',
                        type: {
                            id: 'text',
                        },
                        required: false,
                        columns: {
                            value: '0.2',
                        },
                        validationRule: null,
                        min: null,
                        max: null,
                        fields: []
                    },
                ]
            },
            {
                name: 'Familiar G',
                type: {
                    id: 'fieldset',
                },
                columns: {
                    value: '1'
                },
                fields: [
                    {
                        name: 'Nome',
                        type: {
                            id: 'text',
                        },
                        required: false,
                        columns: {
                            value: '0.2',
                        },
                        validationRule: null,
                        min: null,
                        max: null,
                        fields: []
                    },
                    {
                        name: 'Idade',
                        type: {
                            id: 'text',
                        },
                        required: false,
                        columns: {
                            value: '0.2',
                        },
                        validationRule: null,
                        min: null,
                        max: null,
                        fields: []
                    },
                    {
                        name: 'Estado civil',
                        type: {
                            id: 'text',
                        },
                        required: false,
                        columns: {
                            value: '0.2',
                        },
                        validationRule: null,
                        min: null,
                        max: null,
                        fields: []
                    },
                    {
                        name: 'Parentesco',
                        type: {
                            id: 'text',
                        },
                        required: false,
                        columns: {
                            value: '0.2',
                        },
                        validationRule: null,
                        min: null,
                        max: null,
                        fields: []
                    },
                    {
                        name: 'Profissão',
                        type: {
                            id: 'text',
                        },
                        required: false,
                        columns: {
                            value: '0.2',
                        },
                        validationRule: null,
                        min: null,
                        max: null,
                        fields: []
                    },
                ]
            },
            {
                name: 'Familiar H',
                type: {
                    id: 'fieldset',
                },
                columns: {
                    value: '1'
                },
                fields: [
                    {
                        name: 'Nome',
                        type: {
                            id: 'text',
                        },
                        required: false,
                        columns: {
                            value: '0.2',
                        },
                        validationRule: null,
                        min: null,
                        max: null,
                        fields: []
                    },
                    {
                        name: 'Idade',
                        type: {
                            id: 'text',
                        },
                        required: false,
                        columns: {
                            value: '0.2',
                        },
                        validationRule: null,
                        min: null,
                        max: null,
                        fields: []
                    },
                    {
                        name: 'Estado civil',
                        type: {
                            id: 'text',
                        },
                        required: false,
                        columns: {
                            value: '0.2',
                        },
                        validationRule: null,
                        min: null,
                        max: null,
                        fields: []
                    },
                    {
                        name: 'Parentesco',
                        type: {
                            id: 'text',
                        },
                        required: false,
                        columns: {
                            value: '0.2',
                        },
                        validationRule: null,
                        min: null,
                        max: null,
                        fields: []
                    },
                    {
                        name: 'Profissão',
                        type: {
                            id: 'text',
                        },
                        required: false,
                        columns: {
                            value: '0.2',
                        },
                        validationRule: null,
                        min: null,
                        max: null,
                        fields: []
                    },
                ]
            },
        ]
    },
    {
        name: 'Serviços Pretendidos',
        type: {
            id: 'group'
        },
        columns: {
            value: '1'
        },
        fields: [
            {
                name: 'Já frequentou Atividades dos Tempos livres',
                type: {
                    id: 'checkbox',
                },
                required: true,
                columns: {
                    value: '1',
                },
                options: [
                    'Almoço',
                    'Ateliers em funcionamento'
                ],
                fields: []
            },
            {
                name: 'Sugestões: O que gostaria que o ATL tivesse como atividades extra?',
                type: {
                    id: 'textarea',
                },
                required: false,
                columns: {
                    value: '1',
                },
                validationRule: null,
                min: null,
                max: null,
                fields: []
            },
        ]
    },
    {
        name: 'Documentos',
        type: {
            id: 'group'
        },
        columns: {
            value: '1'
        },
        fields: [
            {
                name: 'Por favor, carregue os seguintes documentos',
                type: {
                    id: 'footnotes',
                },
                required: false,
                columns: {
                    value: '1',
                },
                validationRule: null,
                min: null,
                max: null,
                fields: []
            },
            {
                name: 'Tipos de documentos aceites: zip, PDF, jpg, png.',
                type: {
                    id: 'footnotes',
                },
                variant: 'small',
                required: false,
                columns: {
                    value: '1',
                },
                validationRule: null,
                min: null,
                max: null,
                fields: []
            },
            {
                name: 'Declaração de IRS e recibo dos últimos dois vencimentos do Pai e da Mãe',
                type: {
                    id: 'file',
                },
                required: false,
                columns: {
                    value: '1',
                },
                validationRule: null,
                min: null,
                max: null,
                fields: []
            },
            {
                name: 'Declaração médica da criança onde refira situação de patologias (ex: diabetes, asma) e onde declare a vacinação em dia',
                type: {
                    id: 'file',
                },
                required: false,
                columns: {
                    value: '1',
                },
                validationRule: null,
                min: null,
                max: null,
                fields: []
            },
            {
                name: 'Recibo de renda de casa ou comprovativo do valor de empréstimo à habitação',
                type: {
                    id: 'file',
                },
                required: false,
                columns: {
                    value: '1',
                },
                validationRule: null,
                min: null,
                max: null,
                fields: []
            },
            {
                name: 'Cartão de Cidadão pais e crianças (caso ainda não tenha entregue nos anos anteriores)',
                type: {
                    id: 'file',
                },
                required: false,
                columns: {
                    value: '1',
                },
                validationRule: null,
                min: null,
                max: null,
                fields: []
            },
        ]
    }
]