/** Validator with a predicate and error message */
export type Validator = {
  validate: (value: unknown) => boolean;
  error: string;
};

/** Schema mapping property names to their validators */
export type Schema<T> = {
  [K in keyof T]?: Validator[];
};

/** Creates a validated proxy that runs validators on property assignment */
export const validated = <T extends object>(
  target: T,
  schema: Schema<T>,
): T =>
  new Proxy(target, {
    set: (obj, prop, value) => {
      const validators = schema[prop as keyof T];
      const error = validators?.find((v) => !v.validate(value))?.error;
      if (error) throw new Error(error);
      return Reflect.set(obj, prop, value);
    },
  });
