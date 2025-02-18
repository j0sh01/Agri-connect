import { useSession, getSession } from 'next-auth/react'; // Updated import path

export default function Dashboard() {
  const { data: session } = useSession(); // Updated syntax for useSession

  if (!session) {
    return <p className="text-center mt-8">You must be logged in to view this page.</p>;
  }

  return (
    <div className="text-center mt-8">
      <h2 className="text-xl font-semibold">Welcome, {session.user.name}!</h2>
      <p className="text-gray-700">This is your dashboard.</p>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context); // Updated syntax for getSession
  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }
  return {
    props: { session },
  };
}