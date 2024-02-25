'use client';

import store from '@/store/';
import { uiActions } from '@/store/';
import { getSystem } from '@/utils/core';
import { useEffect } from 'react';
import { Provider } from 'react-redux';

export default function StoreProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const system = getSystem();

    document.body.classList.add(system.os);
    document.body.classList.add(system.browser);

    store.dispatch(
      uiActions.setSystem({
        os: system.os,
        browser: system.browser,
      }),
    );
  });

  return <Provider store={store}>{children}</Provider>;
}
