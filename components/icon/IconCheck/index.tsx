import React from 'react';
import { IconProps } from '../interface';
import omit from '../../_util/omit';

const IconCheck = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <svg
    ref={ref}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    stroke="currentColor"
    strokeWidth="4"
    className="icon icon-check"
    {...omit(props, ['className'])}
  >
    <path
      d="M41.6776 11.0503L19.0502 33.6777L6.32227 20.9498"
      strokeLinecap="butt"
    ></path>
  </svg>
));

IconCheck.displayName = 'IconCheck';

export default IconCheck;
