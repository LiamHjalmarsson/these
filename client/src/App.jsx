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
        className={"top-24"}
        position="top-center"
        limit={3}
      />
    </>
  )
}

export default App
