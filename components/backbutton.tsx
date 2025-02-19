

// import { ArrowBigLeft } from "lucide-react";
import Link from "next/link";

const Backbutton: React.FC = () => {
    return (
      <Link href="../" className="fixed inset-0">
        {/* <ArrowBigLeft size={50}  color="white"/> */}
      </Link>
    );
  }
  
  export default Backbutton;