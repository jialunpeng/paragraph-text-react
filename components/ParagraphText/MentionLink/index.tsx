/* eslint-disable react/no-unknown-property */
'use client';

import React, { useImperativeHandle, useRef } from 'react';

import './index.less';
import { MentionLinkProps } from '../interface';
import classNames from '../../_util/classNames';

interface ChildComponentRef {
  getDOMNode(): HTMLSpanElement | null;
}

const MentionLink = React.forwardRef<ChildComponentRef, MentionLinkProps>(
  (props, ref) => {
    const {
      href,
      children,
      wrapperClassName,
      wrapperStyle,
      ellipsis,
      ...others
    } = props;

    const spanRef = useRef(null);

    useImperativeHandle(ref, () => ({
      getDOMNode: () => spanRef.current,
    }));

    const spanCls = classNames(
      `mention-link-container ${wrapperClassName || ''}`,
      {
        truncate: ellipsis,
      }
    );

    const aCls = classNames({
      truncate: ellipsis,
    });

    return (
      <span ref={spanRef} className={spanCls} style={wrapperStyle}>
        <span
          className="mention-link-wrapper link-text-color"
          auto-url-line="0"
          auto-url-start="0"
          auto-url-length={href?.length}
          auto-url={href}
          data-leaf="true"
        >
          <a
            className={aCls}
            href={href}
            data-href={href}
            rel="noopener noreferrer"
            target="_blank"
            data-link-node="true"
            {...others}
          >
            <span data-string="true">{children || href}</span>
          </a>
        </span>
      </span>
    );
  }
);

MentionLink.displayName = 'MentionLink';

export default MentionLink;
