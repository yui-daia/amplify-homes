/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Test1 } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type Test1UpdateFormInputValues = {
    itemName?: string;
    itemCode?: string;
    qaunty?: string;
    detail?: string;
    created_at?: string;
    userId?: string;
    checked?: string;
};
export declare type Test1UpdateFormValidationValues = {
    itemName?: ValidationFunction<string>;
    itemCode?: ValidationFunction<string>;
    qaunty?: ValidationFunction<string>;
    detail?: ValidationFunction<string>;
    created_at?: ValidationFunction<string>;
    userId?: ValidationFunction<string>;
    checked?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Test1UpdateFormOverridesProps = {
    Test1UpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    itemName?: PrimitiveOverrideProps<TextFieldProps>;
    itemCode?: PrimitiveOverrideProps<TextFieldProps>;
    qaunty?: PrimitiveOverrideProps<TextFieldProps>;
    detail?: PrimitiveOverrideProps<TextFieldProps>;
    created_at?: PrimitiveOverrideProps<TextFieldProps>;
    userId?: PrimitiveOverrideProps<TextFieldProps>;
    checked?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type Test1UpdateFormProps = React.PropsWithChildren<{
    overrides?: Test1UpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    test1?: Test1;
    onSubmit?: (fields: Test1UpdateFormInputValues) => Test1UpdateFormInputValues;
    onSuccess?: (fields: Test1UpdateFormInputValues) => void;
    onError?: (fields: Test1UpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: Test1UpdateFormInputValues) => Test1UpdateFormInputValues;
    onValidate?: Test1UpdateFormValidationValues;
} & React.CSSProperties>;
export default function Test1UpdateForm(props: Test1UpdateFormProps): React.ReactElement;
