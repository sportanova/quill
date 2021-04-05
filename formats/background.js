import Parchment from 'parchment';
import { ColorAttributor } from './color';

let BackgroundClass = new Parchment.Attributor.Class('background', 'ql-bg', {
  scope: Parchment.Scope.BLOCK
});
let BackgroundStyle = new ColorAttributor('background', 'background-color', {
  scope: Parchment.Scope.BLOCK
});

export { BackgroundClass, BackgroundStyle };
