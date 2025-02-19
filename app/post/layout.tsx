import Backbutton from "@/components/backbutton";


export default function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Backbutton />
      {children}
    </div>
  );
}
