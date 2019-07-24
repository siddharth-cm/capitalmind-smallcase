import React, { useState, useEffect } from 'react'
import { Omnibar } from '@blueprintjs/select'
import {
  Classes,
  Hotkeys,
  Hotkey,
  H5,
  Switch,
  MenuItem,
  KeyCombo,
  Button,
} from '@blueprintjs/core'
import { stockSelectProps } from './stocks'
import jwt from 'jsonwebtoken'
import './index.css'

const StockOminibar = Omnibar.ofType()

let sc = new window.scDK({
  gateway: 'capitalmind',
  userData:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJndWVzdCI6dHJ1ZSwiaWF0IjoxNTYzMzQ2ODc1fQ.J9jjVd-zzfd27MpiQ_YSLqU4VNQl1y2Q_z9cCfI7urc',
})

function OminibarSelector() {
  const [state, setState] = useState({
    allowCreate: false,
    isOpen: false,
    resetOnSelect: true,
  })

  const [selectedStocks, setSelectedStocks] = useState([])

  const handleResetChange = () => {
    setState({ ...state, resetOnSelect: !state.resetOnSelect })
  }

  const handleAllowCreateChange = () => {
    setState({ ...state, allowCreate: !state.allowCreate })
  }

  const handleToggle = () => {
    setState({ ...state, isOpen: state.isOpen })
  }

  const handleClose = () => {
    setState({ ...state, isOpen: false })
  }

  const handleClick = () => {
    setState({ ...state, isOpen: true })
  }

  const handleItemSelect = (item, event) => {
    const addedStock = [{ ...item }]
    setSelectedStocks([...selectedStocks, ...addedStock])
    setState({
      ...state,
      isOpen: false,
    })
  }

  const handleSubmit = () => {
    sc.connect()
      .then(res => {
        sc.init({ userData: res.smallcaseAuthToken })
          .then(res => console.log(res))
          .catch(err => console.log(err))

        console.log(res.smallcaseAuthToken)

        jwt.verify(
          res.smallcaseAuthToken,
          'capitalmind_secret_23990938',
          { complete: true },
          (err, decoded) => {
            if (err) {
              console.log(err)
            } else console.log(decoded)
          }
        )

        return res
      })
      .then(res => {
        sc.triggerSecuritiesOrder({
          type: 'securities',
          securities: selectedStocks.map(stock => ({
            ticker: stock.SYMBOL,
            shares: 3,
            type: 'BUY',
          })),
          batchTag: 'abc-xyz',
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  // function renderHotKeys() {
  //   return (
  //     <Hotkeys>
  //       <Hotkey
  //         global={true}
  //         combo="shift + o"
  //         label="Show Omnibar"
  //         onKeyDown={handleToggle}
  //       />
  //     </Hotkeys>
  //   )
  // }

  return (
    <>
      <span>
        <Button text="Click to show Omnibar" onClick={handleClick} />
        {' or press '}
        <KeyCombo combo="shift + o" />
      </span>
      <StockOminibar
        {...state}
        {...stockSelectProps}
        noResults={<MenuItem disabled={true} text="No results." />}
        onItemSelect={handleItemSelect}
        onClose={handleClose}
      />
      <Button onClick={handleSubmit}>Buy</Button>
    </>
  )

  // function renderOptions() {
  //   return (
  //     <>
  //       <H5>Props</H5>
  //       <Switch
  //         label="Reset on select"
  //         checked={state.resetOnSelect}
  //         onChange={handleResetChange}
  //       />
  //       <Switch
  //         label="Allow creating new films"
  //         checked={state.allowCreate}
  //         onChange={handleAllowCreateChange}
  //       />
  //     </>
  //   )
  // }
}

export default OminibarSelector
