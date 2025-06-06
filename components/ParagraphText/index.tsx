import React from 'react';
import {
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { useMeasure } from 'react-use';
import '@arco-design/web-react/es/Tooltip/style/css';
import Tooltip from '@arco-design/web-react/es/Tooltip';
import type {
  LinkTextProps,
  ParagraphTextProps,
  SpanTextProps,
} from './interface';
import { isLink, isString } from '../_util/is';
import copy from '../_util/clipboard';
import { debounce } from '../_util/debounce';
import classNames from '../_util/classNames';
import { IconCheck, IconCopy } from '../icons';
import Link from '../Link';

const ParagraphText = forwardRef<HTMLDivElement, ParagraphTextProps>(
  (props, forwardedRef) => {
    const {
      children,
      ellipsis = true,
      lineClamp = 1,
      copyable = false,
      className,
      style,
      position = 'tl',
      isToolTip = true,
      rich,
      type: propsType = 'text',
      intelligentRecognition = true,
      ...others
    } = props;

    const text = useMemo(() => {
      if (propsType === 'text') {
        return (props as SpanTextProps)?.text;
      }
      return undefined;
    }, [propsType, props]);

    const propsHref = useMemo(() => {
      if (propsType === 'link') {
        return (props as LinkTextProps)?.href;
      }
      return undefined;
    }, [propsType, props]);

    const type = useMemo(() => {
      if (intelligentRecognition) {
        if (propsType === 'text') {
          if (isLink(text)) {
            return 'link';
          }
          if (isLink(children)) {
            return 'link';
          }
          return propsType;
        }
        return propsType;
      }
      return propsType;
    }, [children, intelligentRecognition, propsType, text]);

    const href = useMemo(() => {
      if (intelligentRecognition) {
        if (propsType === 'link') {
          return propsHref;
        }
        if (propsType === 'text' && type === 'link') {
          if (isString(text)) {
            return text;
          }
          if (isString(children)) {
            return children;
          }
          return propsHref;
        }
        return propsHref;
      }
      return propsHref;
    }, [children, intelligentRecognition, propsHref, propsType, text, type]);

    const timerRef = useRef<number | undefined>(undefined);
    const [measureRef, { width, height }] = useMeasure();
    const textRef = useRef<HTMLElement>(null);

    const [isTextTip, $isTextTip] = useState<boolean>(false);
    const [isCopy, $isCopy] = useState<boolean>(false);

    const handleWidth = useCallback(
      (scrollWidth: number, clientWidth: number) => {
        $isTextTip(clientWidth < scrollWidth);
      },
      []
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const debouncedWidth = useCallback(debounce(handleWidth, 600), [
      handleWidth,
    ]);

    const handleHeight = useCallback(
      (scrollHeight: number, clientHeight: number) => {
        $isTextTip(clientHeight < scrollHeight);
      },
      []
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const debouncedHeight = useCallback(debounce(handleHeight, 600), [
      handleHeight,
    ]);

    useEffect(() => {
      return () => {
        window?.clearTimeout(timerRef.current);
      };
    }, []);

    useEffect(() => {
      if (textRef.current && lineClamp > 1) {
        debouncedHeight(textRef.current?.scrollHeight, Math.round(height));
      }
    }, [debouncedHeight, height, lineClamp]);

    useEffect(() => {
      if (textRef.current && lineClamp === 1) {
        debouncedWidth(textRef.current?.scrollWidth, Math.round(width));
      }
    }, [debouncedWidth, width, lineClamp]);

    const handleCopy = useCallback(() => {
      const timeCopy = () => {
        timerRef.current = window?.setTimeout(() => {
          $isCopy(false);
          window?.clearTimeout(timerRef.current);
        }, 1000);
      };
      if (type === 'link' && href) {
        copy(href);
        $isCopy(true);
        timeCopy();
      }
      if (type === 'text' && text && isString(text)) {
        copy(text);
        $isCopy(true);
        timeCopy();
      }
    }, [href, text, type]);

    const isRichTip = useMemo(() => {
      if (rich) {
        if (text !== undefined) {
          return isString(text) ? true : false;
        }
        if (children !== undefined) {
          return isString(children) ? true : false;
        }
        return false;
      }
      return false;
    }, [rich, text, children]);

    const isRichText = useMemo(() => {
      if (rich) {
        if (children !== undefined) {
          return isString(children) ? true : false;
        }
        if (text !== undefined) {
          return isString(text) ? true : false;
        }
        return false;
      }
      return false;
    }, [rich, text, children]);

    const tooltipTitle = useMemo(() => {
      if (ellipsis && isToolTip) {
        if (isTextTip) {
          if (isRichTip) {
            return (
              <span
                dangerouslySetInnerHTML={{
                  __html: (text || children || href) ?? '',
                }}
              />
            );
          }
          return text || children || href;
        }
        return undefined;
      }
      return undefined;
    }, [ellipsis, isToolTip, isTextTip, isRichTip, text, children, href]);

    const paragraphCls = classNames(`rs-paragraph-text ${className || ''}`, {
      hidden: ellipsis,
    });

    const textCls = classNames('content', {
      link: type === 'link',
      truncate: ellipsis && lineClamp <= 1,
      'text-line-clamp': ellipsis && lineClamp && lineClamp > 1,
      'cursor-pointer': type === 'link' || (ellipsis && isTextTip),
    });

    const el = useMemo(() => {
      if (type === 'link') {
        return (
          <Link
            ref={(_r) => {
              if (_r) {
                const el = _r.getDOMNode();
                if (el) {
                  measureRef(el);
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-expect-error
                  textRef.current = el;
                }
              }
            }}
            className={textCls}
            href={href}
            {...others}
          >
            {children || text}
          </Link>
        );
      }
      return (
        <span
          ref={(_r) => {
            if (_r) {
              measureRef(_r);
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-expect-error
              textRef.current = _r;
            }
          }}
          className={textCls}
          style={{
            ...((lineClamp &&
              lineClamp > 1 && {
                '--line-clamp-num': lineClamp,
              }) as React.CSSProperties),
          }}
          {...(isRichText && {
            dangerouslySetInnerHTML: { __html: (children || text) ?? '' },
          })}
          {...others}
        >
          {isRichText ? undefined : children || text}
        </span>
      );
    }, [
      type,
      textCls,
      lineClamp,
      isRichText,
      children,
      text,
      others,
      href,
      measureRef,
    ]);

    const enableCopy = useMemo(() => {
      if (type === 'link') {
        return href !== undefined && copyable;
      }
      return text !== undefined && copyable;
    }, [copyable, href, text, type]);

    return (
      <div ref={forwardedRef} className={paragraphCls} style={style}>
        <Tooltip position={position} content={tooltipTitle}>
          {el}
        </Tooltip>
        {enableCopy && (
          <Tooltip content={isCopy ? 'success' : 'copy'}>
            {isCopy ? (
              <IconCheck />
            ) : (
              <IconCopy
                onClick={(e) => {
                  e.stopPropagation();
                  handleCopy();
                }}
              />
            )}
          </Tooltip>
        )}
      </div>
    );
  }
);

ParagraphText.displayName = 'ParagraphText';

export default ParagraphText;
