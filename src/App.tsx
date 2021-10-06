import "./App.css";
import { Benefit } from "./components/Benefit/Benefit/Benefit";
import BenefitImg1 from "./assets/benefit1.png";
import Testimonial1 from "./assets/Testimonial1.png";
import { Testimonial } from "./components/Testimonial/Testimonial/Testimonial";
import Place1 from "./assets/Locul 1 (1).png";
import { Prize } from "./components/Prize/Prize/Prize";
function App() {
  return (
    <div className="App">
      <Benefit
        title="Benefit 1"
        description=" Create, edit, copy, move, download your files easily, everywhere, every time. Use it as your personal cloud. "
        image={BenefitImg1}
      />
      <br />
      <br />
      <Testimonial
        image={Testimonial1}
        quote=" 
        ”Everyone working in the office is very knowledgeable about all types of dental work and options for your individual needs.” "
        employee="Gabriel Tironeac"
        employeejobtitle="Head of Game Development "
      />
      <br />

      <Prize image={Place1} place="1st Place" prize="1200$" />
    </div>
  );
}

export default App;
