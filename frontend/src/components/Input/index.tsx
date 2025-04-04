import { useState } from "react"
import { InputProps } from "../../@types/input";
import { InputContainer, StyledInput, Label } from "./styles"

export function Input({ name, type, placeholder, value, onChange }: InputProps) {
  const [focused, setFocused] = useState<boolean>(false);

  return (
    <InputContainer>
      <StyledInput
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        required
      />
      <Label>{focused || value ? placeholder : placeholder + ' *'}</Label>
    </InputContainer>
  )
}