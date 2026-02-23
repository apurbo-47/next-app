import Image from "next/image";
import thumb from "../public/images/pngtree-d-gaming-laptop.jpg";

export default function Home() {
  return (
    <div className="mt-10">
      <Image
        placeholder="blur"
        className="aspect-video rounded-2xl mb-7"
        src={thumb}
        alt="thumb image"
      />

      <p className="text-base font-semibold ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, similique?
        Fugit labore fugiat beatae aspernatur pariatur unde earum sapiente
        adipisci voluptatem aliquam recusandae quos ut ipsam excepturi,
        voluptate laborum quaerat?
      </p>
    </div>
  );
}
