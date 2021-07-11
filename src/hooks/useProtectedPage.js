import { useLayoutEffect } from 'react';
import { hasToken } from '../utils/localStorageFunctions';
import { goToLoginPage } from '../routers/coordinate';

const useProtectedPage = (history) => {
  useLayoutEffect(() => {
    const result = hasToken();
    if (!result) {
      goToLoginPage(history);
    }
  }, []);
};

export default useProtectedPage;
