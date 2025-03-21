import type { Metadata } from "next";
import Image from "next/image";

import "./globals.css";

export const metadata: Metadata = {
  title: "SerenityDev",
  description: "Indie Game Developer creating \"Wretched Rose\" and \"Up to Bat\"",
  icons: {
    icon:'/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased text-1xl font-helvetica`}
      >
        <div className = "min-h-screen bg-[url(/images/site/background.png)] bg-[auto_32px]">
          <div className = "flex-grow bg-night-2 mx-20">
            <header className = "bg-night-1">
              <Image
              src="/images/site/SerenityDev.png"
              alt="Next.js logo"
              style={{ width: '30%', height: 'auto' , display: 'block', margin: 'auto'}}
              width={960}
              height={270}
              
              priority
              />
              <div className="row-start-3 flex gap-[150px] flex-wrap items-center justify-center bg-night-1 h-20 text-5xl">
                <a href="/">Home</a>
                <a href="/games">Games</a>
                <a href="/mods">Mods/Romhacks/Shaders</a>
                <a href="/art">Art</a>
              </div>
            </header>
            <div className="min-h-screen">
              
            
            {children}
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <footer className="bg-night-1 h-40">
              <h1 className ="text-1xl text-center pt-4 mb-1">Follow me on social media</h1>
              <br/>
              <div className="row-start-3 flex gap-[70px] flex-wrap items-center justify-center">
                <a
                  className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                  href="https://bsky.app/profile/serenity-dev.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    aria-hidden
                    src="/images/site/icons/bluesky.png"
                    alt="Bluesky icon"
                    width={64}
                    height={64}
                  />
                </a>
                <a
                  className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                  href="https://twitter.com/Serenity_Dev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    aria-hidden
                    src="/images/site/icons/twitter.png"
                    alt="Twitter (not X) icon"
                    width={64}
                    height={64}
                  />
                </a>
                <a
                  className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                  href="https://www.youtube.com/@Serenity_Dev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    aria-hidden
                    src="/images/site/icons/youtube.png"
                    alt="YouTube icon"
                    width={64}
                    height={64}
                  />
                </a>
                <a
                  className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                  href="https://serenitydev.itch.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    aria-hidden
                    src="/images/site/icons/itch.png"
                    alt="Itchio icon"
                    width={64}
                    height={64}
                  />
                </a>
              </div>
            </footer>
          </div>
        </div>
        
      </body>
    </html>
    
  );
}
