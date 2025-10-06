import { div } from "motion/react-client";

export default function Home() {
  return (
    <section className="flex flex-col flex-1/2">
      <div>
        <h1 className="uppercase font-bold">developer?</h1>
      </div>
      <div>
        <h1 className="uppercase font-bold">not a developer?</h1>
      </div>
    </section>
  );
}
