import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className="">
      <div className="">
      <Link href="/">
      <a>
        <img src="/hook.svg" alt="hook logo" className="h-10" layout='fill' />
        </a>
      </Link>
      </div>
      <Link href="/"><a className="pl-3">Home</a></Link>
      <Link href="/record/record"><a className="pl-3">Records</a></Link>
      <Link href="/"><a className="pl-3">About</a></Link>
    </nav>
  );
}
 
export default Navbar;