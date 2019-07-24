import React, { useState } from 'react'
import { Button, MenuItem } from '@blueprintjs/core'
import { Select } from '@blueprintjs/select'
// import stocks from './data'
import jwt from 'jsonwebtoken'

const StockSelect = Select

const renderStock = (item, { handleClick, modifiers }) => {
  if (!modifiers.filtered) {
    return null
  }
  return (
    <MenuItem
      active={modifiers.active}
      key={item.SYMBOL}
      label={item['NAME OF COMPANY']}
      onClick={handleClick}
      text={item['NAME OF COMPANY']}
    />
  )
}

const stocks = [
  {
    SYMBOL: '20MICRONS',
    'NAME OF COMPANY': '20 Microns Limited',
    SERIES: 'EQ',
    'DATE OF LISTING': '06-Oct-08',
    'PAID UP VALUE': 5,
    'MARKET LOT': 1,
    'ISIN NUMBER': 'INE144J01027',
    'FACE VALUE': 5,
  },
  {
    SYMBOL: '21STCENMGM',
    'NAME OF COMPANY': '21st Century Management Services Limited',
    SERIES: 'EQ',
    'DATE OF LISTING': '03-May-95',
    'PAID UP VALUE': 10,
    'MARKET LOT': 1,
    'ISIN NUMBER': 'INE253B01015',
    'FACE VALUE': 10,
  },
  {
    SYMBOL: '3IINFOTECH',
    'NAME OF COMPANY': '3i Infotech Limited',
    SERIES: 'EQ',
    'DATE OF LISTING': '22-Apr-05',
    'PAID UP VALUE': 10,
    'MARKET LOT': 1,
    'ISIN NUMBER': 'INE748C01020',
    'FACE VALUE': 10,
  },
  {
    SYMBOL: '3MINDIA',
    'NAME OF COMPANY': '3M India Limited',
    SERIES: 'EQ',
    'DATE OF LISTING': '13-Aug-04',
    'PAID UP VALUE': 10,
    'MARKET LOT': 1,
    'ISIN NUMBER': 'INE470A01017',
    'FACE VALUE': 10,
  },
  {
    SYMBOL: '3PLAND',
    'NAME OF COMPANY': '3P Land Holdings Limited',
    SERIES: 'EQ',
    'DATE OF LISTING': '19-Jul-95',
    'PAID UP VALUE': 2,
    'MARKET LOT': 1,
    'ISIN NUMBER': 'INE105C01023',
    'FACE VALUE': 2,
  },
  {
    SYMBOL: '5PAISA',
    'NAME OF COMPANY': '5Paisa Capital Limited',
    SERIES: 'EQ',
    'DATE OF LISTING': '16-Nov-17',
    'PAID UP VALUE': 10,
    'MARKET LOT': 1,
    'ISIN NUMBER': 'INE618L01018',
    'FACE VALUE': 10,
  },
  {
    SYMBOL: '63MOONS',
    'NAME OF COMPANY': '63 moons technologies limited',
    SERIES: 'EQ',
    'DATE OF LISTING': '20-Jun-05',
    'PAID UP VALUE': 2,
    'MARKET LOT': 1,
    'ISIN NUMBER': 'INE111B01023',
    'FACE VALUE': 2,
  },
  {
    SYMBOL: '8KMILES',
    'NAME OF COMPANY': '8K Miles Software Services Limited',
    SERIES: 'EQ',
    'DATE OF LISTING': '29-Jan-14',
    'PAID UP VALUE': 5,
    'MARKET LOT': 1,
    'ISIN NUMBER': 'INE650K01021',
    'FACE VALUE': 5,
  },
  {
    SYMBOL: 'A2ZINFRA',
    'NAME OF COMPANY': 'A2Z Infra Engineering Limited',
    SERIES: 'EQ',
    'DATE OF LISTING': '23-Dec-10',
    'PAID UP VALUE': 10,
    'MARKET LOT': 1,
    'ISIN NUMBER': 'INE619I01012',
    'FACE VALUE': 10,
  },
  {
    SYMBOL: 'AARTIDRUGS',
    'NAME OF COMPANY': 'Aarti Drugs Limited',
    SERIES: 'EQ',
    'DATE OF LISTING': '19-Sep-03',
    'PAID UP VALUE': 10,
    'MARKET LOT': 1,
    'ISIN NUMBER': 'INE767A01016',
    'FACE VALUE': 10,
  },
  {
    SYMBOL: 'AARTIIND',
    'NAME OF COMPANY': 'Aarti Industries Limited',
    SERIES: 'EQ',
    'DATE OF LISTING': '08-Feb-95',
    'PAID UP VALUE': 5,
    'MARKET LOT': 1,
    'ISIN NUMBER': 'INE769A01020',
    'FACE VALUE': 5,
  },
]

// function App() {
//   React.useEffect(() => {
//     const sc = new window.scDK({
//       gateway: 'capitalmind',
//       userData:
//         'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJndWVzdCI6dHJ1ZSwiaWF0IjoxNTYzMzQ2ODc1fQ.J9jjVd-zzfd27MpiQ_YSLqU4VNQl1y2Q_z9cCfI7urc',
//     })

//     sc.connect()
//       .then(res => {
//         sc.init({ userData: res.smallcaseAuthToken })
//           .then(res => console.log(res))
//           .catch(err => console.log(err))

//         console.log(res.smallcaseAuthToken)

//         jwt.verify(
//           res.smallcaseAuthToken,
//           'capitalmind_secret_23990938',
//           { complete: true },
//           (err, decoded) => {
//             if (err) {
//               console.log(err)
//             } else console.log(decoded)
//           }
//         )

//         return res
//       })
//       .then(res => {
//         sc.triggerSecuritiesOrder({
//           type: 'securities',
//           securities: [
//             {
//               ticker: 'RELIANCE',
//               shares: 5,
//               type: 'BUY',
//             },
//             {
//               ticker: 'ICICIBANK',
//               shares: 2,
//               type: 'BUY',
//             },
//           ],
//           batchTag: 'abc-xyz',
//         })
//       })
//       .catch(err => {
//         console.log(err)
//       })
//   }, [])
//   return <h1>Welcome to capitalmind smallcase app</h1>
// }

function App() {
  // return <StockSelect items={stocks} />
  const [state, setState] = useState({
    selectedStocks: [],
  })
  const handleItemSelect = (item, event) => {
    const newItem = [{ ...item }]
    setState([...state.selectedStocks, ...newItem])
  }
  return (
    <StockSelect
      items={stocks}
      itemRenderer={renderStock}
      onItemSelect={handleItemSelect}
    >
      <Button text="Select stocks" rightIcon="double-caret-vertical" />
    </StockSelect>
  )
}

export default App
