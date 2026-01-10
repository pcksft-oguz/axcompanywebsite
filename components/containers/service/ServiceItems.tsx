import Image from "next/image";
import Link from "next/link";
import One from "@/public/images/shape/service-two-item-shape.png";
import Two from "@/public/images/service/service-image1.jpg";
import Three from "@/public/images/service/service-image2.jpg";
import Four from "@/public/images/service/service-image3.jpg";
import Five from "@/public/images/service/service-image4.jpg";
import Six from "@/public/images/service/service-image5.jpg";
import Seven from "@/public/images/service/service-image6.jpg";
import Eight from "@/public/images/icon/service-two-icon1.png";
import Nine from "@/public/images/icon/service-two-icon2.png";
import Ten from "@/public/images/icon/service-two-icon3.png";
import Eleven from "@/public/images/icon/service-two-icon4.png";
import Twelve from "@/public/images/icon/service-two-icon5.png";
import Thirteen from "@/public/images/icon/service-two-icon6.png";

const ServiceItems = () => {
  return (
    <section className="service-inner-area pt-120 pb-120">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4 col-md-6">
            <div className="service-two__item">
              <div className="image">
                <Image src={Two} alt="Image" priority />
              </div>
              <div className="service-two__content">
                <div className="icon">
                  <Image src={Eight} alt="icon" priority />
                </div>
                <div className="shape">
                  <Image src={One} alt="shape" priority />
                </div>
                <h4>
                  <Link href="/service-details/big-data" className="primary-hover">
                    Big Data
                  </Link>
                </h4>
                <p>
                  Extract valuable insights from your data with advanced analytics, 
                  statistical modeling, and predictive algorithms.
                </p>
                <Link className="read-more-btn" href="/service-details/big-data">
                  Read More <i className="fa-regular fa-arrow-right-long"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-two__item">
              <div className="image">
                <Image src={Three} alt="Image" priority />
              </div>
              <div className="service-two__content">
                <div className="icon">
                  <Image src={Nine} alt="icon" priority />
                </div>
                <div className="shape">
                  <Image src={One} alt="shape" priority />
                </div>
                <h4>
                  <Link href="/service-details/machine-learning" className="primary-hover">
                    Machine Learning
                  </Link>
                </h4>
                <p>
                  Build intelligent systems that learn from data. Custom ML models 
                  for automation, prediction, and pattern recognition.
                </p>
                <Link className="read-more-btn" href="/service-details/machine-learning">
                  Read More <i className="fa-regular fa-arrow-right-long"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-two__item">
              <div className="image">
                <Image src={Four} alt="Image" priority />
              </div>
              <div className="service-two__content">
                <div className="icon">
                  <Image src={Ten} alt="icon" priority />
                </div>
                <div className="shape">
                  <Image src={One} alt="shape" priority />
                </div>
                <h4>
                  <Link href="/service-details/artificial-intelligence" className="primary-hover">
                    Artificial Intelligence
                  </Link>
                </h4>
                <p>
                  Implement AI solutions including NLP, computer vision, and 
                  intelligent automation to transform operations.
                </p>
                <Link className="read-more-btn" href="/service-details/artificial-intelligence">
                  Read More <i className="fa-regular fa-arrow-right-long"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-two__item">
              <div className="image">
                <Image src={Five} alt="Image" priority />
              </div>
              <div className="service-two__content">
                <div className="icon">
                  <Image src={Eleven} alt="icon" priority />
                </div>
                <div className="shape">
                  <Image src={One} alt="shape" priority />
                </div>
                <h4>
                  <Link href="/service-details/predictive-analytics" className="primary-hover">
                    Predictive Analytics
                  </Link>
                </h4>
                <p>
                  Forecast future trends and behaviors using advanced statistical 
                  models and machine learning algorithms.
                </p>
                <Link className="read-more-btn" href="/service-details/predictive-analytics">
                  Read More <i className="fa-regular fa-arrow-right-long"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-two__item">
              <div className="image">
                <Image src={Six} alt="Image" priority />
              </div>
              <div className="service-two__content">
                <div className="icon">
                  <Image src={Twelve} alt="icon" priority />
                </div>
                <div className="shape">
                  <Image src={One} alt="shape" priority />
                </div>
                <h4>
                  <Link href="/service-details/data-science" className="primary-hover">
                    Data Science
                  </Link>
                </h4>
                <p>
                  Leverage neural networks and deep learning architectures for 
                  complex pattern recognition and decision-making.
                </p>
                <Link className="read-more-btn" href="/service-details/data-science">
                  Read More <i className="fa-regular fa-arrow-right-long"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-two__item">
              <div className="image">
                <Image src={Seven} alt="Image" priority />
              </div>
              <div className="service-two__content">
                <div className="icon">
                  <Image src={Thirteen} alt="icon" priority />
                </div>
                <div className="shape">
                  <Image src={One} alt="shape" priority />
                </div>
                <h4>
                  <Link href="/service-details/natural-language-processing" className="primary-hover">
                    Natural Language Processing
                  </Link>
                </h4>
                <p>
                  Process and understand human language with NLP solutions for 
                  chatbots, sentiment analysis, and text mining.
                </p>
                <Link className="read-more-btn" href="/service-details/natural-language-processing">
                  Read More <i className="fa-regular fa-arrow-right-long"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceItems;
