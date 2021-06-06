
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

    return data.map(function(element){
       return `${element.language}`
      }


    )
    console.log(data)
  }
