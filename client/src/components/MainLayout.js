import React from 'react';
import { Outlet } from 'react-router-dom';

function MainLayout() {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', minHeight: '100vh' }}>
      <aside style={{ width: '250px', background: '#eee' }}>
        Sidebar kamu di sini
      </aside>

      <main style={{ flex: 1, padding: '20px' }}>
        <Outlet /> {/* Semua halaman baru masuk sini */}
      </main>
    </div>
  );
}

export default MainLayout;
