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
                    value: '0.5',
                },
                validationRule: null,
                min: null,
                max: null,
                fields: []
            },
            {
                name: 'Nome pelo qual é tratado',
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
                name: 'Email',
                type: {
                    id: 'email',
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
                    value: '1',
                },
                validationRule: null,
                min: null,
                max: null,
                fields: []
            },
            {
                name: 'Idade',
                type: {
                    id: 'fieldset',
                },
                columns: {
                    value: '1'
                },
                fields: [
                    {
                        name: 'Anos',
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
                        name: 'Meses',
                        type: {
                            id: 'text',
                        },
                        required: false,
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
            {
                name: 'Morada',
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
                name: 'Código postal',
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
                    value: '0.33',
                },
                validationRule: null,
                min: null,
                max: null,
                fields: []
            },
        ]
    },
    {
        name: 'Filiação',
        type: {
            id: 'group'
        },
        columns: {
            value: '1'
        },
        fields: [
            {
                name: 'Mãe',
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
                            value: '0.66',
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
                        name: 'Profissão',
                        type: {
                            id: 'text',
                        },
                        required: true,
                        columns: {
                            value: '0.25',
                        },
                        validationRule: null,
                        min: null,
                        max: null,
                        fields: []
                    },
                    {
                        name: 'Local de emprego',
                        type: {
                            id: 'text',
                        },
                        required: true,
                        columns: {
                            value: '0.25',
                        },
                        validationRule: null,
                        min: null,
                        max: null,
                        fields: []
                    },
                    {
                        name: 'Horário de trabalho',
                        type: {
                            id: 'text',
                        },
                        required: true,
                        columns: {
                            value: '0.25',
                        },
                        validationRule: null,
                        min: null,
                        max: null,
                        fields: []
                    },
                    {
                        name: 'Telefone',
                        type: {
                            id: 'text',
                        },
                        required: true,
                        columns: {
                            value: '0.25',
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
                            value: '0.33',
                        },
                        validationRule: null,
                        min: null,
                        max: null,
                        fields: []
                    },
                    {
                        name: 'Código postal',
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
                            value: '0.33',
                        },
                        validationRule: null,
                        min: null,
                        max: null,
                        fields: []
                    },
                    {
                        name: 'Telefone',
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
                        name: 'Telemóvel',
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
                ]
            },
            {
                name: 'Pai',
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
                            value: '0.66',
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
                        name: 'Profissão',
                        type: {
                            id: 'text',
                        },
                        required: true,
                        columns: {
                            value: '0.25',
                        },
                        validationRule: null,
                        min: null,
                        max: null,
                        fields: []
                    },
                    {
                        name: 'Local de emprego',
                        type: {
                            id: 'text',
                        },
                        required: true,
                        columns: {
                            value: '0.25',
                        },
                        validationRule: null,
                        min: null,
                        max: null,
                        fields: []
                    },
                    {
                        name: 'Horário de trabalho',
                        type: {
                            id: 'text',
                        },
                        required: true,
                        columns: {
                            value: '0.25',
                        },
                        validationRule: null,
                        min: null,
                        max: null,
                        fields: []
                    },
                    {
                        name: 'Telefone',
                        type: {
                            id: 'text',
                        },
                        required: true,
                        columns: {
                            value: '0.25',
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
                            value: '0.33',
                        },
                        validationRule: null,
                        min: null,
                        max: null,
                        fields: []
                    },
                    {
                        name: 'Código postal',
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
                            value: '0.33',
                        },
                        validationRule: null,
                        min: null,
                        max: null,
                        fields: []
                    },
                    {
                        name: 'Telefone',
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
                        name: 'Telemóvel',
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
                ]
            },
        ]
    },
    {
        name: 'Informações complementares',
        type: {
            id: 'group'
        },
        columns: {
            value: '1'
        },
        fields: [
            {
                name: 'Necessidade de apoio especial',
                type: {
                    id: 'radio',
                },
                required: true,
                columns: {
                    value: '1',
                },
                options: [
                    'Sim',
                    'Não'
                ],
                fields: []
            },
            {
                name: 'Especifique',
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
        ]
    },
    {
        name: 'Caracterização do agregado familiar',
        type: {
            id: 'group'
        },
        columns: {
            value: '1'
        },
        fields: [
            {
                name: 'Familiar 1',
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
                            value: '0.25',
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
                            value: '0.25',
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
                            value: '0.25',
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
                            value: '0.25',
                        },
                        validationRule: null,
                        min: null,
                        max: null,
                        fields: []
                    },
                ]
            },
            {
                name: 'Familiar 2',
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
                            value: '0.25',
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
                            value: '0.25',
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
                            value: '0.25',
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
                            value: '0.25',
                        },
                        validationRule: null,
                        min: null,
                        max: null,
                        fields: []
                    },
                ]
            },
            {
                name: 'Familiar 3',
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
                            value: '0.25',
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
                            value: '0.25',
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
                            value: '0.25',
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
                            value: '0.25',
                        },
                        validationRule: null,
                        min: null,
                        max: null,
                        fields: []
                    },
                ]
            },
            {
                name: 'Familiar 4',
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
                            value: '0.25',
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
                            value: '0.25',
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
                            value: '0.25',
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
                            value: '0.25',
                        },
                        validationRule: null,
                        min: null,
                        max: null,
                        fields: []
                    },
                ]
            },
            {
                name: 'Familiar 5',
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
                            value: '0.25',
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
                            value: '0.25',
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
                            value: '0.25',
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
                            value: '0.25',
                        },
                        validationRule: null,
                        min: null,
                        max: null,
                        fields: []
                    },
                ]
            },
            {
                name: 'Local de residência do agregado familiar',
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
                name: 'Agregado familiar beneficiário de RSI',
                type: {
                    id: 'radio',
                },
                required: true,
                columns: {
                    value: '1',
                },
                options: [
                    'Sim',
                    'Não'
                ],
                fields: []
            },
        ]
    },
    {
        name: 'Frequência de outros estabelecimentos ou respostas sociais',
        type: {
            id: 'group'
        },
        columns: {
            value: '1'
        },
        fields: [
            {
                name: 'Frequência de outras respostas',
                type: {
                    id: 'radio',
                },
                required: true,
                columns: {
                    value: '0.5',
                },
                options: [
                    'Sim',
                    'Não'
                ],
                fields: []
            },
            {
                name: 'Se sim, qual',
                type: {
                    id: 'text',
                },
                required: false,
                columns: {
                    value: '0.5',
                },
                validationRule: null,
                min: null,
                max: null,
                fields: []
            },
            {
                name: 'Encaminhamento de outros serviços',
                type: {
                    id: 'radio',
                },
                required: true,
                columns: {
                    value: '0.5',
                },
                options: [
                    'Sim',
                    'Não'
                ],
                fields: []
            },
            {
                name: 'Especifique',
                type: {
                    id: 'text',
                },
                required: false,
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
    {
        name: 'Outros elementos relativos à criança',
        type: {
            id: 'group'
        },
        columns: {
            value: '1'
        },
        fields: [
            {
                name: 'Criança a cargo de',
                type: {
                    id: 'radio',
                },
                required: true,
                columns: {
                    value: '1',
                },
                options: [
                    'Pais',
                    'Pai',
                    'Mãe',
                    'Outros'
                ],
                fields: []
            },
            {
                name: 'Se está a cargo de outra pessoa',
                type: {
                    id: 'fieldset',
                },
                columns: {
                    value: '1'
                },
                fields: [
                    {
                        name: 'Quem',
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
                        name: 'Motivo',
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
                ]
            },
        ]
    },
    {
        name: 'Identificação da Pessoa a Quem a Criança Está a Cargo (quando não são os pais)',
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
                name: 'Profissão',
                type: {
                    id: 'text',
                },
                required: false,
                columns: {
                    value: '0.33',
                },
                validationRule: null,
                min: null,
                max: null,
                fields: []
            },
            {
                name: 'Local de emprego',
                type: {
                    id: 'text',
                },
                required: false,
                columns: {
                    value: '0.33',
                },
                validationRule: null,
                min: null,
                max: null,
                fields: []
            },
            {
                name: 'Telefone',
                type: {
                    id: 'text',
                },
                required: false,
                columns: {
                    value: '0.33',
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
                required: false,
                columns: {
                    value: '0.33',
                },
                validationRule: null,
                min: null,
                max: null,
                fields: []
            },
            {
                name: 'Código postal',
                type: {
                    id: 'text',
                },
                required: false,
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
                required: false,
                columns: {
                    value: '0.33',
                },
                validationRule: null,
                min: null,
                max: null,
                fields: []
            },
            {
                name: 'Telefone',
                type: {
                    id: 'text',
                },
                required: false,
                columns: {
                    value: '0.33',
                },
                validationRule: null,
                min: null,
                max: null,
                fields: []
            },
            {
                name: 'Telemóvel',
                type: {
                    id: 'text',
                },
                required: false,
                columns: {
                    value: '0.33',
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
                required: false,
                columns: {
                    value: '0.33',
                },
                validationRule: null,
                min: null,
                max: null,
                fields: []
            },
        ]
    },
    {
        name: 'Situação de saúde',
        type: {
            id: 'group'
        },
        columns: {
            value: '1'
        },
        fields: [
            {
                name: 'Doenças que teve até à data',
                type: {
                    id: 'fieldset',
                },
                columns: {
                    value: '1'
                },
                fields: [
                    {
                        name: 'Sarampo',
                        type: {
                            id: 'radio',
                        },
                        required: true,
                        columns: {
                            value: '0.25',
                        },
                        options: [
                            'Sim',
                            'Não'
                        ],
                        fields: []
                    },
                    {
                        name: 'Papeira',
                        type: {
                            id: 'radio',
                        },
                        required: true,
                        columns: {
                            value: '0.25',
                        },
                        options: [
                            'Sim',
                            'Não'
                        ],
                        fields: []
                    },
                    {
                        name: 'Varicela',
                        type: {
                            id: 'radio',
                        },
                        required: true,
                        columns: {
                            value: '0.25',
                        },
                        options: [
                            'Sim',
                            'Não'
                        ],
                        fields: []
                    },
                    {
                        name: 'Outros',
                        type: {
                            id: 'radio',
                        },
                        required: true,
                        columns: {
                            value: '0.25',
                        },
                        options: [
                            'Sim',
                            'Não'
                        ],
                        fields: []
                    },
                ]
            },
            {
                name: 'Sofre de alguma doença',
                type: {
                    id: 'fieldset',
                },
                columns: {
                    value: '1'
                },
                fields: [
                    {
                        name: 'Alergias',
                        type: {
                            id: 'radio',
                        },
                        required: true,
                        columns: {
                            value: '0.33',
                        },
                        options: [
                            'Sim',
                            'Não'
                        ],
                        fields: []
                    },
                    {
                        name: 'Especifique',
                        type: {
                            id: 'text',
                        },
                        required: false,
                        columns: {
                            value: '0.66',
                        },
                        validationRule: null,
                        min: null,
                        max: null,
                        fields: []
                    },
                    {
                        name: 'Doenças',
                        type: {
                            id: 'radio',
                        },
                        required: true,
                        columns: {
                            value: '0.33',
                        },
                        options: [
                            'Sim',
                            'Não'
                        ],
                        fields: []
                    },
                    {
                        name: 'Especifique',
                        type: {
                            id: 'text',
                        },
                        required: false,
                        columns: {
                            value: '0.66',
                        },
                        validationRule: null,
                        min: null,
                        max: null,
                        fields: []
                    },
                    {
                        name: 'NEE',
                        type: {
                            id: 'radio',
                        },
                        required: true,
                        columns: {
                            value: '0.33',
                        },
                        options: [
                            'Sim',
                            'Não'
                        ],
                        fields: []
                    },
                    {
                        name: 'Se sim, quais',
                        type: {
                            id: 'radio',
                        },
                        required: false,
                        columns: {
                            value: '0.66',
                        },
                        options: [
                            'Def. Auditiva',
                            'Def. Visual',
                            'Def. Motora',
                            'Multi-deficiência',
                        ],
                        fields: []
                    },
                    {
                        name: 'Especifique',
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
                ]
            },
        ]
    },
    {
        name: 'Horário previsto de frequência do estabelecimento',
        type: {
            id: 'group'
        },
        columns: {
            value: '1'
        },
        fields: [
            {
                name: 'Entrada',
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
                name: 'Saída',
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
    {
        name: 'Elemento a quem a criança pode ser entregue quando não são os pais',
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
                required: false,
                columns: {
                    value: '0.66',
                },
                validationRule: null,
                min: null,
                max: null,
                fields: []
            },
            {
                name: 'Telefone',
                type: {
                    id: 'text',
                },
                required: false,
                columns: {
                    value: '0.33',
                },
                validationRule: null,
                min: null,
                max: null,
                fields: []
            },
            {
                name: 'Nome',
                type: {
                    id: 'text',
                },
                required: false,
                columns: {
                    value: '0.66',
                },
                validationRule: null,
                min: null,
                max: null,
                fields: []
            },
            {
                name: 'Telefone',
                type: {
                    id: 'text',
                },
                required: false,
                columns: {
                    value: '0.33',
                },
                validationRule: null,
                min: null,
                max: null,
                fields: []
            },
        ]
    },
    {
        name: 'Pessoa a contactar em situação de emergência',
        type: {
            id: 'group'
        },
        columns: {
            value: '1'
        },
        fields: [
            {
                name: 'Pessoa a contactar',
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
                name: 'Parentesco',
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
                name: 'Telemóvel',
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