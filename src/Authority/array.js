/**
 * 权限管理数组
 * @param key
 * @returns {boolean}
 */
export function checkArray(key) {
//  定义一个权限数组(后端传来的)(待修改)
  let arr = ['1','3','5','7'];
  // console.log(key);

  let index = arr.indexOf(key);
  // console.log(index);
  if(index>-1){
    return true;
  }else {
    return false;
  }
}