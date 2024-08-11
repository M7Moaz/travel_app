import Container from "@/components/Container";
import LocationPage from "@/components/LocationPage";
// export async function generateStaticParams() {
//   const staticLocationIds = [
//     { id: "1" },
//     { id: "2" },
//     { id: "3" },
//     { id: "4" },
//     { id: "5" },
//     { id: "6" },
//     { id: "7" },
//   ];

//   return staticLocationIds.map((location) => ({
//     id: location.id,
//   }));
// }

const page = ({ params }) => {
  return (
    <div className="w-full overflow-hidden">
      <Container>
        <LocationPage id={params.id} />
      </Container>
    </div>
  );
};

export default page;
