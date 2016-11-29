//rainy buildings take 1

var buildings = [3,4,5,4,7,1,6,4,3,6,7]

var startidx = 0;
var found = false;
var leftbucket = leftbucketidx = rightbucket = rightbucketidx = dipindex = buildingsum = rainsum = undefined;
function getBucket(arr, startidx) {
  for (var i = startidx; i < arr.length; i++) {
      if (arr[i+1]<arr[i]) {
        leftbucket = arr[i];
        leftbucketidx = i;
        console.log("leftbucket", leftbucket, "leftbucket index", leftbucketidx)
        }
      if ((i > leftbucketidx) && (found = false)) {
        buildingsum += arr[i]
        console.log("buildingsum", buildingsum, "index", i)
      }
      else if ((arr[i] >= leftbucket) && (i > leftbucketidx)) {
        rightbucket = arr[i];
        rightbucketidx = i;
        console.log("rightbucket", rightbucket,"rightbucketidx", rightbucketidx)
      }
    }
    if (rightbucket>leftbucket) {
      rainsum = (rightbucketidx - leftbucketidx)*leftbucket - buildingsum
    }
    if (leftbucket>rightbucket) {
      rainsum = (rightbucketidx-leftbucketidx*rightbucket - buildingsum)
    }
    return buildingsum
}

console.log(getBucket(buildings,0))
