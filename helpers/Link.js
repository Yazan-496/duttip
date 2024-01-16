"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const LinkComponent = ({ children, href, className, ...rest }) => {
  const pathname = usePathname();
  const router = useRouter();
  const pathWithoutLang = `/${
    pathname?.split("/")[pathname?.split("/")?.length - 1]
  }`;
  const handleClick = () => {
    console.log(pathWithoutLang, href, "handleClick");
    if (pathWithoutLang == href) {
      console.log("refresh");
      router.refresh();
      window.location.reload();
    }
  };
  return (
    <Link
      href={href}
      onClick={handleClick}
      className={`hover:scale-[1.01] ${className}`}
      {...rest}
    >
      {children}
    </Link>
  );
};

export default LinkComponent;
