import Achievement from "@/components/Achievement";
import Activities from "@/components/Activities";
import Adventure from "@/components/Adventure";
import Container from "@/components/Container";
import Holidays from "@/components/Holidays";

const page = () => {
  return (
    <section className="mt-5">
      <Container>
        <Holidays />
      </Container>
      <Activities />
      <Adventure />
      <Achievement />
    </section>
  );
};

export default page;
