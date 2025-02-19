import { Metadata } from "next"

export const metadata: Metadata = {
  title:'Good'
}
export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="ml-16">
        <h1 className="text-2xl font-bold">메인 콘텐츠</h1>
          
      </div>
    </main>
  )
}