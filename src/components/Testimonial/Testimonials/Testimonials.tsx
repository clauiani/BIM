import { Testimonial } from "../Testimonial/Testimonial";
import store from "../../../store/TestimonialStore/TestimonialStore";
import "./Testimonials.css";

export interface ITestimonialsProps {}

export const Testimonials = ({}: ITestimonialsProps) => {
  const { testimonials } = store;

  return (
    <div className="testimonials">
      {testimonials.map((testimonial) => (
        <Testimonial {...testimonial} />
      ))}
    </div>
  );
};
