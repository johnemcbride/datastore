/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type NewForm11InputValues = {};
export declare type NewForm11ValidationValues = {};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NewForm11OverridesProps = {
    NewForm11Grid?: PrimitiveOverrideProps<GridProps>;
} & EscapeHatchProps;
export declare type NewForm11Props = React.PropsWithChildren<{
    overrides?: NewForm11OverridesProps | undefined | null;
} & {
    onSubmit: (fields: NewForm11InputValues) => void;
    onChange?: (fields: NewForm11InputValues) => NewForm11InputValues;
    onValidate?: NewForm11ValidationValues;
} & React.CSSProperties>;
export default function NewForm11(props: NewForm11Props): React.ReactElement;
