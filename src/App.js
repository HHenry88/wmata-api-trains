import React, { useEffect, useMemo, useState } from 'react'

import './App.css'
import getTrainPositions from './utils/getTrainPositions.js'
import Table from './components/Table'
import {
  NumberRangeColumnFilter,
  SelectColumnFilter,
  DefaultColumnFilter,
} from './utils/filters'

import logo from './images/WMATAlogo.png'

const App = () => {
  const [trainData, setTrainData] = useState([])

  useEffect(() => {
    // Initiate get trains on app load, and then every 10 seconds afterwards.
    const fetchTrainPositions = async () => {
      const trainPositions = await getTrainPositions()

      setTrainData(trainPositions.data.TrainPositions)
    }

    fetchTrainPositions()

    // Auto update Train positions. WMATA data is updated every 7-10 seconds.

    setInterval(() => {
      fetchTrainPositions(true)
    }, 10000)
  }, [])

  const columns = useMemo(
    () => [
      {
        Header: 'Train ID',
        accessor: 'TrainId',
        Filter: DefaultColumnFilter,
      },
      {
        Header: 'Train Number',
        accessor: 'TrainNumber',
        Filter: DefaultColumnFilter,
      },
      {
        Header: 'Car Count',
        accessor: 'CarCount',
        Filter: NumberRangeColumnFilter,
        filter: 'between',
      },
      {
        Header: 'Service Type',
        accessor: 'ServiceType',
        Filter: SelectColumnFilter,
        filter: 'includes',
      },
      {
        Header: 'Line Color',
        accessor: 'LineCode',
        Filter: SelectColumnFilter,
        filter: 'includes',
      },
    ],
    [],
  )

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="WMATA logo" className="img-wmatalogo" />
        <h1 className="header-title">WMATA Trains</h1>
      </header>
      <Table columns={columns} data={trainData} />
    </div>
  )
}

export default App
