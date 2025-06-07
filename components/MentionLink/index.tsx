import React from 'react';
import { forwardRef } from 'react';
import classNames from '../_util/classNames';
import type { MentionLinkProps } from './interface';
import Link from '../Link';

interface ChildComponentRef {
  getDOMNode(): HTMLAnchorElement | null;
}

const MentionLink = forwardRef<ChildComponentRef, MentionLinkProps>(
  (props, ref): React.ReactElement => {
    const { href, children, className, ellipsis, ...others } = props;

    const spanCls = classNames(`rs-link-container ${className || ''}`, {
      'rs-hidden': ellipsis,
    });

    return (
      <span className={spanCls} {...others}>
        <Link ref={ref} href={href}>
          {children || href}
        </Link>
      </span>
    );
  }
);

MentionLink.displayName = 'MentionLink';

export default MentionLink;
