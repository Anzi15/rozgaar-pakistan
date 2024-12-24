import { orderBy, startAfter, collection, query, limit, getDocs } from 'firebase/firestore';
import {db} from "../../lib/firebase/config"
import AdminRequestsCard from "../../components/AdminRequestsCard.jsx";

const AdminRequestsPage = async() => {
  const allRequestDocs = await getDocs(collection(db, "volunteer-requests"));
  const requests = [];

  allRequestDocs.forEach((request)=>{
    requests.push({...request.data(), id:request.id})
  })

  return (
    <main className="my-8">
      <h1 className="text-5xl text-left px-6">Requests</h1>

      <section className="my-8 md:w-[80vw]">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="p-4">Name</th>
                <th scope="col" className="px-4 py-3">City</th>
                <th scope="col" className="px-4 py-3">Phone</th>
                <th scope="col" className="px-4 py-3">Dated</th>
              </tr>
            </thead>
            <tbody>
              {
                requests.map((request) => {
                  return (
                    <AdminRequestsCard
                      key={request.id}
                      isLoading={false}
                      volunteerName={request.fullName}
                      volunteerPhone={request.whatsappNumber}
                      requestsDate={request.createdAt}
                      volunteerCity={request.city}
                      requestDetailsObj={request}
                    />
                  );
                })
              }
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
};

export default AdminRequestsPage;
