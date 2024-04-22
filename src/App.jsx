import React from 'react';
import PostsList from './features/posts/PostsList';
import AddPostForm from './features/posts/AddPostForm';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';


const App = () => {
  return (
    <Router>
      <div className="container mx-auto px-4 py-8">
        <Navigation />
        <Routes>
          <Route path="/add" element={<AddPostForm />} />
          <Route path="/" element={<PostsList />} />
        </Routes>
        <Footer />
      </div>

    </Router>
  );
};

export default App;