import React from 'react'
import NumberFormat from 'react-number-format'
import PropTypes from 'prop-types'

import styles from './styles.css'

import closeBlack from './static/close_black.svg'
import closeWhite from './static/close_white.svg'
import circleButtonCircle from './static/circle_button.svg'
import validationMark from './static/validation_mark_blue.svg'

export function CircleButton({ className, onClick, style, text }) {
  return (
    <button
      className={[styles.circleButtonButton, className].join(' ')}
      onClick={onClick}
      style={style}
    >
      <p className={styles.circleButtonText}>{text}</p>
      <img src={circleButtonCircle} style={{ height: 100, width: 100 }} />
    </button>
  )
}

CircleButton.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  style: PropTypes.object,
  text: PropTypes.string.isRequired
}

export function Col({
  align,
  children,
  className,
  content,
  justify,
  lg,
  md,
  onClick,
  self,
  sm,
  style,
  wrap,
  xl,
  xs
}) {
  function getClass(size) {
    if (eval(size)) {
      return eval(`styles.${size}${eval(size)}`)
    }
  }

  return (
    <div
      className={[
        getClass('xs'),
        getClass('sm'),
        getClass('md'),
        getClass('lg'),
        getClass('xl'),
        className
      ].join(' ')}
      onClick={onClick}
      style={{
        alignItems: align,
        alignSelf: self,
        alignContent: content,
        display: 'flex',
        flexDirection: 'column',
        flexWrap: wrap,
        justifyContent: justify,
        ...style
      }}
    >
      {children}
    </div>
  )
}

Col.propTypes = {
  align: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  content: PropTypes.string,
  justify: PropTypes.string,
  lg: PropTypes.number,
  md: PropTypes.number,
  onClick: PropTypes.func,
  self: PropTypes.string,
  sm: PropTypes.number,
  style: PropTypes.object,
  wrap: PropTypes.string,
  xl: PropTypes.number,
  xs: PropTypes.number
}

Col.defaultProps = {
  align: 'stretch',
  content: 'stretch',
  justify: 'flex-start',
  self: 'auto',
  wrap: 'no-wrap'
}

export function Container({
  children,
  className,
  modalClose,
  modalOverlayColor,
  modalVisible,
  style,
  width
}) {
  return (
    <div className={className} style={style}>
      <div style={{ position: 'relative' }} onClick={() => modalVisible && modalClose ? modalClose() : null}>
        {modalVisible ? (
          <div className={styles.containerOverlay} style={{ backgroundColor: modalOverlayColor }} />
        ) : null}
        <div className={styles.container} style={{ width }}>{children}</div>
      </div>
    </div>
  )
}

Container.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  modalClose: PropTypes.func,
  modalOverlayColor: PropTypes.string,
  modalVisible: PropTypes.bool,
  style: PropTypes.object,
  width: PropTypes.number
}

Container.defaultProps = {
  modalOverlayColor: 'rgba(0, 0, 0, .5)',
  modalVisible: false,
  width: 1140
}

export function Grid({
  align,
  children,
  className,
  content,
  direction,
  justify,
  self,
  style,
  wrap
}) {
  return (
    <div
      className={[styles.grid, className].join(' ')}
      style={{
        alignContent: content,
        alignItems: align,
        alignSelf: self,
        flexDirection: direction,
        flexWrap: wrap,
        justifyContent: justify,
        ...style
      }}
    >
      {children}
    </div>
  )
}

Grid.propTypes = {
  align: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  content: PropTypes.string,
  direction: PropTypes.string,
  justify: PropTypes.string,
  self: PropTypes.string,
  style: PropTypes.object,
  wrap: PropTypes.string
}

Grid.defaultProps = {
  align: 'stretch',
  content: 'stretch',
  direction: 'row',
  justify: 'flex-start',
  self: 'auto',
  wrap: 'no-wrap'
}

export function Hidden({
  xsDown,
  xsUp,
  smDown,
  smUp,
  mdDown,
  mdUp,
  lgDown,
  lgUp,
  xlDown,
  xlUp,
  children
}) {
  function getClass() {
    switch (true) {
      case xsDown:
        return styles.hiddenxsDown
      case smDown:
        return styles.hiddensmDown
      case mdDown:
        return styles.hiddenmdDown
      case lgDown:
        return styles.hiddenlgDown
      case xlDown:
        return styles.hiddenxlDown
      case xsUp:
        return styles.hiddenxsUp
      case smUp:
        return styles.hiddensmUp
      case mdUp:
        return styles.hiddenmdUp
      case lgUp:
        return styles.hiddenlgUp
      case xlUp:
        return styles.hiddenxlUp
      default:
        return ''
    }
  }

  return (
    <div
      className={getClass()}
    >
      {children}
    </div>
  )
}

Hidden.propTypes = {
  xsDown: PropTypes.bool,
  xsUp: PropTypes.bool,
  smDown: PropTypes.bool,
  smUp: PropTypes.bool,
  mdDown: PropTypes.bool,
  mdUp: PropTypes.bool,
  lgDown: PropTypes.bool,
  lgUp: PropTypes.bool,
  xlDown: PropTypes.bool,
  xlUp: PropTypes.bool,
  children: PropTypes.node
}

export function Input({
  className,
  defaultValue,
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
      return <p className={styles.inputIcon}>!</p>
    }
    return (
      <img src={validationMark} className={styles.inputCheckMark} width={16} />
    )
  }
  return (
    <div className={[styles.inputContainer, className].join(' ')} style={style}>
      {type !== 'number' ? (
        <input
          type='text'
          id={id}
          className={[
            styles.input,
            error && touched ? styles.inputError : ''
          ].join(' ')}
          defaultValue={defaultValue}
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
          className={[styles.input, error && touched ? styles.error : ''].join(
            ' '
          )}
          onBlur={onBlur}
          onChange={onChange}
          value={value}
        />
      )}
      {touched ? <ValidationIcon /> : null}
      {error && touched ? (
        <p className={styles.inputErrorText}>{error}</p>
      ) : null}
    </div>
  )
}

Input.propTypes = {
  className: PropTypes.string,
  defaultValue: PropTypes.string,
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

export function Modal({
  children,
  className,
  closeColor,
  isOpen,
  onClose,
  style
}) {
  function getColor() {
    console.log(closeColor)
    if (closeColor === 'black') {
      return closeBlack
    } else if (closeColor === 'white') {
      return closeWhite
    }
  }
  return (
    <React.Fragment>
      {isOpen ? (
        <div className={[styles.modal, className].join(' ')} style={{ ...style }} onClick={(e) => e.stopPropagation()}>
          <img src={getColor()} className={styles.modalClose} onClick={onClose} />
          {children}
        </div>
      ) : null}
    </React.Fragment>
  )
}

Modal.propTypes = {
  className: PropTypes.string,
  closeColor: PropTypes.string,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  style: PropTypes.object
}

Modal.defaultProps = {
  closeColor: 'white',
  isOpen: false
}

export function Navbar({
  children,
  className,
  border,
  color,
  inContainer,
  containerWidth,
  style
}) {
  return (
    <div className={styles.navBar} style={{ backgroundColor: color, borderBottom: `1px solid ${border}`, ...style }}>
      <div className={[inContainer ? styles.navbarContainer : '', className].join(' ')} style={{ width: inContainer ? containerWidth : '100%' }}>
        {children}
      </div>
    </div>
  )
}

Navbar.propTypes = {
  border: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.string,
  inContainer: PropTypes.bool,
  containerWidth: PropTypes.number,
  style: PropTypes.object
}

Navbar.defaultProps = {
  inContainer: false,
  containerWidth: 1140
}

export function NestedButton({ className, onClick, size, style, text }) {
  function getBorder() {
    switch (size) {
      case 'large':
        return ''
      case 'medium':
        return styles.ovalButtonBorderMedium
      case 'small':
        return styles.ovalButtonBorderSmall
    }
  }
  function getContainer() {
    switch (size) {
      case 'large':
        return ''
      case 'medium':
        return styles.ovalButtonContainerMedium
      case 'small':
        return styles.ovalButtonContainerSmall
    }
  }
  function getOuter() {
    switch (size) {
      case 'large':
        return ''
      case 'medium':
        return styles.ovalButtonOuterMedium
      case 'small':
        return styles.ovalButtonOuterSmall
    }
  }
  return (
    <div
      className={[styles.ovalButtonOuter, getOuter(), className].join(' ')}
      onClick={onClick}
      style={style}
    >
      <button
        className={[
          styles.ovalButtonContainer,
          getContainer()
        ].join(' ')}
      >
        {text}
      </button>
      <div
        className={[
          styles.ovalButtonBorder,
          getBorder()
        ].join(' ')}
      />
    </div>
  )
}

NestedButton.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.string,
  style: PropTypes.object,
  text: PropTypes.string.isRequired
}

NestedButton.defaultProps = {
  size: 'medium'
}

export function Row({
  align,
  children,
  className,
  content,
  justify,
  lg,
  md,
  onClick,
  self,
  sm,
  style,
  wrap,
  xl,
  xs
}) {
  function getClass(size) {
    if (eval(size)) {
      return eval(`styles.${size}${eval(size)}`)
    }
  }

  return (
    <div
      className={[
        getClass('xs'),
        getClass('sm'),
        getClass('md'),
        getClass('lg'),
        getClass('xl'),
        className
      ].join(' ')}
      onClick={onClick}
      style={{
        alignItems: align,
        alignSelf: self,
        alignContent: content,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: wrap,
        justifyContent: justify,
        ...style
      }}
    >
      {children}
    </div>
  )
}

Row.propTypes = {
  align: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  content: PropTypes.string,
  justify: PropTypes.string,
  lg: PropTypes.number,
  md: PropTypes.number,
  onClick: PropTypes.func,
  self: PropTypes.string,
  sm: PropTypes.number,
  style: PropTypes.object,
  wrap: PropTypes.string,
  xl: PropTypes.number,
  xs: PropTypes.number
}

Row.defaultProps = {
  align: 'stretch',
  content: 'stretch',
  justify: 'flex-start',
  self: 'auto',
  wrap: 'no-wrap'
}

export function Text({
  children,
  className,
  color,
  fontStyle,
  onClick,
  size,
  style,
  weight
}) {
  function getSize() {
    switch (size) {
      case 'h1':
        return 72
      case 'h2':
        return 48
      case 'h3':
        return 36
      case 'h4':
        return 24
      case 'h5':
        return 21
      case 'h6':
        return 16
      case 'subtitle':
        return 12
      case 'body':
        return 10
      case 'caption':
        return 8
      default:
        return 10
    }
  }

  function getWeight() {
    switch (weight) {
      case 'bold':
        return 700
      case 'medium':
        return 500
      case 'normal':
        return 400
      case 'light':
        return 300
      default:
        return 400
    }
  }

  return (
    <p
      className={className}
      onClick={onClick}
      style={{
        color: color,
        fontSize: getSize(),
        fontStyle: fontStyle,
        fontWeight: getWeight(),
        margin: 0,
        ...style
      }}
    >
      {children}
    </p>
  )
}

Text.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.string,
  fontStyle: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.string,
  style: PropTypes.object,
  weight: PropTypes.string
}

Text.defaultProps = {
  color: '#000',
  fontStyle: 'normal',
  size: 'body',
  weight: 'normal'
}
