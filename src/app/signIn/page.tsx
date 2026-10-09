"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

import React from "react";
import { toast } from "react-toastify";

const SignIn = () => {
  const router = useRouter();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const { data, error } = await authClient.signIn.email({
      email,
      password,
      callbackURL: "/",
    });

    if (data) {
      console.log(data);
      toast.success("SignIn Success full");
      router.push("/");
    }

    if (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };

  const handleGoogleSignIn = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
    console.log(data)
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <h1 className="text-2xl font-bold text-red-700 mt-5">সাইন ইন</h1>

        <fieldset className="fieldset rounded-box p-4">
          <label className="label font-bold">ইমেইল</label>
          <input
            name="email"
            type="email"
            className="input w-md"
            placeholder="Email"
            autoComplete="off"
            required
          />

          <label className="label font-bold">পাসওয়ার্ড</label>
          <input
            name="password"
            type="password"
            className="input w-md"
            placeholder="Password"
            autoComplete="off"
            required
          />

          <button
            type="submit"
            className="btn btn-neutral bg-red-700 text-white mt-4 border-none"
          >
            সাইন ইন করুন
          </button>
          <button type="button" onClick={handleGoogleSignIn} className="btn">Sign In with Google</button>
        </fieldset>
      </form>
    </div>
  );
};

export default SignIn;
