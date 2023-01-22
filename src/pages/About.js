import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";

const About = () => {
  return (
    <>
      <Meta title={"About Us"} />
      <BreadCrumb title="About Us" />
      <section className="policy-wrapper py-5 home-wrapper-2">
        <Container className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="policy">
                <p className="m-0 text-center">About Us!</p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default About;
