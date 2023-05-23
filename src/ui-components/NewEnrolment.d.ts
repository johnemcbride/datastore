/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type NewEnrolmentInputValues = {
    bands?: string;
    status?: string;
    rate?: string;
    term?: string;
    bandMembershipType?: string;
    bandDesc?: string;
    bandRate?: number;
    lessons?: string;
    lessonDesc?: string;
    lessonRate?: number;
    stripeRef?: string;
    total?: number;
    giftAidConsent?: boolean;
    paymentName?: string;
    city?: string;
    line1?: string;
    line2?: string;
    postCode?: string;
    email?: string;
    firstname?: string;
    familyname?: string;
};
export declare type NewEnrolmentValidationValues = {
    bands?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
    rate?: ValidationFunction<string>;
    term?: ValidationFunction<string>;
    bandMembershipType?: ValidationFunction<string>;
    bandDesc?: ValidationFunction<string>;
    bandRate?: ValidationFunction<number>;
    lessons?: ValidationFunction<string>;
    lessonDesc?: ValidationFunction<string>;
    lessonRate?: ValidationFunction<number>;
    stripeRef?: ValidationFunction<string>;
    total?: ValidationFunction<number>;
    giftAidConsent?: ValidationFunction<boolean>;
    paymentName?: ValidationFunction<string>;
    city?: ValidationFunction<string>;
    line1?: ValidationFunction<string>;
    line2?: ValidationFunction<string>;
    postCode?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    firstname?: ValidationFunction<string>;
    familyname?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NewEnrolmentOverridesProps = {
    NewEnrolmentGrid?: PrimitiveOverrideProps<GridProps>;
    bands?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<TextFieldProps>;
    rate?: PrimitiveOverrideProps<TextFieldProps>;
    term?: PrimitiveOverrideProps<TextFieldProps>;
    bandMembershipType?: PrimitiveOverrideProps<TextFieldProps>;
    bandDesc?: PrimitiveOverrideProps<TextFieldProps>;
    bandRate?: PrimitiveOverrideProps<TextFieldProps>;
    lessons?: PrimitiveOverrideProps<TextFieldProps>;
    lessonDesc?: PrimitiveOverrideProps<TextFieldProps>;
    lessonRate?: PrimitiveOverrideProps<TextFieldProps>;
    stripeRef?: PrimitiveOverrideProps<TextFieldProps>;
    total?: PrimitiveOverrideProps<TextFieldProps>;
    giftAidConsent?: PrimitiveOverrideProps<SwitchFieldProps>;
    paymentName?: PrimitiveOverrideProps<TextFieldProps>;
    city?: PrimitiveOverrideProps<TextFieldProps>;
    line1?: PrimitiveOverrideProps<TextFieldProps>;
    line2?: PrimitiveOverrideProps<TextFieldProps>;
    postCode?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    firstname?: PrimitiveOverrideProps<TextFieldProps>;
    familyname?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type NewEnrolmentProps = React.PropsWithChildren<{
    overrides?: NewEnrolmentOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: NewEnrolmentInputValues) => NewEnrolmentInputValues;
    onSuccess?: (fields: NewEnrolmentInputValues) => void;
    onError?: (fields: NewEnrolmentInputValues, errorMessage: string) => void;
    onChange?: (fields: NewEnrolmentInputValues) => NewEnrolmentInputValues;
    onValidate?: NewEnrolmentValidationValues;
} & React.CSSProperties>;
export default function NewEnrolment(props: NewEnrolmentProps): React.ReactElement;
