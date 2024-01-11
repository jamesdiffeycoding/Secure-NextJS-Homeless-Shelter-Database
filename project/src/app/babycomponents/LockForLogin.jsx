import Image from "next/image";
import Link from "next/link";


export default function LogoForLogin() {
    return (
        <>

        <Link href="/dashboard">
            <div className="flexbox-container-logoforlogin">
                <Image src="/lock.png" alt="security lock" width="100" height="100" className="security lock"/>
            </div>
        </Link>
        </>
        )
}