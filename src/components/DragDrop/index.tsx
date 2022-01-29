import { Offset } from '@generalizers/react-utils';
import $ from 'jquery';
import React, {
  FunctionComponent,
  HTMLProps,
  useEffect,
  useState,
} from 'react';

import styles from './index.module.scss';

interface DragDropProps extends HTMLProps<HTMLDivElement> {
  addClasses?: boolean;
  appendTo?: Element;
  axis?: 'x' | 'y';
  cancel?: 'input' | 'textarea' | 'button' | 'select' | 'option';
  classes?: JQueryUI.DraggableClasses;
  connectToSortable?: Element;
  containment?:
    | Element
    | 'parent'
    | 'document'
    | 'window'
    | [number, number, number, number];
  cursor?: 'help' | 'wait' | 'crosshair' | 'not-allowed' | 'zoom-in' | 'grab';
  cursorAt?: {
    left: OffsetValue;
    right: OffsetValue;
    top: OffsetValue;
    bottom: OffsetValue;
  };
  delay?: number;
  disabled?: boolean;
  distance?: number;
  grid?: Offset;
  handle?: Element;
  helper?: 'original' | 'clone' | (() => Element);
  iframeFix?: boolean;
  opacity?: number;
  refreshPositions?: boolean;
  revert?: boolean | string | (() => boolean);
  revertDuration?: number;
  scope?: string;
  scroll?: boolean;
  scrollSensitivity?: number;
  scrollSpeed?: number;
  snap?: boolean | Element;
  snapMode?: 'inner' | 'outer' | 'both';
  snapTolerance?: number;
  stack?: string;
  zIndex?: number;
}

type OffsetValue = string | number;

export const DragDrop: FunctionComponent<DragDropProps> = ({
  children,
  addClasses,
  appendTo,
  axis,
  cancel,
  classes,
  connectToSortable,
  containment,
  cursor,
  cursorAt,
  delay,
  disabled,
  distance,
  grid,
  handle,
  helper,
  iframeFix,
  opacity,
  refreshPositions,
  revert,
  revertDuration,
  scope,
  scroll,
  scrollSensitivity,
  scrollSpeed,
  snap,
  snapMode,
  snapTolerance,
  stack,
  zIndex,
}) => {
  const [dragDropRef, setDragDropRef] = useState<HTMLDivElement>();

  useEffect(() => {
    if (dragDropRef) {
      $(dragDropRef).draggable({
        addClasses,
        appendTo,
        axis,
        cancel,
        classes,
        connectToSortable,
        containment,
        cursor,
        cursorAt,
        delay,
        disabled,
        distance,
        grid: grid as number[] | undefined,
        handle,
        helper,
        iframeFix,
        opacity,
        refreshPositions,
        revert,
        revertDuration,
        scope,
        scroll,
        scrollSensitivity,
        scrollSpeed,
        snap,
        snapMode,
        snapTolerance,
        stack,
        zIndex,
      });
    }
  }, [dragDropRef]);

  return (
    <div className={styles.main} ref={(r) => r && setDragDropRef(r)}>
      {children}
    </div>
  );
};
