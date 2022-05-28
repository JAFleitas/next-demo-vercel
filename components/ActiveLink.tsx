import Link from "next/link";
import { useRouter } from "next/router";
import { CSSProperties, FC } from "react";

const style: CSSProperties = {
  color: "#0070f3",
  textDecoration: "underline",
};

interface PropsActiveLink {
  href: string;
  text: string;
}

export const ActiveLink: FC<PropsActiveLink> = ({ href, text }) => {
  const { asPath } = useRouter();
  return (
    <>
      <Link href={href}>
        <a style={asPath === href ? style : undefined}>{text}</a>
      </Link>
    </>
  );
};
