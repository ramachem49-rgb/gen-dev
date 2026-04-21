import { QueryClient, QueryClientProvider } from '@/framework/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Index from './pages/Index';
import Lessons from './pages/Lessons';
import LessonDetail from './pages/LessonDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import CourseView from './pages/CourseView';
import AdminLessons from './pages/AdminLessons';
import MyLessons from './pages/MyLessons';
import Lab from './pages/Lab';

const queryClient = new QueryClient();

import { useLocation } from 'react-router-dom';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BrowserRouter>
          <AppInner />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

function AppInner() {
  const location = useLocation();
  const isLab = location.pathname === '/lab';

  return (
    <div className="flex flex-col min-h-screen">
      {!isLab && <Navbar />}
      <main className={isLab ? '' : 'flex-grow'}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/lessons" element={<Lessons />} />
          <Route path="/lessons/:slug" element={<LessonDetail />} />
          <Route path="/course/:courseId" element={<CourseView />} />
          <Route path="/course/:courseId/lesson/:lessonId" element={<CourseView />} />
          <Route path="/admin/lessons" element={<AdminLessons />} />
          <Route path="/my-lessons" element={<MyLessons />} />
          <Route path="/lab" element={<Lab />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      {!isLab && <Footer />}
      <Toaster />
      <Sonner />
    </div>
  );
}

export default App;