import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";

const Container = tw.div`relative flex`;
const TwoColumn = tw.div`flex flex-col md:flex-row md:items-center justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto relative`;
const TextColumn = styled(Column)(props => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);

const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(
  SectionHeading
)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;

const Statistics = tw.div`flex flex-col items-center sm:block text-center md:text-left mt-4`;
const Statistic = tw.div`text-left sm:inline-block sm:mr-12 last:mr-0 mt-4`;
const Value = tw.div`font-bold text-lg sm:text-xl lg:text-2xl text-secondary-500 tracking-wide`;
const Key = tw.div`font-medium text-primary-700`;

const PrimaryButton = tw(PrimaryButtonBase)`mt-8 md:mt-10 text-sm inline-block mx-auto md:mx-0`;

export default ({
  subheading = "Our Track Record",
  heading = (
    <>
      We have been doing this <wbr /> since <span tw="text-primary-500">2020.</span>
    </>
  ),
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
  primaryButtonText = "Learn More",
  primaryButtonUrl = "",
  imageCss = null,
  imageContainerCss = null,
  imageInsideDiv = true,
  statistics = null,
  textOnLeft = false
}) => {
  const defaultStatistics = [
    {
      key: "Clients",
      value: "30+"
    },
    {
      key: "Projects",
      value: "30+"
    },
    {
      key: "Awards",
      value: "10+"
    }
  ];

  if (!statistics) statistics = defaultStatistics;

  return (
		<Container>
			<TwoColumn css={!imageInsideDiv && tw`md:items-center`}>
				<ImageColumn css={imageContainerCss}>
						<img
							src="http://placeimg.com/640/480/business"
							css={imageCss}
							alt=""
						/>
				</ImageColumn>
				<TextColumn textOnLeft={textOnLeft}>
					<TextContent>
						{subheading && <Subheading>{subheading}</Subheading>}
						<Heading>{heading}</Heading>
						<Description>{description}</Description>
						<Statistics>
							{statistics.map((statistic, index) => (
								<Statistic key={index}>
									<Value>{statistic.value}</Value>
									<Key>{statistic.key}</Key>
								</Statistic>
							))}
						</Statistics>
						<PrimaryButton as="a" href={primaryButtonUrl}>
							{primaryButtonText}
						</PrimaryButton>
					</TextContent>
				</TextColumn>
			</TwoColumn>
		</Container>
	);
};
