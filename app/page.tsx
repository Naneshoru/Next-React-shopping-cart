import BusinessCard from "./components/business-card";
import Link from "next/link";
import Header from "@app/components/header";

export default function Home() {
  return (
    <div className="bg-black bg-home-image bg-cover bg-center flex flex-col h-dvh">
      <Header />
      <main className="flex flex-col justify-center text-center max-w-5xl mx-auto h-full">
        <BusinessCard >
          <h1 className="text-4xl font-bold">Ricardo&apos;s Shop</h1>
          <address>
            53 S McDonnell Rd <br/>
            San Francisco, CA 94128, United States
          </address>
          <p>
            Open daily: 9am to 5pm
          </p>
          <Link href={'tel:55555555555'} className="hover:underline">
            555-555-5555
          </Link>
        </BusinessCard>
      </main>
    </div>
  );
}
