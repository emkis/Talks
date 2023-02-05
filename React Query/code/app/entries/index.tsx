import * as React from 'react'
import ReactDOM from 'react-dom/client'
import { Root } from './Root'
import './styles.css'

const rootElement = document.getElementById('root')!
const root = ReactDOM.createRoot(rootElement)

root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
)
