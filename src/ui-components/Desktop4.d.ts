/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Desktop1Props } from "./Desktop1";
import { ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Desktop4OverridesProps = {
    Desktop4?: PrimitiveOverrideProps<ViewProps>;
    "Desktop - 4"?: Desktop1Props;
} & EscapeHatchProps;
export declare type Desktop4Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Desktop4OverridesProps | undefined | null;
}>;
export default function Desktop4(props: Desktop4Props): React.ReactElement;