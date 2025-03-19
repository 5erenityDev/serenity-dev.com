import Image from "next/image";

const GamesPage = () => {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-[50px] row-start-2 items-center text-lg/10">
        <h1>A much better page is to come but for now I'll just show it all right here:</h1>
        <ul>
            <li><Image src="/images/art/serenity.jpg" alt="Toymaker from Wretched Rose" width={1000} height={1000} priority/></li>
            <li><Image src="/images/art/jester.jpg" alt="Jester Dimension" width={1000} height={1000} priority/></li>
            <li><Image src="/images/art/bear.jpg" alt="Torn Bear" width={1000} height={1000} priority/></li>
            <li><Image src="/images/art/uwasa.jpg" alt="Uwasa Labyrinth from Magia Record" width={1000} height={1000} priority/></li>
            <li><Image src="/images/art/reapnsow.jpg" alt="Reap What You Sow Gameplay mockup" width={1000} height={1000} priority/></li>
            <li><Image src="/images/art/flandre.jpg" alt="Flandre's Wings" width={1000} height={1000} priority/></li>
            <li><Image src="/images/art/misty_lake.jpg" alt="Misty Lake from Touhou as a MKDS course" width={1000} height={1000} priority/></li>
        </ul>
        </main>
    </div>
  );
};

export default GamesPage;