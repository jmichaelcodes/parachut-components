# parachut-components

> 

[![NPM](https://img.shields.io/npm/v/parachut-components.svg)](https://www.npmjs.com/package/parachut-components) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save parachut-components
```

## Circle Button
#### Example
``` jsx
<CircleButton text="Become a member"/>
```
#### Props
| Option | Description |
| :------ | :----------- |
| className   | CSS Class name (string) |
| style   | Inline style (obj) |
| text | Button text (string) |

&nbsp;

## Nested Button
#### Example
``` jsx
<NestedButton text="Sign up" size="small"/>
```
#### Props
| Option | Description |
| :------ | :----------- |
| className   | CSS Class name (string) |
| size | Button size ("large"/"small") default="large"
| style   | Inline style (obj) |
| text | Button text (string) |

&nbsp;

## Text Input
#### Example (Text)
``` jsx
<TextInput
  error={errors.firstName}
  id="firstName"
  onBlur={onBlur}
  onChange={onChange}
  placeholder="First Name"
  touched={touched.firstName}
  value={values.phone}
/>
```
#### Example (Number)
``` jsx
<TextInput
  error={errors.phone}
  id="phone"
  format="###-###-####"
  mask="_"
  onBlur={onBlur}
  onChange={onChange}
  placeholder="Phone number"
  touched={touched.phone}
  value={values.phone}
/>
```
#### Props
| Option | Description |
| :------ | :----------- |
| className| CSS Class name (string) |
| error&sup1; | Error message (string) |
| format&sup2; | Number input format (string) |
| id | Input field id (string) |
| mask&sup2; | Number input mask (string) |
| maxLength | Input value max length (number) |
| onBlur | Action on blur (func)|
| onChange | Action on text change (func) |
| placeholder | Placeholder text (string)|
| style | Inline style (obj) |
| touched&sup1; | Field has been in focus (bool) |
| type | Input type ("text"/"number") default="text" |
| value | Input field value (string)|

###### &sup1;Formik &sup2;react-number-format