export type FormState<T> = {
    value: Record<string, string>;
    validity: Record<string, boolean>;
} & T;