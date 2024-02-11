export interface IInputProps {
    name: string;
    type?: string;
    placeholder: string;
    handleInputChange: (key: string, value: string, isValid: boolean) => void;
}
