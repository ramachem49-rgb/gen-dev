import PageTransition from "@/components/PageTransition";
import { ContactSection } from "@/components/Contact";

const Contact = () => {
  return (
    <PageTransition>
      <div className="min-h-screen">
        <ContactSection />
      </div>
    </PageTransition>
  );
};

export default Contact;
