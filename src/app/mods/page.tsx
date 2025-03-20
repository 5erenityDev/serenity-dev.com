
const GamesPage = () => {
  return (
    <div className="sm:p-20">
      <main className="flex flex-col gap-[50px] items-center text-lg/10">
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