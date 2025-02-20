import Defaultbox from "@/components/ui/defaultbox"
import Profilebox from "@/components/ui/profilebox"
import { Metadata } from "next"
import Image from "next/image"
import { SpeedInsights } from "@vercel/speed-insights/next"
export const metadata: Metadata = {
  title:'Good'
}
export default function Home() {
  return (
    <main className="h-full w-[500px] xs:w-4/5 flex flex-col items-center pt-10 gap-4">
      <SpeedInsights/>
      <Image
        src="https://sinkpure.com/theme/basic/img/viz_model.png"
        alt="img"
        layout="responsive"
        width={250}  // 실제 이미지 너비
        height={250} // 실제 이미지 높이
        className="object-cover"
      />
      <Profilebox text={"프로필칸"}height={250}/>
      <Defaultbox href={'tel:01046429963'} text={"전화로 『 바로 』문의하기"}height={55}/>
      <Defaultbox href={'https://forms.gle/8mznfsYgP6iui4YF6'} text={"구글폼으로 문의하기"}height={55}/>
      <Defaultbox href={'https://blog.naver.com/kt6062002'} text={"최근 작업 구경하기"}height={55}/>
      <Defaultbox href={'/post'} text={"음식물 분쇄기 구경하기"}height={55}/>
      <Defaultbox href={'/post'} text={"하수구 막힘"}height={55}/>
      <Defaultbox href={'/post'} text={"가능 지역 확인"}height={55}/>
      
    </main>
  )
}
