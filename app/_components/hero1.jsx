import Image from "next/image";

export default function Hero1() {
  return (
    <div className="flex flex-col w-full overflow-x-hidden ">
      {/* Section 1 */}
      <div className="relative w-full -mb-px">
        {/* A: พื้นหลัง */}
        <Image
          src="/bg1.svg"
          alt="background1"
          width={1920}
          height={1080}
          className="w-full h-auto object-contain"
        />

        {/* B + C: อยู่ตรงกลางภาพพื้นหลังเสมอ */}
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          <div className="flex  items-center gap-4">
            <Image
              src="/product45degree.png"
              width={45}
              height={45}
              alt="Product"
              className=" drop-shadow-2xl"
            />
            <div>
              <h1 className="text-4xl md:text-5xl text-[#7492AA]  text-right px-4 py-2 font-bold">
                DOG & CAT
              </h1>
              <h1 className="text-4xl md:text-5xl text-[#D66C5E]  text-right px-4 py-2 font-bold">
                PERFUME
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="w-full -mb-px">
        <div className="relative w-full -mb-px">
          <Image
            src="/bg2.svg"
            alt="background2"
            width={1920}
            height={1080}
            className="w-full h-auto object-contain"
            priority
          />
          <div className="absolute inset-0 flex justify-center items-center pointer-events-none p-10">
            <div className="w-[50%]"></div>
            <div className="w-[50%] text-white">
              <p>
                สเปย์อาบแห้งพร้อมน้ำหอมกลิ่น Golden Siren ช่วยทำให้ขนฟูนุ่ม
                หอมสดชื่น โดยไม่ต้องใช้น้ำล้างออก
                ใช้ได้ทั้งสุนัขแลพเเมวทุกสายพันธุ์ ใช้ง่าย ปลอดภัย
                ไร้สารเคมีที่ทำให้เกิดการระคายเคืองต่อผิวหนัง
                ไม่ก่อให้เกิดอาการเเพ้เเละ ยัง ช่วยลดการสะสมของเชื้อรา ยีส์
                และเเบคทีเรีย
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div
        className="w-full flex  justify-center items-center overflow-hidden -mb-px"
        style={{
          background:
            "linear-gradient(to bottom, #7492AA 0%, #ffffff 49%, #7492AA 100%)",
        }}
      >
        {/* Left QRs */}
        <div className="flex flex-col items-center justify-center p-2">
          {["qr1", "qr2", "qr3"].map((name) => (
            <Image
              key={name}
              src={`/${name}.png`}
              alt={name}
              width={300}
              height={300}
              className="object-contain max-w-full h-auto"
            />
          ))}
        </div>

        {/* Rotated Product */}
        <div className="w-[150px] h-[500px] flex justify-center items-center p-2 ">
          <Image
            src="/product45degree.png"
            alt="product"
            width={80} // ลดขนาดเพื่อป้องกันล้นจอ
            height={500}
            className="-rotate-8 object-contain max-w-full h-auto w-auto"
          />
        </div>

        {/* Right QRs */}
        <div className="flex flex-col items-center justify-center p-2">
          {["ql1", "ql2", "ql3"].map((name) => (
            <Image
              key={name}
              src={`/${name}.png`}
              alt={name}
              width={300}
              height={300}
              className="object-contain max-w-full h-auto"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
