interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export function Textarea({ name, placeholder, value, onChange }: TextareaProps) {
  return (
    <>
      <h1>TEXTAREA COMPONENT</h1>
      <textarea
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
      />
    </>
  )
}