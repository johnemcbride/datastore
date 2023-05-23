/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Enrolment } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function EnrolmentCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    bands: "",
    status: "",
    rate: "",
    term: "",
    bandMembershipType: "",
    bandDesc: "",
    bandRate: "",
    lessons: "",
    lessonDesc: "",
    lessonRate: "",
    stripeRef: "",
    total: "",
    giftAidConsent: false,
    paymentName: "",
    city: "",
    line1: "",
    line2: "",
    postCode: "",
    email: "",
    firstname: "",
    familyname: "",
  };
  const [bands, setBands] = React.useState(initialValues.bands);
  const [status, setStatus] = React.useState(initialValues.status);
  const [rate, setRate] = React.useState(initialValues.rate);
  const [term, setTerm] = React.useState(initialValues.term);
  const [bandMembershipType, setBandMembershipType] = React.useState(
    initialValues.bandMembershipType
  );
  const [bandDesc, setBandDesc] = React.useState(initialValues.bandDesc);
  const [bandRate, setBandRate] = React.useState(initialValues.bandRate);
  const [lessons, setLessons] = React.useState(initialValues.lessons);
  const [lessonDesc, setLessonDesc] = React.useState(initialValues.lessonDesc);
  const [lessonRate, setLessonRate] = React.useState(initialValues.lessonRate);
  const [stripeRef, setStripeRef] = React.useState(initialValues.stripeRef);
  const [total, setTotal] = React.useState(initialValues.total);
  const [giftAidConsent, setGiftAidConsent] = React.useState(
    initialValues.giftAidConsent
  );
  const [paymentName, setPaymentName] = React.useState(
    initialValues.paymentName
  );
  const [city, setCity] = React.useState(initialValues.city);
  const [line1, setLine1] = React.useState(initialValues.line1);
  const [line2, setLine2] = React.useState(initialValues.line2);
  const [postCode, setPostCode] = React.useState(initialValues.postCode);
  const [email, setEmail] = React.useState(initialValues.email);
  const [firstname, setFirstname] = React.useState(initialValues.firstname);
  const [familyname, setFamilyname] = React.useState(initialValues.familyname);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setBands(initialValues.bands);
    setStatus(initialValues.status);
    setRate(initialValues.rate);
    setTerm(initialValues.term);
    setBandMembershipType(initialValues.bandMembershipType);
    setBandDesc(initialValues.bandDesc);
    setBandRate(initialValues.bandRate);
    setLessons(initialValues.lessons);
    setLessonDesc(initialValues.lessonDesc);
    setLessonRate(initialValues.lessonRate);
    setStripeRef(initialValues.stripeRef);
    setTotal(initialValues.total);
    setGiftAidConsent(initialValues.giftAidConsent);
    setPaymentName(initialValues.paymentName);
    setCity(initialValues.city);
    setLine1(initialValues.line1);
    setLine2(initialValues.line2);
    setPostCode(initialValues.postCode);
    setEmail(initialValues.email);
    setFirstname(initialValues.firstname);
    setFamilyname(initialValues.familyname);
    setErrors({});
  };
  const validations = {
    bands: [],
    status: [],
    rate: [],
    term: [],
    bandMembershipType: [],
    bandDesc: [],
    bandRate: [],
    lessons: [],
    lessonDesc: [],
    lessonRate: [],
    stripeRef: [],
    total: [],
    giftAidConsent: [],
    paymentName: [],
    city: [],
    line1: [],
    line2: [],
    postCode: [],
    email: [],
    firstname: [],
    familyname: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value = getDisplayValue
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
          bands,
          status,
          rate,
          term,
          bandMembershipType,
          bandDesc,
          bandRate,
          lessons,
          lessonDesc,
          lessonRate,
          stripeRef,
          total,
          giftAidConsent,
          paymentName,
          city,
          line1,
          line2,
          postCode,
          email,
          firstname,
          familyname,
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
          await DataStore.save(new Enrolment(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "EnrolmentCreateForm")}
      {...rest}
    >
      <TextField
        label="Bands"
        isRequired={false}
        isReadOnly={false}
        value={bands}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              bands: value,
              status,
              rate,
              term,
              bandMembershipType,
              bandDesc,
              bandRate,
              lessons,
              lessonDesc,
              lessonRate,
              stripeRef,
              total,
              giftAidConsent,
              paymentName,
              city,
              line1,
              line2,
              postCode,
              email,
              firstname,
              familyname,
            };
            const result = onChange(modelFields);
            value = result?.bands ?? value;
          }
          if (errors.bands?.hasError) {
            runValidationTasks("bands", value);
          }
          setBands(value);
        }}
        onBlur={() => runValidationTasks("bands", bands)}
        errorMessage={errors.bands?.errorMessage}
        hasError={errors.bands?.hasError}
        {...getOverrideProps(overrides, "bands")}
      ></TextField>
      <TextField
        label="Status"
        isRequired={false}
        isReadOnly={false}
        value={status}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              bands,
              status: value,
              rate,
              term,
              bandMembershipType,
              bandDesc,
              bandRate,
              lessons,
              lessonDesc,
              lessonRate,
              stripeRef,
              total,
              giftAidConsent,
              paymentName,
              city,
              line1,
              line2,
              postCode,
              email,
              firstname,
              familyname,
            };
            const result = onChange(modelFields);
            value = result?.status ?? value;
          }
          if (errors.status?.hasError) {
            runValidationTasks("status", value);
          }
          setStatus(value);
        }}
        onBlur={() => runValidationTasks("status", status)}
        errorMessage={errors.status?.errorMessage}
        hasError={errors.status?.hasError}
        {...getOverrideProps(overrides, "status")}
      ></TextField>
      <TextField
        label="Rate"
        isRequired={false}
        isReadOnly={false}
        value={rate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              bands,
              status,
              rate: value,
              term,
              bandMembershipType,
              bandDesc,
              bandRate,
              lessons,
              lessonDesc,
              lessonRate,
              stripeRef,
              total,
              giftAidConsent,
              paymentName,
              city,
              line1,
              line2,
              postCode,
              email,
              firstname,
              familyname,
            };
            const result = onChange(modelFields);
            value = result?.rate ?? value;
          }
          if (errors.rate?.hasError) {
            runValidationTasks("rate", value);
          }
          setRate(value);
        }}
        onBlur={() => runValidationTasks("rate", rate)}
        errorMessage={errors.rate?.errorMessage}
        hasError={errors.rate?.hasError}
        {...getOverrideProps(overrides, "rate")}
      ></TextField>
      <TextField
        label="Term"
        isRequired={false}
        isReadOnly={false}
        value={term}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              bands,
              status,
              rate,
              term: value,
              bandMembershipType,
              bandDesc,
              bandRate,
              lessons,
              lessonDesc,
              lessonRate,
              stripeRef,
              total,
              giftAidConsent,
              paymentName,
              city,
              line1,
              line2,
              postCode,
              email,
              firstname,
              familyname,
            };
            const result = onChange(modelFields);
            value = result?.term ?? value;
          }
          if (errors.term?.hasError) {
            runValidationTasks("term", value);
          }
          setTerm(value);
        }}
        onBlur={() => runValidationTasks("term", term)}
        errorMessage={errors.term?.errorMessage}
        hasError={errors.term?.hasError}
        {...getOverrideProps(overrides, "term")}
      ></TextField>
      <TextField
        label="Band membership type"
        isRequired={false}
        isReadOnly={false}
        value={bandMembershipType}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              bands,
              status,
              rate,
              term,
              bandMembershipType: value,
              bandDesc,
              bandRate,
              lessons,
              lessonDesc,
              lessonRate,
              stripeRef,
              total,
              giftAidConsent,
              paymentName,
              city,
              line1,
              line2,
              postCode,
              email,
              firstname,
              familyname,
            };
            const result = onChange(modelFields);
            value = result?.bandMembershipType ?? value;
          }
          if (errors.bandMembershipType?.hasError) {
            runValidationTasks("bandMembershipType", value);
          }
          setBandMembershipType(value);
        }}
        onBlur={() =>
          runValidationTasks("bandMembershipType", bandMembershipType)
        }
        errorMessage={errors.bandMembershipType?.errorMessage}
        hasError={errors.bandMembershipType?.hasError}
        {...getOverrideProps(overrides, "bandMembershipType")}
      ></TextField>
      <TextField
        label="Band desc"
        isRequired={false}
        isReadOnly={false}
        value={bandDesc}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              bands,
              status,
              rate,
              term,
              bandMembershipType,
              bandDesc: value,
              bandRate,
              lessons,
              lessonDesc,
              lessonRate,
              stripeRef,
              total,
              giftAidConsent,
              paymentName,
              city,
              line1,
              line2,
              postCode,
              email,
              firstname,
              familyname,
            };
            const result = onChange(modelFields);
            value = result?.bandDesc ?? value;
          }
          if (errors.bandDesc?.hasError) {
            runValidationTasks("bandDesc", value);
          }
          setBandDesc(value);
        }}
        onBlur={() => runValidationTasks("bandDesc", bandDesc)}
        errorMessage={errors.bandDesc?.errorMessage}
        hasError={errors.bandDesc?.hasError}
        {...getOverrideProps(overrides, "bandDesc")}
      ></TextField>
      <TextField
        label="Band rate"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={bandRate}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              bands,
              status,
              rate,
              term,
              bandMembershipType,
              bandDesc,
              bandRate: value,
              lessons,
              lessonDesc,
              lessonRate,
              stripeRef,
              total,
              giftAidConsent,
              paymentName,
              city,
              line1,
              line2,
              postCode,
              email,
              firstname,
              familyname,
            };
            const result = onChange(modelFields);
            value = result?.bandRate ?? value;
          }
          if (errors.bandRate?.hasError) {
            runValidationTasks("bandRate", value);
          }
          setBandRate(value);
        }}
        onBlur={() => runValidationTasks("bandRate", bandRate)}
        errorMessage={errors.bandRate?.errorMessage}
        hasError={errors.bandRate?.hasError}
        {...getOverrideProps(overrides, "bandRate")}
      ></TextField>
      <TextField
        label="Lessons"
        isRequired={false}
        isReadOnly={false}
        value={lessons}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              bands,
              status,
              rate,
              term,
              bandMembershipType,
              bandDesc,
              bandRate,
              lessons: value,
              lessonDesc,
              lessonRate,
              stripeRef,
              total,
              giftAidConsent,
              paymentName,
              city,
              line1,
              line2,
              postCode,
              email,
              firstname,
              familyname,
            };
            const result = onChange(modelFields);
            value = result?.lessons ?? value;
          }
          if (errors.lessons?.hasError) {
            runValidationTasks("lessons", value);
          }
          setLessons(value);
        }}
        onBlur={() => runValidationTasks("lessons", lessons)}
        errorMessage={errors.lessons?.errorMessage}
        hasError={errors.lessons?.hasError}
        {...getOverrideProps(overrides, "lessons")}
      ></TextField>
      <TextField
        label="Lesson desc"
        isRequired={false}
        isReadOnly={false}
        value={lessonDesc}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              bands,
              status,
              rate,
              term,
              bandMembershipType,
              bandDesc,
              bandRate,
              lessons,
              lessonDesc: value,
              lessonRate,
              stripeRef,
              total,
              giftAidConsent,
              paymentName,
              city,
              line1,
              line2,
              postCode,
              email,
              firstname,
              familyname,
            };
            const result = onChange(modelFields);
            value = result?.lessonDesc ?? value;
          }
          if (errors.lessonDesc?.hasError) {
            runValidationTasks("lessonDesc", value);
          }
          setLessonDesc(value);
        }}
        onBlur={() => runValidationTasks("lessonDesc", lessonDesc)}
        errorMessage={errors.lessonDesc?.errorMessage}
        hasError={errors.lessonDesc?.hasError}
        {...getOverrideProps(overrides, "lessonDesc")}
      ></TextField>
      <TextField
        label="Lesson rate"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={lessonRate}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              bands,
              status,
              rate,
              term,
              bandMembershipType,
              bandDesc,
              bandRate,
              lessons,
              lessonDesc,
              lessonRate: value,
              stripeRef,
              total,
              giftAidConsent,
              paymentName,
              city,
              line1,
              line2,
              postCode,
              email,
              firstname,
              familyname,
            };
            const result = onChange(modelFields);
            value = result?.lessonRate ?? value;
          }
          if (errors.lessonRate?.hasError) {
            runValidationTasks("lessonRate", value);
          }
          setLessonRate(value);
        }}
        onBlur={() => runValidationTasks("lessonRate", lessonRate)}
        errorMessage={errors.lessonRate?.errorMessage}
        hasError={errors.lessonRate?.hasError}
        {...getOverrideProps(overrides, "lessonRate")}
      ></TextField>
      <TextField
        label="Stripe ref"
        isRequired={false}
        isReadOnly={false}
        value={stripeRef}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              bands,
              status,
              rate,
              term,
              bandMembershipType,
              bandDesc,
              bandRate,
              lessons,
              lessonDesc,
              lessonRate,
              stripeRef: value,
              total,
              giftAidConsent,
              paymentName,
              city,
              line1,
              line2,
              postCode,
              email,
              firstname,
              familyname,
            };
            const result = onChange(modelFields);
            value = result?.stripeRef ?? value;
          }
          if (errors.stripeRef?.hasError) {
            runValidationTasks("stripeRef", value);
          }
          setStripeRef(value);
        }}
        onBlur={() => runValidationTasks("stripeRef", stripeRef)}
        errorMessage={errors.stripeRef?.errorMessage}
        hasError={errors.stripeRef?.hasError}
        {...getOverrideProps(overrides, "stripeRef")}
      ></TextField>
      <TextField
        label="Total"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={total}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              bands,
              status,
              rate,
              term,
              bandMembershipType,
              bandDesc,
              bandRate,
              lessons,
              lessonDesc,
              lessonRate,
              stripeRef,
              total: value,
              giftAidConsent,
              paymentName,
              city,
              line1,
              line2,
              postCode,
              email,
              firstname,
              familyname,
            };
            const result = onChange(modelFields);
            value = result?.total ?? value;
          }
          if (errors.total?.hasError) {
            runValidationTasks("total", value);
          }
          setTotal(value);
        }}
        onBlur={() => runValidationTasks("total", total)}
        errorMessage={errors.total?.errorMessage}
        hasError={errors.total?.hasError}
        {...getOverrideProps(overrides, "total")}
      ></TextField>
      <SwitchField
        label="Gift aid consent"
        defaultChecked={false}
        isDisabled={false}
        isChecked={giftAidConsent}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              bands,
              status,
              rate,
              term,
              bandMembershipType,
              bandDesc,
              bandRate,
              lessons,
              lessonDesc,
              lessonRate,
              stripeRef,
              total,
              giftAidConsent: value,
              paymentName,
              city,
              line1,
              line2,
              postCode,
              email,
              firstname,
              familyname,
            };
            const result = onChange(modelFields);
            value = result?.giftAidConsent ?? value;
          }
          if (errors.giftAidConsent?.hasError) {
            runValidationTasks("giftAidConsent", value);
          }
          setGiftAidConsent(value);
        }}
        onBlur={() => runValidationTasks("giftAidConsent", giftAidConsent)}
        errorMessage={errors.giftAidConsent?.errorMessage}
        hasError={errors.giftAidConsent?.hasError}
        {...getOverrideProps(overrides, "giftAidConsent")}
      ></SwitchField>
      <TextField
        label="Payment name"
        isRequired={false}
        isReadOnly={false}
        value={paymentName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              bands,
              status,
              rate,
              term,
              bandMembershipType,
              bandDesc,
              bandRate,
              lessons,
              lessonDesc,
              lessonRate,
              stripeRef,
              total,
              giftAidConsent,
              paymentName: value,
              city,
              line1,
              line2,
              postCode,
              email,
              firstname,
              familyname,
            };
            const result = onChange(modelFields);
            value = result?.paymentName ?? value;
          }
          if (errors.paymentName?.hasError) {
            runValidationTasks("paymentName", value);
          }
          setPaymentName(value);
        }}
        onBlur={() => runValidationTasks("paymentName", paymentName)}
        errorMessage={errors.paymentName?.errorMessage}
        hasError={errors.paymentName?.hasError}
        {...getOverrideProps(overrides, "paymentName")}
      ></TextField>
      <TextField
        label="City"
        isRequired={false}
        isReadOnly={false}
        value={city}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              bands,
              status,
              rate,
              term,
              bandMembershipType,
              bandDesc,
              bandRate,
              lessons,
              lessonDesc,
              lessonRate,
              stripeRef,
              total,
              giftAidConsent,
              paymentName,
              city: value,
              line1,
              line2,
              postCode,
              email,
              firstname,
              familyname,
            };
            const result = onChange(modelFields);
            value = result?.city ?? value;
          }
          if (errors.city?.hasError) {
            runValidationTasks("city", value);
          }
          setCity(value);
        }}
        onBlur={() => runValidationTasks("city", city)}
        errorMessage={errors.city?.errorMessage}
        hasError={errors.city?.hasError}
        {...getOverrideProps(overrides, "city")}
      ></TextField>
      <TextField
        label="Line1"
        isRequired={false}
        isReadOnly={false}
        value={line1}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              bands,
              status,
              rate,
              term,
              bandMembershipType,
              bandDesc,
              bandRate,
              lessons,
              lessonDesc,
              lessonRate,
              stripeRef,
              total,
              giftAidConsent,
              paymentName,
              city,
              line1: value,
              line2,
              postCode,
              email,
              firstname,
              familyname,
            };
            const result = onChange(modelFields);
            value = result?.line1 ?? value;
          }
          if (errors.line1?.hasError) {
            runValidationTasks("line1", value);
          }
          setLine1(value);
        }}
        onBlur={() => runValidationTasks("line1", line1)}
        errorMessage={errors.line1?.errorMessage}
        hasError={errors.line1?.hasError}
        {...getOverrideProps(overrides, "line1")}
      ></TextField>
      <TextField
        label="Line2"
        isRequired={false}
        isReadOnly={false}
        value={line2}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              bands,
              status,
              rate,
              term,
              bandMembershipType,
              bandDesc,
              bandRate,
              lessons,
              lessonDesc,
              lessonRate,
              stripeRef,
              total,
              giftAidConsent,
              paymentName,
              city,
              line1,
              line2: value,
              postCode,
              email,
              firstname,
              familyname,
            };
            const result = onChange(modelFields);
            value = result?.line2 ?? value;
          }
          if (errors.line2?.hasError) {
            runValidationTasks("line2", value);
          }
          setLine2(value);
        }}
        onBlur={() => runValidationTasks("line2", line2)}
        errorMessage={errors.line2?.errorMessage}
        hasError={errors.line2?.hasError}
        {...getOverrideProps(overrides, "line2")}
      ></TextField>
      <TextField
        label="Post code"
        isRequired={false}
        isReadOnly={false}
        value={postCode}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              bands,
              status,
              rate,
              term,
              bandMembershipType,
              bandDesc,
              bandRate,
              lessons,
              lessonDesc,
              lessonRate,
              stripeRef,
              total,
              giftAidConsent,
              paymentName,
              city,
              line1,
              line2,
              postCode: value,
              email,
              firstname,
              familyname,
            };
            const result = onChange(modelFields);
            value = result?.postCode ?? value;
          }
          if (errors.postCode?.hasError) {
            runValidationTasks("postCode", value);
          }
          setPostCode(value);
        }}
        onBlur={() => runValidationTasks("postCode", postCode)}
        errorMessage={errors.postCode?.errorMessage}
        hasError={errors.postCode?.hasError}
        {...getOverrideProps(overrides, "postCode")}
      ></TextField>
      <TextField
        label="Email"
        isRequired={false}
        isReadOnly={false}
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              bands,
              status,
              rate,
              term,
              bandMembershipType,
              bandDesc,
              bandRate,
              lessons,
              lessonDesc,
              lessonRate,
              stripeRef,
              total,
              giftAidConsent,
              paymentName,
              city,
              line1,
              line2,
              postCode,
              email: value,
              firstname,
              familyname,
            };
            const result = onChange(modelFields);
            value = result?.email ?? value;
          }
          if (errors.email?.hasError) {
            runValidationTasks("email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("email", email)}
        errorMessage={errors.email?.errorMessage}
        hasError={errors.email?.hasError}
        {...getOverrideProps(overrides, "email")}
      ></TextField>
      <TextField
        label="Firstname"
        isRequired={false}
        isReadOnly={false}
        value={firstname}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              bands,
              status,
              rate,
              term,
              bandMembershipType,
              bandDesc,
              bandRate,
              lessons,
              lessonDesc,
              lessonRate,
              stripeRef,
              total,
              giftAidConsent,
              paymentName,
              city,
              line1,
              line2,
              postCode,
              email,
              firstname: value,
              familyname,
            };
            const result = onChange(modelFields);
            value = result?.firstname ?? value;
          }
          if (errors.firstname?.hasError) {
            runValidationTasks("firstname", value);
          }
          setFirstname(value);
        }}
        onBlur={() => runValidationTasks("firstname", firstname)}
        errorMessage={errors.firstname?.errorMessage}
        hasError={errors.firstname?.hasError}
        {...getOverrideProps(overrides, "firstname")}
      ></TextField>
      <TextField
        label="Familyname"
        isRequired={false}
        isReadOnly={false}
        value={familyname}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              bands,
              status,
              rate,
              term,
              bandMembershipType,
              bandDesc,
              bandRate,
              lessons,
              lessonDesc,
              lessonRate,
              stripeRef,
              total,
              giftAidConsent,
              paymentName,
              city,
              line1,
              line2,
              postCode,
              email,
              firstname,
              familyname: value,
            };
            const result = onChange(modelFields);
            value = result?.familyname ?? value;
          }
          if (errors.familyname?.hasError) {
            runValidationTasks("familyname", value);
          }
          setFamilyname(value);
        }}
        onBlur={() => runValidationTasks("familyname", familyname)}
        errorMessage={errors.familyname?.errorMessage}
        hasError={errors.familyname?.hasError}
        {...getOverrideProps(overrides, "familyname")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
