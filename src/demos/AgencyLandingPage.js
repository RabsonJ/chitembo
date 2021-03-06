import React from "react";
import tw from "twin.macro"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";

import Hero from "components/hero/BackgroundAsImage.js";
import Features from "components/features/DashedBorderSixFeatures";
import Portfolio from "components/cards/Portfolio.js";
import FAQ from "components/faqs/TwoColumnPrimaryBackground";
import ContactUsForm from "components/forms/TwoColContactUsWithIllustration.js";
import Footer from "components/footers/MiniCenteredFooter.js";

export default () => (
  <AnimationRevealPage>
    <Hero />
    <Features />
    <Portfolio />
    <FAQ />
    <ContactUsForm />
    <Footer />
  </AnimationRevealPage>
);
