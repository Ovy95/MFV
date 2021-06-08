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

describe('filterToFavouriteLanguage Function: takes two values name and new sorted Array returns most common factor in the array value plus the name', () => {
  it('Returns the correct value ready to be value printed out to the main page', () => {
    let sortedData = filterDataByLanguages(mockJsonData)
    expect(filterToFavouriteLanguage(sortedData,"Jack")).toStrictEqual(["Jack's favourite is JavaScript"])
  })
  
})

describe('FavouriteLanguage Function: Used to run on the main page this takes the data and the Username, which is then filtered using the other methods ready to return the correct result back to user ', () => {
  it('Returns the correct value ready to be value printed out to the main page', () => {
    expect(FavouriteLanguage(mockJsonData,"Jack")).toStrictEqual(["Jack's favourite is JavaScript"])
  })

  it('Checks data first and returns No repositories when calling Api', () => {
    expect(FavouriteLanguage({},"Jack")).toStrictEqual(["Jack has no repositories to check against"])
  })
  
})




