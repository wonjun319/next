import Image from "next/image"


export default function post() {
    return (
        <div className="flex flex-col gap-2">
        <Image
                src="https://sinkpure.com/data/editor/2304/6d87c136409a443b7c26d78afcd3c679_1681347075_0843.jpg"
                alt="img"
                layout="intrinsic" 
                width={500}  // 실제 이미지 너비
                height={250} // 실제 이미지 높이
                className="object-cover"
              />
        
        <Image
                src="https://sinkpure.com/data/editor/2409/680206e3df5d36cec266488d53e3abc4_1725947176_3319.jpg"
                alt="img"
                layout="intrinsic" 
                width={500}  // 실제 이미지 너비
                height={250} // 실제 이미지 높이
                
                className="object-cover"
              />
        <Image
                src="https://sinkpure.com/data/editor/2304/6d87c136409a443b7c26d78afcd3c679_1681347543_5784.jpg"
                alt="img"
                layout="intrinsic" 
                width={500}  // 실제 이미지 너비
                height={250} // 실제 이미지 높이
                className="object-cover"
              />
              <Image
                src="https://sinkpure.com/data/editor/2304/6d87c136409a443b7c26d78afcd3c679_1681347569_8171.jpg"
                alt="img"
                layout="intrinsic" 
                width={500}  // 실제 이미지 너비
                height={250} // 실제 이미지 높이
                className="object-cover"
              />
              <Image
                src="https://sinkpure.com/data/editor/2304/6d87c136409a443b7c26d78afcd3c679_1681349027_7372.jpg"
                alt="img"
                layout="intrinsic" 
                width={500}  // 실제 이미지 너비
                height={250} // 실제 이미지 높이
                className="object-cover"
              />

</div>
    )
}