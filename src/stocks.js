import { MenuItem } from '@blueprintjs/core'
import React from 'react'
import stocks from './data'

export const renderStock = (stock, { handleClick, modifiers, query }) => {
  if (!modifiers.matchesPredicate) {
    return null
  }
  return (
    <MenuItem
      active={modifiers.active}
      disabled={modifiers.disabled}
      label={stock['ISIN NUMBER']}
      key={stock['ISIN NUMBER']}
      onClick={handleClick}
      text={`${stock['NAME OF COMPANY']} ${stock.SYMBOL}`}
    />
  )
}

export const filterStock = (query, stock, _index, exactMatch) => {
  const normalizedTitle = stock['NAME OF COMPANY'].toLowerCase()
  const normalizedQuery = query.toLowerCase()

  if (exactMatch) {
    return normalizedTitle === normalizedQuery
  } else {
    return (
      `${stock.SYMBOL}. ${normalizedTitle} ${stock['ISIN NUMBER']}`.indexOf(
        normalizedQuery
      ) >= 0
    )
  }
}

export const stockSelectProps = {
  itemPredicate: filterStock,
  itemRenderer: renderStock,
  items: stocks,
}
