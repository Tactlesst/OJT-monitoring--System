import Link from 'next/link';

export default function Dashboard() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <p className="mt-2 text-gray-600">Welcome to your account</p>
      <Link href="/login" className="mt-4 bg-red-500 text-white px-6 py-2 rounded">
        Logout
      </Link>
    </div>
  );
}
