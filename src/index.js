import React from 'react'
import NumberFormat from 'react-number-format'
import PropTypes from 'prop-types'

import styles from './styles.css'

import circleButtonCircle from './static/circle_button.svg'
import validationMark from './static/validation_mark_blue.svg'

export function NestedButton({ className, size, style, text }) {
  return (
    <div className={[styles.ovalButtonOuter, className].join(' ')} style={style}>
      <button
        className={[
          styles.ovalButtonContainer,
          size === 'small' ? styles.ovalButtonContainerSmall : ''
        ].join(' ')}
      >
        {text}
      </button>
      <div
        className={[
          styles.ovalButtonBorder,
          size === 'small' ? styles.ovalButtonBorderSmall : ''
        ].join(' ')}
      />
    </div>
  )
}

NestedButton.propTypes = {
  className: PropTypes.string,
  size: PropTypes.string,
  style: PropTypes.object,
  text: PropTypes.string
}

NestedButton.defaultProps = {
  size: 'small'
}

export function CircleButton({ className, style, text }) {
  return (
    <button className={[styles.circleButtonButton, className].join(' ')}>
      <p className={styles.circleButtonText}>{text}</p>
      <img src={circleButtonCircle} style={{ height: 100, width: 100 }} />
    </button>
  )
}

CircleButton.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  text: PropTypes.string
}

export function TextInput({
  className,
  error,
  format,
  id,
  mask,
  maxLength,
  onBlur,
  onChange,
  placeholder,
  style,
  touched,
  type,
  value
}) {
  function ValidationIcon() {
    if (error) {
      return <p className={styles.textInputIcon}>!</p>
    }
    return <img src={validationMark} className={styles.textInputCheckMark} width={16} />
  }
  return (
    <div className={[styles.textInputContainer, className].join(' ')} style={style}>
      {type !== 'number' ? (
        <input
          type="text"
          id={id}
          className={[
            styles.textInput,
            error && touched ? styles.textInputError : ''
          ].join(' ')}
          maxLength={maxLength}
          onBlur={onBlur}
          onChange={onChange}
          placeholder={placeholder}
          value={value}
        />
      ) : (
        <NumberFormat
          id={id}
          placeholder={placeholder}
          format={format}
          mask={mask}
          className={[
            styles.textInput,
            error && touched ? styles.error : ''
          ].join(' ')}
          onBlur={onBlur}
          onChange={onChange}
          value={value}
        />
      )}
      {touched ? <ValidationIcon /> : null}
      {error && touched ? (
        <p className={styles.textInputErrorText}>{error}</p>
      ) : null}
    </div>
  )
}

TextInput.propTypes = {
  className: PropTypes.string,
  error: PropTypes.string,
  format: PropTypes.string,
  id: PropTypes.string,
  mask: PropTypes.string,
  maxLength: PropTypes.number,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  style: PropTypes.object,
  touched: PropTypes.bool,
  type: PropTypes.string,
  value: PropTypes.string
}
