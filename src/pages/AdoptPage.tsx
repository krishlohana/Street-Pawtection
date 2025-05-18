import React, { useState } from 'react';
import { animals } from '../data/mockData';
import Card, { CardImage, CardContent, CardTitle } from '../components/ui/Card';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { Filter, X } from 'lucide-react';

const AdoptPage: React.FC = () => {
  const [filters, setFilters] = useState({
    type: '',
    age: '',
    gender: '',
  });
  
  const [showFilters, setShowFilters] = useState(false);
  
  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };
  
  const resetFilters = () => {
    setFilters({
      type: '',
      age: '',
      gender: '',
    });
  };
  
  const filteredAnimals = animals.filter((animal) => {
    return (
      (filters.type === '' || animal.type === filters.type) &&
      (filters.age === '' || animal.age.toLowerCase().includes(filters.age.toLowerCase())) &&
      (filters.gender === '' || animal.gender === filters.gender)
    );
  });
  
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-gray-800 mb-4">
            Adopt a Rescued Friend
          </h1>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Our rescued animals are looking for their forever homes. Browse through our available 
            pets and find your perfect companion.
          </p>
          
          <div className="mt-6 md:hidden">
            <Button 
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2"
            >
              <Filter size={18} />
              {showFilters ? 'Hide Filters' : 'Show Filters'}
            </Button>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters - Desktop */}
          <div className="md:w-64 hidden md:block">
            <div className="bg-white rounded-lg shadow-md p-5">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-heading font-semibold text-lg">Filters</h3>
                <button 
                  onClick={resetFilters}
                  className="text-sm text-primary-500 hover:text-primary-700 transition-colors duration-300"
                >
                  Reset All
                </button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="desktop-type" className="block text-gray-700 text-sm font-medium mb-1">
                    Animal Type
                  </label>
                  <select
                    id="desktop-type"
                    name="type"
                    value={filters.type}
                    onChange={handleFilterChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="">All Types</option>
                    <option value="dog">Dogs</option>
                    <option value="cat">Cats</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="desktop-age" className="block text-gray-700 text-sm font-medium mb-1">
                    Age
                  </label>
                  <select
                    id="desktop-age"
                    name="age"
                    value={filters.age}
                    onChange={handleFilterChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="">All Ages</option>
                    <option value="puppy">Puppy/Kitten</option>
                    <option value="young">Young</option>
                    <option value="adult">Adult</option>
                    <option value="senior">Senior</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="desktop-gender" className="block text-gray-700 text-sm font-medium mb-1">
                    Gender
                  </label>
                  <select
                    id="desktop-gender"
                    name="gender"
                    value={filters.gender}
                    onChange={handleFilterChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="">All Genders</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          
          {/* Filters - Mobile */}
          {showFilters && (
            <div className="md:hidden mb-6">
              <div className="bg-white rounded-lg shadow-md p-5">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-heading font-semibold text-lg">Filters</h3>
                  <button 
                    onClick={() => setShowFilters(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <X size={20} />
                  </button>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label htmlFor="mobile-type" className="block text-gray-700 text-sm font-medium mb-1">
                      Animal Type
                    </label>
                    <select
                      id="mobile-type"
                      name="type"
                      value={filters.type}
                      onChange={handleFilterChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                    >
                      <option value="">All Types</option>
                      <option value="dog">Dogs</option>
                      <option value="cat">Cats</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="mobile-age" className="block text-gray-700 text-sm font-medium mb-1">
                      Age
                    </label>
                    <select
                      id="mobile-age"
                      name="age"
                      value={filters.age}
                      onChange={handleFilterChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                    >
                      <option value="">All Ages</option>
                      <option value="puppy">Puppy/Kitten</option>
                      <option value="young">Young</option>
                      <option value="adult">Adult</option>
                      <option value="senior">Senior</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="mobile-gender" className="block text-gray-700 text-sm font-medium mb-1">
                      Gender
                    </label>
                    <select
                      id="mobile-gender"
                      name="gender"
                      value={filters.gender}
                      onChange={handleFilterChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                    >
                      <option value="">All Genders</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                  
                  <div className="pt-2">
                    <Button onClick={resetFilters} variant="outline" className="w-full">
                      Reset All Filters
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Animal Listings */}
          <div className="flex-1">
            {filteredAnimals.length === 0 ? (
              <div className="text-center py-12 bg-white rounded-lg shadow-md">
                <div className="text-gray-400 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-xl font-heading font-semibold text-gray-800 mb-2">No Matches Found</h3>
                <p className="text-gray-600 mb-6">Try adjusting your filters to find more animals.</p>
                <Button onClick={resetFilters} variant="primary">
                  Reset All Filters
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredAnimals.map((animal) => (
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
            )}
          </div>
        </div>
        
        <div className="mt-16 bg-primary-50 border border-primary-100 rounded-lg p-6 md:p-8">
          <h2 className="text-2xl font-heading font-bold text-primary-800 mb-4">
            Adoption Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <div className="bg-primary-100 rounded-full w-10 h-10 flex items-center justify-center text-primary-700 font-bold mb-4">
                1
              </div>
              <h3 className="text-lg font-heading font-semibold text-gray-800 mb-2">
                Submit Application
              </h3>
              <p className="text-gray-600">
                Complete our adoption application form with your information and preferences.
              </p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <div className="bg-primary-100 rounded-full w-10 h-10 flex items-center justify-center text-primary-700 font-bold mb-4">
                2
              </div>
              <h3 className="text-lg font-heading font-semibold text-gray-800 mb-2">
                Meet &amp; Greet
              </h3>
              <p className="text-gray-600">
                Visit our center to meet your potential new family member and see if it's a good match.
              </p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <div className="bg-primary-100 rounded-full w-10 h-10 flex items-center justify-center text-primary-700 font-bold mb-4">
                3
              </div>
              <h3 className="text-lg font-heading font-semibold text-gray-800 mb-2">
                Welcome Home
              </h3>
              <p className="text-gray-600">
                After approval, complete the adoption paperwork and welcome your new friend home!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdoptPage;