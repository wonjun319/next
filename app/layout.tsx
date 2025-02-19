
// import Sidebar from "@/components/ui/sidebar";
// import Sidebar from "@/components/ui/sidebar";
import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        
      >
        {/* <Sidebar /> */}
      {/* <Sidebar/> */}
      {children}
      </body>
    </html>
  );
}
