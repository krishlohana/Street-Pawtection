import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import ReportForm from './pages/ReportForm';
import AdoptPage from './pages/AdoptPage';
import VolunteerPage from './pages/VolunteerPage';
import BlogPage from './pages/BlogPage';
import Contact from './pages/Contact';
import Creator from './pages/Creator';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/report" element={<ReportForm />} />
          <Route path="/adopt" element={<AdoptPage />} />
          <Route path="/volunteer" element={<VolunteerPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/creator" element={<Creator />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;