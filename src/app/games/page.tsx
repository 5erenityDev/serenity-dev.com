
const GamesPage = () => {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-[50px] row-start-2 items-center text-lg/10">
        <h1>My games:</h1>
        <ul>
            <li><a href="/games/wretched-rose">Wretched Rose (In development)</a></li>
            <li><a href="/games/up-to-bat">Up to Bat! (In development)</a></li>
            <li><a href="/games/echoes-in-my-mind">Echoes in my Mind</a></li>
            <li><a href="/games/hunt-for-halford">Hunt for Halford</a></li>
            <li><a href="/games/hero-for-a-day">Hero for a Day</a></li>
            <li><a href="/games/restoring-reparia">Restoring Reparia (Working title)</a></li>
            <li><a href="/games/reap-what-you-sow">Reap What You Sow (In development)</a></li>
        </ul>
        </main>
    </div>
  );
};

export default GamesPage;