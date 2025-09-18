import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import 'modern-normalize'
import '@fontsource-variable/manrope'
// import '@fontsource/inter/variable.css'
import "@fontsource/inter"
import './index.css'
import { Provider } from 'react-redux'
import {store, persistor} from './redux/store'
import App from '../src/components/App/App'
import { PersistGate } from 'redux-persist/integration/react'
import Loader from "./components/Loader/Loader"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={<Loader/>} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate> 
    </Provider>
  </StrictMode>,
)