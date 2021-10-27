import { v4 as uuidv4 } from "uuid";
import { testimonialStore } from "../../../store/TestimonialStore/TestimonialStore";
import { Testimonial } from "../Testimonial/Testimonial";
import "./Testimonials.css";

export interface ITestimonialsProps {}

export const Testimonials = ({}: ITestimonialsProps) => {
  const { testimonials } = testimonialStore;

  return (
    <div className="testimonials">
      {testimonials.map((testimonial) => (
        <Testimonial key={uuidv4()} {...testimonial} />
      ))}
    </div>
  );
};
