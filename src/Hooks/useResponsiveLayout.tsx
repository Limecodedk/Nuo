import { useState, useEffect } from 'react';

const MOBILE_BREAKPOINT = 1024;

const useResponsiveLayout = (): boolean => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = (): void => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile;
};
export default useResponsiveLayout;