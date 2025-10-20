// src/core/layouts/MainLayout/MainLayout.tsx
import { Outlet } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../../modules/home/components/Footer';


const PublicLayout = () => {
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main >
        <Outlet />
      </main>
     <Footer />
    </div>
  );
};

export default PublicLayout;