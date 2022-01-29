import { FunctionComponent, useEffect, useState } from 'react';

import { zoneRefContext } from './context';

let zone = 0;

export const DragZone: FunctionComponent = ({ children }) => {
  const [zoneRef, setZoneRef] = useState<number>(zone);

  useEffect(() => {
    zone++;
  }, []);

  return (
    <zoneRefContext.Provider value={zoneRef}>
      {children}
    </zoneRefContext.Provider>
  );
};
