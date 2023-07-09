import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex m-3">
      <Link href={'/'}><h1 className="mx-2 cursor-pointer">Task Flow</h1></Link>
      <Link href={'/tasks'}><p className="mx-2 cursor-pointer">Tasks</p></Link>
      <Link href={'/create-task'}><p className="mx-2 cursor-pointer">Create</p></Link>
    </div>
  );
}

export default Navbar;
