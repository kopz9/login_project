import Image from "next/image";
import LoginComponent from "./login-component";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
        <LoginComponent />
        <div className="mt-[160px] flex flex-col items-start">
          <h1 className="text-xl font-medium ml-[210px]">
            You should, MoveIt!
          </h1>
          <Image
            src={"/main-illustration.svg"}
            alt={"main-logo"}
            height={60}
            width={520}
          />
        </div>
      </div>
    </>
  );
}
