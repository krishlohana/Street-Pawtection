import React, { useState, useEffect } from 'react';
import { FileText, Users, Eye, Trash2, Phone, Mail, MapPin, Calendar, User, LogOut } from 'lucide-react';
import Button from '../components/ui/Button';
import { supabase, AnimalReport, VolunteerApplication } from '../lib/supabase';
import AdminLogin from '../components/admin/AdminLogin';

const AdminDashboard: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [reports, setReports] = useState<AnimalReport[]>([]);
  const [applications, setApplications] = useState<VolunteerApplication[]>([]);
  const [activeTab, setActiveTab] = useState<'reports' | 'applications'>('reports');
  const [selectedItem, setSelectedItem] = useState<AnimalReport | VolunteerApplication | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuthentication();
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      loadData();
    }
  }, [isAuthenticated]);

  const checkAuthentication = () => {
    const isAuth = sessionStorage.getItem('adminAuthenticated');
    const loginTime = sessionStorage.getItem('adminLoginTime');
    
    if (isAuth === 'true' && loginTime) {
      // Check if login is still valid (24 hours)
      const twentyFourHours = 24 * 60 * 60 * 1000;
      const now = Date.now();
      const loginTimestamp = parseInt(loginTime);
      
      if (now - loginTimestamp < twentyFourHours) {
        setIsAuthenticated(true);
      } else {
        // Session expired
        handleLogout();
      }
    }
    setCheckingAuth(false);
  };

  const handleLogin = (success: boolean) => {
    if (success) {
      setIsAuthenticated(true);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('adminAuthenticated');
    sessionStorage.removeItem('adminLoginTime');
    setIsAuthenticated(false);
    setReports([]);
    setApplications([]);
  };

  const loadData = async () => {
    try {
      setLoading(true);
      
      // Load reports
      const { data: reportsData, error: reportsError } = await supabase
        .from('animal_reports')
        .select('*')
        .order('created_at', { ascending: false });

      if (reportsError) {
        console.error('Error loading reports:', reportsError);
      } else {
        setReports(reportsData || []);
      }

      // Load applications
      const { data: applicationsData, error: applicationsError } = await supabase
        .from('volunteer_applications')
        .select('*')
        .order('created_at', { ascending: false });

      if (applicationsError) {
        console.error('Error loading applications:', applicationsError);
      } else {
        setApplications(applicationsData || []);
      }
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      setLoading(false);
    }
  };

  const deleteReport = async (id: string) => {
    try {
      const { error } = await supabase
        .from('animal_reports')
        .delete()
        .eq('id', id);

      if (error) {
        console.error('Error deleting report:', error);
        alert('Error deleting report. Please try again.');
        return;
      }

      setReports(reports.filter(report => report.id !== id));
    } catch (error) {
      console.error('Error deleting report:', error);
      alert('Error deleting report. Please try again.');
    }
  };

  const deleteApplication = async (id: string) => {
    try {
      const { error } = await supabase
        .from('volunteer_applications')
        .delete()
        .eq('id', id);

      if (error) {
        console.error('Error deleting application:', error);
        alert('Error deleting application. Please try again.');
        return;
      }

      setApplications(applications.filter(app => app.id !== id));
    } catch (error) {
      console.error('Error deleting application:', error);
      alert('Error deleting application. Please try again.');
    }
  };

  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleString();
  };

  // Show loading screen while checking authentication
  if (checkingAuth) {
    return (
      <div className="pt-20 min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Checking authentication...</p>
        </div>
      </div>
    );
  }

  // Show login form if not authenticated
  if (!isAuthenticated) {
    return <AdminLogin onLogin={handleLogin} />;
  }

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex justify-between items-center mb-4">
              <div></div>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors duration-300"
              >
                <LogOut size={18} />
                <span>Logout</span>
              </button>
            </div>
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-gray-800 mb-4">
              Admin Dashboard
            </h1>
            <p className="text-gray-600 text-lg">
              Manage animal reports and volunteer applications
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="bg-white rounded-lg shadow-md mb-6">
            <div className="flex border-b">
              <button
                onClick={() => setActiveTab('reports')}
                className={`flex-1 py-4 px-6 text-center font-medium transition-colors duration-300 ${
                  activeTab === 'reports'
                    ? 'bg-primary-100 text-primary-700 border-b-2 border-primary-500'
                    : 'text-gray-600 hover:text-primary-600'
                }`}
              >
                <FileText size={20} className="inline mr-2" />
                Animal Reports ({reports.length})
              </button>
              <button
                onClick={() => setActiveTab('applications')}
                className={`flex-1 py-4 px-6 text-center font-medium transition-colors duration-300 ${
                  activeTab === 'applications'
                    ? 'bg-primary-100 text-primary-700 border-b-2 border-primary-500'
                    : 'text-gray-600 hover:text-primary-600'
                }`}
              >
                <Users size={20} className="inline mr-2" />
                Volunteer Applications ({applications.length})
              </button>
            </div>
          </div>

          {/* Reports Tab */}
          {activeTab === 'reports' && (
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6 border-b">
                <h2 className="text-xl font-heading font-semibold text-gray-800">
                  Animal Reports
                </h2>
              </div>
              
              {loading ? (
                <div className="p-8 text-center text-gray-500">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-500 mx-auto mb-4"></div>
                  <p>Loading reports...</p>
                </div>
              ) : reports.length === 0 ? (
                <div className="p-8 text-center text-gray-500">
                  <FileText size={48} className="mx-auto mb-4 text-gray-300" />
                  <p>No animal reports submitted yet.</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Report ID
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Date
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Animal Type
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Location
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Contact
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {reports.map((report) => (
                        <tr key={report.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {report.id.slice(0, 8)}...
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {formatDate(report.created_at)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 capitalize">
                            {report.animal_type}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-900 max-w-xs truncate">
                            {report.location}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {report.contact_name}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                            <button
                              onClick={() => setSelectedItem(report)}
                              className="text-primary-600 hover:text-primary-900"
                            >
                              <Eye size={16} />
                            </button>
                            <button
                              onClick={() => deleteReport(report.id)}
                              className="text-red-600 hover:text-red-900"
                            >
                              <Trash2 size={16} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}

          {/* Applications Tab */}
          {activeTab === 'applications' && (
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6 border-b">
                <h2 className="text-xl font-heading font-semibold text-gray-800">
                  Volunteer Applications
                </h2>
              </div>
              
              {loading ? (
                <div className="p-8 text-center text-gray-500">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-500 mx-auto mb-4"></div>
                  <p>Loading applications...</p>
                </div>
              ) : applications.length === 0 ? (
                <div className="p-8 text-center text-gray-500">
                  <Users size={48} className="mx-auto mb-4 text-gray-300" />
                  <p>No volunteer applications submitted yet.</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Application ID
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Date
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Name
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Email
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Roles
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {applications.map((application) => (
                        <tr key={application.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {application.id.slice(0, 8)}...
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {formatDate(application.created_at)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {application.first_name} {application.last_name}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {application.email}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-900 max-w-xs">
                            <span className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded-full">
                              {application.selected_roles.length} role(s)
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                            <button
                              onClick={() => setSelectedItem(application)}
                              className="text-primary-600 hover:text-primary-900"
                            >
                              <Eye size={16} />
                            </button>
                            <button
                              onClick={() => deleteApplication(application.id)}
                              className="text-red-600 hover:text-red-900"
                            >
                              <Trash2 size={16} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}

          {/* Detail Modal */}
          {selectedItem && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
              <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                <div className="p-6 border-b">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-heading font-semibold text-gray-800">
                      {'animal_type' in selectedItem ? 'Animal Report Details' : 'Volunteer Application Details'}
                    </h3>
                    <button
                      onClick={() => setSelectedItem(null)}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      ×
                    </button>
                  </div>
                </div>
                
                <div className="p-6">
                  {'animal_type' in selectedItem ? (
                    // Report Details
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Report ID</label>
                          <p className="text-gray-900">{selectedItem.id}</p>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Date Submitted</label>
                          <p className="text-gray-900">{formatDate(selectedItem.created_at)}</p>
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Animal Type</label>
                        <p className="text-gray-900 capitalize">{selectedItem.animal_type}</p>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                        <p className="text-gray-900">{selectedItem.description}</p>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                        <p className="text-gray-900 flex items-center">
                          <MapPin size={16} className="mr-1 text-primary-500" />
                          {selectedItem.location}
                        </p>
                      </div>
                      
                      <div className="border-t pt-4">
                        <h4 className="font-medium text-gray-800 mb-3">Contact Information</h4>
                        <div className="space-y-2">
                          <p className="flex items-center text-gray-900">
                            <User size={16} className="mr-2 text-primary-500" />
                            {selectedItem.contact_name}
                          </p>
                          <p className="flex items-center text-gray-900">
                            <Phone size={16} className="mr-2 text-primary-500" />
                            {selectedItem.contact_phone}
                          </p>
                          {selectedItem.contact_email && (
                            <p className="flex items-center text-gray-900">
                              <Mail size={16} className="mr-2 text-primary-500" />
                              {selectedItem.contact_email}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  ) : (
                    // Application Details
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Application ID</label>
                          <p className="text-gray-900">{selectedItem.id}</p>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Date Submitted</label>
                          <p className="text-gray-900">{formatDate(selectedItem.created_at)}</p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                          <p className="text-gray-900">{selectedItem.first_name}</p>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                          <p className="text-gray-900">{selectedItem.last_name}</p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                          <p className="text-gray-900">{selectedItem.email}</p>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                          <p className="text-gray-900">{selectedItem.phone}</p>
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                        <p className="text-gray-900">{selectedItem.address}</p>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Availability</label>
                        <p className="text-gray-900 capitalize">{selectedItem.availability}</p>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Selected Roles</label>
                        <div className="flex flex-wrap gap-2">
                          {selectedItem.selected_roles.map((role, index) => (
                            <span key={index} className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full">
                              {role}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      {selectedItem.experience && (
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Experience</label>
                          <p className="text-gray-900">{selectedItem.experience}</p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
                
                <div className="p-6 border-t bg-gray-50">
                  <Button onClick={() => setSelectedItem(null)} className="w-full">
                    Close
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;