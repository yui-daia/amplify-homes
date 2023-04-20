/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Home } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Desktop1OverridesProps = {
    "4444"?: PrimitiveOverrideProps<TextProps>;
    "585555"?: PrimitiveOverrideProps<TextProps>;
    Desktop1?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 2"?: PrimitiveOverrideProps<ImageProps>;
    "\u540D \u524D\uFF1A\u3000"?: PrimitiveOverrideProps<TextProps>;
    "\u82B1\u8A00\u8449\uFF1A"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type Desktop1Props = React.PropsWithChildren<Partial<ViewProps> & {
    home?: Home;
} & {
    overrides?: Desktop1OverridesProps | undefined | null;
}>;
export default function Desktop1(props: Desktop1Props): React.ReactElement;
