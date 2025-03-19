
const GamesPage = () => {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-[50px] row-start-2 items-center text-lg/10">
        <h1>My Mods/Hacks/Shaders:</h1>
        <ul>
            <li><a href="/mods/mkds">MKDS Romhack (In development)</a></li>
            <li><a href="/mods/sm64">SM64 Romhack (In development)</a></li>
            <li><a href="/mods/shader">ReShade Shader (In development)</a></li>
        </ul>
        </main>
    </div>
  );
};

export default GamesPage;