import { useQuery } from "@tanstack/react-query";
import { Card, HR, Modal, Pagination } from "flowbite-react";
import { useMemo, useState } from "react";
import { getPeople } from "../services/api";
import { usePagination } from "../hooks/usePagination";
import Skeleton from "../components/Skeleton";
import ErrorPage from "./ErrorPage";

const Home = () => {
  const [openModal, setOpenModal] = useState(false);
  const { currentPage, onPageChange } = usePagination();
  const { isLoading, error, data } = useQuery({
    queryKey: ["people", currentPage],
    queryFn: () => getPeople(currentPage),
  });
  const getTotalPages = useMemo(() => {
    if (!data) return 0;
    return Math.ceil(data?.count / 10);
  }, [data]);

  if (error) return <ErrorPage error={error} />;

  return (
    <>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header className="bg-black">
          <span className="text-white">Lorem, ipsum</span>
        </Modal.Header>
        <Modal.Body className="bg-black">
          <div className="grid grid-cols-2 gap-4 max-xl:grid-cols-2 max-lg:grid-cols-2 max-md:grid-cols-1">
            <div className="space-y-4">
              <p className="font-normal">Birth year: Lorem, ipsum.</p>
              <p className="font-normal">Height: Lorem, ipsum.</p>
              <p className="font-normal">Mass: Lorem, ipsum.</p>
              <p className="font-normal">Hair color: Lorem, ipsum.</p>
              <p className="font-normal">Skin color: Lorem, ipsum.</p>
              <p className="font-normal">Eye color: Lorem, ipsum.</p>
            </div>
            <div className="space-y-4">
              <p className="font-normal">Homeworld: Lorem, ipsum.</p>
              <p className="font-normal">Films: Lorem, ipsum.</p>
              <p className="font-normal">Species: Lorem, ipsum.</p>
              <p className="font-normal">Starships: Lorem, ipsum.</p>
              <p className="font-normal">Vehicles: Lorem, ipsum.</p>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <div className="bg-black py-6 container mx-auto min-[1024px]:px-24 px-16">
        <span className="min-[1024px]:text-md text-sm font-medium uppercase">
          All characters
        </span>
      </div>
      <div className="bg-black py-8 container mx-auto min-[1024px]:px-24 px-16">
        <div className="grid grid-cols-4 gap-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1">
          {isLoading
            ? Array.from(Array(10).keys()).map((item) => (
                <Skeleton key={item} height="240px" />
              ))
            : data?.results?.map((character) => (
                <Card
                  key={character.name}
                  className="min-h-[240px] relative border-primary bg-death-star bg-fixed custom-star-box"
                  onClick={() => setOpenModal(true)}
                >
                  <div>
                    <h2 className="text-xl font-bold tracking-tight hover:cursor-pointer">
                      {character.name}
                    </h2>
                    <HR className="my-2" />
                  </div>
                  <div>
                    <p className="text-sm">
                      Birth year: {character.birth_year}
                    </p>
                    <p className="text-sm">Height: {character.height}</p>
                    <p className="text-sm">Mass: {character.mass}</p>
                    <p className="text-sm">
                      Hair color: {character.hair_color}
                    </p>
                    <p className="text-sm">
                      Skin color: {character.skin_color}
                    </p>
                    <p className="text-sm">Eye color: {character.eye_color}</p>
                  </div>
                </Card>
              ))}
        </div>
        <div className="custom-pagination">
          <hr className="mt-8 mb-8" />
          <div className="flex justify-center">
            <Pagination
              className="text-center"
              currentPage={currentPage}
              onPageChange={onPageChange}
              showIcons={true}
              totalPages={getTotalPages}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
