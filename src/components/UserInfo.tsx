"use client";

// import { authClient } from "@/lib/auth-client";
import Link from "next/link";

const UserInfo = () => {
  // const { data: session } = authClient.useSession();
  const user: { name?: string; image?: string } | null = null; // session?.user;

  const handleSignOut = async () => {
    // await authClient.signOut()
  };




  return (
    <div className="flex justify-center md:justify-self-end gap-2 sm:gap-3">
      {/* user info (commented out temporarily) */}
      <div>
        <Link
          href="/signIn"
          className="text-xs sm:text-sm text-gray-700 px-3 py-2 hover:text-[#d11111] rounded-md transition duration-200 inline-block"
        >
          সাইন ইন
        </Link>

        <Link
          href="/signUp"
          className="bg-[#d11111] text-white px-3 sm:px-4 py-2 rounded-md text-xs sm:text-sm inline-block ml-2"
        >
          সাইন আপ
        </Link>
      </div>
    </div>
  );
};

export default UserInfo;
