import { InterActiveCard } from "@/components/interactive-card"
import { BellRing } from "lucide-react"

export default function Home() {
  return (
    <main className="relative h-screen w-screen bg-slate-900 text-slate-200">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#b5b4b412_1px,transparent_1px),linear-gradient(to_bottom,#b5b4b412_1px,transparent_1px)] bg-[size:34px_34px] grid grid-rows-[34px_1fr_34px]" />
      <div className="flex justify-center items-center h-screen">
        <InterActiveCard
          className="bg-slate-700 text-slate-200"
          cardDescription="We ship a new cool UI component"
          cardTitle="New UI Component"
          cardContent={
            <div className="flex items-center justify-center ">
              <div className="flex gap-4 items-center bg-slate-700 rounded-full">
                <BellRing size={64} />
                <span>It will interact with the mouse cursor magically!</span>
              </div>
            </div>
          }
        />
      </div>
    </main>
  )
}
