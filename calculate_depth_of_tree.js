function depth(node){
  if(node.childElementCount == 0) {
    return 1;
  } else {
    var max = 1, len = node.childElementCount, one;
    for(var i = 0; i<len; i++) {
      one = depth(node.children[i]);
      if(one > max) max = one;
    }
  return max+1;
  }
}
