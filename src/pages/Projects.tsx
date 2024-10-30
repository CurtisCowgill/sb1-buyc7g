import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus } from 'lucide-react';
import ProjectsTable from '../components/ProjectsTable';
import type { Project } from '../components/ProjectsTable';

const Projects: React.FC = () => {
  const navigate = useNavigate();

  const projects: Project[] = [
    {
      id: 'PRJ001',
      name: 'Downtown Foundation Repair',
      customer: 'ABC Corporation',
      location: 'Downtown District',
      status: 'In Progress',
      startDate: '2024-03-01',
      budget: '$150,000',
      completion: '45%'
    },
    {
      id: 'PRJ002',
      name: 'Residential Foundation Installation',
      customer: 'John Smith',
      location: 'Suburban Heights',
      status: 'Scheduled',
      startDate: '2024-03-15',
      budget: '$85,000',
      completion: '0%'
    },
    {
      id: 'PRJ003',
      name: 'Commercial Building Foundation',
      customer: 'XYZ Enterprises',
      location: 'Business Park',
      status: 'Completed',
      startDate: '2024-02-15',
      budget: '$250,000',
      completion: '100%'
    },
    {
      id: 'PRJ004',
      name: 'Industrial Complex Foundation',
      customer: 'Metro Industries',
      location: 'Industrial Zone',
      status: 'Planning',
      startDate: '2024-04-01',
      budget: '$350,000',
      completion: '0%'
    },
    {
      id: 'PRJ005',
      name: 'Retail Center Foundation',
      customer: 'Shopping Corp',
      location: 'Market District',
      status: 'On Hold',
      startDate: '2024-03-20',
      budget: '$200,000',
      completion: '15%'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Projects</h1>
        <button
          onClick={() => navigate('/projects/new')}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <Plus className="h-5 w-5 mr-2" />
          New Project
        </button>
      </div>

      <ProjectsTable projects={projects} />
    </div>
  );
};

export default Projects;