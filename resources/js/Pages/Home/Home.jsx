import GuestLayout from "@/Layouts/GuestLayout";
import { Head } from "@inertiajs/react";
import MainContent from "@/Components/MainContent";
export default function Home() {
  return (
    <GuestLayout>
      <Head title="Welcome" />
      <MainContent />
    </GuestLayout>
  );
}
