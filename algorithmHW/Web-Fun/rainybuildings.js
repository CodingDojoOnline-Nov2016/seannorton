//Rainy Buildings Algorithm
//find the rain that collects on top of buildings...

var buildings = [3,4,5,4,7,1,6,4,3,6,7]
var buildings2 = [1,2,3,2,2,2,5]

var startidx = 0;
var leftbucket = leftbucketidx = rightbucket = rightbucketidx = dipindex = 0;
function getBucket(arr, startidx) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i+1] < arr[i]) {//if there's a dip following a building
      leftbucket = arr[i];//set the left-side bucket wall
      leftbucketidx = i;
      dipindex = i+1;
      for (var j = dipindex; j < arr.length; j++) {//to find the right-side bucket wall
        if (arr[j]>arr[dipindex] && arr[j] >= leftbucket) {//if this next search finds us a building taller than the 'dipped' building...
          rightbucket = arr[j];
          rightbucketidx = j;
          break
        }
      }
    }
  }
  console.log(leftbucket);
  console.log(leftbucketidx);
  console.log(rightbucket);
  console.log(rightbucketidx);
}

getBucket(buildings, startidx)
