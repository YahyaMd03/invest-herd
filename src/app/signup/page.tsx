import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/investherd-logo.png";
import clsx from "clsx";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import SignupForm from "@/components/SignupForm";
import Button from "@/components/Button";


const inter = Inter({ subsets: ["latin"] });
export default function Login() {
    return (
      <div  className="bg-blue-ray flex flex-col h-full w-full space-y-10">
        <nav className="flex items-center h-20 px-6 md:px-12">
        <div className="flex flex-auto items-center space-x-3">
        <Image src={logo} alt="logo" width={70} height={50} className="mt-3" />
        <h1 className={clsx("text-3xl font-bold", inter.className)}>
          InvestHerd
        </h1>
      </div>
      <Link href="/login" className="mr-5">
            <Button text="Log In" variant="primary" />
          </Link>
      <Link href="/learn-more">
            <Button text="Learn More" variant="secondary" />
          </Link>
        </nav>
        
        
   
    <div>
    <SignupForm />
    </div>
    <div>
    <Footer />
    </div>
    </div>
    );
  }