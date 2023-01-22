import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";

const ComingSoon = () => {
  return (
    <>
      <Meta title={"Coming Soon"} />
      <BreadCrumb title="Coming Soon" />
      <section className="policy-wrapper py-5 home-wrapper-2">
        <Container className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="policy">
                <p className="m-0 text-center">Coming Soon!</p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ComingSoon;
