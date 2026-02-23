import Image from "next/image";
import Button from "../../components/button";
import thumb from "../../../public/images/pngtree-d-gaming-laptop.jpg";

export default function Mission() {
  return (
    <main className="mt-10">
      <div className="mt-10 mb-6">This is Mission page</div>

      <Image
        placeholder="blur"
        className="aspect-video rounded-2xl"
        src={thumb}
        alt="thumb image"
      />

      <Button />
    </main>
  );
}
