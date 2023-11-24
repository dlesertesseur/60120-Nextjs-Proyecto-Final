"use client";
import React, { useContext, useState } from "react";
import InputEmail from "../commons/InputEmail";
import InputPassword from "../commons/InputPassword";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { BASE_URL } from "@/app/data/config";
import { UserContext } from "@/app/context/UserContext";

const SinginPanel = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const {setUser} = useContext(UserContext);
  
  async function submitForm(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const body = JSON.stringify({
      email: formData.get("email"),
      password: formData.get("password"),
    });

    const url = `${BASE_URL}/api/auth`;

    const res = await fetch(url, {
      method: "POST",
      body: body,
    });

    const ret = await res.json();

    if (ret.error) {
      const err = { message: ret.error, status: res.status };
      setError(err);
    } else {
      setUser(ret);
      router.push("/admin");
    }
  }

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Image
          className="mx-auto"
          src="/logo.png"
          alt="logo"
          width={128}
          height={128}
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          {"Sign in to your account"}
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          className="space-y-6"
          onSubmit={submitForm}
          method="POST"
          action="#"
        >
          <InputEmail
            label={"Email"}
            setValue={(e) => {
              setEmail(e.target.value);
              setError(null);
            }}
            value={email}
            error={error?.status === 404 ? error.message : null}
          />
          <InputPassword
            label={"Password"}
            setValue={(e) => {
              setPassword(e.target.value);
              setError(null);
            }}
            value={password}
            error={error?.status === 401 ? error.message : null}
          />

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </form>

        <div className={"mt-5"}>
          <button
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={(e) => {
              e.preventDefault();
              router.push("/signup");
            }}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default SinginPanel;
