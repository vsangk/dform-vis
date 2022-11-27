import { RequirementResponse } from '../types';

const interestForm: RequirementResponse = {
  data: {
    requirement: {
      requirement_id: 'interest-form',
      title: 'Basic information',
      description:
        'We collect this information to keep your account secure and comply with financial regulations.',
      support_content: [
        {
          id: 'interest-form-sc-1',
          title: 'Why does Coinbase need this information?',
          description:
            'We collect this info in order to comply with federal KYC ("Know Your Customer") regulations. KYC helps prevent people from opening fake accounts or opening accounts in your name.',
        },
        {
          id: 'interest-form-sc-2',
          title: 'What does Coinbase do with this information?',
          description:
            'Your personal information is securely stored by Coinbase to comply with federal regulations and to protect you from fraud.',
        },
      ],
      questions: [
        {
          id: 'legal-entity-type-comp',
          conditional_expression_id: '',
          title: '',
          description: '',
          multi_answer: false,
          optional: false,
          fields: [
            {
              id: 'legal-entity-type-comp',
              conditional_expression_id: '',
              title: 'Legal Entity Type',
              description:
                'Please choose carefully. Selecting the incorrect business type may result in delays in processing your application.',
              placeholder: '',
              required: true,
              field_type: 'FIELD_TYPE_SINGLESELECT',
              field_type_single_select: {
                default: '',
                type: 'SELECT_UNSPECIFIED',
                options: [
                  {
                    value:
                      'Unincorporated (Sole Proprietorship, Sole Trader, Association or Investment Club)',
                    label:
                      'Unincorporated (Sole Proprietorship, Sole Trader, Association or Investment Club)',
                    description: '',
                  },
                  {
                    value: 'Corporate Trust',
                    label: 'Corporate Trust',
                    description: '',
                  },
                  {
                    value: 'Government Agency',
                    label: 'Government Agency',
                    description: '',
                  },
                  {
                    value: 'Cooperative',
                    label: 'Cooperative',
                    description: '',
                  },
                  {
                    value: 'Corporation',
                    label: 'Corporation',
                    description: '',
                  },
                  {
                    value: 'Private Foundation',
                    label: 'Private Foundation',
                    description: '',
                  },
                  {
                    value: 'General Partnership (GP)',
                    label: 'General Partnership (GP)',
                    description: '',
                  },
                  {
                    value: 'Limited Liability Company (LLC)',
                    label: 'Limited Liability Company (LLC)',
                    description: '',
                  },
                  {
                    value: 'Limited Liability Partnership (LLP)',
                    label: 'Limited Liability Partnership (LLP)',
                    description: '',
                  },
                  {
                    value: 'Limited Partnership (LP)',
                    label: 'Limited Partnership (LP)',
                    description: '',
                  },
                  {
                    value: 'Nonprofit / Charity',
                    label: 'Nonprofit / Charity',
                    description: '',
                  },
                  {
                    value: 'Partnership',
                    label: 'Partnership',
                    description: '',
                  },
                  {
                    value: 'Private Limited Company (LTD)',
                    label: 'Private Limited Company (LTD)',
                    description: '',
                  },
                  {
                    value: 'Public Foundation',
                    label: 'Public Foundation',
                    description: '',
                  },
                  {
                    value: 'Public Limited Company (PLC)',
                    label: 'Public Limited Company (PLC)',
                    description: '',
                  },
                  {
                    value: 'REIT (Real Estate Investment Trust)',
                    label: 'REIT (Real Estate Investment Trust)',
                    description: '',
                  },
                  {
                    value: 'Trust',
                    label: 'Trust',
                    description: '',
                  },
                  {
                    value: 'Other',
                    label: 'Other',
                    description: '',
                  },
                ],
                conditionals: [
                  {
                    id: 'legal-entity-type-comp-cond-1',
                    conditional_type_in: {
                      values: ['Other'],
                    },
                  },
                  {
                    id: 'legal-entity-type-comp-not-trust-cond',
                    conditional_type_not_in: {
                      values: ['Corporate Trust', 'Trust'],
                    },
                  },
                  {
                    id: 'legal-entity-type-comp-in-trust',
                    conditional_type_in: {
                      values: ['Trust'],
                    },
                  },
                  {
                    id: 'legal-entity-type-comp-non-trust',
                    conditional_type_not_in: {
                      values: ['Trust'],
                    },
                  },
                  {
                    id: 'legal-entity-type-comp-corporate-trust',
                    conditional_type_in: {
                      values: ['Corporate Trust'],
                    },
                  },
                  {
                    id: 'legal-entity-type-comp-cond-2',
                    conditional_type_in: {
                      values: [
                        'Corporation',
                        'Limited Liability Company (LLC)',
                        'Private Limited Company (LTD)',
                        'Public Limited Company (PLC)',
                        'REIT (Real Estate Investment Trust)',
                        'Trust',
                        'Other',
                      ],
                    },
                  },
                  {
                    id: 'legal-entity-type-comp-cond-3',
                    conditional_type_in: {
                      values: [
                        'Corporate Trust',
                        'Corporation',
                        'General Partnership (GP)',
                        'Limited Liability Company (LLC)',
                        'Limited Liability Partnership (LLP)',
                        'Limited Partnership (LP)',
                        'Partnership',
                        'Private Limited Company (LTD)',
                        'REIT (Real Estate Investment Trust)',
                        'Trust',
                        'Other',
                      ],
                    },
                  },
                  {
                    id: 'legal-entity-type-comp-cond-4',
                    conditional_type_in: {
                      values: ['Nonprofit / Charity'],
                    },
                  },
                  {
                    id: 'legal-entity-type-comp-cond-trustee',
                    conditional_type_in: {
                      values: ['Corporate Trust', 'Trust'],
                    },
                  },
                  {
                    id: 'legal-entity-type-comp-cond-partnership',
                    conditional_type_in: {
                      values: [
                        'General Partnership (GP)',
                        'Limited Liability Partnership (LLP)',
                        'Limited Partnership (LP)',
                        'Partnership',
                      ],
                    },
                  },
                  {
                    id: 'legal-entity-type-comp-cond-article-of-incorportaion',
                    conditional_type_in: {
                      values: [
                        'Corporation',
                        'Limited Liability Company (LLC)',
                        'Private Limited Company (LTD)',
                        'Public Limited Company (PLC)',
                        'REIT (Real Estate Investment Trust)',
                        'Other',
                        'Corporate Trust',
                        'Limited Liability Partnership (LLP)',
                        'Limited Partnership (LP)',
                        'Partnership',
                        'Unincorporated (Sole Proprietorship, Sole Trader, Association or Investment Club)',
                      ],
                    },
                  },
                  {
                    id: 'legal-entity-type-comp-cond-director-officers',
                    conditional_type_in: {
                      values: [
                        'Corporation',
                        'Limited Liability Company (LLC)',
                        'Private Limited Company (LTD)',
                        'Public Limited Company (PLC)',
                        'REIT (Real Estate Investment Trust)',
                        'Other',
                        'Nonprofit / Charity',
                        'Private Foundation',
                        'Public Foundation',
                      ],
                    },
                  },
                  {
                    id: 'legal-entity-type-comp-cond-GlobalPrivateAndPublicCorporationsAndGlobalPartnerships',
                    conditional_type_in: {
                      values: [
                        'Corporation',
                        'Limited Liability Company (LLC)',
                        'Private Limited Company (LTD)',
                        'Corporate Trust',
                        'Public Limited Company (PLC)',
                        'Partnership',
                        'General Partnership (GP)',
                        'Limited Liability Partnership (LLP)',
                        'Limited Partnership (LP)',
                      ],
                    },
                  },
                  {
                    id: 'legal-entity-type-comp-cond-private_fundation-public_fundation',
                    conditional_type_in: {
                      values: ['Private Foundation', 'Public Foundation'],
                    },
                  },
                  {
                    id: 'legal-entity-type-comp-cond-reit',
                    conditional_type_in: {
                      values: ['REIT (Real Estate Investment Trust)'],
                    },
                  },
                  {
                    id: 'legal-entity-type-comp-cond-corporate_trust-trust',
                    conditional_type_in: {
                      values: ['Corporate Trust', 'Trust'],
                    },
                  },
                  {
                    id: 'legal-entity-type-comp-cond-memorandum-articles-of-association-intl-entity',
                    conditional_type_in: {
                      values: [
                        'Corporation',
                        'Limited Liability Company (LLC)',
                        'Private Limited Company (LTD)',
                        'Public Limited Company (PLC)',
                        'REIT (Real Estate Investment Trust)',
                        'Other',
                        'Corporate Trust',
                        'General Partnership (GP)',
                        'Limited Liability Partnership (LLP)',
                        'Limited Partnership (LP)',
                        'Partnership',
                        'Unincorporated (Sole Proprietorship, Sole Trader, Association or Investment Club)',
                        'Cooperative',
                        'Nonprofit / Charity',
                        'Private Foundation',
                        'Public Foundation',
                      ],
                    },
                  },
                ],
              },
              validations: [],
            },
          ],
        },
        {
          id: 'other-legal-entity-type',
          conditional_expression_id: 'info-about-company-us-llc-comp-v3-cond-7',
          title: '',
          description: '',
          multi_answer: false,
          optional: false,
          fields: [
            {
              id: 'other-legal-entity-type',
              conditional_expression_id: '',
              title: 'Other Legal Entity Type',
              description: '',
              placeholder: '',
              required: true,
              field_type: 'FIELD_TYPE_STRING',
              field_type_string: {
                text_area: false,
                concealed: false,
              },
              validations: [
                {
                  validation_type: 'max_len',
                  rule: '255',
                  message: 'Other legal entity type is too long.',
                },
              ],
            },
          ],
        },
        {
          id: 'legal-entity-name',
          conditional_expression_id: '',
          title: '',
          description: '',
          multi_answer: false,
          optional: false,
          fields: [
            {
              id: 'legal-entity-name',
              conditional_expression_id: '',
              title: 'Legal Entity Name',
              description:
                'Provide the full legal name as listed on your formation document and bank account (e.g. ABC Financial, Inc.)',
              placeholder: 'Legal Entity Name',
              required: true,
              field_type: 'FIELD_TYPE_STRING',
              field_type_string: {
                text_area: false,
                concealed: false,
              },
              validations: [
                {
                  validation_type: 'max_len',
                  rule: '255',
                  message: 'Legal entity name is too long.',
                },
              ],
            },
          ],
        },
        {
          id: 'dba',
          conditional_expression_id: '',
          title: '',
          description: '',
          multi_answer: false,
          optional: false,
          fields: [
            {
              id: 'dba',
              conditional_expression_id: '',
              title:
                'Other Trade Names or Doing Business As (DBA) Names (Optional)',
              description:
                'If your business documents are registered under a different name, please also provide this information. The name provided must match exactly to your documents for us to accept them.',
              placeholder: 'Alternate name',
              required: false,
              field_type: 'FIELD_TYPE_STRING',
              field_type_string: {
                text_area: false,
                concealed: false,
              },
              validations: [
                {
                  validation_type: 'max_len',
                  rule: '255',
                  message: 'Alternate name is too long.',
                },
              ],
            },
          ],
        },
        {
          id: 'place-of-business-operations',
          conditional_expression_id: '',
          title: '',
          description: '',
          multi_answer: false,
          optional: false,
          fields: [
            {
              id: 'header',
              conditional_expression_id: '',
              title: 'Place of Business Operations',
              description:
                'This is where your company conducts its operations. We use this address to send documents/keys and assign you time-zone specific help. We require a physical address, not a PO Box.',
              placeholder: '',
              required: false,
              field_type: 'FIELD_TYPE_HEADER',
              field_type_header: {
                type: 'TYPE_HEADER2',
              },
              validations: [],
            },
            {
              id: 'address',
              conditional_expression_id: '',
              title: '',
              description: '',
              placeholder: '',
              required: true,
              field_type: 'FIELD_TYPE_ADDRESS',
              field_type_address: {
                conditionals: [
                  {
                    id: 'place-of-business-operations-cond-1',
                    conditional_type_country_in: {
                      values: ['AD'],
                    },
                  },
                  {
                    id: 'place-of-business-operations-cond-2',
                    conditional_type_country_in: {
                      values: ['AR'],
                    },
                  },
                  {
                    id: 'place-of-business-operations-cond-3',
                    conditional_type_country_in: {
                      values: ['AU'],
                    },
                  },
                  {
                    id: 'place-of-business-operations-cond-4',
                    conditional_type_country_in: {
                      values: ['AT'],
                    },
                  },
                  {
                    id: 'place-of-business-operations-cond-5',
                    conditional_type_country_in: {
                      values: ['BE'],
                    },
                  },
                  {
                    id: 'place-of-business-operations-cond-6',
                    conditional_type_country_in: {
                      values: ['BR'],
                    },
                  },
                  {
                    id: 'place-of-business-operations-cond-7',
                    conditional_type_country_in: {
                      values: ['IO'],
                    },
                  },
                  {
                    id: 'place-of-business-operations-cond-8',
                    conditional_type_country_in: {
                      values: ['BG'],
                    },
                  },
                  {
                    id: 'place-of-business-operations-cond-9',
                    conditional_type_country_in: {
                      values: ['CA'],
                    },
                  },
                  {
                    id: 'place-of-business-operations-cond-10',
                    conditional_type_country_in: {
                      values: ['KY'],
                    },
                  },
                  {
                    id: 'place-of-business-operations-cond-11',
                    conditional_type_country_in: {
                      values: ['CL'],
                    },
                  },
                  {
                    id: 'place-of-business-operations-cond-12',
                    conditional_type_country_in: {
                      values: ['CO'],
                    },
                  },
                  {
                    id: 'place-of-business-operations-cond-13',
                    conditional_type_country_in: {
                      values: ['HR'],
                    },
                  },
                  {
                    id: 'place-of-business-operations-cond-14',
                    conditional_type_country_in: {
                      values: ['CY'],
                    },
                  },
                  {
                    id: 'place-of-business-operations-cond-15',
                    conditional_type_country_in: {
                      values: ['CZ'],
                    },
                  },
                  {
                    id: 'place-of-business-operations-cond-16',
                    conditional_type_country_in: {
                      values: ['DK'],
                    },
                  },
                  {
                    id: 'place-of-business-operations-cond-17',
                    conditional_type_country_in: {
                      values: ['EE'],
                    },
                  },
                  {
                    id: 'place-of-business-operations-cond-18',
                    conditional_type_country_in: {
                      values: ['FI'],
                    },
                  },
                  {
                    id: 'place-of-business-operations-cond-19',
                    conditional_type_country_in: {
                      values: ['FR'],
                    },
                  },
                  {
                    id: 'place-of-business-operations-cond-20',
                    conditional_type_country_in: {
                      values: ['GH'],
                    },
                  },
                  {
                    id: 'place-of-business-operations-cond-21',
                    conditional_type_country_in: {
                      values: ['GI'],
                    },
                  },
                  {
                    id: 'place-of-business-operations-cond-22',
                    conditional_type_country_in: {
                      values: ['GR'],
                    },
                  },
                  {
                    id: 'place-of-business-operations-cond-23',
                    conditional_type_country_in: {
                      values: ['GG'],
                    },
                  },
                  {
                    id: 'place-of-business-operations-cond-24',
                    conditional_type_country_in: {
                      values: ['HK'],
                    },
                  },
                  {
                    id: 'place-of-business-operations-cond-25',
                    conditional_type_country_in: {
                      values: ['HU'],
                    },
                  },
                  {
                    id: 'place-of-business-operations-cond-26',
                    conditional_type_country_in: {
                      values: ['IS'],
                    },
                  },
                  {
                    id: 'place-of-business-operations-cond-27',
                    conditional_type_country_in: {
                      values: ['ID'],
                    },
                  },
                  {
                    id: 'place-of-business-operations-cond-28',
                    conditional_type_country_in: {
                      values: ['IE'],
                    },
                  },
                  {
                    id: 'place-of-business-operations-cond-29',
                    conditional_type_country_in: {
                      values: ['IM'],
                    },
                  },
                  {
                    id: 'place-of-business-operations-cond-30',
                    conditional_type_country_in: {
                      values: ['IL'],
                    },
                  },
                  {
                    id: 'place-of-business-operations-cond-31',
                    conditional_type_country_in: {
                      values: ['IT'],
                    },
                  },
                  {
                    id: 'place-of-business-operations-cond-32',
                    conditional_type_country_in: {
                      values: ['JP'],
                    },
                  },
                  {
                    id: 'place-of-business-operations-cond-33',
                    conditional_type_country_in: {
                      values: ['JE'],
                    },
                  },
                  {
                    id: 'place-of-business-operations-cond-34',
                    conditional_type_country_in: {
                      values: ['KR'],
                    },
                  },
                  {
                    id: 'place-of-business-operations-cond-35',
                    conditional_type_country_in: {
                      values: ['LV'],
                    },
                  },
                  {
                    id: 'place-of-business-operations-cond-36',
                    conditional_type_country_in: {
                      values: ['LI'],
                    },
                  },
                  {
                    id: 'place-of-business-operations-cond-37',
                    conditional_type_country_in: {
                      values: ['LT'],
                    },
                  },
                  {
                    id: 'place-of-business-operations-cond-38',
                    conditional_type_country_in: {
                      values: ['LU'],
                    },
                  },
                  {
                    id: 'place-of-business-operations-cond-39',
                    conditional_type_country_in: {
                      values: ['MT'],
                    },
                  },
                  {
                    id: 'place-of-business-operations-cond-40',
                    conditional_type_country_in: {
                      values: ['MX'],
                    },
                  },
                  {
                    id: 'place-of-business-operations-cond-41',
                    conditional_type_country_in: {
                      values: ['MC'],
                    },
                  },
                  {
                    id: 'place-of-business-operations-cond-42',
                    conditional_type_country_in: {
                      values: ['NL'],
                    },
                  },
                  {
                    id: 'place-of-business-operations-cond-43',
                    conditional_type_country_in: {
                      values: ['NO'],
                    },
                  },
                  {
                    id: 'place-of-business-operations-cond-44',
                    conditional_type_country_in: {
                      values: ['PE'],
                    },
                  },
                  {
                    id: 'place-of-business-operations-cond-45',
                    conditional_type_country_in: {
                      values: ['PH'],
                    },
                  },
                  {
                    id: 'place-of-business-operations-cond-46',
                    conditional_type_country_in: {
                      values: ['PL'],
                    },
                  },
                  {
                    id: 'place-of-business-operations-cond-47',
                    conditional_type_country_in: {
                      values: ['PT'],
                    },
                  },
                  {
                    id: 'place-of-business-operations-cond-48',
                    conditional_type_country_in: {
                      values: ['RO'],
                    },
                  },
                  {
                    id: 'place-of-business-operations-cond-49',
                    conditional_type_country_in: {
                      values: ['SM'],
                    },
                  },
                  {
                    id: 'place-of-business-operations-cond-50',
                    conditional_type_country_in: {
                      values: ['SG'],
                    },
                  },
                  {
                    id: 'place-of-business-operations-cond-51',
                    conditional_type_country_in: {
                      values: ['SK'],
                    },
                  },
                  {
                    id: 'place-of-business-operations-cond-52',
                    conditional_type_country_in: {
                      values: ['SI'],
                    },
                  },
                  {
                    id: 'place-of-business-operations-cond-53',
                    conditional_type_country_in: {
                      values: ['ES'],
                    },
                  },
                  {
                    id: 'place-of-business-operations-cond-54',
                    conditional_type_country_in: {
                      values: ['SE'],
                    },
                  },
                  {
                    id: 'place-of-business-operations-cond-55',
                    conditional_type_country_in: {
                      values: ['CH'],
                    },
                  },
                  {
                    id: 'place-of-business-operations-cond-56',
                    conditional_type_country_in: {
                      values: ['TR'],
                    },
                  },
                  {
                    id: 'place-of-business-operations-cond-57',
                    conditional_type_country_in: {
                      values: ['AE'],
                    },
                  },
                  {
                    id: 'place-of-business-operations-cond-58',
                    conditional_type_country_in: {
                      values: ['GB'],
                    },
                  },
                  {
                    id: 'place-of-business-operations-cond-59',
                    conditional_type_country_in: {
                      values: ['US'],
                    },
                  },
                  {
                    id: 'place-of-business-operations-cond-60',
                    conditional_type_country_not_in: {
                      values: [
                        'AD',
                        'AR',
                        'AU',
                        'AT',
                        'BE',
                        'BR',
                        'IO',
                        'BG',
                        'CA',
                        'KY',
                        'CL',
                        'CO',
                        'HR',
                        'CY',
                        'CZ',
                        'DK',
                        'EE',
                        'FI',
                        'FR',
                        'GH',
                        'GI',
                        'GR',
                        'GG',
                        'HK',
                        'HU',
                        'IS',
                        'ID',
                        'IE',
                        'IM',
                        'IL',
                        'IT',
                        'JP',
                        'JE',
                        'KR',
                        'LV',
                        'LI',
                        'LT',
                        'LU',
                        'MT',
                        'MX',
                        'MC',
                        'NL',
                        'NO',
                        'PE',
                        'PH',
                        'PL',
                        'PT',
                        'RO',
                        'SM',
                        'SG',
                        'SK',
                        'SI',
                        'ES',
                        'SE',
                        'CH',
                        'TR',
                        'AE',
                        'GB',
                        'US',
                      ],
                    },
                  },
                ],
              },
              validations: [],
            },
          ],
        },
        {
          id: 'incorporation-information',
          conditional_expression_id: '',
          title: '',
          description: '',
          multi_answer: false,
          optional: false,
          fields: [
            {
              id: 'header',
              conditional_expression_id: '',
              title: 'Incorporation Information',
              description: '',
              placeholder: '',
              required: false,
              field_type: 'FIELD_TYPE_HEADER',
              field_type_header: {
                type: 'TYPE_HEADER2',
              },
              validations: [],
            },
          ],
        },
        {
          id: 'date-of-incorporation-formation',
          conditional_expression_id: '',
          title: '',
          description: '',
          multi_answer: false,
          optional: false,
          fields: [
            {
              id: 'date-of-incorporation-formation',
              conditional_expression_id: '',
              title: 'Date of Incorporation / Formation',
              description: '',
              placeholder: '',
              required: true,
              field_type: 'FIELD_TYPE_DATE',
              field_type_date: {
                min_age: 0,
              },
              validations: [
                {
                  validation_type: 'min_age',
                  rule: '0',
                  message: 'Date cannot be in the future.',
                },
                {
                  validation_type: 'max_age',
                  rule: '321',
                  message: 'Year cannot be prior to 1700.',
                },
              ],
            },
          ],
        },
        {
          id: 'country-of-incorporation',
          conditional_expression_id: '',
          title: '',
          description: '',
          multi_answer: false,
          optional: false,
          fields: [
            {
              id: 'country',
              conditional_expression_id: '',
              title: 'Country of incorporation',
              description: '',
              placeholder: 'Country',
              required: true,
              field_type: 'FIELD_TYPE_SINGLESELECT',
              field_type_single_select: {
                default: 'US',
                type: 'SELECT_UNSPECIFIED',
                options: [
                  {
                    value: 'AF',
                    label: 'Afghanistan',
                    description: '',
                  },
                  {
                    value: 'AL',
                    label: 'Albania',
                    description: '',
                  },
                  {
                    value: 'AN',
                    label: 'Netherland Antilles',
                    description: '',
                  },
                  {
                    value: 'DZ',
                    label: 'Algeria',
                    description: '',
                  },
                  {
                    value: 'AX',
                    label: 'Aland Islands',
                    description: '',
                  },
                  {
                    value: 'AD',
                    label: 'Andorra',
                    description: '',
                  },
                  {
                    value: 'AO',
                    label: 'Angola',
                    description: '',
                  },
                  {
                    value: 'AI',
                    label: 'Anguilla',
                    description: '',
                  },
                  {
                    value: 'AQ',
                    label: 'Antarctica',
                    description: '',
                  },
                  {
                    value: 'AG',
                    label: 'Antigua and Barbuda',
                    description: '',
                  },
                  {
                    value: 'AR',
                    label: 'Argentina',
                    description: '',
                  },
                  {
                    value: 'AM',
                    label: 'Armenia',
                    description: '',
                  },
                  {
                    value: 'AW',
                    label: 'Aruba',
                    description: '',
                  },
                  {
                    value: 'AU',
                    label: 'Australia',
                    description: '',
                  },
                  {
                    value: 'AT',
                    label: 'Austria',
                    description: '',
                  },
                  {
                    value: 'AZ',
                    label: 'Azerbaijan',
                    description: '',
                  },
                  {
                    value: 'BS',
                    label: 'Bahamas',
                    description: '',
                  },
                  {
                    value: 'BH',
                    label: 'Bahrain',
                    description: '',
                  },
                  {
                    value: 'BD',
                    label: 'Bangladesh',
                    description: '',
                  },
                  {
                    value: 'BB',
                    label: 'Barbados',
                    description: '',
                  },
                  {
                    value: 'BY',
                    label: 'Belarus',
                    description: '',
                  },
                  {
                    value: 'BE',
                    label: 'Belgium',
                    description: '',
                  },
                  {
                    value: 'BZ',
                    label: 'Belize',
                    description: '',
                  },
                  {
                    value: 'BJ',
                    label: 'Benin',
                    description: '',
                  },
                  {
                    value: 'BM',
                    label: 'Bermuda',
                    description: '',
                  },
                  {
                    value: 'BT',
                    label: 'Bhutan',
                    description: '',
                  },
                  {
                    value: 'BO',
                    label: 'Bolivia, Plurinational State of',
                    description: '',
                  },
                  {
                    value: 'BQ',
                    label: 'Bonaire, Sint Eustatius and Saba',
                    description: '',
                  },
                  {
                    value: 'BA',
                    label: 'Bosnia and Herzegovina',
                    description: '',
                  },
                  {
                    value: 'BW',
                    label: 'Botswana',
                    description: '',
                  },
                  {
                    value: 'BV',
                    label: 'Bouvet Island',
                    description: '',
                  },
                  {
                    value: 'BR',
                    label: 'Brazil',
                    description: '',
                  },
                  {
                    value: 'IO',
                    label: 'British Indian Ocean Territory',
                    description: '',
                  },
                  {
                    value: 'BN',
                    label: 'Brunei Darussalam',
                    description: '',
                  },
                  {
                    value: 'BG',
                    label: 'Bulgaria',
                    description: '',
                  },
                  {
                    value: 'BF',
                    label: 'Burkina Faso',
                    description: '',
                  },
                  {
                    value: 'BI',
                    label: 'Burundi',
                    description: '',
                  },
                  {
                    value: 'CV',
                    label: 'Cape Verde',
                    description: '',
                  },
                  {
                    value: 'KH',
                    label: 'Cambodia',
                    description: '',
                  },
                  {
                    value: 'CM',
                    label: 'Cameroon',
                    description: '',
                  },
                  {
                    value: 'CA',
                    label: 'Canada',
                    description: '',
                  },
                  {
                    value: 'KY',
                    label: 'Cayman Islands',
                    description: '',
                  },
                  {
                    value: 'CF',
                    label: 'Central African Republic',
                    description: '',
                  },
                  {
                    value: 'TD',
                    label: 'Chad',
                    description: '',
                  },
                  {
                    value: 'CL',
                    label: 'Chile',
                    description: '',
                  },
                  {
                    value: 'CN',
                    label: 'China',
                    description: '',
                  },
                  {
                    value: 'CX',
                    label: 'Christmas Island',
                    description: '',
                  },
                  {
                    value: 'CC',
                    label: 'Cocos (Keeling) Islands',
                    description: '',
                  },
                  {
                    value: 'CO',
                    label: 'Colombia',
                    description: '',
                  },
                  {
                    value: 'KM',
                    label: 'Comoros (the)',
                    description: '',
                  },
                  {
                    value: 'CD',
                    label: 'Congo (the Democratic Republic of the)',
                    description: '',
                  },
                  {
                    value: 'CG',
                    label: 'Congo (the)',
                    description: '',
                  },
                  {
                    value: 'CK',
                    label: 'Cook Islands (the)',
                    description: '',
                  },
                  {
                    value: 'CR',
                    label: 'Costa Rica',
                    description: '',
                  },
                  {
                    value: 'HR',
                    label: 'Croatia',
                    description: '',
                  },
                  {
                    value: 'CU',
                    label: 'Cuba',
                    description: '',
                  },
                  {
                    value: 'CW',
                    label: 'Curaçao',
                    description: '',
                  },
                  {
                    value: 'CY',
                    label: 'Cyprus',
                    description: '',
                  },
                  {
                    value: 'CZ',
                    label: 'Czech Republic',
                    description: '',
                  },
                  {
                    value: 'CI',
                    label: "Côte d'Ivoire",
                    description: '',
                  },
                  {
                    value: 'DK',
                    label: 'Denmark',
                    description: '',
                  },
                  {
                    value: 'DJ',
                    label: 'Djibouti',
                    description: '',
                  },
                  {
                    value: 'DM',
                    label: 'Dominica',
                    description: '',
                  },
                  {
                    value: 'DO',
                    label: 'Dominican Republic (the)',
                    description: '',
                  },
                  {
                    value: 'EC',
                    label: 'Ecuador',
                    description: '',
                  },
                  {
                    value: 'EG',
                    label: 'Egypt',
                    description: '',
                  },
                  {
                    value: 'SV',
                    label: 'El Salvador',
                    description: '',
                  },
                  {
                    value: 'GQ',
                    label: 'Equatorial Guinea',
                    description: '',
                  },
                  {
                    value: 'ER',
                    label: 'Eritrea',
                    description: '',
                  },
                  {
                    value: 'EE',
                    label: 'Estonia',
                    description: '',
                  },
                  {
                    value: 'ET',
                    label: 'Ethiopia',
                    description: '',
                  },
                  {
                    value: 'FK',
                    label: 'Falkland Islands (the) [Malvinas]',
                    description: '',
                  },
                  {
                    value: 'FO',
                    label: 'Faroe Islands (the)',
                    description: '',
                  },
                  {
                    value: 'FJ',
                    label: 'Fiji',
                    description: '',
                  },
                  {
                    value: 'FI',
                    label: 'Finland',
                    description: '',
                  },
                  {
                    value: 'FR',
                    label: 'France',
                    description: '',
                  },
                  {
                    value: 'GF',
                    label: 'French Guiana',
                    description: '',
                  },
                  {
                    value: 'PF',
                    label: 'French Polynesia',
                    description: '',
                  },
                  {
                    value: 'TF',
                    label: 'French Southern Territories (the)',
                    description: '',
                  },
                  {
                    value: 'GA',
                    label: 'Gabon',
                    description: '',
                  },
                  {
                    value: 'GM',
                    label: 'Gambia (the)',
                    description: '',
                  },
                  {
                    value: 'GE',
                    label: 'Georgia',
                    description: '',
                  },
                  {
                    value: 'DE',
                    label: 'Germany',
                    description: '',
                  },
                  {
                    value: 'GH',
                    label: 'Ghana',
                    description: '',
                  },
                  {
                    value: 'GI',
                    label: 'Gibraltar',
                    description: '',
                  },
                  {
                    value: 'GR',
                    label: 'Greece',
                    description: '',
                  },
                  {
                    value: 'GL',
                    label: 'Greenland',
                    description: '',
                  },
                  {
                    value: 'GD',
                    label: 'Grenada',
                    description: '',
                  },
                  {
                    value: 'GP',
                    label: 'Guadeloupe',
                    description: '',
                  },
                  {
                    value: 'GT',
                    label: 'Guatemala',
                    description: '',
                  },
                  {
                    value: 'GG',
                    label: 'Guernsey',
                    description: '',
                  },
                  {
                    value: 'GN',
                    label: 'Guinea',
                    description: '',
                  },
                  {
                    value: 'GW',
                    label: 'Guinea-Bissau',
                    description: '',
                  },
                  {
                    value: 'GY',
                    label: 'Guyana',
                    description: '',
                  },
                  {
                    value: 'HT',
                    label: 'Haiti',
                    description: '',
                  },
                  {
                    value: 'HM',
                    label: 'Heard Island and McDonald Islands',
                    description: '',
                  },
                  {
                    value: 'VA',
                    label: 'Holy See (the)',
                    description: '',
                  },
                  {
                    value: 'HN',
                    label: 'Honduras',
                    description: '',
                  },
                  {
                    value: 'HK',
                    label: 'Hong Kong',
                    description: '',
                  },
                  {
                    value: 'HU',
                    label: 'Hungary',
                    description: '',
                  },
                  {
                    value: 'IS',
                    label: 'Iceland',
                    description: '',
                  },
                  {
                    value: 'IN',
                    label: 'India',
                    description: '',
                  },
                  {
                    value: 'ID',
                    label: 'Indonesia',
                    description: '',
                  },
                  {
                    value: 'IR',
                    label: 'Iran (Islamic Republic of)',
                    description: '',
                  },
                  {
                    value: 'IQ',
                    label: 'Iraq',
                    description: '',
                  },
                  {
                    value: 'IE',
                    label: 'Ireland',
                    description: '',
                  },
                  {
                    value: 'IM',
                    label: 'Isle of Man',
                    description: '',
                  },
                  {
                    value: 'IL',
                    label: 'Israel',
                    description: '',
                  },
                  {
                    value: 'IT',
                    label: 'Italy',
                    description: '',
                  },
                  {
                    value: 'JM',
                    label: 'Jamaica',
                    description: '',
                  },
                  {
                    value: 'JP',
                    label: 'Japan',
                    description: '',
                  },
                  {
                    value: 'JE',
                    label: 'Jersey',
                    description: '',
                  },
                  {
                    value: 'JO',
                    label: 'Jordan',
                    description: '',
                  },
                  {
                    value: 'KZ',
                    label: 'Kazakhstan',
                    description: '',
                  },
                  {
                    value: 'KE',
                    label: 'Kenya',
                    description: '',
                  },
                  {
                    value: 'KI',
                    label: 'Kiribati',
                    description: '',
                  },
                  {
                    value: 'KP',
                    label: "Korea (the Democratic People's Republic of)",
                    description: '',
                  },
                  {
                    value: 'KR',
                    label: 'Korea, Republic of',
                    description: '',
                  },
                  {
                    value: 'KW',
                    label: 'Kuwait',
                    description: '',
                  },
                  {
                    value: 'KG',
                    label: 'Kyrgyzstan',
                    description: '',
                  },
                  {
                    value: 'LA',
                    label: "Lao People's Democratic Republic (the)",
                    description: '',
                  },
                  {
                    value: 'LV',
                    label: 'Latvia',
                    description: '',
                  },
                  {
                    value: 'LB',
                    label: 'Lebanon',
                    description: '',
                  },
                  {
                    value: 'LS',
                    label: 'Lesotho',
                    description: '',
                  },
                  {
                    value: 'LR',
                    label: 'Liberia',
                    description: '',
                  },
                  {
                    value: 'LY',
                    label: 'Libya',
                    description: '',
                  },
                  {
                    value: 'LI',
                    label: 'Liechtenstein',
                    description: '',
                  },
                  {
                    value: 'LT',
                    label: 'Lithuania',
                    description: '',
                  },
                  {
                    value: 'LU',
                    label: 'Luxembourg',
                    description: '',
                  },
                  {
                    value: 'MO',
                    label: 'Macao',
                    description: '',
                  },
                  {
                    value: 'MG',
                    label: 'Madagascar',
                    description: '',
                  },
                  {
                    value: 'MW',
                    label: 'Malawi',
                    description: '',
                  },
                  {
                    value: 'MY',
                    label: 'Malaysia',
                    description: '',
                  },
                  {
                    value: 'MV',
                    label: 'Maldives',
                    description: '',
                  },
                  {
                    value: 'ML',
                    label: 'Mali',
                    description: '',
                  },
                  {
                    value: 'MT',
                    label: 'Malta',
                    description: '',
                  },
                  {
                    value: 'MH',
                    label: 'Marshall Islands (the)',
                    description: '',
                  },
                  {
                    value: 'MQ',
                    label: 'Martinique',
                    description: '',
                  },
                  {
                    value: 'MR',
                    label: 'Mauritania',
                    description: '',
                  },
                  {
                    value: 'MU',
                    label: 'Mauritius',
                    description: '',
                  },
                  {
                    value: 'YT',
                    label: 'Mayotte',
                    description: '',
                  },
                  {
                    value: 'MX',
                    label: 'Mexico',
                    description: '',
                  },
                  {
                    value: 'FM',
                    label: 'Micronesia (Federated States of)',
                    description: '',
                  },
                  {
                    value: 'MD',
                    label: 'Moldova (the Republic of)',
                    description: '',
                  },
                  {
                    value: 'MC',
                    label: 'Monaco',
                    description: '',
                  },
                  {
                    value: 'MN',
                    label: 'Mongolia',
                    description: '',
                  },
                  {
                    value: 'ME',
                    label: 'Montenegro',
                    description: '',
                  },
                  {
                    value: 'MS',
                    label: 'Montserrat',
                    description: '',
                  },
                  {
                    value: 'MA',
                    label: 'Morocco',
                    description: '',
                  },
                  {
                    value: 'MZ',
                    label: 'Mozambique',
                    description: '',
                  },
                  {
                    value: 'MM',
                    label: 'Myanmar',
                    description: '',
                  },
                  {
                    value: 'NA',
                    label: 'Namibia',
                    description: '',
                  },
                  {
                    value: 'NR',
                    label: 'Nauru',
                    description: '',
                  },
                  {
                    value: 'NP',
                    label: 'Nepal',
                    description: '',
                  },
                  {
                    value: 'NL',
                    label: 'Netherlands',
                    description: '',
                  },
                  {
                    value: 'NC',
                    label: 'New Caledonia',
                    description: '',
                  },
                  {
                    value: 'NZ',
                    label: 'New Zealand',
                    description: '',
                  },
                  {
                    value: 'NI',
                    label: 'Nicaragua',
                    description: '',
                  },
                  {
                    value: 'NE',
                    label: 'Niger (the)',
                    description: '',
                  },
                  {
                    value: 'NG',
                    label: 'Nigeria',
                    description: '',
                  },
                  {
                    value: 'NU',
                    label: 'Niue',
                    description: '',
                  },
                  {
                    value: 'NF',
                    label: 'Norfolk Island',
                    description: '',
                  },
                  {
                    value: 'MK',
                    label: 'North Macedonia',
                    description: '',
                  },
                  {
                    value: 'NO',
                    label: 'Norway',
                    description: '',
                  },
                  {
                    value: 'OM',
                    label: 'Oman',
                    description: '',
                  },
                  {
                    value: 'PK',
                    label: 'Pakistan',
                    description: '',
                  },
                  {
                    value: 'PW',
                    label: 'Palau',
                    description: '',
                  },
                  {
                    value: 'PS',
                    label: 'Palestine, State of',
                    description: '',
                  },
                  {
                    value: 'PA',
                    label: 'Panama',
                    description: '',
                  },
                  {
                    value: 'PG',
                    label: 'Papua New Guinea',
                    description: '',
                  },
                  {
                    value: 'PY',
                    label: 'Paraguay',
                    description: '',
                  },
                  {
                    value: 'PE',
                    label: 'Peru',
                    description: '',
                  },
                  {
                    value: 'PH',
                    label: 'Philippines',
                    description: '',
                  },
                  {
                    value: 'PN',
                    label: 'Pitcairn',
                    description: '',
                  },
                  {
                    value: 'PL',
                    label: 'Poland',
                    description: '',
                  },
                  {
                    value: 'PT',
                    label: 'Portugal',
                    description: '',
                  },
                  {
                    value: 'QA',
                    label: 'Qatar',
                    description: '',
                  },
                  {
                    value: 'RO',
                    label: 'Romania',
                    description: '',
                  },
                  {
                    value: 'RU',
                    label: 'Russian Federation (the)',
                    description: '',
                  },
                  {
                    value: 'RW',
                    label: 'Rwanda',
                    description: '',
                  },
                  {
                    value: 'RE',
                    label: 'Réunion',
                    description: '',
                  },
                  {
                    value: 'BL',
                    label: 'Saint Barthélemy',
                    description: '',
                  },
                  {
                    value: 'SH',
                    label: 'Saint Helena, Ascension and Tristan da Cunha',
                    description: '',
                  },
                  {
                    value: 'KN',
                    label: 'Saint Kitts and Nevis',
                    description: '',
                  },
                  {
                    value: 'LC',
                    label: 'Saint Lucia',
                    description: '',
                  },
                  {
                    value: 'MF',
                    label: 'Saint Martin (French part)',
                    description: '',
                  },
                  {
                    value: 'PM',
                    label: 'Saint Pierre and Miquelon',
                    description: '',
                  },
                  {
                    value: 'VC',
                    label: 'Saint Vincent and the Grenadines',
                    description: '',
                  },
                  {
                    value: 'WS',
                    label: 'Samoa',
                    description: '',
                  },
                  {
                    value: 'SM',
                    label: 'San Marino',
                    description: '',
                  },
                  {
                    value: 'ST',
                    label: 'Sao Tome and Principe',
                    description: '',
                  },
                  {
                    value: 'SA',
                    label: 'Saudi Arabia',
                    description: '',
                  },
                  {
                    value: 'SN',
                    label: 'Senegal',
                    description: '',
                  },
                  {
                    value: 'RS',
                    label: 'Serbia',
                    description: '',
                  },
                  {
                    value: 'SC',
                    label: 'Seychelles',
                    description: '',
                  },
                  {
                    value: 'SL',
                    label: 'Sierra Leone',
                    description: '',
                  },
                  {
                    value: 'SG',
                    label: 'Singapore',
                    description: '',
                  },
                  {
                    value: 'SX',
                    label: 'Sint Maarten (Dutch part)',
                    description: '',
                  },
                  {
                    value: 'SK',
                    label: 'Slovakia',
                    description: '',
                  },
                  {
                    value: 'SI',
                    label: 'Slovenia',
                    description: '',
                  },
                  {
                    value: 'SB',
                    label: 'Solomon Islands',
                    description: '',
                  },
                  {
                    value: 'SO',
                    label: 'Somalia',
                    description: '',
                  },
                  {
                    value: 'ZA',
                    label: 'South Africa',
                    description: '',
                  },
                  {
                    value: 'GS',
                    label: 'South Georgia and the South Sandwich Islands',
                    description: '',
                  },
                  {
                    value: 'SS',
                    label: 'South Sudan',
                    description: '',
                  },
                  {
                    value: 'ES',
                    label: 'Spain',
                    description: '',
                  },
                  {
                    value: 'LK',
                    label: 'Sri Lanka',
                    description: '',
                  },
                  {
                    value: 'SD',
                    label: 'Sudan (the)',
                    description: '',
                  },
                  {
                    value: 'SR',
                    label: 'Suriname',
                    description: '',
                  },
                  {
                    value: 'SJ',
                    label: 'Svalbard and Jan Mayen',
                    description: '',
                  },
                  {
                    value: 'SE',
                    label: 'Sweden',
                    description: '',
                  },
                  {
                    value: 'CH',
                    label: 'Switzerland',
                    description: '',
                  },
                  {
                    value: 'SY',
                    label: 'Syrian Arab Republic (the)',
                    description: '',
                  },
                  {
                    value: 'TW',
                    label: 'Taiwan (Province of China)',
                    description: '',
                  },
                  {
                    value: 'TJ',
                    label: 'Tajikistan',
                    description: '',
                  },
                  {
                    value: 'TZ',
                    label: 'Tanzania, the United Republic of',
                    description: '',
                  },
                  {
                    value: 'TH',
                    label: 'Thailand',
                    description: '',
                  },
                  {
                    value: 'TL',
                    label: 'Timor-Leste',
                    description: '',
                  },
                  {
                    value: 'TG',
                    label: 'Togo',
                    description: '',
                  },
                  {
                    value: 'TK',
                    label: 'Tokelau',
                    description: '',
                  },
                  {
                    value: 'TO',
                    label: 'Tonga',
                    description: '',
                  },
                  {
                    value: 'TT',
                    label: 'Trinidad and Tobago',
                    description: '',
                  },
                  {
                    value: 'TN',
                    label: 'Tunisia',
                    description: '',
                  },
                  {
                    value: 'TR',
                    label: 'Turkey',
                    description: '',
                  },
                  {
                    value: 'TM',
                    label: 'Turkmenistan',
                    description: '',
                  },
                  {
                    value: 'TC',
                    label: 'Turks and Caicos Islands',
                    description: '',
                  },
                  {
                    value: 'TV',
                    label: 'Tuvalu',
                    description: '',
                  },
                  {
                    value: 'UG',
                    label: 'Uganda',
                    description: '',
                  },
                  {
                    value: 'UA',
                    label: 'Ukraine',
                    description: '',
                  },
                  {
                    value: 'AE',
                    label: 'United Arab Emirates',
                    description: '',
                  },
                  {
                    value: 'GB',
                    label: 'United Kingdom',
                    description: '',
                  },
                  {
                    value: 'US',
                    label: 'United States',
                    description: '',
                  },
                  {
                    value: 'UY',
                    label: 'Uruguay',
                    description: '',
                  },
                  {
                    value: 'UZ',
                    label: 'Uzbekistan',
                    description: '',
                  },
                  {
                    value: 'VU',
                    label: 'Vanuatu',
                    description: '',
                  },
                  {
                    value: 'VE',
                    label: 'Venezuela (Bolivarian Republic of)',
                    description: '',
                  },
                  {
                    value: 'VN',
                    label: 'Viet Nam',
                    description: '',
                  },
                  {
                    value: 'VG',
                    label: 'Virgin Islands (British)',
                    description: '',
                  },
                  {
                    value: 'WF',
                    label: 'Wallis and Futuna',
                    description: '',
                  },
                  {
                    value: 'EH',
                    label: 'Western Sahara',
                    description: '',
                  },
                  {
                    value: 'YE',
                    label: 'Yemen',
                    description: '',
                  },
                  {
                    value: 'ZM',
                    label: 'Zambia',
                    description: '',
                  },
                  {
                    value: 'ZW',
                    label: 'Zimbabwe',
                    description: '',
                  },
                ],
                conditionals: [
                  {
                    id: 'country-of-incorporation-cond-us',
                    conditional_type_in: {
                      values: ['US'],
                    },
                  },
                  {
                    id: 'country-of-incorporation-cond-not-us',
                    conditional_type_not_in: {
                      values: ['US'],
                    },
                  },
                  {
                    id: 'country-of-incorporation-cond-certificate-of-incumbency',
                    conditional_type_in: {
                      values: [
                        'AI',
                        'AG',
                        'AW',
                        'BS',
                        'BB',
                        'BZ',
                        'BM',
                        'BW',
                        'VG',
                        'CV',
                        'KY',
                        'CK',
                        'CW',
                        'DO',
                        'AN',
                        'GD',
                        'JM',
                        'MV',
                        'MH',
                        'MU',
                        'MN',
                        'MS',
                        'MA',
                        'NA',
                        'PA',
                        'KN',
                        'LC',
                        'MF',
                        'VC',
                        'SC',
                        'SX',
                        'TT',
                        'TC',
                        'VU',
                      ],
                    },
                  },
                  {
                    id: 'country-of-incorporation-cond-not-prime-product',
                    conditional_type_not_in: {
                      values: ['FR', 'NL', 'SG', 'DE'],
                    },
                  },
                  {
                    id: 'country-of-incorporation-cond-fr-ne-si-ge',
                    conditional_type_in: {
                      values: ['FR', 'NL', 'SG', 'DE'],
                    },
                  },
                  {
                    id: 'country-of-incorporation-cond-germany',
                    conditional_type_in: {
                      values: ['DE'],
                    },
                  },
                  {
                    id: 'country-of-incorporation-cond-france-netherlands',
                    conditional_type_in: {
                      values: ['FR', 'NL'],
                    },
                  },
                  {
                    id: 'country-of-incorporation-cond-non-germany-nor-us',
                    conditional_type_not_in: {
                      values: ['US', 'DE'],
                    },
                  },
                  {
                    id: 'country-of-incorporation-cond-non-de-fr-nl',
                    conditional_type_not_in: {
                      values: ['DE', 'FR', 'NL'],
                    },
                  },
                  {
                    id: 'country-of-incorporation-cond-custody-other-countries',
                    conditional_type_not_in: {
                      values: ['US', 'DE', 'FR', 'NL'],
                    },
                  },
                  {
                    id: 'country-of-incorporation-cond-singapore',
                    conditional_type_in: {
                      values: ['SG'],
                    },
                  },
                  {
                    id: 'country-of-incorporation-cond-uk',
                    conditional_type_in: {
                      values: ['GB'],
                    },
                  },
                  {
                    id: 'country-of-incorporation-cond-eea',
                    conditional_type_in: {
                      values: [
                        'BE',
                        'BG',
                        'CZ',
                        'DK',
                        'CY',
                        'LV',
                        'LT',
                        'LU',
                        'ES',
                        'FR',
                        'HR',
                        'IT',
                        'PL',
                        'PT',
                        'RO',
                        'SI',
                        'HU',
                        'MT',
                        'NL',
                        'AT',
                        'IS',
                        'LI',
                        'NO',
                        'SK',
                        'FI',
                        'SE',
                        'DE',
                        'EE',
                        'IE',
                        'EL',
                      ],
                    },
                  },
                  {
                    id: 'country-of-incorporation-cond-trading-rest',
                    conditional_type_not_in: {
                      values: [
                        'US',
                        'SG',
                        'DE',
                        'GB',
                        'FR',
                        'NL',
                        'BE',
                        'BG',
                        'CZ',
                        'DK',
                        'CY',
                        'LV',
                        'LT',
                        'LU',
                        'ES',
                        'FR',
                        'HR',
                        'IT',
                        'PL',
                        'PT',
                        'RO',
                        'SI',
                        'HU',
                        'MT',
                        'NL',
                        'AT',
                        'IS',
                        'LI',
                        'NO',
                        'SK',
                        'FI',
                        'SE',
                        'DE',
                        'EE',
                        'IE',
                        'EL',
                      ],
                    },
                  },
                ],
              },
              validations: [],
            },
          ],
        },
        {
          id: 'us-address',
          conditional_expression_id:
            'info-about-company-us-llc-comp-v3-cond-100',
          title: '',
          description: '',
          multi_answer: false,
          optional: false,
          fields: [
            {
              id: 'us-address',
              conditional_expression_id: '',
              title: 'Do you have a US address?',
              description: '',
              placeholder: '',
              required: true,
              field_type: 'FIELD_TYPE_SINGLESELECT',
              field_type_single_select: {
                default: '',
                type: 'SELECT_UNSPECIFIED',
                options: [
                  {
                    value: 'Yes',
                    label: 'Yes',
                    description: '',
                  },
                  {
                    value: 'No',
                    label: 'No',
                    description: '',
                  },
                ],
                conditionals: [
                  {
                    id: 'us-address-cond-yes',
                    conditional_type_in: {
                      values: ['Yes'],
                    },
                  },
                  {
                    id: 'us-address-cond-no',
                    conditional_type_not_in: {
                      values: ['Yes'],
                    },
                  },
                ],
              },
              validations: [],
            },
          ],
        },
        {
          id: 'us-bank-account',
          conditional_expression_id:
            'info-about-company-us-llc-comp-v3-cond-100',
          title: '',
          description: '',
          multi_answer: false,
          optional: false,
          fields: [
            {
              id: 'us-bank-account',
              conditional_expression_id: '',
              title: 'Do you have a US bank account?',
              description: '',
              placeholder: '',
              required: true,
              field_type: 'FIELD_TYPE_SINGLESELECT',
              field_type_single_select: {
                default: '',
                type: 'SELECT_UNSPECIFIED',
                options: [
                  {
                    value: 'Yes',
                    label: 'Yes',
                    description: '',
                  },
                  {
                    value: 'No',
                    label: 'No',
                    description: '',
                  },
                ],
                conditionals: [
                  {
                    id: 'us-bank-account-cond-yes',
                    conditional_type_in: {
                      values: ['Yes'],
                    },
                  },
                  {
                    id: 'us-bank-account-cond-no',
                    conditional_type_not_in: {
                      values: ['Yes'],
                    },
                  },
                ],
              },
              validations: [],
            },
          ],
        },
        {
          id: 'state-of-incorporation',
          conditional_expression_id:
            'info-about-company-us-llc-comp-v3-cond-11',
          title: '',
          description: '',
          multi_answer: false,
          optional: false,
          fields: [
            {
              id: 'state',
              conditional_expression_id: '',
              title: 'State of Incorporation ',
              description: '',
              placeholder: '',
              required: true,
              field_type: 'FIELD_TYPE_SINGLESELECT',
              field_type_single_select: {
                default: '',
                type: 'SELECT_UNSPECIFIED',
                options: [
                  {
                    value: 'AL',
                    label: 'Alabama',
                    description: '',
                  },
                  {
                    value: 'AK',
                    label: 'Alaska',
                    description: '',
                  },
                  {
                    value: 'AS',
                    label: 'American Samoa',
                    description: '',
                  },
                  {
                    value: 'AZ',
                    label: 'Arizona',
                    description: '',
                  },
                  {
                    value: 'AR',
                    label: 'Arkansas',
                    description: '',
                  },
                  {
                    value: 'CA',
                    label: 'California',
                    description: '',
                  },
                  {
                    value: 'CO',
                    label: 'Colorado',
                    description: '',
                  },
                  {
                    value: 'CT',
                    label: 'Connecticut',
                    description: '',
                  },
                  {
                    value: 'DE',
                    label: 'Delaware',
                    description: '',
                  },
                  {
                    value: 'DC',
                    label: 'District of Columbia',
                    description: '',
                  },
                  {
                    value: 'FL',
                    label: 'Florida',
                    description: '',
                  },
                  {
                    value: 'GA',
                    label: 'Georgia',
                    description: '',
                  },
                  {
                    value: 'GU',
                    label: 'Guam',
                    description: '',
                  },
                  {
                    value: 'HI',
                    label: 'Hawaii',
                    description: '',
                  },
                  {
                    value: 'ID',
                    label: 'Idaho',
                    description: '',
                  },
                  {
                    value: 'IL',
                    label: 'Illinois',
                    description: '',
                  },
                  {
                    value: 'IN',
                    label: 'Indiana',
                    description: '',
                  },
                  {
                    value: 'IA',
                    label: 'Iowa',
                    description: '',
                  },
                  {
                    value: 'KS',
                    label: 'Kansas',
                    description: '',
                  },
                  {
                    value: 'KY',
                    label: 'Kentucky',
                    description: '',
                  },
                  {
                    value: 'LA',
                    label: 'Louisiana',
                    description: '',
                  },
                  {
                    value: 'ME',
                    label: 'Maine',
                    description: '',
                  },
                  {
                    value: 'MD',
                    label: 'Maryland',
                    description: '',
                  },
                  {
                    value: 'MA',
                    label: 'Massachusetts',
                    description: '',
                  },
                  {
                    value: 'MI',
                    label: 'Michigan',
                    description: '',
                  },
                  {
                    value: 'MN',
                    label: 'Minnesota',
                    description: '',
                  },
                  {
                    value: 'MS',
                    label: 'Mississippi',
                    description: '',
                  },
                  {
                    value: 'MO',
                    label: 'Missouri',
                    description: '',
                  },
                  {
                    value: 'MT',
                    label: 'Montana',
                    description: '',
                  },
                  {
                    value: 'NE',
                    label: 'Nebraska',
                    description: '',
                  },
                  {
                    value: 'NV',
                    label: 'Nevada',
                    description: '',
                  },
                  {
                    value: 'NH',
                    label: 'New Hampshire',
                    description: '',
                  },
                  {
                    value: 'NJ',
                    label: 'New Jersey',
                    description: '',
                  },
                  {
                    value: 'NM',
                    label: 'New Mexico',
                    description: '',
                  },
                  {
                    value: 'NY',
                    label: 'New York',
                    description: '',
                  },
                  {
                    value: 'NC',
                    label: 'North Carolina',
                    description: '',
                  },
                  {
                    value: 'ND',
                    label: 'North Dakota',
                    description: '',
                  },
                  {
                    value: 'MP',
                    label: 'Northern Mariana Islands',
                    description: '',
                  },
                  {
                    value: 'OH',
                    label: 'Ohio',
                    description: '',
                  },
                  {
                    value: 'OK',
                    label: 'Oklahoma',
                    description: '',
                  },
                  {
                    value: 'OR',
                    label: 'Oregon',
                    description: '',
                  },
                  {
                    value: 'PA',
                    label: 'Pennsylvania',
                    description: '',
                  },
                  {
                    value: 'PR',
                    label: 'Puerto Rico',
                    description: '',
                  },
                  {
                    value: 'RI',
                    label: 'Rhode Island',
                    description: '',
                  },
                  {
                    value: 'SC',
                    label: 'South Carolina',
                    description: '',
                  },
                  {
                    value: 'SD',
                    label: 'South Dakota',
                    description: '',
                  },
                  {
                    value: 'TN',
                    label: 'Tennessee',
                    description: '',
                  },
                  {
                    value: 'TX',
                    label: 'Texas',
                    description: '',
                  },
                  {
                    value: 'UM',
                    label: 'US Minor Outlying Islands',
                    description: '',
                  },
                  {
                    value: 'VI',
                    label: 'US Virgin Islands',
                    description: '',
                  },
                  {
                    value: 'UT',
                    label: 'Utah',
                    description: '',
                  },
                  {
                    value: 'VT',
                    label: 'Vermont',
                    description: '',
                  },
                  {
                    value: 'VA',
                    label: 'Virginia',
                    description: '',
                  },
                  {
                    value: 'WA',
                    label: 'Washington',
                    description: '',
                  },
                  {
                    value: 'WV',
                    label: 'West Virginia',
                    description: '',
                  },
                  {
                    value: 'WI',
                    label: 'Wisconsin',
                    description: '',
                  },
                  {
                    value: 'WY',
                    label: 'Wyoming',
                    description: '',
                  },
                ],
                conditionals: [],
              },
              validations: [],
            },
          ],
        },
        {
          id: 'client-type',
          conditional_expression_id: '',
          title: '',
          description: '',
          multi_answer: false,
          optional: false,
          fields: [
            {
              id: 'client-type',
              conditional_expression_id: '',
              title: 'Type of business',
              description: '',
              placeholder: '',
              required: false,
              field_type: 'FIELD_TYPE_HEADER',
              field_type_header: {
                type: 'TYPE_HEADER2',
              },
              validations: [],
            },
          ],
        },
        {
          id: 'industry-comp',
          conditional_expression_id: '',
          title: '',
          description: '',
          multi_answer: false,
          optional: false,
          fields: [
            {
              id: 'industry-comp',
              conditional_expression_id: '',
              title: 'Industry',
              description: '',
              placeholder: '',
              required: true,
              field_type: 'FIELD_TYPE_SINGLESELECT',
              field_type_single_select: {
                default: '',
                type: 'SELECT_UNSPECIFIED',
                options: [
                  {
                    value: 'Crypto Services (non-financial)',
                    label: 'Crypto Services (non-financial)',
                    description: '',
                  },
                  {
                    value: 'Agriculture',
                    label: 'Agriculture',
                    description: '',
                  },
                  {
                    value: 'Education',
                    label: 'Education',
                    description: '',
                  },
                  {
                    value: 'Financial Services',
                    label: 'Financial Services',
                    description: '',
                  },
                  {
                    value: 'Investment (Proprietary Funds Only)',
                    label: 'Investment (Proprietary Funds Only)',
                    description: '',
                  },
                  {
                    value: 'Food & Hospitality',
                    label: 'Food & Hospitality',
                    description: '',
                  },
                  {
                    value: 'Government/Politics',
                    label: 'Government / Politics',
                    description: '',
                  },
                  {
                    value: 'Health & Fitness',
                    label: 'Health & Fitness',
                    description: '',
                  },
                  {
                    value: 'Industrial',
                    label: 'Industrial',
                    description: '',
                  },
                  {
                    value: 'Media / Arts',
                    label: 'Media / Arts',
                    description: '',
                  },
                  {
                    value: 'Non-Profit/Charity',
                    label: 'Nonprofit / Charity',
                    description: '',
                  },
                  {
                    value: 'Professional Services',
                    label: 'Professional Services',
                    description: '',
                  },
                  {
                    value: 'Real Estate',
                    label: 'Real Estate',
                    description: '',
                  },
                  {
                    value: 'Retail',
                    label: 'Retail',
                    description: '',
                  },
                  {
                    value: 'Technology/IT (non-crypto)',
                    label: 'Technology / IT (non-crypto)',
                    description: '',
                  },
                  {
                    value: 'Transportation & Shipping',
                    label: 'Transportation & Shipping',
                    description: '',
                  },
                ],
                conditionals: [
                  {
                    id: 'industry-comp-cond-1',
                    conditional_type_in: {
                      values: [
                        'Financial Services',
                        'Crypto Services (non-financial)',
                      ],
                    },
                  },
                  {
                    id: 'industry-comp-cond-2',
                    conditional_type_in: {
                      values: ['Agriculture'],
                    },
                  },
                  {
                    id: 'industry-comp-cond-3',
                    conditional_type_in: {
                      values: ['Crypto Services (non-financial)'],
                    },
                  },
                  {
                    id: 'industry-comp-cond-4',
                    conditional_type_in: {
                      values: ['Education'],
                    },
                  },
                  {
                    id: 'industry-comp-cond-5',
                    conditional_type_in: {
                      values: ['Financial Services'],
                    },
                  },
                  {
                    id: 'industry-comp-cond-6',
                    conditional_type_in: {
                      values: ['Food & Hospitality'],
                    },
                  },
                  {
                    id: 'industry-comp-cond-7',
                    conditional_type_in: {
                      values: ['Government/Politics'],
                    },
                  },
                  {
                    id: 'industry-comp-cond-8',
                    conditional_type_in: {
                      values: ['Health & Fitness'],
                    },
                  },
                  {
                    id: 'industry-comp-cond-9',
                    conditional_type_in: {
                      values: ['Industrial'],
                    },
                  },
                  {
                    id: 'industry-comp-cond-10',
                    conditional_type_in: {
                      values: ['Media / Arts'],
                    },
                  },
                  {
                    id: 'industry-comp-cond-11',
                    conditional_type_in: {
                      values: ['Non-Profit/Charity'],
                    },
                  },
                  {
                    id: 'industry-comp-cond-12',
                    conditional_type_in: {
                      values: ['Professional Services'],
                    },
                  },
                  {
                    id: 'industry-comp-cond-13',
                    conditional_type_in: {
                      values: ['Real Estate'],
                    },
                  },
                  {
                    id: 'industry-comp-cond-14',
                    conditional_type_in: {
                      values: ['Retail'],
                    },
                  },
                  {
                    id: 'industry-comp-cond-15',
                    conditional_type_in: {
                      values: ['Technology/IT (non-crypto)'],
                    },
                  },
                  {
                    id: 'industry-comp-cond-16',
                    conditional_type_in: {
                      values: ['Transportation & Shipping'],
                    },
                  },
                  {
                    id: 'industry-comp-cond-19',
                    conditional_type_in: {
                      values: ['Investment (Proprietary Funds Only)'],
                    },
                  },
                ],
              },
              validations: [],
            },
          ],
        },
        {
          id: 'business-type-agriculture',
          conditional_expression_id:
            'info-about-company-us-llc-comp-v3-cond-73',
          title: '',
          description: '',
          multi_answer: false,
          optional: false,
          fields: [
            {
              id: 'business-type',
              conditional_expression_id: '',
              title: 'Business type',
              description: '',
              placeholder: '',
              required: true,
              field_type: 'FIELD_TYPE_SINGLESELECT',
              field_type_single_select: {
                default: '',
                type: 'SELECT_UNSPECIFIED',
                options: [
                  {
                    value: 'Agricultural Supplies/Equipment',
                    label: 'Agricultural Supplies/Equipment',
                    description: '',
                  },
                  {
                    value: 'Farming',
                    label: 'Farming',
                    description: '',
                  },
                  {
                    value: 'Fishery',
                    label: 'Fishery',
                    description: '',
                  },
                  {
                    value: 'Ranching',
                    label: 'Ranching',
                    description: '',
                  },
                  {
                    value: 'Other',
                    label: 'Other',
                    description: '',
                  },
                ],
                conditionals: [
                  {
                    id: 'business-type-agriculture-cond-1',
                    conditional_type_in: {
                      values: ['Other'],
                    },
                  },
                ],
              },
              validations: [],
            },
          ],
        },
        {
          id: 'business-type-crypto-services-comp',
          conditional_expression_id:
            'info-about-company-us-llc-comp-v3-cond-74',
          title: '',
          description: '',
          multi_answer: false,
          optional: false,
          fields: [
            {
              id: 'business-type',
              conditional_expression_id: '',
              title: 'Business type',
              description: '',
              placeholder: '',
              required: true,
              field_type: 'FIELD_TYPE_SINGLESELECT',
              field_type_single_select: {
                default: '',
                type: 'SELECT_UNSPECIFIED',
                options: [
                  {
                    value: 'Crypto Advisory / Consultancy',
                    label: 'Crypto Advisory / Consultancy',
                    description: '',
                  },
                  {
                    value: 'Crypto/Blockchain Software Engineering',
                    label: 'Crypto/Blockchain Software Engineering',
                    description: '',
                  },
                  {
                    value: 'Crypto Miner / Mining Pool',
                    label: 'Crypto Miner / Mining Pool',
                    description: '',
                  },
                  {
                    value: 'Mining Hardware',
                    label: 'Mining Hardware',
                    description: '',
                  },
                  {
                    value: 'Spinner/Mixer',
                    label: 'Spinner/Mixer',
                    description: '',
                  },
                  {
                    value: 'Relayer',
                    label: 'Relayer',
                    description: '',
                  },
                  {
                    value: 'Other',
                    label: 'Other',
                    description: '',
                  },
                ],
                conditionals: [
                  {
                    id: 'business-type-crypto-services-comp-cond-1',
                    conditional_type_in: {
                      values: ['Other'],
                    },
                  },
                  {
                    id: 'business-type-crypto-services-comp-cond-2',
                    conditional_type_in: {
                      values: ['Crypto Miner / Mining Pool'],
                    },
                  },
                ],
              },
              validations: [],
            },
          ],
        },
        {
          id: 'business-type-education',
          conditional_expression_id:
            'info-about-company-us-llc-comp-v3-cond-75',
          title: '',
          description: '',
          multi_answer: false,
          optional: false,
          fields: [
            {
              id: 'business-type',
              conditional_expression_id: '',
              title: 'Business type',
              description: '',
              placeholder: '',
              required: true,
              field_type: 'FIELD_TYPE_SINGLESELECT',
              field_type_single_select: {
                default: '',
                type: 'SELECT_UNSPECIFIED',
                options: [
                  {
                    value: 'Child Care Services',
                    label: 'Child Care Services',
                    description: '',
                  },
                  {
                    value: 'College/University',
                    label: 'College / University',
                    description: '',
                  },
                  {
                    value: 'Educational Services/Tutoring',
                    label: 'Educational Services / Tutoring',
                    description: '',
                  },
                  {
                    value: 'E-learning',
                    label: 'E-learning',
                    description: '',
                  },
                  {
                    value: 'Pre-K',
                    label: 'Pre-K',
                    description: '',
                  },
                  {
                    value: 'Primary Education (up to High school)',
                    label: 'Primary Education (up to High school)',
                    description: '',
                  },
                  {
                    value: 'Textbooks',
                    label: 'Textbooks',
                    description: '',
                  },
                  {
                    value: 'Other',
                    label: 'Other',
                    description: '',
                  },
                ],
                conditionals: [
                  {
                    id: 'business-type-education-cond-1',
                    conditional_type_in: {
                      values: ['Other'],
                    },
                  },
                ],
              },
              validations: [],
            },
          ],
        },
        {
          id: 'business-type-financial-services-comp',
          conditional_expression_id:
            'info-about-company-us-llc-comp-v3-cond-76',
          title: '',
          description: '',
          multi_answer: false,
          optional: false,
          fields: [
            {
              id: 'business-type',
              conditional_expression_id: '',
              title: 'Business type',
              description: '',
              placeholder: '',
              required: true,
              field_type: 'FIELD_TYPE_SINGLESELECT',
              field_type_single_select: {
                default: '',
                type: 'SELECT_UNSPECIFIED',
                options: [
                  {
                    value: 'Commodities Exchange',
                    label: 'Commodities Exchange',
                    description: '',
                  },
                  {
                    value: 'Crowdfunding',
                    label: 'Crowdfunding',
                    description: '',
                  },
                  {
                    value: 'Debt Collections',
                    label: 'Debt Collections',
                    description: '',
                  },
                  {
                    value: 'ETF / ETP',
                    label: 'ETF / ETP',
                    description: '',
                  },
                  {
                    value: 'Forex Exchange',
                    label: 'Forex Exchange',
                    description: '',
                  },
                  {
                    value: 'Fund Manager',
                    label: 'Fund Manager',
                    description: '',
                  },
                  {
                    value: 'FX/CFD Provider',
                    label: 'FX / CFD Provider',
                    description: '',
                  },
                  {
                    value: 'Hedge Fund',
                    label: 'Hedge Fund',
                    description: '',
                  },
                  {
                    value: 'Insurance',
                    label: 'Insurance',
                    description: '',
                  },
                  {
                    value: 'Investment Advisor/ Robo-advisor',
                    label: 'Investment Advisor / Robo-advisor',
                    description: '',
                  },
                  {
                    value: 'Lending/Borrowing',
                    label: 'Lending / Borrowing',
                    description: '',
                  },
                  {
                    value: 'Mutual Fund',
                    label: 'Mutual Fund',
                    description: '',
                  },
                  {
                    value: 'OTC desk',
                    label: 'OTC desk',
                    description: '',
                  },
                  {
                    value: 'Pay-day loans',
                    label: 'Payday loans',
                    description: '',
                  },
                  {
                    value: 'Precious Metals Dealer',
                    label: 'Precious Metals Dealer',
                    description: '',
                  },
                  {
                    value: 'Pre-paid Cards / Giftcards',
                    label: 'Pre-paid Cards / Giftcards',
                    description: '',
                  },
                  {
                    value: 'Private Equity',
                    label: 'Private Equity',
                    description: '',
                  },
                  {
                    value: 'Retail brokerage (non-crypto)',
                    label: 'Retail brokerage (non-crypto)',
                    description: '',
                  },
                  {
                    value: 'Securities Exchange',
                    label: 'Securities Exchange',
                    description: '',
                  },
                  {
                    value: 'Venture Capital',
                    label: 'Venture Capital',
                    description: '',
                  },
                  {
                    value: 'Banking Institution',
                    label: 'Banking Institution',
                    description: '',
                  },
                  {
                    value: 'Mortgage Servicers',
                    label: 'Mortgage Servicers',
                    description: '',
                  },
                  {
                    value: 'Other',
                    label: 'Other',
                    description: '',
                  },
                  {
                    value: 'Institutional Brokerage (non-crypto)',
                    label: 'Institutional Brokerage (non-crypto)',
                    description: '',
                  },
                  {
                    value: 'Crypto ATM',
                    label: 'Crypto ATM',
                    description: '',
                  },
                  {
                    value: 'Crypto Custody',
                    label: 'Crypto Custody',
                    description: '',
                  },
                  {
                    value: 'Crypto Exchange',
                    label: 'Crypto Exchange',
                    description: '',
                  },
                  {
                    value: 'Crypto Gambling',
                    label: 'Crypto Gambling',
                    description: '',
                  },
                  {
                    value: 'Crypto Lending/Borrowing',
                    label: 'Crypto Lending/Borrowing',
                    description: '',
                  },
                  {
                    value: 'Crypto OTC (Agency Desk)',
                    label: 'Crypto OTC (Agency Desk)',
                    description: '',
                  },
                  {
                    value: 'Crypto OTC (Principal Desk)',
                    label: 'Crypto OTC (Principal Desk)',
                    description: '',
                  },
                  {
                    value: 'Crypto Payroll',
                    label: 'Crypto Payroll',
                    description: '',
                  },
                  {
                    value: 'Crypto Payments',
                    label: 'Crypto Payments',
                    description: '',
                  },
                  {
                    value: 'Initial Coin Offering / Security Token Offering',
                    label: 'Initial Coin Offering / Security Token Offering',
                    description: '',
                  },
                  {
                    value: 'Non-custodial crypto wallet',
                    label: 'Non-custodial crypto wallet',
                    description: '',
                  },
                  {
                    value: 'Ransomware-related services',
                    label: 'Ransomware-related services',
                    description: '',
                  },
                  {
                    value: 'Crypto Hedge Fund',
                    label: 'Crypto Hedge Fund',
                    description: '',
                  },
                  {
                    value: 'Tokensale Platform',
                    label: 'Tokensale Platform',
                    description: '',
                  },
                ],
                conditionals: [
                  {
                    id: 'business-type-financial-services-comp-cond-1',
                    conditional_type_in: {
                      values: ['Other'],
                    },
                  },
                  {
                    id: 'business-type-financial-services-comp-cond-2',
                    conditional_type_in: {
                      values: ['Crypto Payroll'],
                    },
                  },
                ],
              },
              validations: [],
            },
          ],
        },
        {
          id: 'business-type-investment-comp',
          conditional_expression_id:
            'info-about-company-us-llc-comp-v3-cond-98',
          title: '',
          description: '',
          multi_answer: false,
          optional: false,
          fields: [
            {
              id: 'business-type',
              conditional_expression_id: '',
              title: 'Business type',
              description: '',
              placeholder: '',
              required: true,
              field_type: 'FIELD_TYPE_SINGLESELECT',
              field_type_single_select: {
                default: '',
                type: 'SELECT_UNSPECIFIED',
                options: [
                  {
                    value: 'Family Office / Wealth Manager',
                    label: 'Family Office / Wealth Manager',
                    description: '',
                  },
                  {
                    value: 'Personal Investment Company (PIC)',
                    label: 'Personal Investment Company (PIC)',
                    description: '',
                  },
                  {
                    value: 'Proprietary Trading Firm',
                    label: 'Proprietary Trading Firm',
                    description: '',
                  },
                  {
                    value: 'Pension Fund / SSAS',
                    label: 'Pension Fund / SSAS',
                    description: '',
                  },
                  {
                    value: 'Market Maker',
                    label: 'Market Maker',
                    description: '',
                  },
                  {
                    value: 'Holding Companies',
                    label: 'Holding Companies',
                    description: '',
                  },
                  {
                    value: 'Fund Administrator',
                    label: 'Fund Administrator',
                    description: '',
                  },
                  {
                    value: 'Pension Fund',
                    label: 'Pension Fund',
                    description: '',
                  },
                  {
                    value: 'Self Directed IRA, 401k',
                    label: 'Self Directed IRA, 401k',
                    description: '',
                  },
                  {
                    value: 'Irrevocable Trust',
                    label: 'Irrevocable Trust',
                    description: '',
                  },
                  {
                    value: 'Revocable Trust',
                    label: 'Revocable Trust',
                    description: '',
                  },
                  {
                    value: 'Charitable Trust',
                    label: 'Charitable Trust',
                    description: '',
                  },
                  {
                    value: 'Corporate Trust',
                    label: 'Corporate Trust',
                    description: '',
                  },
                ],
                conditionals: [
                  {
                    id: 'business-type-investment-comp-cond-1',
                    conditional_type_in: {
                      values: ['Family Office / Wealth Manager'],
                    },
                  },
                ],
              },
              validations: [],
            },
          ],
        },
        {
          id: 'business-type-food-hospitality',
          conditional_expression_id:
            'info-about-company-us-llc-comp-v3-cond-77',
          title: '',
          description: '',
          multi_answer: false,
          optional: false,
          fields: [
            {
              id: 'business-type',
              conditional_expression_id: '',
              title: 'Business type',
              description: '',
              placeholder: '',
              required: true,
              field_type: 'FIELD_TYPE_SINGLESELECT',
              field_type_single_select: {
                default: '',
                type: 'SELECT_UNSPECIFIED',
                options: [
                  {
                    value: 'Bar',
                    label: 'Bar',
                    description: '',
                  },
                  {
                    value: 'Catering',
                    label: 'Catering',
                    description: '',
                  },
                  {
                    value: 'Event Planning',
                    label: 'Event Planning',
                    description: '',
                  },
                  {
                    value: 'Food/Beverage Services',
                    label: 'Food / Beverage Services',
                    description: '',
                  },
                  {
                    value: 'Food Processing',
                    label: 'Food Processing',
                    description: '',
                  },
                  {
                    value: 'Hotels/Motels',
                    label: 'Hotels / Motels',
                    description: '',
                  },
                  {
                    value: 'Restaurant',
                    label: 'Restaurant',
                    description: '',
                  },
                  {
                    value: 'Spa/Massage Services',
                    label: 'Spa / Massage Services',
                    description: '',
                  },
                  {
                    value: 'Other',
                    label: 'Other',
                    description: '',
                  },
                ],
                conditionals: [
                  {
                    id: 'business-type-food-hospitality-cond-1',
                    conditional_type_in: {
                      values: ['Other'],
                    },
                  },
                  {
                    id: 'business-type-food-hospitality-cond-2',
                    conditional_type_not_in: {
                      values: ['Restaurant', 'Bar'],
                    },
                  },
                ],
              },
              validations: [],
            },
          ],
        },
        {
          id: 'business-type-government-politics',
          conditional_expression_id:
            'info-about-company-us-llc-comp-v3-cond-78',
          title: '',
          description: '',
          multi_answer: false,
          optional: false,
          fields: [
            {
              id: 'business-type',
              conditional_expression_id: '',
              title: 'Business type',
              description: '',
              placeholder: '',
              required: true,
              field_type: 'FIELD_TYPE_SINGLESELECT',
              field_type_single_select: {
                default: '',
                type: 'SELECT_UNSPECIFIED',
                options: [
                  {
                    value: 'Government Administration',
                    label: 'Government Administration',
                    description: '',
                  },
                  {
                    value: 'Law Enforcement',
                    label: 'Law Enforcement',
                    description: '',
                  },
                  {
                    value: 'Legislative Office',
                    label: 'Legislative Office',
                    description: '',
                  },
                  {
                    value: 'Military/Defense',
                    label: 'Military / Defense',
                    description: '',
                  },
                  {
                    value: 'Political Campaign',
                    label: 'Political Campaign',
                    description: '',
                  },
                  {
                    value: 'Political Organization',
                    label: 'Political Organization',
                    description: '',
                  },
                  {
                    value: 'Other',
                    label: 'Other',
                    description: '',
                  },
                ],
                conditionals: [
                  {
                    id: 'business-type-government-politics-cond-1',
                    conditional_type_in: {
                      values: ['Other'],
                    },
                  },
                ],
              },
              validations: [],
            },
          ],
        },
        {
          id: 'business-type-health-fitness',
          conditional_expression_id:
            'info-about-company-us-llc-comp-v3-cond-79',
          title: '',
          description: '',
          multi_answer: false,
          optional: false,
          fields: [
            {
              id: 'business-type',
              conditional_expression_id: '',
              title: 'Business type',
              description: '',
              placeholder: '',
              required: true,
              field_type: 'FIELD_TYPE_SINGLESELECT',
              field_type_single_select: {
                default: '',
                type: 'SELECT_UNSPECIFIED',
                options: [
                  {
                    value: 'Chiropractor',
                    label: 'Chiropractor',
                    description: '',
                  },
                  {
                    value: 'Dental/Orthodontic Services',
                    label: 'Dental / Orthodontic Services',
                    description: '',
                  },
                  {
                    value: 'Dietary Supplements',
                    label: 'Dietary Supplements',
                    description: '',
                  },
                  {
                    value: 'Gym',
                    label: 'Gym',
                    description: '',
                  },
                  {
                    value: 'Health Professionals',
                    label: 'Health Professionals',
                    description: '',
                  },
                  {
                    value: 'Health Services',
                    label: 'Health Services',
                    description: '',
                  },
                  {
                    value: 'Hospital/Hospice Services',
                    label: 'Hospital/Hospice Services',
                    description: '',
                  },
                  {
                    value: 'Massage Therapy',
                    label: 'Massage Therapy',
                    description: '',
                  },
                  {
                    value: 'Medical Devices',
                    label: 'Medical Devices',
                    description: '',
                  },
                  {
                    value: 'Personal Training',
                    label: 'Personal Training',
                    description: '',
                  },
                  {
                    value: 'Pharmaceuticals',
                    label: 'Pharmaceuticals',
                    description: '',
                  },
                  {
                    value: 'Pharmacy',
                    label: 'Pharmacy',
                    description: '',
                  },
                  {
                    value: 'Physical Training',
                    label: 'Physical Training',
                    description: '',
                  },
                  {
                    value: 'Professional Sports',
                    label: 'Professional Sports',
                    description: '',
                  },
                  {
                    value: 'Veterinary Medicine',
                    label: 'Veterinary Medicine',
                    description: '',
                  },
                  {
                    value: 'Other',
                    label: 'Other',
                    description: '',
                  },
                ],
                conditionals: [
                  {
                    id: 'business-type-health-fitness-cond-1',
                    conditional_type_in: {
                      values: ['Other'],
                    },
                  },
                ],
              },
              validations: [],
            },
          ],
        },
        {
          id: 'business-type-industrial-comp',
          conditional_expression_id:
            'info-about-company-us-llc-comp-v3-cond-80',
          title: '',
          description: '',
          multi_answer: false,
          optional: false,
          fields: [
            {
              id: 'business-type',
              conditional_expression_id: '',
              title: 'Business type',
              description: '',
              placeholder: '',
              required: true,
              field_type: 'FIELD_TYPE_SINGLESELECT',
              field_type_single_select: {
                default: '',
                type: 'SELECT_UNSPECIFIED',
                options: [
                  {
                    value: 'Arms/Weapon Manufacturing',
                    label: 'Arms/Weapon Manufacturing',
                    description: '',
                  },
                  {
                    value: 'Aerospace',
                    label: 'Aerospace',
                    description: '',
                  },
                  {
                    value: 'Chemical Manufacturing',
                    label: 'Chemical Manufacturing',
                    description: '',
                  },
                  {
                    value: 'Construction',
                    label: 'Construction',
                    description: '',
                  },
                  {
                    value: 'Engineering',
                    label: 'Engineering',
                    description: '',
                  },
                  {
                    value: 'Industrial Automation',
                    label: 'Industrial Automation',
                    description: '',
                  },
                  {
                    value: 'Manufacturing',
                    label: 'Manufacturing',
                    description: '',
                  },
                  {
                    value: 'Mining',
                    label: 'Mining',
                    description: '',
                  },
                  {
                    value: 'Oil & Gas',
                    label: 'Oil & Gas',
                    description: '',
                  },
                  {
                    value: 'Rail',
                    label: 'Rail',
                    description: '',
                  },
                  {
                    value: 'Textiles',
                    label: 'Textiles',
                    description: '',
                  },
                  {
                    value: 'Trade Union',
                    label: 'Trade Union',
                    description: '',
                  },
                  {
                    value: 'Utilities',
                    label: 'Utilities',
                    description: '',
                  },
                  {
                    value: 'Warehouse',
                    label: 'Warehouse',
                    description: '',
                  },
                  {
                    value: 'Waste Management',
                    label: 'Waste Management',
                    description: '',
                  },
                  {
                    value: 'Welding',
                    label: 'Welding',
                    description: '',
                  },
                  {
                    value: 'Other',
                    label: 'Other',
                    description: '',
                  },
                ],
                conditionals: [
                  {
                    id: 'business-type-industrial-comp-cond-1',
                    conditional_type_in: {
                      values: ['Other'],
                    },
                  },
                ],
              },
              validations: [],
            },
          ],
        },
        {
          id: 'business-type-media-arts',
          conditional_expression_id:
            'info-about-company-us-llc-comp-v3-cond-81',
          title: '',
          description: '',
          multi_answer: false,
          optional: false,
          fields: [
            {
              id: 'business-type',
              conditional_expression_id: '',
              title: 'Business type',
              description: '',
              placeholder: '',
              required: true,
              field_type: 'FIELD_TYPE_SINGLESELECT',
              field_type_single_select: {
                default: '',
                type: 'SELECT_UNSPECIFIED',
                options: [
                  {
                    value: 'Animation',
                    label: 'Animation',
                    description: '',
                  },
                  {
                    value: 'Fine Art',
                    label: 'Fine Art',
                    description: '',
                  },
                  {
                    value: 'Graphic/Web Design',
                    label: 'Graphic / Web Design',
                    description: '',
                  },
                  {
                    value: 'Media Production',
                    label: 'Media Production',
                    description: '',
                  },
                  {
                    value: 'Motion Pictures / Film',
                    label: 'Motion Pictures / Film',
                    description: '',
                  },
                  {
                    value: 'Music Production',
                    label: 'Music Production',
                    description: '',
                  },
                  {
                    value: 'Newspaper, Magazine, & Book Publishing',
                    label: 'Newspaper, Magazine, & Book Publishing',
                    description: '',
                  },
                  {
                    value: 'Online Publishing',
                    label: 'Online Publishing',
                    description: '',
                  },
                  {
                    value: 'Performing Arts',
                    label: 'Performing Arts',
                    description: '',
                  },
                  {
                    value: 'Photography',
                    label: 'Photography',
                    description: '',
                  },
                  {
                    value: 'Printing',
                    label: 'Printing',
                    description: '',
                  },
                  {
                    value: 'Other',
                    label: 'Other',
                    description: '',
                  },
                ],
                conditionals: [
                  {
                    id: 'business-type-media-arts-cond-1',
                    conditional_type_in: {
                      values: ['Other'],
                    },
                  },
                ],
              },
              validations: [],
            },
          ],
        },
        {
          id: 'business-type-non-profit-charity',
          conditional_expression_id:
            'info-about-company-us-llc-comp-v3-cond-82',
          title: '',
          description: '',
          multi_answer: false,
          optional: false,
          fields: [
            {
              id: 'business-type',
              conditional_expression_id: '',
              title: 'Business type',
              description: '',
              placeholder: '',
              required: true,
              field_type: 'FIELD_TYPE_SINGLESELECT',
              field_type_single_select: {
                default: '',
                type: 'SELECT_UNSPECIFIED',
                options: [
                  {
                    value: 'Adult Education Programs and Services',
                    label: 'Adult Education Programs and Services',
                    description: '',
                  },
                  {
                    value: 'Advocacy and Education',
                    label: 'Advocacy and Education',
                    description: '',
                  },
                  {
                    value: 'Animal Rights, Welfare, and Services',
                    label: 'Animal Rights, Welfare, and Services',
                    description: '',
                  },
                  {
                    value: 'Community Foundations',
                    label: 'Community Foundations',
                    description: '',
                  },
                  {
                    value: 'Diseases, Disorders, and Disciplines',
                    label: 'Diseases, Disorders, and Disciplines',
                    description: '',
                  },
                  {
                    value: 'Early Childhood Programs and Services',
                    label: 'Early Childhood Programs and Services',
                    description: '',
                  },
                  {
                    value: 'Education Policy and Reform',
                    label: 'Education Policy and Reform',
                    description: '',
                  },
                  {
                    value: 'Family Services',
                    label: 'Family Services',
                    description: '',
                  },
                  {
                    value: 'Food Banks, Food Pantries, and Food Distribution',
                    label: 'Food Banks, Food Pantries, and Food Distribution',
                    description: '',
                  },
                  {
                    value: 'Homeless/Social Services',
                    label: 'Homeless / Social Services',
                    description: '',
                  },
                  {
                    value: 'Housing and Neighborhood Development',
                    label: 'Housing and Neighborhood Development',
                    description: '',
                  },
                  {
                    value: 'Humanitarian Relief Supplies',
                    label: 'Humanitarian Relief Supplies',
                    description: '',
                  },
                  {
                    value: 'International Peace, Security, and Affairs',
                    label: 'International Peace, Security, and Affairs',
                    description: '',
                  },
                  {
                    value:
                      'Libraries, Historical Societies and Landmark Preservation',
                    label:
                      'Libraries, Historical Societies and Landmark Preservation',
                    description: '',
                  },
                  {
                    value: 'Medical Research',
                    label: 'Medical Research',
                    description: '',
                  },
                  {
                    value: 'Museums',
                    label: 'Museums',
                    description: '',
                  },
                  {
                    value: 'Non-Medical Science & Technology Research',
                    label: 'Non-Medical Science & Technology Research',
                    description: '',
                  },
                  {
                    value: 'Performing Arts',
                    label: 'Performing Arts',
                    description: '',
                  },
                  {
                    value: 'Public Broadcasting and Media',
                    label: 'Public Broadcasting and Media',
                    description: '',
                  },
                  {
                    value: 'Religious Activities/Services',
                    label: 'Religious Activities / Services',
                    description: '',
                  },
                  {
                    value: 'Scholarship and Financial Support',
                    label: 'Scholarship and Financial Support',
                    description: '',
                  },
                  {
                    value: 'Social and Public Policy Research',
                    label: 'Social and Public Policy Research',
                    description: '',
                  },
                  {
                    value: 'Special Education',
                    label: 'Special Education',
                    description: '',
                  },
                  {
                    value: 'Treatment and Prevention Services',
                    label: 'Treatment and Prevention Services',
                    description: '',
                  },
                  {
                    value: 'United Ways',
                    label: 'United Ways',
                    description: '',
                  },
                  {
                    value: 'Wildlife/Environmental Conservation',
                    label: 'Wildlife / Environmental Conservation',
                    description: '',
                  },
                  {
                    value: 'Youth Development, Shelter, and Crisis Services',
                    label: 'Youth Development, Shelter, and Crisis Services',
                    description: '',
                  },
                  {
                    value: 'Youth Education Programs and Services',
                    label: 'Youth Education Programs and Services',
                    description: '',
                  },
                  {
                    value: 'Zoos / Aquariums / Parks',
                    label: 'Zoos / Aquariums / Parks',
                    description: '',
                  },
                  {
                    value: 'Other',
                    label: 'Other',
                    description: '',
                  },
                ],
                conditionals: [
                  {
                    id: 'business-type-non-profit-charity-cond-1',
                    conditional_type_in: {
                      values: ['Other'],
                    },
                  },
                ],
              },
              validations: [],
            },
          ],
        },
        {
          id: 'business-type-professional-services-comp',
          conditional_expression_id:
            'info-about-company-us-llc-comp-v3-cond-83',
          title: '',
          description: '',
          multi_answer: false,
          optional: false,
          fields: [
            {
              id: 'business-type',
              conditional_expression_id: '',
              title: 'Business type',
              description: '',
              placeholder: '',
              required: true,
              field_type: 'FIELD_TYPE_SINGLESELECT',
              field_type_single_select: {
                default: '',
                type: 'SELECT_UNSPECIFIED',
                options: [
                  {
                    value: 'Accounting Firm',
                    label: 'Accounting Firm',
                    description: '',
                  },
                  {
                    value: 'Actuary',
                    label: 'Actuary',
                    description: '',
                  },
                  {
                    value: 'Architecture',
                    label: 'Architecture',
                    description: '',
                  },
                  {
                    value: 'Bail Bonds',
                    label: 'Bail Bonds',
                    description: '',
                  },
                  {
                    value: 'Consulting Services',
                    label: 'Consulting Services',
                    description: '',
                  },
                  {
                    value: 'Financial Planner',
                    label: 'Financial Planner',
                    description: '',
                  },
                  {
                    value: 'HR',
                    label: 'HR',
                    description: '',
                  },
                  {
                    value: 'Law Practice / Law Firm',
                    label: 'Law Practice / Law Firm',
                    description: '',
                  },
                  {
                    value: 'Legal (Appointed Receivership)',
                    label: 'Legal (Appointed Receivership)',
                    description: '',
                  },
                  {
                    value: 'Legal (Bankruptcy Trustee)',
                    label: 'Legal (Bankruptcy Trustee)',
                    description: '',
                  },
                  {
                    value: 'Legal Services',
                    label: 'Legal Services',
                    description: '',
                  },
                  {
                    value: 'Marketing',
                    label: 'Marketing',
                    description: '',
                  },
                  {
                    value: 'Public Relations / PR',
                    label: 'Public Relations / PR',
                    description: '',
                  },
                  {
                    value: 'Staffing/Recruiting',
                    label: 'Staffing / Recruiting',
                    description: '',
                  },
                  {
                    value: 'Training & Development',
                    label: 'Training & Development',
                    description: '',
                  },
                  {
                    value: 'Translation / Localization',
                    label: 'Translation / Localization',
                    description: '',
                  },
                  {
                    value: 'Other',
                    label: 'Other',
                    description: '',
                  },
                ],
                conditionals: [
                  {
                    id: 'business-type-professional-services-comp-cond-1',
                    conditional_type_in: {
                      values: ['Other'],
                    },
                  },
                ],
              },
              validations: [],
            },
          ],
        },
        {
          id: 'business-type-real-estate-comp',
          conditional_expression_id:
            'info-about-company-us-llc-comp-v3-cond-84',
          title: '',
          description: '',
          multi_answer: false,
          optional: false,
          fields: [
            {
              id: 'business-type',
              conditional_expression_id: '',
              title: 'Business type',
              description: '',
              placeholder: '',
              required: true,
              field_type: 'FIELD_TYPE_SINGLESELECT',
              field_type_single_select: {
                default: '',
                type: 'SELECT_UNSPECIFIED',
                options: [
                  {
                    value: 'Real Estate Holding Company',
                    label: 'Real Estate Holding Company',
                    description: '',
                  },
                  {
                    value: 'Commercial Real Estate',
                    label: 'Commercial Real Estate',
                    description: '',
                  },
                  {
                    value: 'Property Management / Leasing',
                    label: 'Property Management / Leasing',
                    description: '',
                  },
                  {
                    value: 'Realtor',
                    label: 'Realtor',
                    description: '',
                  },
                  {
                    value: 'Other',
                    label: 'Other',
                    description: '',
                  },
                ],
                conditionals: [
                  {
                    id: 'business-type-real-estate-comp-cond-1',
                    conditional_type_in: {
                      values: ['Other'],
                    },
                  },
                ],
              },
              validations: [],
            },
          ],
        },
        {
          id: 'business-type-retail',
          conditional_expression_id:
            'info-about-company-us-llc-comp-v3-cond-85',
          title: '',
          description: '',
          multi_answer: false,
          optional: false,
          fields: [
            {
              id: 'business-type',
              conditional_expression_id: '',
              title: 'Business type',
              description: '',
              placeholder: '',
              required: true,
              field_type: 'FIELD_TYPE_SINGLESELECT',
              field_type_single_select: {
                default: '',
                type: 'SELECT_UNSPECIFIED',
                options: [
                  {
                    value: 'Adult products & services / Pornography',
                    label: 'Adult products & services / Pornography',
                    description: '',
                  },
                  {
                    value: 'Alcohol',
                    label: 'Alcohol',
                    description: '',
                  },
                  {
                    value: 'Apparel & Fashion',
                    label: 'Apparel & Fashion',
                    description: '',
                  },
                  {
                    value: 'Automotive',
                    label: 'Automotive',
                    description: '',
                  },
                  {
                    value: 'Building Materials',
                    label: 'Building Materials',
                    description: '',
                  },
                  {
                    value: 'Business Supplies/Equipment',
                    label: 'Business Supplies/Equipment',
                    description: '',
                  },
                  {
                    value: 'Cannabis',
                    label: 'Cannabis',
                    description: '',
                  },
                  {
                    value: 'Car Dealership',
                    label: 'Car Dealership',
                    description: '',
                  },
                  {
                    value: 'Chemicals',
                    label: 'Chemicals',
                    description: '',
                  },
                  {
                    value: 'Computer Hardware/Accessories',
                    label: 'Computer Hardware/Accessories',
                    description: '',
                  },
                  {
                    value: 'Consumer Electronics',
                    label: 'Consumer Electronics',
                    description: '',
                  },
                  {
                    value: 'Cosmetics',
                    label: 'Cosmetics',
                    description: '',
                  },
                  {
                    value: 'Dietary Supplements',
                    label: 'Dietary Supplements',
                    description: '',
                  },
                  {
                    value: 'Fine Art',
                    label: 'Fine Art',
                    description: '',
                  },
                  {
                    value: 'Firearms / Gun accessories / Knives',
                    label: 'Firearms / Gun accessories / Knives',
                    description: '',
                  },
                  {
                    value: 'Food/Grocery',
                    label: 'Food/Grocery',
                    description: '',
                  },
                  {
                    value: 'Furniture',
                    label: 'Furniture',
                    description: '',
                  },
                  {
                    value: 'Health & Fitness',
                    label: 'Health & Fitness',
                    description: '',
                  },
                  {
                    value: 'Luxury Goods / Jewelry',
                    label: 'Luxury Goods / Jewelry',
                    description: '',
                  },
                  {
                    value: 'Online Retailer',
                    label: 'Online Retailer',
                    description: '',
                  },
                  {
                    value: 'Smoke-shop',
                    label: 'Smoke-shop',
                    description: '',
                  },
                  {
                    value: 'Sporting Goods',
                    label: 'Sporting Goods',
                    description: '',
                  },
                  {
                    value: 'Tobacco / Vape Supplies',
                    label: 'Tobacco / Vape Supplies',
                    description: '',
                  },
                  {
                    value: 'Video Games',
                    label: 'Video Games',
                    description: '',
                  },
                  {
                    value: 'Other',
                    label: 'Other',
                    description: '',
                  },
                ],
                conditionals: [
                  {
                    id: 'business-type-retail-cond-1',
                    conditional_type_in: {
                      values: ['Other'],
                    },
                  },
                ],
              },
              validations: [],
            },
          ],
        },
        {
          id: 'business-type-technology-it-non-crypto-comp',
          conditional_expression_id:
            'info-about-company-us-llc-comp-v3-cond-86',
          title: '',
          description: '',
          multi_answer: false,
          optional: false,
          fields: [
            {
              id: 'business-type',
              conditional_expression_id: '',
              title: 'Business type',
              description: '',
              placeholder: '',
              required: true,
              field_type: 'FIELD_TYPE_SINGLESELECT',
              field_type_single_select: {
                default: '',
                type: 'SELECT_UNSPECIFIED',
                options: [
                  {
                    value: 'Adult Entertainment',
                    label: 'Adult Entertainment',
                    description: '',
                  },
                  {
                    value: 'Biotechnology / Greentech',
                    label: 'Biotechnology / Greentech',
                    description: '',
                  },
                  {
                    value: 'Digital Advertising',
                    label: 'Digital Advertising',
                    description: '',
                  },
                  {
                    value: 'File Sharing',
                    label: 'File Sharing',
                    description: '',
                  },
                  {
                    value: 'Internet/Telecom Provider',
                    label: 'Internet/Telecom Provider',
                    description: '',
                  },
                  {
                    value: 'Network Security',
                    label: 'Network Security',
                    description: '',
                  },
                  {
                    value: 'Social Media Platform',
                    label: 'Social Media Platform',
                    description: '',
                  },
                  {
                    value: 'Software Engineering',
                    label: 'Software Engineering',
                    description: '',
                  },
                  {
                    value: 'Video/Music Streaming',
                    label: 'Video/Music Streaming',
                    description: '',
                  },
                  {
                    value: 'VPN/Hosting',
                    label: 'VPN/Hosting',
                    description: '',
                  },
                  {
                    value: 'Other',
                    label: 'Other',
                    description: '',
                  },
                ],
                conditionals: [
                  {
                    id: 'business-type-technology-it-non-crypto-comp-cond-1',
                    conditional_type_in: {
                      values: ['Other'],
                    },
                  },
                ],
              },
              validations: [],
            },
          ],
        },
        {
          id: 'business-type-transportation-shipping-comp',
          conditional_expression_id:
            'info-about-company-us-llc-comp-v3-cond-87',
          title: '',
          description: '',
          multi_answer: false,
          optional: false,
          fields: [
            {
              id: 'business-type',
              conditional_expression_id: '',
              title: 'Business type',
              description: '',
              placeholder: '',
              required: true,
              field_type: 'FIELD_TYPE_SINGLESELECT',
              field_type_single_select: {
                default: '',
                type: 'SELECT_UNSPECIFIED',
                options: [
                  {
                    value: 'Airline',
                    label: 'Airline',
                    description: '',
                  },
                  {
                    value: 'Bus Services',
                    label: 'Bus Services',
                    description: '',
                  },
                  {
                    value: 'Car repair',
                    label: 'Car repair',
                    description: '',
                  },
                  {
                    value: 'Container Services',
                    label: 'Container Services',
                    description: '',
                  },
                  {
                    value: 'Courier Services',
                    label: 'Courier Services',
                    description: '',
                  },
                  {
                    value: 'Import/Export',
                    label: 'Import / Export',
                    description: '',
                  },
                  {
                    value: 'Marine Transport',
                    label: 'Marine Transport',
                    description: '',
                  },
                  {
                    value: 'Shipping',
                    label: 'Shipping',
                    description: '',
                  },
                  {
                    value: 'Trucking',
                    label: 'Trucking',
                    description: '',
                  },
                  {
                    value: 'Transportation Services',
                    label: 'Transportation Services',
                    description: '',
                  },
                  {
                    value: 'Freight Forwarding',
                    label: 'Freight Forwarding',
                    description: '',
                  },
                  {
                    value: 'Other',
                    label: 'Other',
                    description: '',
                  },
                ],
                conditionals: [
                  {
                    id: 'business-type-transportation-shipping-comp-cond-1',
                    conditional_type_in: {
                      values: ['Other'],
                    },
                  },
                ],
              },
              validations: [],
            },
          ],
        },
        {
          id: 'other-business-type',
          conditional_expression_id: 'info-about-company-us-llc-comp-v3-cond-6',
          title: '',
          description: '',
          multi_answer: false,
          optional: false,
          fields: [
            {
              id: 'other-business-type',
              conditional_expression_id: '',
              title: 'Other Business Type ',
              description: '',
              placeholder: '',
              required: true,
              field_type: 'FIELD_TYPE_STRING',
              field_type_string: {
                text_area: false,
                concealed: false,
              },
              validations: [
                {
                  validation_type: 'max_len',
                  rule: '100',
                  message: 'Other business type is too long.',
                },
              ],
            },
          ],
        },
        {
          id: 'business-description',
          conditional_expression_id: '',
          title: '',
          description: '',
          multi_answer: false,
          optional: false,
          fields: [
            {
              id: 'business-description',
              conditional_expression_id: '',
              title: 'Business description',
              description:
                'Please provide a detailed description regarding the purpose of business for the applying entity. Please include a detailed description of your business that is relevant to the opening of accounts with Coinbase for this business.',
              placeholder: 'A short description of your business',
              required: true,
              field_type: 'FIELD_TYPE_STRING',
              field_type_string: {
                text_area: true,
                concealed: false,
              },
              validations: [
                {
                  validation_type: 'max_len',
                  rule: '32768',
                  message: 'Business description is too long.',
                },
              ],
            },
          ],
        },
        {
          id: 'coinbase-products',
          conditional_expression_id: '',
          title: '',
          description: '',
          multi_answer: false,
          optional: false,
          fields: [
            {
              id: 'coinbase-products',
              conditional_expression_id: '',
              title: 'Anticipated Coinbase Usage',
              description:
                'We use this information to setup your account features and settings.',
              placeholder: '',
              required: false,
              field_type: 'FIELD_TYPE_HEADER',
              field_type_header: {
                type: 'TYPE_HEADER1',
              },
              validations: [],
            },
          ],
        },
        {
          id: 'purpose-of-opening-coinbase-account-commerce',
          conditional_expression_id: '',
          title: '',
          description: '',
          multi_answer: false,
          optional: false,
          fields: [
            {
              id: 'purpose-of-opening-coinbase-account-commerce',
              conditional_expression_id: '',
              title:
                'What is the purpose of the account? (Select all that apply)',
              description:
                'For expressing interest in [Coinbase Commerce product](https://commerce.coinbase.com), please choose "Accepting crypto payments for goods/services" or "operating a Payment Processing Platform". Selecting other options, will indicate interest in [Coinbase Prime product](https://www.coinbase.com/prime)',
              placeholder: '',
              required: true,
              field_type: 'FIELD_TYPE_MULTISELECT',
              field_type_multi_select: {
                type: 'SELECT_UNSPECIFIED',
                options: [
                  {
                    value: 'Accepting crypto payments for goods/services',
                    label: 'Accepting crypto payments for goods/services',
                    description: '',
                  },
                  {
                    value: 'Sending crypto payments for goods/services',
                    label: 'Sending crypto payments for goods/services',
                    description: '',
                  },
                  {
                    value: 'Converting Funds Raised in ICO / Tokensale',
                    label: 'Converting Funds Raised in ICO / Tokensale',
                    description: '',
                  },
                  {
                    value: 'Storage of funds or assets on Coinbase',
                    label: 'Storage of funds or assets on Coinbase',
                    description: '',
                  },
                  {
                    value: 'Operating an OTC service',
                    label: 'Operating an OTC service',
                    description: '',
                  },
                  {
                    value: 'Liquidity for applying business’s exchange',
                    label: 'Liquidity for applying business’s exchange',
                    description: '',
                  },
                  {
                    value: 'Operating a Payment Processing Platform',
                    label: 'Operating a Payment Processing Platform',
                    description: '',
                  },
                  {
                    value: 'Proprietary trading / investing',
                    label: 'Proprietary trading / investing',
                    description: '',
                  },
                  {
                    value: 'Trading on Behalf of Clients/Third Parties',
                    label: 'Trading on Behalf of Clients/Third Parties',
                    description: '',
                  },
                  {
                    value: 'Other',
                    label: 'Other',
                    description: '',
                  },
                ],
                conditionals: [
                  {
                    id: 'purpose-of-opening-coinbase-account-commerce-cond-1',
                    conditional_type_in: {
                      values: ['Trading on Behalf of Clients/Third Parties'],
                    },
                  },
                  {
                    id: 'purpose-of-opening-coinbase-account-commerce-cond-2',
                    conditional_type_in: {
                      values: [
                        'Trading on Behalf of Clients/Third Parties',
                        'Other',
                      ],
                    },
                  },
                  {
                    id: 'purpose-of-opening-coinbase-account-commerce-cond-3',
                    conditional_type_in: {
                      values: [
                        'Operating an OTC service',
                        'Trading on Behalf of Clients/Third Parties',
                        'Operating a Payment Processing Platform',
                        'Other',
                      ],
                    },
                  },
                  {
                    id: 'purpose-of-opening-coinbase-account-commerce-cond-4',
                    conditional_type_in: {
                      values: [
                        'Accepting crypto payments for goods/services',
                        'Sending crypto payments for goods/services',
                        'Operating a Payment Processing Platform',
                        'Other',
                      ],
                    },
                  },
                  {
                    id: 'purpose-of-opening-coinbase-account-commerce-cond-5',
                    conditional_type_in: {
                      values: [
                        'Accepting crypto payments for goods/services',
                        'Operating a Payment Processing Platform',
                      ],
                    },
                  },
                  {
                    id: 'purpose-of-opening-coinbase-account-commerce-cond-hide-team-members-when-commerce-intent',
                    conditional_type_not_in: {
                      values: [
                        'Sending crypto payments for goods/services',
                        'Converting Funds Raised in ICO / Tokensale',
                        'Storage of funds or assets on Coinbase',
                        'Operating an OTC service',
                        'Liquidity for applying business’s exchange',
                        'Proprietary trading / investing',
                        'Trading on Behalf of Clients/Third Parties',
                        'Other',
                      ],
                    },
                  },
                  {
                    id: 'purpose-of-opening-coinbase-account-commerce-cond-other',
                    conditional_type_in: {
                      values: ['Other'],
                    },
                  },
                ],
              },
              validations: [],
            },
          ],
        },
        {
          id: 'assets-under-management',
          conditional_expression_id: '',
          title: '',
          description: '',
          multi_answer: false,
          optional: false,
          fields: [
            {
              id: 'assets-under-management',
              conditional_expression_id: '',
              title: 'What are your Assets under Management (in USD)',
              description: '',
              placeholder: '',
              required: true,
              field_type: 'FIELD_TYPE_SINGLESELECT',
              field_type_single_select: {
                default: '',
                type: 'SELECT_UNSPECIFIED',
                options: [
                  {
                    value: '$0-5m',
                    label: '$0-5m',
                    description: '',
                  },
                  {
                    value: '$5-10m',
                    label: '$5-10m',
                    description: '',
                  },
                  {
                    value: '$10-50m',
                    label: '$10-50m',
                    description: '',
                  },
                  {
                    value: '$50-100m',
                    label: '$50-100m',
                    description: '',
                  },
                  {
                    value: '$100-200m',
                    label: '$100-200m',
                    description: '',
                  },
                  {
                    value: '$200-500m',
                    label: '$200-500m',
                    description: '',
                  },
                  {
                    value: '$500m-1b',
                    label: '$500m-1b',
                    description: '',
                  },
                  {
                    value: '$1-10b',
                    label: '$1-10b',
                    description: '',
                  },
                  {
                    value: '$10b+',
                    label: '$10b+',
                    description: '',
                  },
                  {
                    value: 'N/A',
                    label: 'N/A',
                    description: '',
                  },
                ],
                conditionals: [],
              },
              validations: [],
            },
          ],
        },
        {
          id: 'assets-under-custody',
          conditional_expression_id: '',
          title: '',
          description: '',
          multi_answer: false,
          optional: false,
          fields: [
            {
              id: 'assets-under-custody',
              conditional_expression_id: '',
              title: 'Anticipated assets under custody in USD',
              description: 'Please note our account minimum is $500k.',
              placeholder: '',
              required: true,
              field_type: 'FIELD_TYPE_SINGLESELECT',
              field_type_single_select: {
                default: '',
                type: 'SELECT_UNSPECIFIED',
                options: [
                  {
                    value: '$500k-1m',
                    label: '$500k-1m',
                    description: '',
                  },
                  {
                    value: '$1-5m',
                    label: '$1-5m',
                    description: '',
                  },
                  {
                    value: '$5-10m',
                    label: '$5-10m',
                    description: '',
                  },
                  {
                    value: '$10-25m',
                    label: '$10-25m',
                    description: '',
                  },
                  {
                    value: '$25-50m',
                    label: '$25-50m',
                    description: '',
                  },
                  {
                    value: '$50-100m',
                    label: '$50-100m',
                    description: '',
                  },
                  {
                    value: '$100-500m',
                    label: '$100-500m',
                    description: '',
                  },
                  {
                    value: '$500m+',
                    label: '$500m+',
                    description: '',
                  },
                  {
                    value: 'N/A',
                    label: 'N/A',
                    description: '',
                  },
                ],
                conditionals: [],
              },
              validations: [],
            },
          ],
        },
        {
          id: 'monthly-trade-volume',
          conditional_expression_id: '',
          title: '',
          description: '',
          multi_answer: false,
          optional: false,
          fields: [
            {
              id: 'monthly-trade-volume',
              conditional_expression_id: '',
              title: 'What is your anticipated monthly trading volume? ',
              description: '',
              placeholder: '',
              required: true,
              field_type: 'FIELD_TYPE_SINGLESELECT',
              field_type_single_select: {
                default: '',
                type: 'SELECT_UNSPECIFIED',
                options: [
                  {
                    value: '$0-100k',
                    label: '$0-100k',
                    description: '',
                  },
                  {
                    value: '$100-500k',
                    label: '$100-500k',
                    description: '',
                  },
                  {
                    value: '$500-1m',
                    label: '$500-1m',
                    description: '',
                  },
                  {
                    value: '$1-5m',
                    label: '$1-5m',
                    description: '',
                  },
                  {
                    value: '$5-10m',
                    label: '$5-10m',
                    description: '',
                  },
                  {
                    value: '$10-20m',
                    label: '$10-20m',
                    description: '',
                  },
                  {
                    value: '$20-50m',
                    label: '$20-50m',
                    description: '',
                  },
                  {
                    value: '$50-100m',
                    label: '$50-100m',
                    description: '',
                  },
                  {
                    value: '$100-200m',
                    label: '$100-200m',
                    description: '',
                  },
                  {
                    value: '$200-500m',
                    label: '$200-500m',
                    description: '',
                  },
                  {
                    value: '$500m+',
                    label: '$500m+',
                    description: '',
                  },
                  {
                    value: 'N/A',
                    label: 'N/A',
                    description: '',
                  },
                ],
                conditionals: [],
              },
              validations: [],
            },
          ],
        },
        {
          id: 'average-monthly-revenue',
          conditional_expression_id:
            'info-about-company-us-llc-comp-v3-cond-103',
          title: '',
          description: '',
          multi_answer: false,
          optional: false,
          fields: [
            {
              id: 'average-monthly-revenue',
              conditional_expression_id: '',
              title:
                'What is your average monthly revenue in USD (or equivalent) over the last 12 months?',
              description:
                'Please select the range that best applies to your average monthly revenue in US dollars (or equivalent).',
              placeholder: '',
              required: true,
              field_type: 'FIELD_TYPE_SINGLESELECT',
              field_type_single_select: {
                default: '',
                type: 'SELECT_UNSPECIFIED',
                options: [
                  {
                    value: 'Between $0 and $100k',
                    label: 'Between $0 and $100k',
                    description: '',
                  },
                  {
                    value: 'Greater than $100k but less than $500k',
                    label: 'Greater than $100k but less than $500k',
                    description: '',
                  },
                  {
                    value: 'Greater than $500k but less than $1m',
                    label: 'Greater than $500k but less than $1m',
                    description: '',
                  },
                  {
                    value: 'Greater than $1m but less than $5m',
                    label: 'Greater than $1m but less than $5m',
                    description: '',
                  },
                  {
                    value: 'Greater than $5m but less than $20m',
                    label: 'Greater than $5m but less than $20m',
                    description: '',
                  },
                  {
                    value: 'Greater than $20m',
                    label: 'Greater than $20m',
                    description: '',
                  },
                ],
                conditionals: [],
              },
              validations: [],
            },
          ],
        },
        {
          id: 'percentage-of-average-monthly-revenue',
          conditional_expression_id:
            'info-about-company-us-llc-comp-v3-cond-103',
          title: '',
          description: '',
          multi_answer: false,
          optional: false,
          fields: [
            {
              id: 'percentage-of-average-monthly-revenue',
              conditional_expression_id: '',
              title:
                'What percentage of your average monthly revenue do you expect to receive in the form of crypto payments?',
              description:
                'Please select the range for the expected average payment activity your company anticipates in your Coinbase account.',
              placeholder: '',
              required: true,
              field_type: 'FIELD_TYPE_SINGLESELECT',
              field_type_single_select: {
                default: '',
                type: 'SELECT_UNSPECIFIED',
                options: [
                  {
                    value: '1% - 25%',
                    label: '1%-25%',
                    description: '',
                  },
                  {
                    value: '26% - 75%',
                    label: '26%-75%',
                    description: '',
                  },
                  {
                    value: '76% - 100%',
                    label: '76%-100%',
                    description: '',
                  },
                ],
                conditionals: [],
              },
              validations: [],
            },
          ],
        },
        {
          id: 'source-of-funds-comp',
          conditional_expression_id: '',
          title: '',
          description: '',
          multi_answer: false,
          optional: false,
          fields: [
            {
              id: 'source-of-funds-comp',
              conditional_expression_id: '',
              title:
                'Please identify all applicable sources from the drop down menu that will be used to fund your Coinbase account, including any "third-party" funds or assets held on behalf of your customers or for anyone other than the ultimate beneficial owners of the company.',
              description: '',
              placeholder: '',
              required: true,
              field_type: 'FIELD_TYPE_MULTISELECT',
              field_type_multi_select: {
                type: 'SELECT_UNSPECIFIED',
                options: [
                  {
                    value: 'Business Operating Funds (Payroll, Administrative)',
                    label: 'Business Operating Funds (Payroll, Administrative)',
                    description: '',
                  },
                  {
                    value: 'Client Funds',
                    label: 'Client Funds',
                    description: '',
                  },
                  {
                    value: 'Gambling Proceeds',
                    label: 'Gambling Proceeds',
                    description: '',
                  },
                  {
                    value: 'ICO / Tokensale',
                    label: 'ICO / Tokensale',
                    description: '',
                  },
                  {
                    value: 'Loan Funding',
                    label: 'Loan Funding',
                    description: '',
                  },
                  {
                    value: 'Third-Party Funds',
                    label: 'Third-Party Funds',
                    description: '',
                  },
                  {
                    value: 'Proprietary Funds (Personal or Corporate Treasury)',
                    label: 'Proprietary Funds (Personal or Corporate Treasury)',
                    description: '',
                  },
                  {
                    value: 'Payment for goods and services',
                    label: 'Payment for goods and services',
                    description: '',
                  },
                  {
                    value: 'Other',
                    label: 'Other',
                    description: '',
                  },
                ],
                conditionals: [
                  {
                    id: 'source-of-funds-comp-cond-1',
                    conditional_type_in: {
                      values: ['Client Funds', 'Third-Party Funds'],
                    },
                  },
                  {
                    id: 'source-of-funds-comp-cond-other',
                    conditional_type_in: {
                      values: ['Other'],
                    },
                  },
                ],
              },
              validations: [],
            },
          ],
        },
        {
          id: 'other-source-of-funds',
          conditional_expression_id:
            'info-about-company-us-llc-comp-v3-cond-106',
          title: '',
          description: '',
          multi_answer: false,
          optional: false,
          fields: [
            {
              id: 'other-source-of-funds',
              conditional_expression_id: '',
              title: 'Other source of funds',
              description: '',
              placeholder: '',
              required: true,
              field_type: 'FIELD_TYPE_STRING',
              field_type_string: {
                text_area: false,
                concealed: false,
              },
              validations: [
                {
                  validation_type: 'max_len',
                  rule: '255',
                  message: 'Other information is too long.',
                },
              ],
            },
          ],
        },
      ],
      conditional_expressions: [
        {
          id: 'info-about-company-us-llc-comp-v3-cond-11',
          operation: 'OPERATION_FIELD',
          operands: [
            {
              conditional_id: 'country-of-incorporation-cond-us',
              operation: 'OPERATION_UNSPECIFIED',
              operands: [],
            },
          ],
          question_configs: [
            {
              question_id: 'state-of-incorporation',
              field_id: '',
              option_values: [],
              default_options: [],
              label_options_list: [],
            },
          ],
        },
        {
          id: 'info-about-company-us-llc-comp-v3-cond-100',
          operation: 'OPERATION_FIELD',
          operands: [
            {
              conditional_id: 'country-of-incorporation-cond-not-us',
              operation: 'OPERATION_UNSPECIFIED',
              operands: [],
            },
          ],
          question_configs: [
            {
              question_id: 'us-bank-account',
              field_id: '',
              option_values: [],
              default_options: [],
              label_options_list: [],
            },
            {
              question_id: 'us-address',
              field_id: '',
              option_values: [],
              default_options: [],
              label_options_list: [],
            },
          ],
        },
        {
          id: 'info-about-company-us-llc-comp-v3-cond-6',
          operation: 'OPERATION_OR',
          operands: [
            {
              conditional_id: 'business-type-agriculture-cond-1',
              operation: 'OPERATION_UNSPECIFIED',
              operands: [],
            },
            {
              conditional_id: 'business-type-crypto-services-comp-cond-1',
              operation: 'OPERATION_UNSPECIFIED',
              operands: [],
            },
            {
              conditional_id: 'business-type-education-cond-1',
              operation: 'OPERATION_UNSPECIFIED',
              operands: [],
            },
            {
              conditional_id: 'business-type-financial-services-comp-cond-1',
              operation: 'OPERATION_UNSPECIFIED',
              operands: [],
            },
            {
              conditional_id: 'business-type-food-hospitality-cond-1',
              operation: 'OPERATION_UNSPECIFIED',
              operands: [],
            },
            {
              conditional_id: 'business-type-government-politics-cond-1',
              operation: 'OPERATION_UNSPECIFIED',
              operands: [],
            },
            {
              conditional_id: 'business-type-health-fitness-cond-1',
              operation: 'OPERATION_UNSPECIFIED',
              operands: [],
            },
            {
              conditional_id: 'business-type-industrial-comp-cond-1',
              operation: 'OPERATION_UNSPECIFIED',
              operands: [],
            },
            {
              conditional_id: 'business-type-media-arts-cond-1',
              operation: 'OPERATION_UNSPECIFIED',
              operands: [],
            },
            {
              conditional_id: 'business-type-non-profit-charity-cond-1',
              operation: 'OPERATION_UNSPECIFIED',
              operands: [],
            },
            {
              conditional_id: 'business-type-professional-services-comp-cond-1',
              operation: 'OPERATION_UNSPECIFIED',
              operands: [],
            },
            {
              conditional_id: 'business-type-real-estate-comp-cond-1',
              operation: 'OPERATION_UNSPECIFIED',
              operands: [],
            },
            {
              conditional_id: 'business-type-retail-cond-1',
              operation: 'OPERATION_UNSPECIFIED',
              operands: [],
            },
            {
              conditional_id:
                'business-type-technology-it-non-crypto-comp-cond-1',
              operation: 'OPERATION_UNSPECIFIED',
              operands: [],
            },
            {
              conditional_id:
                'business-type-transportation-shipping-comp-cond-1',
              operation: 'OPERATION_UNSPECIFIED',
              operands: [],
            },
          ],
          question_configs: [
            {
              question_id: 'other-business-type',
              field_id: '',
              option_values: [],
              default_options: [],
              label_options_list: [],
            },
          ],
        },
        {
          id: 'info-about-company-us-llc-comp-v3-cond-7',
          operation: 'OPERATION_FIELD',
          operands: [
            {
              conditional_id: 'legal-entity-type-comp-cond-1',
              operation: 'OPERATION_UNSPECIFIED',
              operands: [],
            },
          ],
          question_configs: [
            {
              question_id: 'other-legal-entity-type',
              field_id: '',
              option_values: [],
              default_options: [],
              label_options_list: [],
            },
          ],
        },
        {
          id: 'info-about-company-us-llc-comp-v3-cond-73',
          operation: 'OPERATION_FIELD',
          operands: [
            {
              conditional_id: 'industry-comp-cond-2',
              operation: 'OPERATION_UNSPECIFIED',
              operands: [],
            },
          ],
          question_configs: [
            {
              question_id: 'business-type-agriculture',
              field_id: '',
              option_values: [],
              default_options: [],
              label_options_list: [],
            },
          ],
        },
        {
          id: 'info-about-company-us-llc-comp-v3-cond-74',
          operation: 'OPERATION_FIELD',
          operands: [
            {
              conditional_id: 'industry-comp-cond-3',
              operation: 'OPERATION_UNSPECIFIED',
              operands: [],
            },
          ],
          question_configs: [
            {
              question_id: 'business-type-crypto-services-comp',
              field_id: '',
              option_values: [],
              default_options: [],
              label_options_list: [],
            },
          ],
        },
        {
          id: 'info-about-company-us-llc-comp-v3-cond-75',
          operation: 'OPERATION_FIELD',
          operands: [
            {
              conditional_id: 'industry-comp-cond-4',
              operation: 'OPERATION_UNSPECIFIED',
              operands: [],
            },
          ],
          question_configs: [
            {
              question_id: 'business-type-education',
              field_id: '',
              option_values: [],
              default_options: [],
              label_options_list: [],
            },
          ],
        },
        {
          id: 'info-about-company-us-llc-comp-v3-cond-76',
          operation: 'OPERATION_FIELD',
          operands: [
            {
              conditional_id: 'industry-comp-cond-5',
              operation: 'OPERATION_UNSPECIFIED',
              operands: [],
            },
          ],
          question_configs: [
            {
              question_id: 'business-type-financial-services-comp',
              field_id: '',
              option_values: [],
              default_options: [],
              label_options_list: [],
            },
          ],
        },
        {
          id: 'info-about-company-us-llc-comp-v3-cond-77',
          operation: 'OPERATION_FIELD',
          operands: [
            {
              conditional_id: 'industry-comp-cond-6',
              operation: 'OPERATION_UNSPECIFIED',
              operands: [],
            },
          ],
          question_configs: [
            {
              question_id: 'business-type-food-hospitality',
              field_id: '',
              option_values: [],
              default_options: [],
              label_options_list: [],
            },
          ],
        },
        {
          id: 'info-about-company-us-llc-comp-v3-cond-78',
          operation: 'OPERATION_FIELD',
          operands: [
            {
              conditional_id: 'industry-comp-cond-7',
              operation: 'OPERATION_UNSPECIFIED',
              operands: [],
            },
          ],
          question_configs: [
            {
              question_id: 'business-type-government-politics',
              field_id: '',
              option_values: [],
              default_options: [],
              label_options_list: [],
            },
          ],
        },
        {
          id: 'info-about-company-us-llc-comp-v3-cond-79',
          operation: 'OPERATION_FIELD',
          operands: [
            {
              conditional_id: 'industry-comp-cond-8',
              operation: 'OPERATION_UNSPECIFIED',
              operands: [],
            },
          ],
          question_configs: [
            {
              question_id: 'business-type-health-fitness',
              field_id: '',
              option_values: [],
              default_options: [],
              label_options_list: [],
            },
          ],
        },
        {
          id: 'info-about-company-us-llc-comp-v3-cond-80',
          operation: 'OPERATION_FIELD',
          operands: [
            {
              conditional_id: 'industry-comp-cond-9',
              operation: 'OPERATION_UNSPECIFIED',
              operands: [],
            },
          ],
          question_configs: [
            {
              question_id: 'business-type-industrial-comp',
              field_id: '',
              option_values: [],
              default_options: [],
              label_options_list: [],
            },
          ],
        },
        {
          id: 'info-about-company-us-llc-comp-v3-cond-81',
          operation: 'OPERATION_FIELD',
          operands: [
            {
              conditional_id: 'industry-comp-cond-10',
              operation: 'OPERATION_UNSPECIFIED',
              operands: [],
            },
          ],
          question_configs: [
            {
              question_id: 'business-type-media-arts',
              field_id: '',
              option_values: [],
              default_options: [],
              label_options_list: [],
            },
          ],
        },
        {
          id: 'info-about-company-us-llc-comp-v3-cond-82',
          operation: 'OPERATION_FIELD',
          operands: [
            {
              conditional_id: 'industry-comp-cond-11',
              operation: 'OPERATION_UNSPECIFIED',
              operands: [],
            },
          ],
          question_configs: [
            {
              question_id: 'business-type-non-profit-charity',
              field_id: '',
              option_values: [],
              default_options: [],
              label_options_list: [],
            },
          ],
        },
        {
          id: 'info-about-company-us-llc-comp-v3-cond-83',
          operation: 'OPERATION_FIELD',
          operands: [
            {
              conditional_id: 'industry-comp-cond-12',
              operation: 'OPERATION_UNSPECIFIED',
              operands: [],
            },
          ],
          question_configs: [
            {
              question_id: 'business-type-professional-services-comp',
              field_id: '',
              option_values: [],
              default_options: [],
              label_options_list: [],
            },
          ],
        },
        {
          id: 'info-about-company-us-llc-comp-v3-cond-84',
          operation: 'OPERATION_FIELD',
          operands: [
            {
              conditional_id: 'industry-comp-cond-13',
              operation: 'OPERATION_UNSPECIFIED',
              operands: [],
            },
          ],
          question_configs: [
            {
              question_id: 'business-type-real-estate-comp',
              field_id: '',
              option_values: [],
              default_options: [],
              label_options_list: [],
            },
          ],
        },
        {
          id: 'info-about-company-us-llc-comp-v3-cond-85',
          operation: 'OPERATION_FIELD',
          operands: [
            {
              conditional_id: 'industry-comp-cond-14',
              operation: 'OPERATION_UNSPECIFIED',
              operands: [],
            },
          ],
          question_configs: [
            {
              question_id: 'business-type-retail',
              field_id: '',
              option_values: [],
              default_options: [],
              label_options_list: [],
            },
          ],
        },
        {
          id: 'info-about-company-us-llc-comp-v3-cond-86',
          operation: 'OPERATION_FIELD',
          operands: [
            {
              conditional_id: 'industry-comp-cond-15',
              operation: 'OPERATION_UNSPECIFIED',
              operands: [],
            },
          ],
          question_configs: [
            {
              question_id: 'business-type-technology-it-non-crypto-comp',
              field_id: '',
              option_values: [],
              default_options: [],
              label_options_list: [],
            },
          ],
        },
        {
          id: 'info-about-company-us-llc-comp-v3-cond-87',
          operation: 'OPERATION_FIELD',
          operands: [
            {
              conditional_id: 'industry-comp-cond-16',
              operation: 'OPERATION_UNSPECIFIED',
              operands: [],
            },
          ],
          question_configs: [
            {
              question_id: 'business-type-transportation-shipping-comp',
              field_id: '',
              option_values: [],
              default_options: [],
              label_options_list: [],
            },
          ],
        },
        {
          id: 'info-about-company-us-llc-comp-v3-cond-98',
          operation: 'OPERATION_FIELD',
          operands: [
            {
              conditional_id: 'industry-comp-cond-19',
              operation: 'OPERATION_UNSPECIFIED',
              operands: [],
            },
          ],
          question_configs: [
            {
              question_id: 'business-type-investment-comp',
              field_id: '',
              option_values: [],
              default_options: [],
              label_options_list: [],
            },
          ],
        },
        {
          id: 'info-about-company-us-llc-comp-v3-cond-103',
          operation: 'OPERATION_AND',
          operands: [
            {
              conditional_id:
                'purpose-of-opening-coinbase-account-commerce-cond-4',
              operation: 'OPERATION_UNSPECIFIED',
              operands: [],
            },
            {
              boolean: 'TRUE',
              operation: 'OPERATION_UNSPECIFIED',
              operands: [],
            },
          ],
          question_configs: [
            {
              question_id: 'average-monthly-revenue',
              field_id: '',
              option_values: [],
              default_options: [],
              label_options_list: [],
            },
            {
              question_id: 'percentage-of-average-monthly-revenue',
              field_id: '',
              option_values: [],
              default_options: [],
              label_options_list: [],
            },
          ],
        },
        {
          id: 'info-about-company-us-llc-comp-v3-cond-106',
          operation: 'OPERATION_FIELD',
          operands: [
            {
              conditional_id: 'source-of-funds-comp-cond-other',
              operation: 'OPERATION_UNSPECIFIED',
              operands: [],
            },
          ],
          question_configs: [
            {
              question_id: 'other-source-of-funds',
              field_id: '',
              option_values: [],
              default_options: [],
              label_options_list: [],
            },
          ],
        },
      ],
    },
  },
};

export default interestForm;
