/*function insertionSortReverse(arr) {
    for(var i = arr.length - 2; i >=0; i--) { //start with 2 at the end to compare the second to last one the first run
        var val = arr[i];
        var j;
        for(j = i; ((j < arr.length) && (arr[j+1] < val)); j++){
          arr[j] = arr[j+1];
        }
        arr[j] = val;
      }
    return arr;
}*/
 //The first function works but it is from stackoverflow
 //https://stackoverflow.com/questions/54566639/insertion-sort-from-right-to-left-with-javascript

function insertionSortReverse(arr) {
    for (var i = 1; i < arr.length; i++) {
      var val = arr[i];
      var j = i - 1;
  
      while (j >= 0 && arr[j] < val) {
        arr[j + 1] = arr[j];
        j--;
      }
  
      arr[j + 1] = val;
    }
  }
  //trying to work on my own function here, throwing counterexample [];