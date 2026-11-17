import Link from "next/link";
import { Fragment, type ReactNode } from "react";
import { MARK } from "@/lib/site";

export default function PageHeader({
  crumbs,
  title,
  text,
}: {
  crumbs: string[];
  title: ReactNode;
  text: string;
}) {
  return (
    <header className="phead on-dark">
      <div className="wrap">
        <div className="crumb">
          <Link href="/">Home</Link>
          {crumbs.map((c) => (
            <Fragment key={c}>
              <span>/</span>
              <span>{c}</span>
            </Fragment>
          ))}
        </div>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
      <img className="mark" src={MARK} alt="" aria-hidden="true" />
      <div className="lane" aria-hidden="true"></div>
    </header>
  );
}
