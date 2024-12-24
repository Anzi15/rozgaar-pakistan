import React from 'react';

const RequestDetailsModal = ({ requestDetails, onClose }) => {
  if (!requestDetails) return null;

  return (
    <div
      id="requestDetailsModal"
      tabIndex="-1"
      aria-hidden="true"
      className="fixed top-0 right-0 left-0 z-50 flex md:items-center justify-center items-start w-full h-full overflow-y-scroll overflow-x-hidden bg-gray-800 bg-opacity-50"
    >
      <div className="relative p-4 w-full md:max-w-4xl h-auto bg-white rounded-lg shadow dark:bg-gray-800 py-10 overflow-scroll">
        {/* Modal header */}
        <div className="flex justify-between items-center pb-4 mb-4 rounded-t brequest-b dark:brequest-gray-600">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Request #{requestDetails.id}
          </h3>
          <button
            type="button"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
            onClick={onClose}
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
        </div>
        {/* Modal body */}
        <div className="space-y-4 ">
            
            <div className="md:columns-3 text-left">
                <div>
                    <h3 className='font-bold text-black py-5 text-lg'>
                        Request Details
                    </h3>
                    <div className='flex pb-3 items-center gap-3'>
                        <h4 className='font-semibold '>
                            Date:
                        </h4>
                        <p>{requestDetails.createdAt}</p>
                    </div>
                </div>

                <div>
                    <h3 className='font-bold text-black py-5 text-lg'>
                        Volunteer Details
                    </h3>
                    <div className='flex pb-3 items-center gap-3'>
                        <h4 className='font-semibold '>
                            Full Name:
                        </h4>
                        <p>{requestDetails.fullName}</p>
                    </div>
                    <div className='flex pb-3 items-center gap-3'>
                        <h4 className='font-semibold '>
                        CNIC Number:
                        </h4>
                        <p>{requestDetails.cnic}</p>
                    </div>
                    <div className='flex pb-3 items-center gap-3'>
                        <h4 className='font-semibold '>
                            Email:
                        </h4>
                        <p>{requestDetails.email}</p>
                    </div>
                    <div className='flex pb-3 items-center gap-3'>
                        <h4 className='font-semibold '>
                            Phone:
                        </h4>
                        <p>{requestDetails.whatsappNumber}</p>
                    </div>
                    <div className='flex pb-3 items-center gap-3'>
                        <h4 className='font-semibold '>
                            Qualification:
                        </h4>
                        <p>{requestDetails.qualification}</p>
                    </div>
                </div>

            </div>
        </div>
      </div>
    </div>
  );
};

export default RequestDetailsModal;