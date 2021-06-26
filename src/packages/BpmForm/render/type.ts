export type Validator = {
  name: string;
  validator: (value: any) => boolean | Promise<boolean>;
}
