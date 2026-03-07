import type { ReactNode } from 'react';
import { Header } from './Header';

export function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-dvh flex-col">
      <Header />
      <main className="flex-1 overflow-auto">{children}</main>
    </div>
  );
}
