import type { Metadata } from 'next';
import Contact from '../../components/Contact';

export const metadata: Metadata = {
  title: "Contact & Collaboration | Vipan Sharma",
  description: "Get in touch with Vipan Sharma for frontend engineering roles, contract opportunities, or website building project discussions.",
};

export default function ContactPage() {
  return <Contact isHeaderH1={true} />;
}