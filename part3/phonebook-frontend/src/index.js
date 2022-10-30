import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(<App />)

export { default as Notification } from './components/Notification'
export { default as Filter } from './components/Filter'
export { default as PersonForm } from './components/PersonForm'
export { default as Persons } from './components/Persons'
export { default as personServices } from './services/persons'