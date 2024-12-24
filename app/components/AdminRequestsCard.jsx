"use client"
import React, { useState } from 'react';
import RequestDetailsModal from './AdminRequestDetailsModel.jsx';

const AdminRequestsCard = ({
  volunteerName,
  volunteerPhone,
  volunteerCity,
  requestsDate,
  isLoading = false,  
  requestDetailsObj
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [requestDetails, setRequestDetails] = useState(requestDetailsObj);

  const openModal = () => {
    setRequestDetails(requestDetailsObj);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setRequestDetails(null); // This ensures the state is reset when the modal is closed
  };

  const cellClass = `px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white ${
    isLoading ? 'skeleton-loading' : ''
  }`;


  return (
    <>
      <tr className="brequest-b dark:brequest-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 w-full" onClick={openModal}>
        <td className={`px-4 py-2 ${isLoading ? 'skeleton-loading' : ''}`}>
          <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">
            {volunteerName}
          </span>
        </td>
        <td className={cellClass}>{volunteerCity}</td>
        <td className={cellClass}>{volunteerPhone}</td>
        <td className={cellClass}>{requestsDate}</td>
      </tr>
      {isModalOpen && (
        <RequestDetailsModal 
          requestDetails={requestDetails} // Use updated state
          onClose={closeModal} 
        />
      )}
    </>
  );
};

export default AdminRequestsCard;