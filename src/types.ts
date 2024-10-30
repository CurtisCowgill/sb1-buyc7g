export interface Project {
  id: number;
  name: string;
  client: string;
  status: 'Planning' | 'In Progress' | 'Completed';
  startDate: string;
  endDate: string;
  budget: number;
}

export interface Customer {
  id: number;
  name: string;
  email: string;
  phone: string;
  company: string;
  address: string;
  projectCount: number;
}

export interface Employee {
  id: number;
  name: string;
  role: string;
  email: string;
  phone: string;
  startDate: string;
  status: 'Active' | 'On Leave' | 'Inactive';
}

export interface Vendor {
  id: number;
  name: string;
  type: string;
  contact: string;
  email: string;
  phone: string;
  status: 'Active' | 'Inactive';
}

export interface Location {
  id: number;
  name: string;
  type: 'Neighborhood' | 'City' | 'County' | 'State' | 'Inspection Jurisdiction';
  parent?: string;
  status: 'Active' | 'Inactive';
}

export interface Crew {
  id: number;
  name: string;
  lead: string;
  size: number;
  specialty: string;
  status: 'Available' | 'Assigned' | 'On Leave';
}