import {filterDataByLanguages,FavouriteLanguage,noRepos,filterToFavouriteLanguage} from "../components/filterRequest"
import mockJsonData from './mockdataJson'

describe('noRepos Function: Returns boolean values checking if data passed is empty', () => {
  it('Returns true', () => {
    let data = {}
    expect(noRepos(data)).toBe(true)
  })
  it('Returns false', () => {
    expect(noRepos(mockJsonData)).toBe(false)
  })

})


describe('filterDataByLanguages Function: Filters the data checks for `null` values, If it isnt == null, then pushs languages into a new array', () => {
  it('Returns the data filtered out from null values', () => {
    expect(filterDataByLanguages(mockJsonData)).toStrictEqual(["Ruby", "GoLang", "JavaScript", "JavaScript", "JavaScript", "Ruby"])
  })
  it('checks length of the data as One null value got removed from the mockdata', () => {
    let sortedData = filterDataByLanguages(mockJsonData)
    expect(sortedData.length).toBe(6)
  })
})