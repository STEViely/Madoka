import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const socialLinks = {
    facebook: "https://facebook.com/yourpage",
    line: "https://line.me/yourlineid",
  };
  const renderNavLink = (href, label) => (
    <li>
      <Link href={href}>{label}</Link>
    </li>
  );
  return (
    <div className="flex justify-between items-center bg-white px-2  py-6">
      <div>
        <Image src="/footerLogo.png" alt="madoka" width={60} height={48} />
      </div>
      <div>
        <ul className="flex justify-between items-center gap-4 text-[12px] text-[#7492AA]">
          {renderNavLink("/aboutUs", "About Us")}
          {renderNavLink("/contactUs", "Contact Us")}
        </ul>
      </div>
      <div className="flex justify-between items-center gap-2">
        <Link href={socialLinks.facebook}>
          <Image
            src="/facebookIcon.png"
            alt="Facebook"
            width={30}
            height={30}
          />
        </Link>
        <Link href={socialLinks.line}>
          <Image src="/lineIcon.png" alt="Line" width={30} height={30} />
        </Link>
      </div>
    </div>
  );
}
