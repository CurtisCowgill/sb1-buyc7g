import React from 'react';
import { useParams } from 'react-router-dom';

const CustomerDetail: React.FC = () => {
  const { id } = useParams();

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900">Customer Details - {id}</h1>
    </div>
  );
};

export default CustomerDetail;