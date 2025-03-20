import Image from "next/image";

const GamesPage = () => {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-[50px] row-start-2 items-center text-lg/10">
        <h1>A much better page is to come but for now I'll just show it all right here:</h1>
        <ul>
            <li><Image src="/images/art/toymaker.png" alt="Toymaker from Wretched Rose" style={{ width: '70%', height: 'auto' , display: 'block', margin: 'auto'}} width={2086} height={2086} priority/></li>
            <li><Image src="/images/art/jester.jpg" alt="Jester Dimension" style={{ width: '70%', height: 'auto' , display: 'block', margin: 'auto'}} width={1280} height={960} priority/></li>
            <li><Image src="/images/art/bear.jpg" alt="Torn Bear" style={{ width: '70%', height: 'auto' , display: 'block', margin: 'auto'}} width={1024} height={896} priority/></li>
            <li><Image src="/images/art/uwasa.jpg" alt="Uwasa Labyrinth from Magia Record" style={{ width: '70%', height: 'auto' , display: 'block', margin: 'auto'}} width={1024} height={896} priority/></li>
            <li><Image src="/images/art/reapnsow.jpg" alt="Reap What You Sow Gameplay mockup" style={{ width: '70%', height: 'auto' , display: 'block', margin: 'auto'}} width={1280} height={960} priority/></li>
            <li><Image src="/images/art/flandre.jpg" alt="Flandre's Wings" style={{ width: '70%', height: 'auto' , display: 'block', margin: 'auto'}} width={1280} height={960} priority/></li>
            <li><Image src="/images/art/misty_lake.jpg" alt="Misty Lake from Touhou as a MKDS course" style={{ width: '70%', height: 'auto' , display: 'block', margin: 'auto'}} width={1280} height={960} priority/></li>
        </ul>
        </main>
    </div>
  );
};

export default GamesPage;