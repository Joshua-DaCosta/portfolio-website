import { Instagram, YouTube } from "@material-ui/icons";
import "./testimonials.scss";

const Testimonials = () => {
  return (
    <div id="testimonials" className="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        <div className="card">
          <div className="top">
            <div className="img left">
              <Instagram />
            </div>
            <img
              src="https://media.istockphoto.com/photos/girl-on-a-blue-background-rejoices-at-her-success-picture-id1257039642?k=20&m=1257039642&s=612x612&w=0&h=WkaJ-j0ctczZMLY4fG_RIz_lp4hCIojj_0kzwr_9aDk="
              alt="girl"
            />
            <div className="img right">
              <YouTube />
            </div>
          </div>
          <div className="center">
            Leave me a comment in the contact section. what do you think of my
            work. all constructive criticism welcome. I would love to make you a testimonial.
          </div>
          <div className="bottom">
            <h3>Your Name Here</h3>
            <h4>CEO of Dimensions Corp</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
