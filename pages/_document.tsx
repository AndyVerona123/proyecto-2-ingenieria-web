import { Html, Head, Main, NextScript } from 'next/document'
import { ToastContainer } from 'react-toastify'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <script src="https://code.jquery.com/jquery-3.2.1.js"></script>
      <script src="resources\js\carrousel.js"></script>
      <body>
        <Main />
        <ToastContainer />
        <NextScript />
      </body>
    </Html>
  )
}
