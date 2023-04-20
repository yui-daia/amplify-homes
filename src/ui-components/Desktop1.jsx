/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Image, Text, View } from "@aws-amplify/ui-react";
export default function Desktop1(props) {
  const { home, overrides, ...rest } = props;
  return (
    <View
      width="463px"
      height="624px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "Desktop1")}
      {...rest}
    >
      <Image
        width="300px"
        height="300px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="69px"
        left="72px"
        borderRadius="44px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src={home?.img}
        {...getOverrideProps(overrides, "Rectangle 2")}
      ></Image>
      <Text
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="24.204544067382812px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="95px"
        height="33px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="405px"
        left="73px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="名 前：　"
        {...getOverrideProps(overrides, "\u540D \u524D\uFF1A\u3000")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="24.204544067382812px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="94px"
        height="45px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="453px"
        left="73px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="花言葉："
        {...getOverrideProps(overrides, "\u82B1\u8A00\u8449\uFF1A")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="24.204544067382812px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="146px"
        height="23px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="410px"
        left="162px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={home?.name}
        {...getOverrideProps(overrides, "4444")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="24.204544067382812px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="223px"
        height="19px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="453px"
        left="162px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={home?.languageofflower}
        {...getOverrideProps(overrides, "585555")}
      ></Text>
    </View>
  );
}
