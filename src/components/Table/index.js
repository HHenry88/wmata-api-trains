import React from 'react'
import { useTable, useSortBy, useFilters } from 'react-table'

import { Styles, bgColors } from './TableStyles'

const Table = ({ data, columns }) => {
  const { getTableBodyProps, headerGroups, rows, prepareRow } = useTable(
    {
      columns,
      data,
    },
    useFilters, // allows the use of Filter property in column
    useSortBy, // allows the use of getSortByToggleProps
  )

  return (
    <Styles>
      <table {...getTableBodyProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, index) => (
                <th key={index}>
                  <a
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    className={
                      column.isSorted
                        ? column.isSortedDesc
                          ? 'sort-desc'
                          : 'sort-asc'
                        : ''
                    }
                  >
                    <u>{column.render('Header')}</u>
                  </a>
                  <div
                    className="div-filter"
                    onClick={() => console.log(column)}
                  >
                    {column.render('Filter')}
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()} data-testid="tbody-trains-positions">
          {rows.map(row => {
            prepareRow(row)

            // getTrProps doesn't work with useTable, so a workaround to get custom styled rows
            const rowBackground = {
              background: bgColors[row.values.LineCode],
            }
            return (
              <tr {...row.getRowProps()} style={rowBackground}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </Styles>
  )
}

export default Table
