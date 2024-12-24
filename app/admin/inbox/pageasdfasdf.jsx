import { orderBy, startAfter, collection, query, limit, getDocs } from 'firebase/firestore';
import {db} from "../../lib/firebase/config"
import AdminInboxCard from "../../components/AdminInboxCard"
const AdminRequestsPage = async() => {
  const allInboxDocs = await getDocs(collection(db, "msgs"));
  const msgs = [];

  allInboxDocs.forEach((request) => {
    const data = request.data();
    const createdAt = data.createdAt ? data.createdAt.toDate() : null;
  
    // Format createdAt to DD/MM/YYYY
    const formattedDate = createdAt
      ? `${createdAt.getDate().toString().padStart(2, '0')}/${
          (createdAt.getMonth() + 1).toString().padStart(2, '0')
        }/${createdAt.getFullYear()}`
      : null;
  
    msgs.push({ ...data, id: request.id, createdAt: formattedDate });
  });
  console.log(msgs)
  // {
  //   volunteerDetails: {
  //     firstName: 'Anzi',
  //     email: 'djam4343@gmail.com',
  //     lastName: 'meow',
  //     city: 'sukkur',
  //     phoneNumber: '03248226367'
  //   },
  //   date: '10/28/2024',
  //   createdAt: Timestamp { seconds: 1729018800, nanoseconds: 246000000 },
  //   id: 'aweXq7qTQdDScyfqntDT'
  // }
  return (
    <main className="my-8">
      <h1 className="text-5xl text-left px-6">Inbox</h1>

      <section className="my-8 md:w-[80vw]">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="p-4">Name</th>
                <th scope="col" className="px-4 py-3">Whatsapp number</th>
                <th scope="col" className="px-4 py-3">Dated</th>
              </tr>
            </thead>
            <tbody>
              {
                msgs.map((request) => {
                  return (
                    <AdminInboxCard
                      key={request.id}
                      isLoading={false}
                      name={request?.name}
                      whatsappNumber={request.whatsappNumber}
                      date={request.createdAt}
                      inboxDetailsObj={request}
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
