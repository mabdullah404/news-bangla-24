import Link from "next/link";

const NotFound = () => {
  return (
    <div className="bg-white flex flex-col items-center justify-center text-center py-24 px-4">
      <h1 className="text-8xl font-bold text-red-700">৪০৪</h1>

      <h2 className="mt-4 text-2xl font-bold text-gray-900">
        পেজটি খুঁজে পাওয়া যায়নি
      </h2>

      <p className="mt-2 text-gray-500">
        আপনি যে পেজটি খুঁজছেন সেটি হয়তো সরে গেছে বা আর নেই।
      </p>

      <Link
        href="/"
        className="mt-6 rounded bg-red-700 px-6 py-2 text-white hover:bg-red-800"
      >
        হোম পেজে ফিরে যান
      </Link>
    </div>
  );
};

export default NotFound;