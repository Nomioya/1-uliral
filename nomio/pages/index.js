import Image from "next/image";
import localFont from "next/font/local";



export default function Home() {
  return (
    <div className=" h-screen w-full text  flex items-center justify-center">
    <div className=" h-[350px] w-[600px] bg-zinc-700">
      <div className="w-full h-2 bg-zinc-400 mt-6"></div>
      <div className="flex">
    <div className=" mt-12 ml-12 rounded-lg" >
     <Image className="rounded-full border border-white  border-4 border-dashed border-zinc-400"src="/nnk.jpg" width={200} height={300}/>
     </div>
      <div className=" mt-20 ml-8 text-sm font-semibold ">
        <div className="flex ">
        
        <p className="mb-2.5 mt-2 text-xl flex ">Nomindari</p>
        </div>
        <div className="flex ">
        <Image   src="/ml.png" width={25} height={5}/>
        <p className=" ml-1.5  ">Gmail: nominanomiob0117@gmail.com</p>
        </div>
      
      <div className="flex ">
        <Image   src="/sc.webp" width={30} height={10}/>
        <div className="mt-1.5"><p className="t-2 ml-2">Instaramm: nomioya</p></div>
        
        </div  >
        <div className="flex ">
        <Image   src="/phone.png" width={25} height={10}/>
        <div className="mt-1.5"><p className="t-2 ml-2">Phone num:8696****</p></div>
        
        </div  >
      </div>
    </div>
    <div className="w-full h-2 bg-zinc-400 mt-8"></div>
      </div>
    </div>
  );
}
