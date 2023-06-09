/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Test1 } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function Test1UpdateForm(props) {
  const {
    id: idProp,
    test1: test1ModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    itemName: "",
    itemCode: "",
    qaunty: "",
    detail: "",
    created_at: "",
    userId: "",
    checked: "",
  };
  const [itemName, setItemName] = React.useState(initialValues.itemName);
  const [itemCode, setItemCode] = React.useState(initialValues.itemCode);
  const [qaunty, setQaunty] = React.useState(initialValues.qaunty);
  const [detail, setDetail] = React.useState(initialValues.detail);
  const [created_at, setCreated_at] = React.useState(initialValues.created_at);
  const [userId, setUserId] = React.useState(initialValues.userId);
  const [checked, setChecked] = React.useState(initialValues.checked);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = test1Record
      ? { ...initialValues, ...test1Record }
      : initialValues;
    setItemName(cleanValues.itemName);
    setItemCode(cleanValues.itemCode);
    setQaunty(cleanValues.qaunty);
    setDetail(cleanValues.detail);
    setCreated_at(cleanValues.created_at);
    setUserId(cleanValues.userId);
    setChecked(cleanValues.checked);
    setErrors({});
  };
  const [test1Record, setTest1Record] = React.useState(test1ModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Test1, idProp)
        : test1ModelProp;
      setTest1Record(record);
    };
    queryData();
  }, [idProp, test1ModelProp]);
  React.useEffect(resetStateValues, [test1Record]);
  const validations = {
    itemName: [],
    itemCode: [],
    qaunty: [],
    detail: [],
    created_at: [],
    userId: [],
    checked: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          itemName,
          itemCode,
          qaunty,
          detail,
          created_at,
          userId,
          checked,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            Test1.copyOf(test1Record, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "Test1UpdateForm")}
      {...rest}
    >
      <TextField
        label="Item name"
        isRequired={false}
        isReadOnly={false}
        value={itemName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              itemName: value,
              itemCode,
              qaunty,
              detail,
              created_at,
              userId,
              checked,
            };
            const result = onChange(modelFields);
            value = result?.itemName ?? value;
          }
          if (errors.itemName?.hasError) {
            runValidationTasks("itemName", value);
          }
          setItemName(value);
        }}
        onBlur={() => runValidationTasks("itemName", itemName)}
        errorMessage={errors.itemName?.errorMessage}
        hasError={errors.itemName?.hasError}
        {...getOverrideProps(overrides, "itemName")}
      ></TextField>
      <TextField
        label="Item code"
        isRequired={false}
        isReadOnly={false}
        value={itemCode}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              itemName,
              itemCode: value,
              qaunty,
              detail,
              created_at,
              userId,
              checked,
            };
            const result = onChange(modelFields);
            value = result?.itemCode ?? value;
          }
          if (errors.itemCode?.hasError) {
            runValidationTasks("itemCode", value);
          }
          setItemCode(value);
        }}
        onBlur={() => runValidationTasks("itemCode", itemCode)}
        errorMessage={errors.itemCode?.errorMessage}
        hasError={errors.itemCode?.hasError}
        {...getOverrideProps(overrides, "itemCode")}
      ></TextField>
      <TextField
        label="Qaunty"
        isRequired={false}
        isReadOnly={false}
        value={qaunty}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              itemName,
              itemCode,
              qaunty: value,
              detail,
              created_at,
              userId,
              checked,
            };
            const result = onChange(modelFields);
            value = result?.qaunty ?? value;
          }
          if (errors.qaunty?.hasError) {
            runValidationTasks("qaunty", value);
          }
          setQaunty(value);
        }}
        onBlur={() => runValidationTasks("qaunty", qaunty)}
        errorMessage={errors.qaunty?.errorMessage}
        hasError={errors.qaunty?.hasError}
        {...getOverrideProps(overrides, "qaunty")}
      ></TextField>
      <TextField
        label="Detail"
        isRequired={false}
        isReadOnly={false}
        value={detail}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              itemName,
              itemCode,
              qaunty,
              detail: value,
              created_at,
              userId,
              checked,
            };
            const result = onChange(modelFields);
            value = result?.detail ?? value;
          }
          if (errors.detail?.hasError) {
            runValidationTasks("detail", value);
          }
          setDetail(value);
        }}
        onBlur={() => runValidationTasks("detail", detail)}
        errorMessage={errors.detail?.errorMessage}
        hasError={errors.detail?.hasError}
        {...getOverrideProps(overrides, "detail")}
      ></TextField>
      <TextField
        label="Created at"
        isRequired={false}
        isReadOnly={false}
        value={created_at}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              itemName,
              itemCode,
              qaunty,
              detail,
              created_at: value,
              userId,
              checked,
            };
            const result = onChange(modelFields);
            value = result?.created_at ?? value;
          }
          if (errors.created_at?.hasError) {
            runValidationTasks("created_at", value);
          }
          setCreated_at(value);
        }}
        onBlur={() => runValidationTasks("created_at", created_at)}
        errorMessage={errors.created_at?.errorMessage}
        hasError={errors.created_at?.hasError}
        {...getOverrideProps(overrides, "created_at")}
      ></TextField>
      <TextField
        label="User id"
        isRequired={false}
        isReadOnly={false}
        value={userId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              itemName,
              itemCode,
              qaunty,
              detail,
              created_at,
              userId: value,
              checked,
            };
            const result = onChange(modelFields);
            value = result?.userId ?? value;
          }
          if (errors.userId?.hasError) {
            runValidationTasks("userId", value);
          }
          setUserId(value);
        }}
        onBlur={() => runValidationTasks("userId", userId)}
        errorMessage={errors.userId?.errorMessage}
        hasError={errors.userId?.hasError}
        {...getOverrideProps(overrides, "userId")}
      ></TextField>
      <TextField
        label="Checked"
        isRequired={false}
        isReadOnly={false}
        value={checked}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              itemName,
              itemCode,
              qaunty,
              detail,
              created_at,
              userId,
              checked: value,
            };
            const result = onChange(modelFields);
            value = result?.checked ?? value;
          }
          if (errors.checked?.hasError) {
            runValidationTasks("checked", value);
          }
          setChecked(value);
        }}
        onBlur={() => runValidationTasks("checked", checked)}
        errorMessage={errors.checked?.errorMessage}
        hasError={errors.checked?.hasError}
        {...getOverrideProps(overrides, "checked")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || test1ModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || test1ModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
