import { Modal } from "flowbite-react";

const CharacterDetails = ({ handleCloseModal, openModal, character }) => {
  return (
    <Modal show={openModal} onClose={handleCloseModal}>
      <Modal.Header className="bg-black">
        <span className="text-white">{character?.name}</span>
      </Modal.Header>
      <Modal.Body className="bg-black">
        <div className="grid grid-cols-2 gap-4 max-xl:grid-cols-2 max-lg:grid-cols-2 max-md:grid-cols-1">
        <div className="space-y-4">
            <p className="font-normal">Birth year: {character?.birth_year}</p>
            <p className="font-normal">Height: {character?.height}</p>
            <p className="font-normal">Mass: {character?.mass}</p>
            <p className="font-normal">Hair color: {character?.hair_color}</p>
            <p className="font-normal">Skin color: {character?.skin_color}</p>
            <p className="font-normal">Eye color: {character?.eye_color}</p>
          </div>
          <div className="space-y-4">
            <p className="font-normal">Homeworld: {character?.homeworld}</p>
            <p className="font-normal">Films: {character?.films?.join(', ')}</p>
            <p className="font-normal">Species: {character?.species?.join(', ')}</p>
            <p className="font-normal">Starships: {character?.starships?.join(', ')}</p>
            <p className="font-normal">Vehicles: {character?.vehicles?.join(', ')}</p>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default CharacterDetails;
