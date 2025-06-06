import { AnchorHTMLAttributes } from 'react';

export interface MentionLinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
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
}
