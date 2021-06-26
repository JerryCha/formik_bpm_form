import { BaseOptions } from "../../type/widget";

export interface InputTextOptions extends BaseOptions {
  placeholder?: string;
  maxLength?: number;
  minLength?: number;
}