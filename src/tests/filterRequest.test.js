import {filterDataByLanguages,FavouriteLanguage,noRepos,filterToFavouriteLanguage} from "../components/filterRequest"
import mockJsonData from './mockdataJson'

describe('noRepos Function, returns boolean values checking if data passed is empty', () => {
  it('Returns true', () => {
    let data = {}
    expect(noRepos(data)).toBe(true)
  })
  it('Returns false', () => {
    expect(noRepos(mockJsonData)).toBe(false)
  })

})