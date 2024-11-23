import { Title } from "@solidjs/meta";
import BigNumber from "bignumber.js";
export default function Home() {
  const number = new BigNumber(0.2).plus(0.1);
  return (
    <main>
      <Title>About</Title>
      <h1>About</h1>
      <p>{number.toString()}</p>
    </main>
  );
}
