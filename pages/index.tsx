import { Roadmap } from '../components/Core/Roadmap/Roadmap';
import { Header } from '../components/Header/Header';

export default function Home() {
  return (
    <>
      <Header />
      <div className="pt-96 pb-96 bg-red-100 text-black">test</div>
      <Roadmap />
    </>
  );
}
