type SupportContent = {
  id: string;
  title: string;
  description: string;
};

type Option = {
  value: string;
  label: string;
  description: string;
};

type StringValidation = {
  validation_type: 'max_len';
  rule: string;
  message: string;
};

type DateValidation = {
  validation_type: 'min_age' | 'max_age';
  rule: string; // string of a number
  message: string;
};

type ConditionalTypeIn = {
  id: string;
  conditional_type_in: {
    values: string[];
  };
};

type ConditionalTypeNotIn = {
  id: string;
  conditional_type_not_in: {
    values: string[];
  };
};

type CountryConditionalTypeIn = {
  id: string;
  conditional_type_country_in: {
    values: string[];
  };
};

type CountryConditionalTypeNotIn = {
  id: string;
  conditional_type_country_not_in: {
    values: string[];
  };
};

export type SelectConditional = ConditionalTypeIn | ConditionalTypeNotIn;
export type AddressConditional =
  | CountryConditionalTypeIn
  | CountryConditionalTypeNotIn;

export type BaseField = {
  id: string;
  conditional_expression_id: string;
  title: string;
  description: string;
  placeholder: string;
  required: boolean;
};

export type HeaderField = BaseField & {
  field_type: 'FIELD_TYPE_HEADER';
  field_type_header: {
    type: 'TYPE_HEADER1' | 'TYPE_HEADER2' | 'TYPE_HEADER3';
  };
  validations: [];
};

export type StringField = BaseField & {
  field_type: 'FIELD_TYPE_STRING';
  field_type_string: {
    text_area: boolean;
    concealed: boolean;
  };
  validations: StringValidation[];
};

export type SingleSelectField = BaseField & {
  field_type: 'FIELD_TYPE_SINGLESELECT';
  field_type_single_select: {
    default: string;
    type: 'SELECT_UNSPECIFIED';
    options: Option[];
    conditionals: SelectConditional[];
  };
  validations: [];
};

export type MultiSelectField = BaseField & {
  field_type: 'FIELD_TYPE_MULTISELECT';
  field_type_multi_select: {
    type: 'SELECT_UNSPECIFIED';
    options: Option[];
    conditionals: SelectConditional[];
  };
  validations: [];
};

export type AddressField = BaseField & {
  field_type: 'FIELD_TYPE_ADDRESS';
  field_type_address: {
    conditionals: AddressConditional[];
  };
  validations: [];
};

export type DateField = BaseField & {
  field_type: 'FIELD_TYPE_DATE';
  field_type_date: {
    min_age: number;
  };
  validations: DateValidation[];
};

export type Field =
  | HeaderField
  | StringField
  | SingleSelectField
  | MultiSelectField
  | AddressField
  | DateField;

export type Question = {
  id: string;
  conditional_expression_id: string;
  title: string;
  description: string;
  multi_answer: boolean;
  optional: boolean;
  fields: Field[];
};

export type Operation =
  | 'OPERATION_FIELD'
  | 'OPERATION_OR'
  | 'OPERATION_AND'
  | 'OPERATION_UNSPECIFIED';
type BooleanOperand = {
  boolean: 'TRUE' | 'FALSE';
  operation: 'OPERATION_UNSPECIFIED';
  operands: Operand[];
};
export type NormalOperand = {
  conditional_id: string;
  operation: Operation;
  operands: Operand[];
};
export type Operand = BooleanOperand | NormalOperand;
export type QuestionConfig = {
  question_id: string;
  field_id: string;
  option_values: string[];
  default_options: string[];
  label_options_list: string[];
};

export type ConditionalExpression = {
  id: string;
  operation: Operation;
  operands: Operand[];
  question_configs: QuestionConfig[];
};

export type Requirement = {
  requirement_id: string;
  title: string;
  description: string;
  support_content: SupportContent[];
  questions: Question[];
  conditional_expressions: ConditionalExpression[];
};

export type RequirementResponse = {
  data: {
    requirement: Requirement;
  };
};
