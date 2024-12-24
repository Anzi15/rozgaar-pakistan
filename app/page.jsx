import { getDocs, query } from "firebase/firestore";
import Hero from "./components/Hero";

export default async function Home() {
  // const q = query(app)
  // const latestJobs = getDocs()
  return (
    <>
      <Hero title="Mustakbil, Apke hath me." subtitle="Explore the latest job openings, connect with top employers, and take your career to new heights." />
    </>
  );
}
