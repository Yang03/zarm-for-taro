import * as React from 'react';
import type { ContainerType } from '../utils/dom';
import { Locale } from '../config-provider/PropsType';

export interface Action {
  text?: React.ReactNode;
  theme?: 'default' | 'primary' | 'danger';
  className?: string;
  onClick?: () => void;
}

export default interface PropsType {
  visible?: boolean;
  spacing?: boolean;
  actions?: Action[];
  cancelText?: string;
  onMaskClick?: () => void;
  onCancel?: () => void;
  destroy?: boolean;
  locale?: Locale['ActionSheet'];
  mountContainer?: ContainerType | false;
}
