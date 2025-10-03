import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="font-sans items-center justify-items-center min-h-screen p-8 pb-20 sm:p-20 flex flex-col gap-4">
      <h1>Working with NextJs - ShadCN</h1>
      <p>hey there, We will now be practicing with shadcn components</p>

      <a href="/chai" className="mt-4 justify-center m-4">
          <button className="mt-8 bg-blue-500 text-white px-6 py-2 mt-4 rounded-md hover:bg-blue-800">chaiPage</button>
      </a>

      <Button>Shadcn - Click me</Button>
      <Button variant="custom">Shadcn - Custom button</Button>

      <a href="/shadcn" className="mt-4 justify-center m-4">
          <button className="mt-8 bg-blue-500 text-white px-6 py-2 mt-4 rounded-md hover:bg-blue-800">ShadCN-Page</button>
      </a>
    </div>
  );
}
