import { Widget } from "../../type/widget";
import Renderer from "./Renderer";
import { InputTextOptions } from "./type";

const InputText: Widget<InputTextOptions> = {
  type: 'InputText',
  name: '单行输入',
  dataType: 'string',
  defaultOptions: {
    placeholder: ''
  },
  Renderer
}

export default InputText;
