export const schema = [
    {
        name: 'Identificação do cliente',
        type: {
            id: 'group'
        },
        columns: {
            value: '1'
        },
        fields: [
            {
                name: 'Nome completo',
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
                name: 'Nº de Sócio',
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
                name: 'Data de nascimento',
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
                name: 'Nº de BI/Cartão de cidadão',
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
                name: 'NIF',
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
                name: 'Contactos telefónicos',
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
        ]
    },
    {
        name: 'Aulas',
        type: {
            id: 'group'
        },
        columns: {
            value: '1'
        },
        fields: [
            {
                name: 'O cliente quer usufruir das seguintes aulas:',
                type: {
                    id: 'checkbox',
                },
                required: false,
                columns: {
                    value: '1',
                },
                options: [
                    'Cárdio (Reg. Livre)',
                    'Cárdio (3x / Semana)',
                    'Tabata (3x / Semana)',
                    'Pilates (1x Semana)',
                    'Pilates (2x Semana)',
                    'Pilates (1x Semana) + Cárdio (2x)',
                    'Pilates (2x Semana) + Cárdio (1x)',
                    'Classes (1x Semana)',
                    'Classes (2x Semana)',
                    'Classes (3x Semana)',
                ],
                fields: []
            },
        ]
    },
]