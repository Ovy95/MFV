
  export function filterToFavouriteLanguage(arr1){
      var mf = 1;
      var m = 0;
      var item;
      for (var i=0; i<arr1.length; i++)
      {
              for (var j=i; j<arr1.length; j++)
              {
                      if (arr1[i] == arr1[j])
                       m++;
                      if (mf<m)
                      {
                        mf=m; 
                        item = arr1[i];
                      }
              }
              m=0;
      }
      console.log(item+" ( " +mf +" times ) ")
      return [item]
  }


  export function filterDataByLanguages(data){
    let langarray = []
    // let langarray = []
    data.map(function(element){
      if(`${element.language}`!= 'null')
       langarray.push(`${element.language}`)
       }
      )
    return langarray

  }

  export function FavouriteLanguage(data){

    if (noRepos(data) === true){
      return ["User has no Repos"]
    }
    let filterdata = filterDataByLanguages(data)
    return filterToFavouriteLanguage(filterdata)
  }

  function noRepos(data){
    return Object.keys(data).length === 0;
  }


