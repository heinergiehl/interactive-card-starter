import InteractiveCard from "./components/interactive-card"

export default function Home() {
  return (
    <main className="relative md:h-screen w-screen bg-slate-900 text-slate-200">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#b5b4b412_1px,transparent_1px),linear-gradient(to_bottom,#b5b4b412_1px,transparent_1px)] bg-[size:34px_34px] grid grid-rows-[34px_1fr_34px]" />
      <div className="flex flex-wrap justify-center items-center h-full gap-8">
        <InteractiveCard />
        <InteractiveCard />
        <InteractiveCard />
        <InteractiveCard />
        <InteractiveCard />
      </div>
    </main>
  )
}
