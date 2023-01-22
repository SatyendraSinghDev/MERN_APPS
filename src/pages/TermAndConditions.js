import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";

const TermAndConditions = () => {
  return (
    <>
      <Meta title={"Term And Conditions"} />
      <BreadCrumb title="Term And Conditions" />
      <section className="policy-wrapper py-5 home-wrapper-2">
        <Container className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="policy">
                <p className="m-0">No Data Found!</p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default TermAndConditions;
