import Dashboard from "@/modules/dashboard";
import Sidebar from "@/common/layouts/sidebar/Sidebar";
import Container from "@/common/layouts/elements/Container";

export default function Home() {
  return (
    <>
      <Container>
        <Sidebar />
        <Dashboard />
      </Container>
    </>
  );
}
