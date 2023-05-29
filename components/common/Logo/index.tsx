import Image from "next/image";

const Header = () => {
  return (
    <Image
      src="/assets/images/next.svg"
      alt="Vercel Logo"
      width={100}
      height={24}
      priority
    />
  );
};

export default Header;
