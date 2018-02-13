import { helper } from '@ember/component/helper';

export function call([scope,fn]/*, hash*/) {
  let args = arguments[0].slice(1);
  let res = fn.apply(scope, args);
  return res;
}

export default helper(call);
