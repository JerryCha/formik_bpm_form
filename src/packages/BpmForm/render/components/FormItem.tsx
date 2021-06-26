import React from 'react';
import { WidgetRendererType } from '../../type/widget';
import { Field } from 'formik';
import { FormControlModel } from '../../type/schema';

interface FormItemProps {
  Renderer: WidgetRendererType | undefined;
  option: FormControlModel;
  // onChange: (value: any) => void;
}

const FormItem: React.FC<FormItemProps> = props => {
  const { Renderer, option } = props;
  const { name, label = '' } = option;
  if (!Renderer) return <></>
  return (
    <Field name={name}>
      {({
        field,  // { name, value, onChange, onBlur }
        form, // touched, errors, values, setXXX, handleXXX, dirty, isValid, status
        meta
      }) => {
        return <></>
      }}
    </Field>
  )
}

export default FormItem;
