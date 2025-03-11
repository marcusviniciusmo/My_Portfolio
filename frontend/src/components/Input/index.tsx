interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export function Input({ name, type, placeholder, value, onChange }: InputProps) {
  return (
    <>
      <h1>INPUT COMPONENT</h1>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
      />
    </>
  )
}