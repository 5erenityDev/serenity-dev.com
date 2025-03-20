import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main>

        <Image
          src="/images/site/banner.png"
          alt="Next.js logo"
          style={{ width: '100%', height: 'auto', display: 'block', margin: 'auto' }}
          width={2000}
          height={500}
          priority
        />
        <h2 className ="text-sm text-center">(Website still in development)</h2>
        <h1 className ="text-7xl text-center mt-50 mb-10">Hello!</h1>
        <p className ="text-3xl text-center">I'm Sean, also known as SerenityDev or just Serenity. <br/><br/> I'm an Indie Game Developer creating "Wretched Rose" and "Up to Bat!" <br/><br/> I also enjoy creating romhacks/modded content, expect more of that soon.</p>
      </main>
    </div>
  );
}
