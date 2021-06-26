export type FormModel = {
  type: 'form';
  controls: FormControlModel[];
}

export type FormControlModel<T = unknown> = {
  id: string;
  type: string;
  name: string;
  label?: string;
  required?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  rules?: Rule[];
  controls?: FormControlModel[];
} & T;


export type Rule = {
  message: string;
  expression: string | ((value: any) => boolean | Promise<boolean>);
}