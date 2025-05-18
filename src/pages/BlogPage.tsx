import React, { useState } from 'react';
import { blogPosts } from '../data/mockData';
import Card, { CardImage, CardContent, CardTitle } from '../components/ui/Card';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import { Calendar, Search } from 'lucide-react';

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('');
  
  // Get all unique tags from blog posts
  const allTags = Array.from(
    new Set(blogPosts.flatMap(post => post.tags))
  );
  
  // Filter blog posts based on search term and selected tag
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = searchTerm === '' || 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.content.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesTag = selectedTag === '' || post.tags.includes(selectedTag);
    
    return matchesSearch && matchesTag;
  });
  
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-gray-800 mb-4">
            Blog &amp; Education Center
          </h1>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Learn about animal welfare, responsible pet ownership, and read inspiring stories 
            about street animal rescues and adoptions.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-64">
            <div className="bg-white rounded-lg shadow-md p-5 mb-6">
              <h3 className="font-heading font-semibold text-lg mb-4">Search</h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-5">
              <h3 className="font-heading font-semibold text-lg mb-4">Topics</h3>
              <div className="space-y-2">
                <button
                  onClick={() => setSelectedTag('')}
                  className={`block w-full text-left px-3 py-2 rounded-md transition-colors duration-300 ${
                    selectedTag === '' 
                      ? 'bg-primary-500 text-white' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  All Topics
                </button>
                {allTags.map(tag => (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(tag)}
                    className={`block w-full text-left px-3 py-2 rounded-md transition-colors duration-300 ${
                      selectedTag === tag 
                        ? 'bg-primary-500 text-white' 
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {tag.charAt(0).toUpperCase() + tag.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          <div className="flex-1">
            {filteredPosts.length === 0 ? (
              <div className="text-center py-12 bg-white rounded-lg shadow-md">
                <div className="text-gray-400 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-heading font-semibold text-gray-800 mb-2">
                  No Articles Found
                </h3>
                <p className="text-gray-600 mb-6">
                  We couldn't find any articles matching your search criteria.
                </p>
                <Button 
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedTag('');
                  }}
                  variant="primary"
                >
                  Clear Filters
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredPosts.map((post) => (
                  <Card key={post.id} className="h-full">
                    <CardImage src={post.imageUrl} alt={post.title} />
                    <CardContent>
                      <div className="flex items-center text-gray-500 text-sm mb-3">
                        <Calendar size={16} className="mr-1" />
                        <span>{post.date}</span>
                      </div>
                      <CardTitle>{post.title}</CardTitle>
                      <p className="text-sm text-gray-500 mb-2">By {post.author}</p>
                      <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag) => (
                          <button
                            key={tag}
                            onClick={() => setSelectedTag(tag)}
                            className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full hover:bg-gray-200 transition-colors duration-300"
                          >
                            #{tag}
                          </button>
                        ))}
                      </div>
                      <Link to={`/blog/${post.id}`}>
                        <Button variant="outline" className="w-full">
                          Read Article
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
        
        <div className="mt-16 bg-primary-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-heading font-bold text-primary-800 mb-4">
            Want to Contribute?
          </h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Are you passionate about animal welfare? We welcome guest posts from animal advocates, 
            veterinarians, and pet experts. Share your knowledge with our community!
          </p>
          <Button variant="primary">
            Submit a Guest Post
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;