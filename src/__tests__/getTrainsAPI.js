import axios from 'axios'
import getTrainPositions from '../utils/getTrainPositions'

jest.mock('axios')

describe('getTrainPositions', () => {
  it('fetches successfully data from WMATA API', async () => {
    const response = {
      data: {
        TrainPositions: [
          {
            TrainId: '100',
            TrainNumber: '301',
            CarCount: 6,
            DirectionNum: 1,
            CircuitId: 1234,
            DestinationStationCode: 'A01',
            LineCode: 'RD',
            SecondsAtLocation: 0,
            ServiceType: 'Normal',
          },
          {
            TrainId: '200',
            TrainNumber: 'XY1',
            CarCount: 6,
            DirectionNum: 2,
            CircuitId: 4321,
            DestinationStationCode: null,
            LineCode: null,
            SecondsAtLocation: 25,
            ServiceType: 'Special',
          },
        ],
      },
    }

    axios.get.mockImplementationOnce(() => Promise.resolve(response))

    await expect(getTrainPositions()).resolves.toEqual(response)
  })
  it('fetches error data from an API', async () => {
    const errorMessage = 'Network Error'
    axios.get.mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage)),
    )
    await expect(getTrainPositions()).rejects.toThrow(errorMessage)
  })
})
