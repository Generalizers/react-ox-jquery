import { createContext, useContext } from 'react';

export const zoneRefContext = createContext(0);

export const useZoneRef = () => {
  return useContext(zoneRefContext);
};
