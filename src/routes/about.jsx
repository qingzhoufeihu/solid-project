import { Title } from "@solidjs/meta";
import { createAsync } from "@solidjs/router";
import BigNumber from "bignumber.js";
export default function Home() {
  const number = createAsync(() => new BigNumber(0.2).plus(0.1).toString());
  // const number = new BigNumber(0.2).plus(0.1).toString();
  return (
    <main>
      <Title>About</Title>
      <h1>About</h1>
      <p>{number}</p>
    </main>
  );
}
