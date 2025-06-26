import Header from "./_components/header";
import "@/app/globals.css";


export default function RootLayout({ children }) {
  return (
    <html lang="th" className="bg-[#7492AA]">
      <body >
        <Header /> 
        <main>{children}</main>
      </body>
    </html>
  );
}

