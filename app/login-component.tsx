import InputField from "@/components/InputField";
import Image from "next/image";

export default function LoginComponent() {
  return (
    <>
      <div className="bg-white h-full w-[450px] shadow-2xl">
        <div className="mt-[150px] w-[450px]">
          <div className="flex flex-col items-center">
            <Image src={"/logo.svg"} alt={"logos"} height={100} width={200} />
            <p className="font-semibold text-xl mt-5">
              Login into your account
            </p>
          </div>
          <div className="mt-10 m-5">
            <InputField
              placeholder="alex@email.com"
              label="Email Adress"
              name="email"
              type="email"
              src={"/email-icon.svg"}
              alt={"email icon"}
              width={20}
              height={20}
            />
            <InputField
              placeholder="Enter your password"
              label="Password"
              name="password"
              type="password"
              src={"/password-icon.svg"}
              alt={"password icon"}
              width={20}
              height={20}
            />
            <div className="h-full w-full text-right mt-2">
              <a href="#" className="underline text-blue-900">
                Forgot Password?
              </a>
            </div>
            <div className="flex text-center justify-center mt-5">
              <button className="bg-purple-800 w-full h-[50px] shadow-2xl text-white rounded-lg text-sm text-center font-medium">
                Login Now
              </button>
            </div>
          </div>
          <div className="relative flex py-5 items-center mx-5">
            <div className="flex-grow border-t border-gray-400 "></div>
            <span className="flex-shrink mx-4 text-gray-400">OR</span>
            <div className="flex-grow border-t border-gray-400"></div>
          </div>
          <div className="mx-5 flex text-center justify-center mt-5">
            <button className="bg-white w-full h-[50px] shadow-2xl text-purple-800 border border-purple-600 rounded-lg text-sm text-center font-medium">
              Signup Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
