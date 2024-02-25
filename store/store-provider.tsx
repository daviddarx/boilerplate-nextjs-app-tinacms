'use client';

import store from '@/store/';
import { uiActions } from '@/store/';
import { useEffect } from 'react';
import { Provider } from 'react-redux';

export default function StoreProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    console.log('store provider mounted');
    store.dispatch(uiActions.setSystem({ os: 'test', system: 'test' }));
  });

  return <Provider store={store}>{children}</Provider>;
}
