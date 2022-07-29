import ReactFullpage from "@fullpage/react-fullpage";
import React from "react";
import {
  SectionComponent,
  HeaderTitle,
  Form,
  Gallery,
  MainVideo,
  Features,
  Team,
  Location,
  Credits,
  Info,
} from "../components";
import data from "../data";

import "@fancyapps/ui/dist/fancybox.umd";
import "@fancyapps/ui/dist/fancybox.css";
import "../assets/scss/main.scss";

const App = () => (
  <ReactFullpage
    licenseKey="OPEN-SOURCE-GPLV3-LICENSE"
    autoScrolling={false}
    scrollOverflow={false}
    anchors={data.anchors}
    paddingTop="0px"
    paddingBottom="0px"
    touchSensitivity={15}
    // fitToSection: false,

    render={() => (
      <ReactFullpage.Wrapper>
        <SectionComponent auto index="1" bg="./img/fachada.jpg">
          <div>
            <HeaderTitle
              type="main"
              sub="CIERRA PUERTAS PATRIO"
              title="DESCUENTO DE HASTA US$40,000"
            />
          </div>
          <div>
            <Form />
          </div>
        </SectionComponent>

        <SectionComponent auto index="2">
          <HeaderTitle
            type="primary"
            sub="VISTAS IMPONENTES"
            title="Diseñado Magistralmente"
          />
          <Gallery />
        </SectionComponent>

        <SectionComponent auto index="3" bg="./img/lobby-bg.jpg">
          <HeaderTitle type="secondary" title="Valente 2: Vive tu mejor vida" />
          <MainVideo url={data.video.url} preview={data.video.preview} />
        </SectionComponent>

        <SectionComponent auto index="4">
          <HeaderTitle
            type="primary"
            sub="CARACTERÍSTICAS"
            title="Una obra maestra de ingeniería y arquitectura"
          >
            <div>
              Vive la vida a tu manera y llena de momentos memorables en tu
              nuevo hogar.
            </div>
            <div>
              Disfruta la libertad y potencia la fuerza de tu espíritu en un
              departamento único, con espacios modernos y funcionales que solo
              Valente 2 te puede brindar.
            </div>
          </HeaderTitle>
          <Features data={data.features} />
        </SectionComponent>

        <SectionComponent auto index="5">
          <HeaderTitle
            type="primary"
            sub="EL EQUIPO DISEÑADOR"
            title="Carlos Ott&Carlos Ponce de León"
          >
            The Grand fue diseñado por los creadores de obras magistrales como
            la Ópera de la Bastilla, Paris; Burj Al Arab, Dubai; Jade Ocean,
            Echo Brickell y Waldorf Astoria, Miami.
          </HeaderTitle>
          <Team />
        </SectionComponent>

        <SectionComponent auto index="6">
          <Location
            map={data.location.map}
            status={data.location.status}
            district={data.location.district}
            price={data.location.price}
            offerprice={data.location.offerprice}
            finish={data.location.finish}
          />
        </SectionComponent>

        <SectionComponent auto index="7">
          <Credits data={data.credits} />
        </SectionComponent>

        <SectionComponent auto index="8">
          <Info
            showroom={data.info.showroom}
            ventas={data.info.ventas}
            email={data.info.email}
            phone={data.info.phone}
            schedule={data.info.schedule}
          />
        </SectionComponent>
      </ReactFullpage.Wrapper>
    )}
  />
);

export default App;
