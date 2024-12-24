"use client"
import React, { useState } from 'react';
import AdminInboxModel from "../components/AdminInboxModel"
const AdminInboxCard = ({
  name,
  whatsappNumber,
  date,
  message,
  isLoading = false,  
  inboxDetailsObj
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inboxDetails, setInboxDetails] = useState(inboxDetailsObj);

  const openModal = () => {
    setInboxDetails(inboxDetails);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setInboxDetails(null); // This ensures the state is reset when the modal is closed
  };

  const cellClass = `px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white ${
    isLoading ? 'skeleton-loading' : ''
  }`;


  return (
    <>
      <tr className="binbox-b dark:binbox-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 w-full" onClick={openModal}>
        <td className={`px-4 py-2 ${isLoading ? 'skeleton-loading' : ''}`}>
          <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">
            {name}
          </span>
        </td>
        <td className={cellClass}>{whatsappNumber}</td>
        <td className={cellClass}>{date}</td>
      </tr>
      {isModalOpen && (
        <AdminInboxModel 
        inboxDetails={inboxDetails} // Use updated state
          onClose={closeModal} 
        />
      )}
    </>
  );
};

export default AdminInboxCard;