"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const SignUpPage = () => {
  const router = useRouter();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const image = (formData.get("image") as string) || undefined;

    const { data, error } = await authClient.signUp.email({
      name,
      email,
      password,
      image: image?.trim() ? image : undefined,
      callbackURL: "/",
    });

    if (data) {
      console.log(data);
      toast.success("SignUp Success full")
      router.push("/");
    }

    if (error) {
      console.log(error);
      toast.error(error.message)
    }
  };

   const handleGoogleSignUp = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <h1 className="text-2xl font-bold text-red-700 mt-5 "> সাইন আপ</h1>

        <fieldset className="fieldset rounded-box p-4">
          <label className="label font-bold">নাম</label>
          <input type="text" name="name" className="input w-md" placeholder="Name" />

          <label className="label font-bold">ImageURL</label>
          <input name="image" type="url" className="input w-md" placeholder="Image" />

          <label className="label font-bold">ইমেইল</label>
          <input name="email" type="email" className="input w-md" placeholder="Email" />

          <label className="label font-bold">পাসওয়ার্ড</label>
          <input name="password" type="password" className="input w-md" placeholder="Password" />

          <button type="submit" className="btn btn-neutral bg-red-700 text-white mt-4 border-none">
            সাইন ইন করুন
          </button>
          <button type="button" onClick={handleGoogleSignUp} className="btn ">Google WIth Signin</button>
        </fieldset>
      </form>
    </div>
  );
};

export default SignUpPage;
