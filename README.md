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
| Option | Description | Type | Default |
| :----- | :----- | :-----: | :-----: |
| className   | CSS Class name | String | |
| onClick   | onClick action | Function | |
| style   | Inline style | Object | |
| text | Button text **(required)** | String | |

&nbsp;

## Column
#### Example
``` jsx
<Col>
  <div>...</div>
</Col>
```
#### Props
| Option | Description | Type | Default |
| :------ | :----- | :----- | :----- |
| align | align-items property | String | stretch |
| className   | CSS Class name | String | |
| content | align-content property | String | stretch |
| justify | justify-content property | String | flex-start |
| onClick   | onClick action | Function | |
| self | align-self property | String | auto |
| style   | Inline style | Object | |
| wrap | flex-wrap property | String | no-wrap |

&nbsp;

## Container
#### Example
``` jsx
<Container>
  <div>...</div>
</Container>
```
#### Props
| Option | Description | Type | Default |
| :------ | :----- | :----- | :----- |
| className   | CSS Class name | String | |
| modalClose   | Modal close on click outside | Function | |
| modalOverlayColor   | Modal overlay color | String | rgba(0, 0, 0, .5) |
| modalVisible   | Modal overlay visibility | Boolean | false |
| style   | Inline style | Object | |
| width | container width | Number | 1140 |

&nbsp;

## Grid System
#### Example
``` jsx
<Grid>
  <Col xs={12} md={6}>
    <div>...</div>
  </Col>
  <Col xs={12} md={3}>
    <div>...</div>
  </Col>
  <Col xs={12} md={6}>
    <div>...</div>
  </Col>
</Grid>
```
#### Grid Props
| Option | Description | Type | Default |
| :------ | :----- | :----- | :----- |
| align | align-items property | String | stretch |
| className   | CSS Class name | String | |
| content | align-content property | String | stretch |
| direction | flex-direction property | String | row |
| justify | justify-content property | String | flex-start |
| self | align-self property | String | auto |
| style   | Inline style | Object | |
| wrap | flex-wrap property | String | no-wrap |

&nbsp;

#### Column/Row Child Props
| Option | Description | Type | Default |
| :------ | :----- | :----- | :----- |
| lg | lg column width| 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12  | |
| md | md column width | 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12  | |
| sm   | sm column width| 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12  | |
| xl   | xl column width| 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12  | |
| xs | xs column width| 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12  | |

&nbsp;

#### Breakpoints
| Size | Range |
| :------ | :----------- |
| xs | < 600px |
| sm   | 600px-959px |
| md | 960px-1279px  |
| lg | 1280px-1919px |
| xl   | > 1920px |

&nbsp;

## Hidden
#### Example
``` jsx
<Hidden smDown>
  <div>...</div>
</Hidden>
```
#### Props
| Option | Description | Type | Default |
| :----- | :----- | :-----: | :-----: |
| xsDown   | xs and down hidden | Boolean | |
| xsUp   | xs and up hidden | Boolean | |
| smDown   | sm and down hidden | Boolean | |
| smUp   | sm and up hidden | Boolean | |
| mdDown   | md and down hidden | Boolean | |
| mdUp   | md and up hidden | Boolean | |
| lgDown   | lg and down hidden | Boolean | |
| lgUp   | lg and up hidden | Boolean | |
| xlDown   | xl and down hidden | Boolean | |
| xlUp   | xl and up hidden | Boolean | |

&nbsp;

## Input
#### Example (Text)
``` jsx
<Input
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
<Input
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
| Option | Description | Type | Default |
| :------ | :----- | :----- | :----- |
| className| CSS Class name | String | |
| error&sup1; | Error message | String | |
| format&sup2; | Number input format | String | |
| id | Input field id | String | |
| mask&sup2; | Number input mask | String | |
| maxLength | Input value max length | Number | |
| onBlur | Action on blur | Function | |
| onChange | Action on text change | Function | |
| placeholder | Placeholder text | String | |
| style | Inline style | Object | |
| touched&sup1; | Field has been in focus | Boolean | |
| type | Input type| "number", "text" | text |
| value | Input field value | String | |

###### &sup1;Formik &sup2;react-number-format

&nbsp;

## Modal
#### Example
``` jsx
<Container overlay={isOpen}>
  <div>....</div>
  <Modal isOpen={isOpen}>
    <div>...</div>
  </Modal>
</Container>
```
#### Props
| Option | Description | Type | Default |
| :------ | :----- | :----- | :----- |
| className   | CSS Class name | String | |
| closeColor   | Close icon color | black/white | white |
| isOpen   | Visible state of modal | Boolean | false |
| onClose   | Action on close | Function | |
| style   | Inline style | Object | |

###### Container props modalClose, modalOverlayColor, modalVisible work in tandem with Modal

&nbsp;

## Navbar
#### Example
``` jsx
<Navbar>
  <div>...</div>
</Navbar>
```
#### Props
| Option | Description | Type | Default |
| :------ | :----- | :----- | :----- |
| border   | Bottom border color | String | |
| className   | CSS Class name | String | |
| color   | Background color | String | |
| inContainer   | Navbar in container | Boolean | |
| containerWidth   | Width of container | Number | 1140 |
| style   | Inline style | Object | |

&nbsp;

## Nested Button
#### Example
``` jsx
<NestedButton text="Sign up" size="small"/>
```
#### Props
| Option | Description | Type | Default |
| :------ | :----- | :----- | :----- |
| className   | CSS Class name | String | |
| onClick   | onClick action | Function | |
| size | Button size | "small", "medium", "large" | medium |
| style   | Inline style | Object | |
| text | Button text **(required)**| String | |

&nbsp;

## Row
#### Example
``` jsx
<Row>
  <div>...</div>
</Row>
```
#### Props
| Option | Description | Type | Default |
| :------ | :----- | :----- | :----- |
| align | align-items property | String | stretch |
| className   | CSS Class name | String | |
| content | align-content property | String | stretch |
| justify | justify-content property | String | flex-start |
| onClick   | onClick action | Function | |
| self | align-self property | String | auto |
| style   | Inline style | Object | |
| wrap | flex-wrap property | String | no-wrap |

&nbsp;

## Text
#### Example
``` jsx
<Text size='h1'>h1</Text>
<Text size='h2'>h2</Text>
<Text size='h3'>h3</Text>
<Text size='h4'>h4</Text>
<Text size='h5'>h5</Text>
<Text size='h6'>h6</Text>
<Text size='subtitle'>subtitle</Text>
<Text size='body'>body</Text>
<Text size='caption'>caption</Text>
```
#### Props
| Option | Description | Type | Default |
| :------ | :----- | :----- | :----- |
| className   | CSS Class name | String | |
| color | Text color | String | black |
| fontStyle | Font style | "italic", "normal" | normal |
| onClick   | onClick action | Function | |
| size   | Font size | "h1","h2", "h3", "h4", "h5", "h6", "subtitle", "body", "caption" | body |
| style   | Inline style | Object | |
| weight | Font weigh | "bold", "medium", "normal" | normal |

&nbsp;

#### Font Sizes
| Key | Size |
| :------ | :----------- |
| h1 | 72px |
| h2 | 48px |
| h3 | 36px |
| h4 | 24px |
| h5 | 21px |
| h6 | 16px |
| subtitle | 12px |
| body | 10px |
| caption | 8px |