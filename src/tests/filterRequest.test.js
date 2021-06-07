import {filterDataByLanguages,FavouriteLanguage,noRepos,filterToFavouriteLanguage} from "../components/filterRequest"


describe('noRepos Function, returns boolean values checking empty data', () => {
 it('Returns false', () => {
   let data = {}
   expect(noRepos(data)).toBe(true)
 })

//  it('Returns true', () => {
//   let data = {}
//   expect(noRepos(data)).toBe(false)
// })
})