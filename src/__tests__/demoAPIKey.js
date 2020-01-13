import { demoKeyForTest } from '../../demoKey.json'
import { demoAPIKey } from '../constants/api'
describe('Demo API Key', () => {
  test('Is still being used by WMATA API', () => {
    expect(demoKeyForTest).toEqual(demoAPIKey)
    /**
     * If fails, get updated demo api key from
     * https://developer.wmata.com/Products
     * and replace current demoAPIKey in src/constants/api.js
     */
  })
})
