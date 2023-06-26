import Navbar from "./components/Navbar";
import TopLinks from "./components/TopLinks";
import Hero from "./components/Hero";
import Partners from "./components/Partners";
import Placed from "./components/Placed";
import Courses from "./components/Courses";
import Classes from "./components/Classes";
import Certificate from "./components/Certificate";
import StudentReviews from "./components/StudentReviews";
import FAQs from "./components/FAQs";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="app">
      <TopLinks />
      <Navbar />
      <Hero />
      <Partners />
      <Placed />
      <Courses />
      <Classes />
      <Certificate />
      <StudentReviews />
      <FAQs />
      <Footer />
    </div>
  );
};

export default App;
