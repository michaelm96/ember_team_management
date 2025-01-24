import Component from '@glimmer/component';

export default class SvgIconComponent extends Component {
  get svgPath() {
    return `/assets/${this.args.name}.svg`; // Assuming the SVG file name is passed as an argument
  }
}
