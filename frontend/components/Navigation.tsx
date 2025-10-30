import Image from "next/image"
import Link from "next/link"


const Navigation = () => {
  return (
    <nav className="bg-white">
      <div className="p-2 w-full lg:w-5xl m-auto">
        <ul className="flex items-center">
          <li className="lg:mr-25 mr-10">
            <Link href="/">
              <Image src="/ufc_logo.png" alt="Logo" width={150} height={80}></Image>
            </Link>
          </li>
          <li className="text-black lg:mr-10 mr-2.5">
            <Link href="/fighter">Fighter</Link>
          </li>
          <li className="text-black">
            <Link href="/fights">Fights</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation