import type { Metadata } from 'next';
import FeaturedProjects from '../../components/FeaturedProjects';

export const metadata: Metadata = {
  title: "Selected Works & Case Studies | Vipan Sharma",
  description: "Explore the frontend engineering portfolio of Vipan Sharma, featuring website builder platforms, delivery systems, POS applications, and IoT energy dashboards.",
};

export default function WorkPage() {
  return (
    <div className="pt-16">
      <FeaturedProjects isHeaderH1={true} />
    </div>
  );
}