/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LoginOverridesProps = {
    Login?: PrimitiveOverrideProps<ViewProps>;
    "PW\u5165\u529B"?: PrimitiveOverrideProps<ViewProps>;
    "\u30D1\u30B9\u30EF\u30FC\u30C9"?: PrimitiveOverrideProps<TextProps>;
    "ID\u5165\u529B"?: PrimitiveOverrideProps<ViewProps>;
    "\u30ED\u30B0\u30A4\u30F3ID"?: PrimitiveOverrideProps<TextProps>;
    "\u30ED\u30B0\u30A4\u30F3\u30DC\u30BF\u30F3"?: PrimitiveOverrideProps<IconProps>;
    "\u30ED\u30B0\u30A4\u30F3"?: PrimitiveOverrideProps<TextProps>;
    "\u5546\u54C1\u7BA1\u7406"?: PrimitiveOverrideProps<ImageProps>;
    "\u5927\u67A0\uFF08\u30ED\u30B4\u80CC\u9762\uFF09"?: PrimitiveOverrideProps<ViewProps>;
    "\u5927\u4E9C\u30ED\u30B4\uFF08\u5927\uFF09"?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type LoginProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: LoginOverridesProps | undefined | null;
}>;
export default function Login(props: LoginProps): React.ReactElement;
