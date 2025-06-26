import Image from "next/image";

export default function Hero1() {
  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      {/* Section 1 */}
      <div className="w-full -mb-px">
        <Image
          src="/bg1.svg"
          alt="background1"
          width={1920}
          height={1080}
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Section 2 */}
      <div className="w-full -mb-px">
        <Image
          src="/bg2.svg"
          alt="background2"
          width={1920}
          height={1080}
          className="w-full h-auto object-contain"
        />
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
              src={`/${name}.svg`}
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
            className="-rotate-8 object-contain max-w-full h-auto"
          />
        </div>

        {/* Right QRs */}
        <div className="flex flex-col items-center justify-center p-2">
          {["ql1", "ql2", "ql3"].map((name) => (
            <Image
              key={name}
              src={`/${name}.svg`}
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
