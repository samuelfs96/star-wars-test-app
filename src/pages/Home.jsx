import { Card, HR, Modal } from "flowbite-react";
import { useState } from "react";

const Home = () => {
  const [openModal, setOpenModal] = useState(false);
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
          {Array.from(Array(10).keys()).map((it) => (
            <Card
              key={it}
              className="min-h-[240px] relative border-primary bg-death-star bg-fixed custom-star-box"
              onClick={() => setOpenModal(true)}
            >
              <div>
                <h2 className="text-xl font-bold tracking-tight hover:cursor-pointer">
                  Lorem ipsum dolor sit amet.
                </h2>
                <HR className="my-2" />
              </div>
              <div>
                <p className="text-sm">Birth year: Lorem, ipsum.</p>
                <p className="text-sm">Height: Lorem, ipsum.</p>
                <p className="text-sm">Mass: Lorem, ipsum.</p>
                <p className="text-sm">Hair color: Lorem, ipsum.</p>
                <p className="text-sm">Skin color: Lorem, ipsum.</p>
                <p className="text-sm">Eye color: Lorem, ipsum.</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
