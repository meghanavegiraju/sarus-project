import type { Metadata } from "next";
import Gallery from "@/components/Gallery";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = { title: "Gallery" };

export default function GalleryPage() {
  return (
    <div className="page">
      <PageHeader
        crumbs={["Gallery"]}
        title="Gallery"
        text="From the field — river works, earthmoving and road building across our sites."
      />
      <section className="sec">
        <div className="wrap">
          <Gallery />
        </div>
      </section>
    </div>
  );
}
