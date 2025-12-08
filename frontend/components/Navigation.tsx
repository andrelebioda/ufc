import Image from "next/image";
import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="bg-[#c72828] fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="p-2 w-full xl:w-7xl m-auto">
        <ul className="flex items-center">
          <li className="lg:mr-25 mr-10">
            <Link href="/" className="block relative h-10 w-36">
              <Image className="invert" fill={true} src="/ufc_logo.png" alt="Logo"></Image>
            </Link>
          </li>
          <li className="text-white xl:mr-10 mr-2.5">
            <Link href="/fighter">Fighter</Link>
          </li>
          <li className="text-white">
            <Link href="/fights">Fights</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
