import Sky from "@/components/Sky";
import { constant } from "@/i18n/data";

const Home = () => {
  return (
    <div
      className="relative w-screen h-screen overflow-hidden"
    >
      <Sky />
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold text-white text-center max-w-4xl leading-tight">
          {constant.homePage.landingPage.quote}
        </h1>
        <p className="mt-6 text-xl text-gray-300 text-center">
          {constant.homePage.landingPage.author}
        </p>
      </div>
    </div>
  );
};

export default Home;