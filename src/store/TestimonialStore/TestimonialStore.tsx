import { makeAutoObservable } from "mobx";
import Testimonial1 from "../../assets/Testimonial1.png";
import Testimonial2 from "../../assets/Testimonial2.png";
import Testimonial3 from "../../assets/Testimonial3.png";

class TestimonialStore {
  TESTIMONIALS = [
    {
      image: Testimonial1,
      quote:
        "Everyone working in the office is very knowledgeable about all types of dental work and options for your individual needs.”",
      employee: "Gabriel Tironeac",
      employeejobtitle: "Head of Game Development",
    },
    {
      image: Testimonial2,
      quote:
        "Everyone working in the office is very knowledgeable about all types of dental work and options for your individual needs.”",
      employee: "Adrian Onu",
      employeejobtitle: "Chief Operating Officer",
    },
    {
      image: Testimonial3,
      quote:
        "Everyone working in the office is very knowledgeable about all types of dental work and options for your individual needs.”",
      employee: "Victor Jeman ",
      employeejobtitle: "Head of Front-End Technologies",
    },
  ];
  testimonials: {
    image: string;
    quote: string;
    employee: string;
    employeejobtitle: string;
  }[] = this.TESTIMONIALS;

  constructor() {
    makeAutoObservable(this);
  }
}

export default new TestimonialStore();
