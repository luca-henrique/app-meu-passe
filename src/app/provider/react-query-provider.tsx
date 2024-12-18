import React, { ReactNode } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { reactQueryConfig } from '../config/react-query-config';

interface ReactQueryInstanceClientProps {
  children: ReactNode
}

export const ReactQueryProvider = ({ children }: ReactQueryInstanceClientProps) => {
  return (
    <QueryClientProvider client={reactQueryConfig}>
      {children}
    </QueryClientProvider>
  );
};
