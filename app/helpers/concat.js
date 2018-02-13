import { helper } from '@ember/component/helper';

export function concat(params/*, hash*/) {
  var outStr = '';
  for(var arg in params){
    if(typeof params[arg]!='object'){
      outStr += arguments[arg];
    }
  }
  return outStr;
}

export default helper(concat);
