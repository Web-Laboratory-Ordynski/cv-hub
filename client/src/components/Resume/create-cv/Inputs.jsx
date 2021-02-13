import TextField from '@material-ui/core/TextField'
import InputMask from 'react-input-mask'

export const TextInput = ({ onChange, value, label, isRequired }) => {
  return (
    <TextField
      required={isRequired}
      label={label}
      id="standard-basic"
      value={value ? value : ''}
      onChange={(e) => onChange(e.target.value)}
    />
  )
}

export const PhoneInput = ({ onChange, value, label, isRequired }) => {
  return (
    <InputMask
      mask="+380-99-99-99-999"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      {(inputProps) => (
        <TextField
          required={isRequired}
          label={label}
          id="standard-basic"
          {...inputProps}
          type="tel"
          disableUnderline
        />
      )}
    </InputMask>
  )
}