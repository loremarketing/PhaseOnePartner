import ContactHeroSection from "@/components/pages/contact/hero-section";
import ContactFormSection from "@/components/pages/contact/contact-form-section";
import NavbarV4 from "@/components/layout/navbar-v4";

export default function ContactPage() {
  return (
    <div className="relative w-full overflow-hidden">
      <NavbarV4 />
      <ContactHeroSection />
      <ContactFormSection />
    </div>
  );
}

