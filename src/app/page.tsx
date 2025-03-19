import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[50px] row-start-2 items-center text-lg/3">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <h1>SerenityDev</h1>
        <h2>Indie Game Developer creating "Wretched Rose" and "Up to Bat"</h2>
        <h3>Website under development</h3>
      </main>
    </div>
  );
}
