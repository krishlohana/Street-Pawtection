import React, { useState } from 'react';
import { Camera, MapPin, Upload, CheckCircle, Phone } from 'lucide-react';
import Button from '../components/ui/Button';
import { supabase } from '../lib/supabase';

const ReportForm: React.FC = () => {
  const [formStep, setFormStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    animalType: '',
    description: '',
    location: '',
    image: null,
    name: '',
    phone: '',
    email: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, image: e.target.files![0] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    
    try {
      // Submit to Supabase
      const { data, error } = await supabase
        .from('animal_reports')
        .insert([
          {
            animal_type: formData.animalType,
            description: formData.description,
            location: formData.location,
            contact_name: formData.name,
            contact_phone: formData.phone,
            contact_email: formData.email || null,
          }
        ]);

      if (error) {
        console.error('Error submitting report:', error);
        alert('There was an error submitting your report. Please try again.');
        return;
      }

      console.log('Report submitted successfully:', data);
      setSubmitted(true);
    } catch (error) {
      console.error('Error submitting report:', error);
      alert('There was an error submitting your report. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-gray-800 mb-4">
              Report a Street Animal in Need
            </h1>
            <p className="text-gray-600 text-lg">
              Your report can save a life. Fill out the form below with as much detail as possible 
              to help our rescue teams locate and assist the animal quickly.
            </p>
          </div>

          {submitted ? (
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="flex justify-center mb-4">
                <CheckCircle size={60} className="text-success-500" />
              </div>
              <h2 className="text-2xl font-heading font-bold text-gray-800 mb-4">
                Report Submitted Successfully!
              </h2>
              <p className="text-gray-600 mb-6">
                Thank you for helping a street animal in need. Our rescue team has been notified and will respond as quickly as possible.
              </p>
              <p className="text-gray-600 mb-8">
                Your report ID: <span className="font-semibold">#RPT-{Math.floor(100000 + Math.random() * 900000)}</span>
              </p>
              <Button 
                variant="primary" 
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    animalType: '',
                    description: '',
                    location: '',
                    image: null,
                    name: '',
                    phone: '',
                    email: '',
                  });
                  setFormStep(1);
                }}
              >
                Submit Another Report
              </Button>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="flex border-b">
                <div 
                  className={`flex-1 py-4 text-center cursor-pointer transition-colors duration-300 ${formStep === 1 ? 'bg-primary-100 text-primary-700 font-medium' : ''}`}
                  onClick={() => setFormStep(1)}
                >
                  1. Animal Details
                </div>
                <div 
                  className={`flex-1 py-4 text-center cursor-pointer transition-colors duration-300 ${formStep === 2 ? 'bg-primary-100 text-primary-700 font-medium' : ''}`}
                  onClick={() => formStep > 1 && setFormStep(2)}
                >
                  2. Location &amp; Image
                </div>
                <div 
                  className={`flex-1 py-4 text-center cursor-pointer transition-colors duration-300 ${formStep === 3 ? 'bg-primary-100 text-primary-700 font-medium' : ''}`}
                  onClick={() => formStep > 2 && setFormStep(3)}
                >
                  3. Contact Information
                </div>
              </div>

              <form onSubmit={handleSubmit} className="p-8">
                {formStep === 1 && (
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="animalType" className="block text-gray-700 font-medium mb-2">
                        Type of Animal *
                      </label>
                      <select
                        id="animalType"
                        name="animalType"
                        value={formData.animalType}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                        required
                      >
                        <option value="">Select animal type</option>
                        <option value="dog">Dog</option>
                        <option value="cat">Cat</option>
                        <option value="bird">Bird</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="description" className="block text-gray-700 font-medium mb-2">
                        Describe the animal and its condition *
                      </label>
                      <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        rows={5}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                        placeholder="Please describe the animal's appearance, behavior, and any injuries or concerning conditions..."
                        required
                      ></textarea>
                    </div>

                    <div className="flex justify-end">
                      <Button 
                        type="button" 
                        onClick={() => setFormStep(2)}
                        disabled={!formData.animalType || !formData.description}
                      >
                        Next Step
                      </Button>
                    </div>
                  </div>
                )}

                {formStep === 2 && (
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="location" className="block text-gray-700 font-medium mb-2">
                        Location Details *
                      </label>
                      <div className="flex">
                        <input
                          id="location"
                          name="location"
                          type="text"
                          value={formData.location}
                          onChange={handleChange}
                          className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                          placeholder="Enter address or landmark..."
                          required
                        />
                        <button
                          type="button"
                          className="bg-primary-500 text-white px-4 py-2 rounded-r-md focus:outline-none hover:bg-primary-600 transition-colors duration-300"
                          title="Use my current location"
                        >
                          <MapPin size={20} />
                        </button>
                      </div>
                      <p className="text-sm text-gray-500 mt-2">
                        Provide as much detail as possible to help our team locate the animal.
                      </p>
                    </div>

                    <div>
                      <label htmlFor="image" className="block text-gray-700 font-medium mb-2">
                        Upload Image (if possible)
                      </label>
                      <div className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center">
                        <input
                          id="image"
                          name="image"
                          type="file"
                          accept="image/*"
                          onChange={handleFileChange}
                          className="hidden"
                        />
                        <label
                          htmlFor="image"
                          className="cursor-pointer flex flex-col items-center justify-center"
                        >
                          {formData.image ? (
                            <div className="text-center">
                              <div className="text-primary-500 mb-2 flex justify-center">
                                <CheckCircle size={36} />
                              </div>
                              <p className="text-gray-700 font-medium">Image selected</p>
                              <p className="text-sm text-gray-500">Click to change</p>
                            </div>
                          ) : (
                            <div className="text-center">
                              <div className="text-gray-400 mb-2 flex justify-center">
                                <Camera size={36} />
                              </div>
                              <p className="text-gray-700 font-medium">Click to upload an image</p>
                              <p className="text-sm text-gray-500">A photo helps us identify the animal</p>
                            </div>
                          )}
                        </label>
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <Button type="button" variant="outline" onClick={() => setFormStep(1)}>
                        Previous Step
                      </Button>
                      <Button 
                        type="button" 
                        onClick={() => setFormStep(3)}
                        disabled={!formData.location}
                      >
                        Next Step
                      </Button>
                    </div>
                  </div>
                )}

                {formStep === 3 && (
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                        Your Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                        Phone Number *
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                        placeholder="For urgent follow-up if needed"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                        placeholder="To receive status updates"
                      />
                    </div>

                    <div className="bg-gray-50 p-4 rounded-md">
                      <p className="text-sm text-gray-700">
                        <strong>Privacy Note:</strong> Your contact information will only be used to follow up about this animal report and will not be shared with third parties.
                      </p>
                    </div>

                    <div className="flex justify-between">
                      <Button type="button" variant="outline" onClick={() => setFormStep(2)}>
                        Previous Step
                      </Button>
                      <Button 
                        type="submit"
                        disabled={!formData.name || !formData.phone || submitting}
                      >
                        {submitting ? 'Submitting...' : 'Submit Report'}
                      </Button>
                    </div>
                  </div>
                )}
              </form>
            </div>
          )}

          <div className="mt-10 p-5 bg-gray-100 rounded-lg">
            <h3 className="text-xl font-heading font-semibold text-gray-800 mb-3 flex items-center">
              <Phone size={20} className="mr-2 text-primary-500" />
              Prefer to call? Use our 24/7 Helpline
            </h3>
            <p className="text-gray-600 mb-2">
              If you're unable to fill out the form or in case of emergency, please call our helpline:
            </p>
            <p className="text-2xl font-bold text-primary-700 mb-3">+92-XXX-XXXXXXX</p>
            <p className="text-sm text-gray-500">Our trained operators are available 24/7 to assist with animal emergencies.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportForm;