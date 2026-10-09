"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";

const UserInfo = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;


  const handleSignOut = async ()=>{

    await authClient.signOut()

  }




  return (
    <div className="flex justify-center md:justify-self-end gap-2 sm:gap-3">
      {user ? (
        <div className="flex flex-col items-center gap-2">
          <div className="avatar">
            <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
              <img
                alt="Tailwind-CSS-Avatar-component"
                src={user?.image as string}
              />
            </div>
          </div>

          <h2 className="">{user.name}</h2>
          <button onClick={handleSignOut} className="btn btn-error btn-xs">Sign Out</button>
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default UserInfo;
