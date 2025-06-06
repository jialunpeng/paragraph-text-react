import React, { AnchorHTMLAttributes } from 'react';
import { forwardRef, useImperativeHandle, useRef } from 'react';
import classNames from '../_util/classNames';

interface ChildComponentRef {
  getDOMNode(): HTMLAnchorElement | null;
}

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement>;

const Link = forwardRef<ChildComponentRef, LinkProps>(
  (props, ref): React.ReactElement => {
    const { href, children, className, ...others } = props;

    const aRef = useRef<HTMLAnchorElement>(null);

    useImperativeHandle(ref, () => ({
      getDOMNode: () => aRef.current,
    }));

    const cs = classNames(`rs-link ${className || ''}`);

    return (
      <a
        ref={aRef}
        href={href}
        data-href={href}
        rel="noopener noreferrer"
        target="_blank"
        data-link-node="true"
        className={cs}
        {...others}
      >
        {children || href}
      </a>
    );
  }
);

Link.displayName = 'Link';

export default Link;
