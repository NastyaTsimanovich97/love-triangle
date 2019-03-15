/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */

module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  var len=preferences.length;
  var count=0;
  for(var i=0;i<len;i++){
    var k=preferences[i]-1;
    if(k==i) continue;
      var p=preferences[k]-1;
      if(k==p)continue;
        var m=preferences[p]-1;
        if(m==p)continue;
          if(m==i){
            count++;
          };
}
return count/3;
};
