import React, { CSSProperties } from "react";
import { FormControlModel } from "./schema";

export type WidgetValidatorType = string | ((value: any) => boolean | Promise<boolean>);

export type WidgetRendererType = React.ComponentType<WidgetRendererProps<any>>;

export type Widget<T extends BaseOptions = BaseOptions> = {
  type: string;
  name: string;
  dataType: 'string' | 'number' | 'boolean' | 'object' | 'null';
  defaultOptions: T;
  Renderer: React.ComponentType<WidgetRendererProps<T>>;
  validator?: WidgetValidatorType;
}

export type BaseOptions = {
  width?: '1' | '1/2' | '1/3' | '1/4' | '1/5';
  className?: string;
  style?: CSSProperties;
}

export type WidgetRendererProps<T extends BaseOptions> = {
  value?: unknown;
  onChange?: (value: unknown) => void;
  onBlur?: (value: unknown) => void;
  option: T;
}

export type WidgetConfigProps<T extends BaseOptions> = {
  option: T;
  onChange: (nextOption: FormControlModel) => void;
}