import AllRoutes from "./routers/AllRoutes"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <AllRoutes />
      <ToastContainer
        pauseOnHover={false}
        closeOnClick
        autoClose={5000}
        className={"absolute top-24"}
      />
    </>
  )
}

export default App
