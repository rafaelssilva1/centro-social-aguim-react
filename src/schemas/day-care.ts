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
                    value: '1',
                },
                validationRule: null,
                min: null,
                max: null,
                fields: []
            },
            {
                name: 'Nome a ser tratado',
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
                name: 'Estado civil',
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
                name: 'Cédula ou Cartão de cidadão',
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
                name: 'Data de emissão',
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
                name: 'Arquivo',
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
                name: 'NIF',
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
                name: 'NISS',
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
                name: 'Nº de utente',
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
        ]
    },
    {
        name: 'Contactos da(s) pessoa(s) próximas ao cliente',
        type: {
            id: 'group'
        },
        columns: {
            value: '1'
        },
        fields: [
            {
                name: 'Contacto A',
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
                        name: 'Contacto telefónico',
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
                        name: 'Ocupação',
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
                name: 'Contacto B',
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
                        name: 'Morada',
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
                        name: 'Contacto telefónico',
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
                        name: 'Ocupação',
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
                name: 'Conhece alguém que frequenta este estabelecimento?',
                type: {
                    id: 'fieldset',
                },
                columns: {
                    value: '1'
                },
                fields: [
                    {
                        name: 'Tem alguém que seja da sua relação próxima a frequentar este estabelecimento?',
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
                        name: 'Quem?',
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
                        name: 'Em que serviço?',
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
        ]
    },
    {
        name: 'Situação Económica do Cliente',
        type: {
            id: 'group'
        },
        columns: {
            value: '1'
        },
        fields: [
            {
                name: 'Rendimentos Mensais',
                type: {
                    id: 'checkbox',
                },
                required: true,
                columns: {
                    value: '1',
                },
                options: [
                    'Reforma',
                    'Pensão',
                    'Complemento por dependência',
                    'Outro'
                ],
                fields: []
            },
            {
                name: 'Rendimento total do agregado familiar',
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
        name: 'Caracterização económica do Agregado familiar do cliente',
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
                            value: '0.66',
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
                        name: 'Rendimento Mensal',
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
                            value: '0.66',
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
                        name: 'Rendimento Mensal',
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
                            value: '0.66',
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
                        name: 'Rendimento Mensal',
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
                ]
            },
        ]
    },
    {
        name: 'Motivo do pedido',
        type: {
            id: 'group'
        },
        columns: {
            value: '1'
        },
        fields: [
            {
                name: 'Motivo do pedido',
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
        name: 'Rede Social de Suporte',
        type: {
            id: 'group'
        },
        columns: {
            value: '1'
        },
        fields: [
            {
                name: 'O cliente foi encaminhado por outra Organização?',
                type: {
                    id: 'radio',
                },
                required: false,
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
                name: 'Se sim, qual?',
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
                name: 'O cliente necessita de suporte para satisfazer e/ou desenvolver actividades quotidianas?',
                type: {
                    id: 'radio',
                },
                required: false,
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
                name: 'Identifique o suporte existente do candidato',
                type: {
                    id: 'radio',
                },
                required: false,
                columns: {
                    value: '1',
                },
                options: [
                    'Diário',
                    'Pontual',
                    'Inexistente'
                ],
                fields: []
            },
            {
                name: 'O cliente usufrui dos serviços de:',
                type: {
                    id: 'checkbox',
                },
                required: false,
                columns: {
                    value: '1',
                },
                options: [
                    'SAD',
                    'Centro de Dia',
                    'ERPI'
                ],
                fields: []
            },
        ]
    },
    {
        name: 'Situação Clínica do Cliente',
        type: {
            id: 'group'
        },
        columns: {
            value: '1'
        },
        fields: [
            {
                name: 'Grau de Dependência',
                type: {
                    id: 'radio',
                },
                required: true,
                columns: {
                    value: '1',
                },
                options: [
                    'Independente',
                    'Necessita de pequenos apoios na vida quotidiana e no apoio à mobilidade',
                    'Necessita de apoio na higiene pessoal, tarefas de vida quotidiana e na mobilidade',
                    'Totalmente dependente para a satisfação das necessidades básicas (alimentação, higiene, etc)'
                ],
                fields: []
            },
            {
                name: 'Défice',
                type: {
                    id: 'checkbox',
                },
                required: false,
                columns: {
                    value: '1',
                },
                options: [
                    'Visual',
                    'Auditivo',
                    'Comunicação'
                ],
                fields: []
            },
            {
                name: 'Médico de Família',
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
                name: 'Centro de Saúde',
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
        name: 'Grau de dependência',
        type: {
            id: 'group'
        },
        columns: {
            value: '1'
        },
        fields: [
            {
                name: 'Movimentação',
                type: {
                    id: 'checkbox',
                },
                required: false,
                columns: {
                    value: '1',
                },
                options: [
                    'Andarilho',
                    'Bengala',
                    'Cadeira de rodas',
                    'Com a ajuda de 3º'
                ],
                fields: []
            },
            {
                name: 'Uso de',
                type: {
                    id: 'checkbox',
                },
                required: false,
                columns: {
                    value: '1',
                },
                options: [
                    'Fralda',
                    'Dispositivos urinário',
                ],
                fields: []
            },
            {
                name: 'Higienização',
                type: {
                    id: 'checkbox',
                },
                required: false,
                columns: {
                    value: '1',
                },
                options: [
                    'Sozinho',
                    'Com ajuda',
                    'Cama',
                ],
                fields: []
            },
            {
                name: 'Alimentação',
                type: {
                    id: 'checkbox',
                },
                required: false,
                columns: {
                    value: '1',
                },
                options: [
                    'Sozinho',
                    'Com ajuda',
                ],
                fields: []
            },
            {
                name: 'Tipo de alimentação',
                type: {
                    id: 'checkbox',
                },
                required: false,
                columns: {
                    value: '1',
                },
                options: [
                    'Normal',
                    'Dieta mole/pastosa',
                    'Dieta hipossalina',
                    'Dieta sem gorduras',
                    'Adequada a diabéticos',
                    'Dieta líquida / sona nasogástrica',
                ],
                fields: []
            },
        ]
    },
    {
        name: 'Serviços Solicitados',
        type: {
            id: 'group'
        },
        columns: {
            value: '1'
        },
        fields: [
            {
                name: 'Serviços Solicitados',
                type: {
                    id: 'checkbox',
                },
                required: false,
                columns: {
                    value: '1',
                },
                options: [
                    'Alimentação',
                    'Cuidados de higiene e imagem pessoal',
                    'Tratamento de roupa',
                    'Acompanhamento a consultas/exames',
                    'Apoio social e psicológico',
                    'Apoio na aquisição de bens e serviços',
                    'Assistência medicamentosa',
                    'Animação sociocultural',
                    'Cuidados de reabilitação',
                    'Outros serviços'
                ],
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
                name: 'Cartão de cidadão ou Bilhete de Identidade',
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
                name: 'Nº de Contribuinte (se carregou Cartão de cidadão, não é necessário)',
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
                name: 'Cartão de utente (se carregou Cartão de cidadão, não é necessário)',
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
                name: 'Cartão de beneficiário ou pensionista',
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