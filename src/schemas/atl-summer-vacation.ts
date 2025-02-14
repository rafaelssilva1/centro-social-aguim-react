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
                name: 'Email',
                type: {
                    id: 'email',
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
                name: 'Data de nascimento',
                type: {
                    id: 'date',
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
                name: 'Idade',
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
                        name: 'Local de emprego',
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
                    {
                        name: 'Idade',
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
                        name: 'Local de emprego',
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
                    {
                        name: 'Idade',
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
        name: 'Irmão a frequentar o estabelecimento',
        type: {
            id: 'group'
        },
        columns: {
            value: '1'
        },
        fields: [
            {
                name: 'Irmãos no estabelecimento',
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
                name: 'Se sim, qual a resposta social:',
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
        name: 'Criança que necessita de algum apoio especial',
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
                name: 'Especifique:',
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
        name: 'Período a frequentar',
        type: {
            id: 'group'
        },
        columns: {
            value: '1'
        },
        fields: [
            {
                name: 'Início',
                type: {
                    id: 'date',
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
                name: 'Fim',
                type: {
                    id: 'date',
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
        name: 'Valor do pagamento',
        type: {
            id: 'group'
        },
        columns: {
            value: '1'
        },
        fields: [
            {
                name: 'Valor do pagamento',
                type: {
                    id: 'radio',
                },
                required: true,
                columns: {
                    value: '1',
                },
                options: [
                    '100€ por mês',
                    '25€ por semana'
                ],
                fields: []
            },
            {
                name: 'Nota: A frequência em actividades extra instituição (piscina, cinema, etc..) não está incluída na mensalidade.',
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
        ]
    },
]