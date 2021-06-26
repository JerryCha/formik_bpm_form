import { useFormik } from 'formik'
import { useCallback } from 'react'
import { useMemo } from 'react'
import { FormControlModel, FormModel } from '../type/schema'
import { Widget, WidgetRendererType } from '../type/widget'
import FormItem from './components/FormItem'
import { Validator } from './type'

export type FormRenderProps = {
  widgets: Widget[];
  formModel: FormModel;
  formData?: Record<string, unknown>;
  validators?: Validator[];
  mobile?: boolean;
  darkMode?: boolean;
  onValuesChange?: (
    changedValues: Record<string, unknown>,
    allValues: Record<string, unknown>
  ) => void
}

const FormRender: React.FC<FormRenderProps> = (props) => {
  const { 
    widgets = [], 
    formModel, 
    formData, 
    validators = [], 
    mobile = false, 
    onValuesChange 
  } = props;

  const { controls } = formModel;

  const formik = useFormik({
    initialValues: formData ?? {},
    onSubmit: (values) => console.log(values),
  })

  const widgetMap = useMemo(() => {
    return widgets.reduce<Record<string, WidgetRendererType>>((m, w) => {
      m[w.type] = w.Renderer;
      return m;
    }, {});
  }, [widgets]);


  const renderItemsRecursive = useCallback((control: FormControlModel) => {
    const { type } = control;
    const Renderer = widgetMap[type];
    return <FormItem Renderer={Renderer} option={control} />
  }, [widgetMap]);

  return (
    <div>
      {((controls: FormControlModel[]) => controls.map(control => renderItemsRecursive(control)))(controls)}
    </div>
  )
}

export default FormRender;
