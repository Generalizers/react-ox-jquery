import { DragDrop } from '../DragDrop';
import { FunctionComponent } from 'react';

import './index.module.scss';

export const App: FunctionComponent = () => {
  return (
    <div>
      <DragDrop>HELLO WORLD</DragDrop>
    </div>
  );
};
