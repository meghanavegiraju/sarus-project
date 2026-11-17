import Link from "next/link";
import Icon from "@/components/Icon";
import PageHeader from "@/components/PageHeader";

export default function NotFound() {
  return (
    <div className="page">
      <PageHeader crumbs={["Not found"]} title="404" text="This page doesn't exist — let's get you back on the road." />
      <section className="sec">
        <div className="wrap">
          <Link href="/" className="btn btn-gold">Back to home <Icon name="arrow" /></Link>
        </div>
      </section>
    </div>
  );
}
