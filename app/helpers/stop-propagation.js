import { helper } from '@ember/component/helper';

export function stopPropagation([event]) {
  if (event) {
    event.stopPropagation();
  }
  return true; // Return true to indicate the event should not propagate
}

export default helper(stopPropagation);
