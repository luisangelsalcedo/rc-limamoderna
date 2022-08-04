import React from "react";

import { ReactComponent as Gym } from "../assets/svg/icon-dumbbell-solid.svg";
import { ReactComponent as Building } from "../assets/svg/icon-building-solid.svg";
import { ReactComponent as Parking } from "../assets/svg/icon-parking-solid.svg";
import { ReactComponent as Washing } from "../assets/svg/icon-washer.svg";
import { ReactComponent as Coworking } from "../assets/svg/icon-laptop-solid.svg";
import { ReactComponent as Pool } from "../assets/svg/icon-swimming-pool-solid.svg";
import { ReactComponent as Grill } from "../assets/svg/icon-dumpster-fire-solid.svg";
import { ReactComponent as Meeting } from "../assets/svg/icon-handshake-regular.svg";
import FeatureItem from "./FeatureItem";

const Features = () => (
  <div className="features-list">
    <FeatureItem label="Edificio con 16 pisos" icon={<Building />} />
    <FeatureItem label="2 Sótanos de estacionamientos" icon={<Parking />} />
    <FeatureItem label="Lobby" icon={<Gym />} />
    <FeatureItem label="Coworking" icon={<Coworking />} />
    <FeatureItem label="Piscina" icon={<Pool />} />
    <FeatureItem label="Funcional Gym" icon={<Gym />} />
    <FeatureItem label="SUM - Sala de reuniones" icon={<Meeting />} />
    <FeatureItem label="Zona de parrillas" icon={<Grill />} />
    <FeatureItem label="Centro de lavado" icon={<Washing />} />
  </div>
);

export default Features;
