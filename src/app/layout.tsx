import type { Metadata } from "next";
import Image from "next/image";
import { Analytics } from "@vercel/analytics/react"

import "./globals.css";

export const metadata: Metadata = {
  title: "SerenityDev",
  description: "Indie Game Developer creating \"Wretched Rose\" and \"Up to Bat\"",
  keywords: ['indie games', 'game development', 'wretched rose', 'up to bat', 'serenitydev', "serenity dev", "serenity_dev"],
  themeColor: '#04010A',
  icons: {
    icon:'/favicon.ico',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1.0,
  },
  openGraph: {
    type: 'website',
    title: 'SerenityDev',
    description: 'Indie Game Developer creating "Wretched Rose" and "Up to Bat!"',
    locale: 'en_US',
    url: 'https://www.serenity-dev.com/',
    images: [
      {
        url: '/images/site/banner.png',
        width: 2000, // Optional: Specify width
        height: 500, // Optional: Specify height
        alt: 'SerenityDev Site Banner', // Optional: Specify alt text
      },
    ],
    
  },
  twitter: {
    card: 'summary', // Or 'summary', 'app', 'player'
    title: 'SerenityDev',
    description: 'Indie Game Developer creating "Wretched Rose" and "Up to Bat!"',
    site: '@Serenity_Dev', // Optional: Your website's Twitter handle
    creator: '@Serenity_Dev', // Optional: The creator's Twitter handle
    images: [
      {
        url: '/images/site/banner.png', // Specific image for Twitter
        width: 2000, // Optional
        height: 500, // Optional: Twitter often prefers a 16:9 aspect ratio
        alt: 'SerenityDev Site Banner', // Optional
      },
    ],
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
        <div className = "min-h-screen bg-[url(/images/site/background.png)] bg-[auto_2vw]">
          <div className = "flex-grow bg-night-2 mx-[0] lg:mx-[10vw]">
            <header className = "bg-night-1">
              <Image
              src="/images/site/SerenityDev.png"
              alt="Next.js logo"
              style={{ width: '30%', height: 'auto' , display: 'block', margin: 'auto'}}
              width={960}
              height={270}
              
              priority
              />
              <div className="row-start-3 flex gap-x-[10vw] flex-wrap items-center justify-center bg-night-1 text-[2vw]">
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
              <h1 className ="text-[70%] lg:text-[0.7rem] xl:text-[0.7vw] text-center pt-4 mb-1">Follow me on social media</h1>
              <br/>
              <div className="row-start-3 flex gap-[3vw] flex-wrap items-center justify-center">
                <a
                  className="flex items-center gap-2 hover:underline hover:underline-offset-4 size-[3rem]"
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
                  className="flex items-center gap-2 hover:underline hover:underline-offset-4 size-[3rem]"
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
                  className="flex items-center gap-2 hover:underline hover:underline-offset-4 size-[3rem]"
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
                  className="flex items-center gap-2 hover:underline hover:underline-offset-4 size-[3rem]"
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
