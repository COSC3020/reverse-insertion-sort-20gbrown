function insertionSortReverse(arr) {
  for (var i = arr.length - 2; i >=0; i--) {
      var val = arr[i];
      var j;
      j = i;
      while (j < arr.length && arr[j + 1] < val) {
        arr[j] = arr[j + 1];
        j++;
      }
  
      arr[j]= val;
    }
    return arr;
  }
  
  //referenced: //https://stackoverflow.com/questions/54566639/insertion-sort-from-right-to-left-with-javascript