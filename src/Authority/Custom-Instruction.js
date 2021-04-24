import Vue from "vue";
import {checkArray}  from './array';

Vue.directive('display-key',{
    inserted(el,binding){
      //如果组件或者元素上的自定义值,判断是否在权限数组中
      let dispalyKey = binding.value;
      /**
       * 这是将number类型转化为string类型,可以根据实际情况进行修改
       */
      if(typeof dispalyKey === 'number'){
        dispalyKey =  dispalyKey.toString();
      }
      if(dispalyKey){
        let hasPermission = checkArray(dispalyKey);

        if(!hasPermission){
          el.parentNode && el.parentNode.removeChild(el);
        }
      }else{
        throw new  Error(`need key !Like v-display-key ="''dispalyKey"`);
      }
    }
});

export default Vue;