import { useQuery } from "@tanstack/react-query";
import { Card, HR, Pagination } from "flowbite-react";
import { useMemo } from "react";
import { getPeople } from "../services/api";
import { usePagination } from "../hooks/usePagination";
import Skeleton from "../components/Skeleton";
import ErrorPage from "./ErrorPage";
import openModalIcon from "../img/icons/openmodal-icon.svg";
import { useCharacterModal } from "../hooks/useCharacterModal";
import CharacterDetails from "../components/CharacterDetails";

const Home = () => {
  const { handleOpenModal, openModal, handleCloseModal, character } =
    useCharacterModal();

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
    <CharacterDetails
        openModal={openModal}
        handleCloseModal={handleCloseModal}
        character={character}
      />
      
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
                >
                  <div>
                    <h2 onClick={() => handleOpenModal(character)} className="text-xl font-bold tracking-tight hover:cursor-pointer">
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
                  <div
                    onClick={() => handleOpenModal(character)}
                    className="bg-black absolute bottom-[-3px] right-[-3px] flex justify-center items-center hover:cursor-pointer hover:scale-125 transition-transform"
                  >
                    <img src={openModalIcon} alt="open modal icon" width={23} />
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
