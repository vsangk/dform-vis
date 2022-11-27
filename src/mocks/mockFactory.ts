import {
  AddressField,
  BaseField,
  DateField,
  Field,
  HeaderField,
  MultiSelectField,
  Question,
  SingleSelectField,
  StringField,
} from '../types';

function createBaseFields(id: string): BaseField {
  return {
    id,
    conditional_expression_id: '',
    title: `${id} Title`,
    description: `${id} Description`,
    placeholder: '',
    required: true,
  };
}

export function creatHeaderField(id: string): HeaderField {
  return {
    ...createBaseFields(id),
    field_type: 'FIELD_TYPE_HEADER',
    field_type_header: {
      type: 'TYPE_HEADER2',
    },
    validations: [],
  };
}

export function createStringField(id: string): StringField {
  return {
    ...createBaseFields(id),
    field_type: 'FIELD_TYPE_STRING',
    field_type_string: {
      text_area: false,
      concealed: false,
    },
    validations: [],
  };
}

export function createSingleSelectField(id: string): SingleSelectField {
  return {
    ...createBaseFields(id),
    field_type: 'FIELD_TYPE_SINGLESELECT',
    field_type_single_select: {
      default: '',
      type: 'SELECT_UNSPECIFIED',
      options: [
        {
          description: '',
          label: 'Option 1',
          value: 'Option 1',
        },
        {
          description: '',
          label: 'Option 2',
          value: 'Option 2',
        },
        {
          description: '',
          label: 'Option 3',
          value: 'Option 3',
        },
      ],
      conditionals: [], // TODO: Figure out API to create these
    },
    validations: [],
  };
}

export function createMultiSelectField(id: string): MultiSelectField {
  return {
    ...createBaseFields(id),
    field_type: 'FIELD_TYPE_MULTISELECT',
    field_type_multi_select: {
      type: 'SELECT_UNSPECIFIED',
      options: [
        {
          description: '',
          label: 'Option 1',
          value: 'Option 1',
        },
        {
          description: '',
          label: 'Option 2',
          value: 'Option 2',
        },
        {
          description: '',
          label: 'Option 3',
          value: 'Option 3',
        },
      ],
      conditionals: [], // TODO: Figure out API to create these
    },
    validations: [],
  };
}

export function createAddressField(id: string): AddressField {
  return {
    ...createBaseFields(id),
    field_type: 'FIELD_TYPE_ADDRESS',
    field_type_address: {
      conditionals: [], // TODO: Figure out API to create these
    },
    validations: [],
  };
}

export function createDateField(id: string): DateField {
  return {
    ...createBaseFields(id),
    field_type: 'FIELD_TYPE_DATE',
    field_type_date: {
      min_age: 0,
    },
    validations: [],
  };
}

export function createQuestion(
  id: string,
  multiAnswer: boolean,
  fields: Field[]
): Question {
  return {
    id,
    conditional_expression_id: '',
    title: `Question Title ${id}`,
    description: `Question Description ${id}`,
    multi_answer: multiAnswer,
    optional: false,
    fields,
  };
}
