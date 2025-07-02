import Image from "next/image";

export default function Page() {
  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      <div className="relative w-full -mb-px">
        <Image src="/ab1.svg" alt="background1" width={1920} height={1080} className="w-full h-auto object-contain" />
      </div>
      <div className="relative w-full -mb-px">
        <Image src="/ab2.svg" alt="background1" width={1920} height={1080} className="w-full h-auto object-contain" />
      </div>
      <div className="relative w-full -mb-px">
        <Image src="/ab3.svg" alt="background1" width={1920} height={1080} className="w-full h-auto object-contain" />
      </div>
      <div className="relative w-full -mb-px">
        <Image src="/ab4.svg" alt="background1" width={1920} height={1080} className="w-full h-auto object-contain" />
      </div>
     
    </div>
  );
}
