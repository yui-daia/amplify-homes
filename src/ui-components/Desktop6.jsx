/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import Desktop5 from "./Desktop5";
import { View } from "@aws-amplify/ui-react";
export default function Desktop6(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="463px"
      height="624px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Desktop6")}
      {...rest}
    >
      <Desktop5
        width="463px"
        height="624px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Desktop - 6")}
      ></Desktop5>
    </View>
  );
}
