import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../../data/mockData';
import Card, { CardImage, CardContent, CardTitle } from '../ui/Card';
import Button from '../ui/Button';
import { Calendar } from 'lucide-react';

const BlogPreview: React.FC = () => {
  // Take just the first 3 blog posts for preview
  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-800 mb-4">
            Latest from Our Blog
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Learn about animal welfare, responsible pet ownership, and success stories 
            from our rescue operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPosts.map((post) => (
            <Card key={post.id} className="h-full">
              <CardImage src={post.imageUrl} alt={post.title} />
              <CardContent>
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <Calendar size={16} className="mr-1" />
                  <span>{post.date}</span>
                </div>
                <CardTitle>{post.title}</CardTitle>
                <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                <Link to={`/blog/${post.id}`}>
                  <Button variant="outline" className="w-full">
                    Read More
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/blog">
            <Button variant="primary" size="lg">
              View All Blog Posts
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;