import React from 'react';
import { IconProps } from '../interface';
import omit from '../../_util/omit';

const IconCopy = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <svg
    ref={ref}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    stroke="currentColor"
    strokeWidth="4"
    className="rs-icon rs-icon-copy"
    {...omit(props, ['className'])}
  >
    <path
      d="M20 6H38C39.1046 6 40 6.89543 40 8V30M8 16V40C8 41.1046 8.89095 42 9.99552 42H30.0026C31.1072 42 32 41.1131 32 40.0085V15.9968C32 14.8922 31.1046 14 30 14H10C8.89543 14 8 14.8954 8 16Z"
      strokeLinecap="butt"
    ></path>
  </svg>
));

IconCopy.displayName = 'IconCopy';

export default IconCopy;
