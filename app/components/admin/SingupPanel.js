"use client";
import React, { useState } from "react";
import InputEmail from "../commons/InputEmail";
import InputPassword from "../commons/InputPassword";
import Image from "next/image";
import InputText from "../commons/InputText";
import { useRouter } from "next/navigation";
import { BASE_URL } from "@/app/data/dataConstants";
import { useUserContext } from "@/app/context/UserContext";
import InputTextArea from "../commons/InputTextArea";

const SingupPanel = () => {
  const { registerUser } = useUserContext();

  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [lastName, setLastName] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  async function submitForm(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const body = {
      lastName: formData.get("lastName"),
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
      address: formData.get("address"),
    };

    try {
      await registerUser(body);
      router.replace("/home");
    } catch (error) {
      console.log(error);
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
          {"Register a new user"}
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          className="space-y-6"
          onSubmit={submitForm}
        >
          <InputText
            label={"Last Name"}
            name={"lastName"}
            setValue={(e) => {
              setLastName(e.target.value);
            }}
            value={lastName}
          />
          <InputText
            label={"Name"}
            name={"name"}
            setValue={(e) => {
              setName(e.target.value);
            }}
            value={name}
          />
          <InputEmail
            label={"Email"}
            setValue={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          />
          <InputTextArea
            label={"Address"}
            name={"address"}
            setValue={(e) => {
              setAddress(e.target.value);
            }}
            value={address}
          />
          <InputPassword
            label={"Password"}
            setValue={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
          />

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SingupPanel;
