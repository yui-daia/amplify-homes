/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LogininputOverridesProps = {
    Logininput?: PrimitiveOverrideProps<ViewProps>;
    "ID\u5165\u529B"?: PrimitiveOverrideProps<ViewProps>;
    "\u30ED\u30B0\u30A4\u30F3ID"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type LogininputProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: LogininputOverridesProps | undefined | null;
}>;
export default function Logininput(props: LogininputProps): React.ReactElement;
