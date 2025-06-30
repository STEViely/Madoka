import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex flex-col m-0 p-0 leading-none h-screen overflow-hidden backface-hidden lg:hidden">
      <div className="relative w-full h-1/3 -mb-px">
        <Image
          src="/bg1.svg"
          alt="background1"
          fill
          className="object-cover backface-hidden "
        />
        <div className="absolute flex items-center justify-center z-10">
          <Image src="/product45degree.png" width={50} height={50} />
          <title>DOG & CAT PERFUME</title>
        </div>
        <div className="absolute inset-0 flex items-end justify-center z-10">
          <p className="text-[8px] text-white">
            NO PRESERVATIVE &nbsp; NO ALCOHOL &nbsp; NO MORE TEARS
          </p>
        </div>
      </div>
      <div className="relative w-full h-1/3 -mb-px">
        <Image
          src="/bg2.svg"
          alt="background2"
          fill
          className="object-cover backface-hidden"
        />
        <div className="absolute pt-4 inset-0 flex items-center justify-center z-10">
          <div className="w-[50%]"></div>
          <div className="w-[50%] pr-4">
            <p className="text-[12px] text-white leading-relaxed">
              สเปย์อาบแห้งพร้อมน้ำหอมกลิ่น <b>Golden Siren</b> ช่วยทำให้ขนฟูนุ่ม
              หอมสดชื่น โดยไม่ต้องใช้น้ำล้างออก
              ใช้ได้ทั้งสุนัขแลพเเมวทุกสายพันธุ์ ใช้ง่าย ปลอดภัย
              ไร้สารเคมีที่ทำให้เกิดการระคายเคืองต่อผิวหนัง
              ไม่ก่อให้เกิดอาการเเพ้เเละ ยัง ช่วยลดการสะสมของเชื้อรา ยีส์
              และเเบคทีเรีย
            </p>
          </div>
        </div>
      </div>
      <div
        className="relative w-full h-1/3 -mb-px"
        style={{
          background:
            "linear-gradient(to bottom, #7492AA 0%, #ffffff 49%, #7492AA 100%)",
        }}
      >
        {/* กล่องภาพสินค้า */}
        <div className="w-full h-full  flex items-center justify-center relative">
          <Image src="/quoteProduct.svg" alt="product" fill />

          {/* ตำแหน่ง quote ซ้ายล่าง (หรือปรับตามต้องการ) */}
        </div>
      </div>
    </div>
  );
}
