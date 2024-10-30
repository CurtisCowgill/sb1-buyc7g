import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Calendar, DollarSign } from 'lucide-react';
import WorkOrderList from '../components/WorkOrderList';

// Mock data - replace with actual data fetching
const project = {
  id: '1',
  title: 'Downtown Foundation Repair',
  status: 'In Progress',
  startDate: '2024-03-01',
  estimatedCompletion: '2024-05-15',
  budget: 150000,
  progress: 45,
  customer: {
    name: 'ABC Corporation',
    location: '123 Main Street',
    city: 'Downtown District',
    state: 'TX',
    zip: '75001'
  },
  workOrders: [
    {
      id: '1',
      title: 'Site Preparation',
      crew: 'Team Alpha',
      startDate: '2024-03-01',
      inspection: '2024-03-02T10:00',
      concrete: '2024-03-03T08:00',
      vendors: ['Materials Inc', 'Equipment Co'],
      status: 'Completed',
      progress: 100
    },
    // Add more work orders as needed
  ]
};

const ProjectDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const handleWorkOrderUpdate = (workOrderId: string, data: any) => {
    console.log('Updating work order:', workOrderId, data);
    // Implement update logic here
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-6">
            {/* Customer Information */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white shadow rounded-lg p-6">
                <h2 className="text-lg font-medium text-gray-900 mb-4">Customer Information</h2>
                <div className="space-y-3">
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Customer:</span> {project.customer.name}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Location:</span> {project.customer.location}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Area:</span> {project.customer.city}, {project.customer.state} {project.customer.zip}
                  </p>
                </div>
              </div>

              {/* Project Location Map */}
              <div className="bg-white shadow rounded-lg p-6">
                <h2 className="text-lg font-medium text-gray-900 mb-4">Project Location</h2>
                <div className="h-48 bg-gray-100 rounded-lg flex items-center justify-center">
                  <MapPin className="h-8 w-8 text-gray-400" />
                  <span className="ml-2 text-gray-500">Map View</span>
                </div>
              </div>
            </div>

            {/* Project Overview */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white shadow rounded-lg p-6">
                <h2 className="text-lg font-medium text-gray-900 mb-4">Project Overview</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Start Date</p>
                    <p className="font-medium flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {project.startDate}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Estimated Completion</p>
                    <p className="font-medium flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {project.estimatedCompletion}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Budget</p>
                    <p className="font-medium flex items-center">
                      <DollarSign className="h-4 w-4 mr-1" />
                      {project.budget.toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Progress</p>
                    <div className="mt-1">
                      <div className="h-2 bg-gray-200 rounded-full">
                        <div
                          className="h-2 bg-blue-600 rounded-full"
                          style={{ width: `${project.progress}%` }}
                        />
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{project.progress}% Complete</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Work Orders */}
            <div className="bg-white shadow rounded-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-medium text-gray-900">Work Orders</h2>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                  Add WO
                </button>
              </div>
              <WorkOrderList
                workOrders={project.workOrders}
                onUpdate={handleWorkOrderUpdate}
              />
            </div>
          </div>
        );

      case 'time':
        return (
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Time Tracking</h2>
            {/* Add time tracking content */}
          </div>
        );

      case 'financial':
        return (
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Financial Overview</h2>
            {/* Add financial content */}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <div className="mb-6">
        <button
          onClick={() => navigate('/projects')}
          className="flex items-center text-gray-600 hover:text-gray-900 mb-4"
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to Projects
        </button>
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">{project.title}</h1>
          <div className="flex space-x-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
              {project.status}
            </span>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Edit Project
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mb-6 border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {['overview', 'time', 'financial'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`${
                activeTab === tab
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm capitalize`}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      {renderTabContent()}
    </div>
  );
};

export default ProjectDetail;