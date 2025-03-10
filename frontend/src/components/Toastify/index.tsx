import { useContext } from "react"
import { ToastContainer } from "react-toastify"
import { ThemeContext } from "../../context/ThemeContext"

export function Toastify() {
  const { theme } = useContext(ThemeContext);

  return (
    <ToastContainer
      position="top-center"
      autoClose={3000}
      hideProgressBar={true}
      newestOnTop={false}
      rtl={false}
      closeOnClick
      theme={theme.name.toLowerCase()}
    />
  )
}