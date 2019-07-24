import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import OminibarSelector from './ominibar'
import 'antd/dist/antd.css'

const root = document.getElementById('root')

ReactDOM.render(<OminibarSelector />, root, () => {
  console.log('DOM Mounted')
})
