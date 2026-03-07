import { useEffect } from 'react';
import { useUiContext } from './hooks/useUiContext';
import { MainLayout } from './components/layout/MainLayout';
import { UploadZone } from './components/upload/UploadZone';
import { PageGrid } from './components/grid/PageGrid';
import { EditorView } from './components/editor/EditorView';

function AppContent() {
  const { ui } = useUiContext();

  useEffect(() => {
    if (ui.viewMode === 'upload') return;

    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault();
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [ui.viewMode]);

  return (
    <MainLayout>
      {ui.viewMode === 'upload' && <UploadZone />}
      {ui.viewMode === 'grid' && <PageGrid />}
      {ui.viewMode === 'editor' && <EditorView />}
    </MainLayout>
  );
}

export default function App() {
  return <AppContent />;
}
