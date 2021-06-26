import React from 'react';
import { TextField } from '@fluentui/react';
import { WidgetRendererProps } from '../../type/widget';
import { InputTextOptions } from './type';
import { useCallback } from 'react';

const Renderer: React.FC<WidgetRendererProps<InputTextOptions>> = props => {
  const { option, value, onChange } = props;
  const { placeholder } = option;

  const changeHandler = useCallback((_, newValue) => {
    onChange && onChange(newValue);
  }, [onChange]);

  return <TextField placeholder={placeholder} value={value as string} onChange={changeHandler} />
}

export default Renderer;