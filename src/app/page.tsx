import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[50px] row-start-2 items-center text-lg/3">
        <Image
          src="/images/SerenityDev.png"
          alt="Next.js logo"
          width={1000}
          height={1000}
          priority
        />
        <h2>Indie Game Developer creating "Wretched Rose" and "Up to Bat"</h2>
        <h3>Website under development</h3>
        <br/>
        <p>Check out my:</p>
        <p><a href="games">Games</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="mods">Mods/Romhacks/Shaders</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="art">Art</a></p>
        <br/>
        <p>Follow me on:</p>
        <ul>
          <li><a href="https://bsky.app/profile/serenity-dev.com">Bluesky</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://twitter.com/Serenity_Dev">Twitter (Not X)</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://www.youtube.com/@Serenity_Dev">YouTube</a></li>
          <br/><br/>
          <li></li>
        </ul>
        
      </main>
    </div>
  );
}
