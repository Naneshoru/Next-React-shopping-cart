import BusinessCard from "./components/business-card";
import Link from "next/link";
import Header from "@app/components/header";
import { use } from "react";

export default function Home() {
  const fetchWeather = async () => {

    // const API_KEY = '0d4f9ba8eadb4d26a59135439251601'
    // const BASE_URL = 'http://api.weatherapi.com/v1/current.json'
    
  
      const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
      if (!response.ok) {
        throw new Error('Failed to fetch weather');
      }
      return await response.json();
  }

  const weather = use(fetchWeather());

  return (
    <div className="bg-black bg-home-image bg-cover bg-center flex flex-col h-dvh">
      <Header />
      <main className="flex flex-col justify-center text-center max-w-5xl mx-auto h-full">
        <BusinessCard >
          <h1 className="text-4xl font-bold">Ricardo&apos;s Shop</h1>
    {JSON.stringify(weather.name)}
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
