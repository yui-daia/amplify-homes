/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Desktop5Props } from "./Desktop5";
import { ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Desktop6OverridesProps = {
    Desktop6?: PrimitiveOverrideProps<ViewProps>;
    "Desktop - 6"?: Desktop5Props;
} & EscapeHatchProps;
export declare type Desktop6Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Desktop6OverridesProps | undefined | null;
}>;
export default function Desktop6(props: Desktop6Props): React.ReactElement;
