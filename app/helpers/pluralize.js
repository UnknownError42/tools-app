import { helper } from '@ember/component/helper';

export function myPluralize(params, options) {
  let [count, zero, one, other] = params;
  let word=null;
  if(count==0){
    word=zero;
  }else if (count > 1) {
    word = count +" "+other;
  }else{
    word = count +" "+one;
  }

  return word;
}

export default helper(myPluralize);
