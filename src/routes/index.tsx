import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "1-Bureau | Accounting, Tax & Corporate Services Singapore" },
      {
        name: "description",
        content:
          "1-Bureau Private Limited provides professional accounting, corporate secretarial, taxation and payroll services for SMEs in Singapore since 2007.",
      },
      { property: "og:title", content: "1-Bureau Private Limited | Professional Consulting" },
      {
        property: "og:description",
        content:
          "Accounting, taxation, payroll and corporate secretarial services for small & medium businesses in Singapore.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
