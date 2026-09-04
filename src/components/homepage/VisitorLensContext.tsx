'use client';

import { createContext, useContext, useState, useEffect, useCallback } from 'react';

export type VisitorType = 'hiring' | 'technical' | 'building' | 'curious' | null;

interface VisitorLensContextType {
  lens: VisitorType;
  setLens: (lens: VisitorType) => void;
}

const VisitorLensContext = createContext<VisitorLensContextType>({
  lens: null,
  setLens: () => {},
});

export function useVisitorLens() {
  return useContext(VisitorLensContext);
}

export function VisitorLensProvider({ children }: { children: React.ReactNode }) {
  const [lens, setLensState] = useState<VisitorType>(null);

  // Restore selection from sessionStorage after mount (browser-only API,
  // unavailable during SSR — standard exception to the set-state-in-effect rule).
  useEffect(() => {
    const stored = sessionStorage.getItem('visitor-lens') as VisitorType;
    if (stored) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLensState(stored);
    }
  }, []);

  const setLens = useCallback((next: VisitorType) => {
    setLensState(next);
    if (next) {
      sessionStorage.setItem('visitor-lens', next);
    } else {
      sessionStorage.removeItem('visitor-lens');
    }
  }, []);

  return (
    <VisitorLensContext.Provider value={{ lens, setLens }}>
      {children}
    </VisitorLensContext.Provider>
  );
}
