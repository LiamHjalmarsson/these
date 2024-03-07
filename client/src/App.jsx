import AllRoutes from "./routers/AllRoutes"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <ToastContainer position='top-center' />
      <AllRoutes />
    </div>
  )
}

export default App
