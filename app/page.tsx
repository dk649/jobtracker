import Image from "next/image";
import jobImage from "../assets/jobsearch.svg";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <header className="max-w-6xl mx-auto px-4 sm:px-8 py-6 mb-5">
        Job Tracker
      </header>
      <section className="max-w-6xl mx-auto px-4 sm:px-8 h-screen -mt-20 grid lg:grid-cols-[1fr, 600px] items-center">
        <div>
          <h1 className="capitalize text-4xl md:text-7xl mt-4">
            <span className="text-primary">effortless</span> job management
          </h1>
          <p className="leading-loose max-w-md mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nam
            aliquam sem et tortor consequat id.
          </p>

          <Button className="mt-4">
            <Link href="/add-job">Get Started</Link>
          </Button>
        </div>
        <Image
          src={jobImage}
          width="300"
          height="300"
          alt="job search"
          className="hidden lg:block"
        />
      </section>
    </main>
  );
}
