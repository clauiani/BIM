import "./Testimonial.css";

export interface ITestimonialProps {
  image: string;
  quote: string;
  employee: string;
  employeejobtitle: string;
}

export const Testimonial = ({
  image,
  quote,
  employee,
  employeejobtitle,
}: ITestimonialProps) => {
  return (
    <div className="testimonial">
      <img src={image} alt="No image found" className="testimonial__image" />
      <h4 className="testimonial__quote">{quote}</h4>
      <hr className="testimonial__line" />
      <h1 className="testimonial__employee">{employee}</h1>
      <h4 className="testimonial__employeejobtitle">{employeejobtitle}</h4>
    </div>
  );
};
