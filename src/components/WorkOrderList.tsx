import React, { useState } from 'react';
import { Calendar, Users } from 'lucide-react';
import WorkOrderModal from './WorkOrderModal';

interface WorkOrder {
  id: string;
  title: string;
  crew: string;
  startDate: string;
  inspection: string;
  concrete: string;
  vendors: string[];
  status: string;
  progress: number;
}

interface WorkOrderListProps {
  workOrders: WorkOrder[];
  onUpdate: (id: string, data: Partial<WorkOrder>) => void;
}

const WorkOrderList: React.FC<WorkOrderListProps> = ({ workOrders, onUpdate }) => {
  const [selectedWorkOrder, setSelectedWorkOrder] = useState<WorkOrder | null>(null);

  return (
    <>
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="divide-y divide-gray-200">
          {workOrders.map((wo) => (
            <div
              key={wo.id}
              onClick={() => setSelectedWorkOrder(wo)}
              className="p-4 hover:bg-gray-50 cursor-pointer transition-colors duration-150 ease-in-out"
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-gray-900">{wo.title}</h3>
                  <div className="mt-1 flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {wo.crew}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {wo.startDate}
                    </div>
                  </div>
                </div>
                <div className="ml-4">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      wo.status === 'Completed'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-blue-100 text-blue-800'
                    }`}
                  >
                    {wo.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedWorkOrder && (
        <WorkOrderModal
          workOrder={selectedWorkOrder}
          onClose={() => setSelectedWorkOrder(null)}
          onUpdate={(data) => {
            onUpdate(selectedWorkOrder.id, data);
            setSelectedWorkOrder(null);
          }}
        />
      )}
    </>
  );
};

export default WorkOrderList;