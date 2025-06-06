import { AnchorHTMLAttributes, HTMLAttributes } from 'react';

export interface BaseParagraphTextProps {
  /**
   * @zh 显示的内容
   * @en Displayed content
   * @version 1.1.0
   */
  children?: React.ReactNode;
  /**
   * @zh 是否超出隐藏
   * @en Is it beyond hidden
   * @defaultValue true
   * @version 1.1.0
   */
  ellipsis?: boolean;
  /**
   * @zh 展示多少行，超出隐藏
   * @en How many lines are displayed, beyond hidden ones
   * @defaultValue 1
   * @version 1.1.0
   */
  lineClamp?: number;
  /**
   * @zh 是否支持复制
   * @en Does it support copying
   * @defaultValue false
   * @version 1.1.0
   */
  copyable?: boolean;
  /**
   * @zh 外层类名
   * @en Outer class name
   * @version 1.1.0
   */
  className?: string;
  /**
   * @zh 自定义样式
   * @en custom style
   * @version 1.1.0
   */
  style?: React.CSSProperties;
  /**
   * @zh 超出隐藏后鼠标悬浮显示气泡的位置，ellipsis 为 true 时生效
   * @en Exceeding the position where the hidden mouse hovers to display bubbles takes effect when ellipsis is true
   * @defaultValue topLeft
   * @version 1.1.0
   */
  position?:
    | 'top'
    | 'tl'
    | 'tr'
    | 'bottom'
    | 'bl'
    | 'br'
    | 'left'
    | 'lt'
    | 'lb'
    | 'right'
    | 'rt'
    | 'rb';
  /**
   * @zh 超出隐藏后鼠标悬浮是否显示气泡，ellipsis 为 true 时生效
   * @en Whether to display bubbles when hovering the mouse beyond the hidden state, effective when ellipsis is true
   * @defaultValue true
   * @version 1.1.0
   */
  isToolTip?: boolean;
  /**
   * @zh 是否开启富文本识别, 开启后 text 或者 children 属性必须传入字符串
   * @en Do you want to enable rich text recognition? After enabling it, the text or children attribute must be passed in as a string
   * @version 1.1.0
   */
  rich?: boolean;
  /**
   * @zh 是否开启内容智能识别
   * @en Do you want to enable content intelligent recognition
   * @defaultValue true
   * @version 1.1.1
   */
  intelligentRecognition?: boolean;
}

export interface LinkTextProps
  extends BaseParagraphTextProps,
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'type' | 'className'> {
  /**
   * @zh 内容类型
   * @en content type
   * @defaultValue text
   * @version 1.1.0
   */
  type: 'link';
}

export interface SpanTextProps
  extends BaseParagraphTextProps,
    HTMLAttributes<HTMLSpanElement> {
  /**
   * @zh 内容类型
   * @en content type
   * @defaultValue text
   * @version 1.1.0
   */
  type?: 'text';
  /**
   * @zh 复制或显示的内容，如果使用复制能力，该属性必须为字符串，children 属性显示的优先级高于该属性
   * @en The copied or displayed content, if using the copying ability, must be a string, and the children attribute should be displayed with higher priority than this attribute
   * @version 1.1.0
   */
  text?: string | React.ReactNode;
}

export type ParagraphTextProps = SpanTextProps | LinkTextProps;
