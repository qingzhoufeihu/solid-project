import { Title } from "@solidjs/meta";
import { createAsync } from "@solidjs/router";
import BigNumber from "bignumber.js";

const getNotePreview = () => {
  "use server";
  return new BigNumber(0.2).plus(0.1).toString();
};

export const route = {
  preload({ params }) {
    getNotePreview();
  },
};

export default function Home() {
  const number = createAsync(() => getNotePreview());
  // const number = new BigNumber(0.2).plus(0.1).toString();
  return (
    <main>
      <Title>About</Title>
      <h1>About1</h1>
      <p>{number}</p>
    </main>
  );
}
