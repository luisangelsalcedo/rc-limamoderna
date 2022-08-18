import React from "react";
import PropTypes from "prop-types";
import FancyBoxCard from "./fancybox-card/FancyBoxCard";
import HeaderTitle from "./HeaderTitle";
import Form from "./Form";
import FromResponseBrochure from "./FromResponseBrochure";

const Brochure = ({ map }) => (
  <div className="brochure">
    {map && <FancyBoxCard src={map} />}
    <div className="brochure-content">
      <div>
        <HeaderTitle title="Mudate a San Miguel" type="primary">
          Uno de los más hermosos distritos de Lima Metropolitana y que en pocos
          meses se ha logrado transformar calles, avenidas, parques y plazas
          convirtiendo a San Miguel en un lugar preferido para vivir.
        </HeaderTitle>
        <Form
          logo={false}
          title=""
          labelbtn="DESCARGAR BROCHURE"
          reference="brochure"
        >
          <FromResponseBrochure />
        </Form>
      </div>
    </div>
  </div>
);
Brochure.propTypes = {
  map: PropTypes.string,
};

Brochure.defaultProps = {
  map: "",
};
export default Brochure;
