import {
  AddressField,
  BaseField,
  DateField,
  Field,
  HeaderField,
  MultiSelectField,
  Question,
  Requirement,
  SingleSelectField,
  StringField,
  ConditionalExpression,
  QuestionConfig,
  SelectConditional,
  AddressConditional,
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

export function createSingleSelectField(
  id: string,
  selectConditionals: SelectConditional[]
): SingleSelectField {
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
      conditionals: selectConditionals,
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

export function createAddressField(
  id: string,
  addressConditionals: AddressConditional[]
): AddressField {
  return {
    ...createBaseFields(id),
    field_type: 'FIELD_TYPE_ADDRESS',
    field_type_address: {
      conditionals: addressConditionals,
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

export function createRequirement(
  id: string,
  questions: Question[],
  conditionalExpressions: ConditionalExpression[]
): Requirement {
  return {
    requirement_id: id,
    title: 'title',
    description: 'description',
    support_content: [],
    questions,
    conditional_expressions: conditionalExpressions,
  };
}

export function createQuestionConfigForQuestion(
  questionId: string
): QuestionConfig {
  return {
    question_id: questionId,
    field_id: '',
    default_options: [],
    label_options_list: [],
    option_values: [],
  };
}

export function createQuestionConfigForField(
  questionId: string,
  fieldId: string
): QuestionConfig {
  return {
    question_id: questionId,
    field_id: fieldId,
    default_options: [],
    label_options_list: [],
    option_values: [],
  };
}

export function createConditionalExpressionField(
  id: string,
  conditionalId: string,
  questionConfigs: QuestionConfig[]
): ConditionalExpression {
  return {
    id,
    operation: 'OPERATION_FIELD',
    operands: [
      {
        conditional_id: conditionalId,
        operation: 'OPERATION_UNSPECIFIED',
        operands: [],
      },
    ],
    question_configs: questionConfigs,
  };
}

export function createConditionalExpressionAnd(
  id: string,
  conditionalId1: string,
  conditionalId2: string,
  questionConfigs: QuestionConfig[]
): ConditionalExpression {
  return {
    id,
    operation: 'OPERATION_AND',
    operands: [
      {
        conditional_id: conditionalId1,
        operation: 'OPERATION_UNSPECIFIED',
        operands: [],
      },
      {
        conditional_id: conditionalId2,
        operation: 'OPERATION_UNSPECIFIED',
        operands: [],
      },
    ],
    question_configs: questionConfigs,
  };
}
