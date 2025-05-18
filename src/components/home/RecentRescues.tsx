import React from 'react';
import { animals } from '../../data/mockData';
import { Link } from 'react-router-dom';
import Card, { CardImage, CardContent, CardTitle } from '../ui/Card';
import Button from '../ui/Button';

const RecentRescues: React.FC = () => {
  // Take just the first 3 animals for the showcase
  const recentRescues = animals.slice(0, 3);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-800 mb-4">
            Recent Rescues Looking for Homes
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            These animals have been rescued from the streets and are now ready for their forever homes.
            Could you be their new family?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentRescues.map((animal) => (
            <Card key={animal.id} className="h-full">
              <CardImage src={animal.imageUrl} alt={animal.name} />
              <CardContent>
                <div className="flex justify-between items-center mb-2">
                  <CardTitle>{animal.name}</CardTitle>
                  <span className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full">
                    {animal.type}
                  </span>
                </div>
                <div className="mb-4 text-sm text-gray-500">
                  <span className="mr-3">{animal.age}</span>•
                  <span className="mx-3 capitalize">{animal.gender}</span>•
                  <span className="ml-3">{animal.location}</span>
                </div>
                <p className="text-gray-600 mb-4 line-clamp-3">{animal.description}</p>
                <Link to={`/adopt/${animal.id}`}>
                  <Button variant="outline" className="w-full">
                    Meet {animal.name}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/adopt">
            <Button variant="primary" size="lg">
              See All Available Animals
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RecentRescues;