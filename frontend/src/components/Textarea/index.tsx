import { useState } from "react"
import { TextareaProps } from "../../@types/textarea";
import { TextareaContainer, Label, StyledTextarea } from "./styles"

export function Textarea({ name, placeholder, value, onChange }: TextareaProps) {
  const [focused, setFocused] = useState<boolean>(false);

  return (
    <TextareaContainer>
      <StyledTextarea
        name={name}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        required
      />

      <Label>{focused || value ? placeholder : placeholder + ' *'}</Label>
    </TextareaContainer>
  )
}