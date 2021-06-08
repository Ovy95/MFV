

  export function filterToFavouriteLanguage(arr1,name){
      var mf = 1;
      var m = 0;
      var item;
      for (var i=0; i<arr1.length; i++)
      {
              for (var j=i; j<arr1.length; j++)
              {
                      if (arr1[i] === arr1[j])
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
      return [name+"'s favourite is "+item]
  }


  export function filterDataByLanguages(data){
    let langarray = []
    data.map(function(element){
      if(`${element.language}`!= 'null')
       langarray.push(`${element.language}`)
       }
      )

     if (langarray.length == 0){
       return ["Couldn't determine favourite language as they're equal to null"]
     }
     else {
    return langarray
    }
  }

  export function FavouriteLanguage(data,name){

    if (noRepos(data) === true){
      return [name+ " has no repositories to check against"]
    }
    let filterdata = filterDataByLanguages(data)
    return filterToFavouriteLanguage(filterdata,name)
  }

  export function noRepos(data){
    return Object.keys(data).length === 0;
  }



