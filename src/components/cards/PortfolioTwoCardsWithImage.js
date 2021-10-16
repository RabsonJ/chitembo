import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading } from "components/misc/Headings.js";
import { PrimaryLink as PrimaryLinkBase } from "components/misc/Links.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { ReactComponent as LocationIcon } from "feather-icons/dist/icons/map-pin.svg";
import { ReactComponent as TimeIcon } from "feather-icons/dist/icons/clock.svg";
import { ReactComponent as ArrowRightIcon } from "images/arrow-right-icon.svg";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const ThreeColumn = tw.div`flex flex-wrap`;
const ThreeColumnGrid = tw.div`grid gap-6 row-gap-5 lg:grid-cols-3`;
const Column = tw.div`xl:mr-12 xl:last:mr-0`;
const HeadingColumn = styled(Column)(props => [
  tw`w-full xl:w-5/12`,
  props.textOnLeft ? tw`xl:order-first` : tw`xl:order-last xl:ml-12 xl:mr-0`
]);
const CardColumn = tw(Column)`w-full md:w-1/2 xl:w-3/12 mt-16 xl:mt-0 xl:last:ml-auto`;

const HeadingInfoContainer = tw.div`text-center xl:text-left max-w-lg xl:max-w-none mx-auto xl:mx-0`;
const HeadingTitle = tw(SectionHeading)`mt-4 xl:text-left leading-tight`;
const HeadingDescription = tw.p`text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100 mt-8`;
const PrimaryLink = styled(PrimaryLinkBase)`
  ${tw`inline-flex justify-center xl:justify-start items-center mt-8 text-lg`}
  svg {
    ${tw`ml-2 w-5 h-5`}
  }
`;

const Card = tw.div`mx-auto xl:mx-0 xl:ml-auto max-w-sm md:max-w-xs lg:max-w-sm xl:max-w-xs`;
const CardImage = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`h-80 bg-cover bg-center rounded`
]);

const CardText = tw.div`mt-4`;

const CardTitle = tw.h5`text-xl mt-4 font-bold`;

const CardMeta = styled.div`
  ${tw`flex flex-row flex-wrap justify-center sm:items-center font-semibold tracking-wide text-gray-600 uppercase text-xs`}
`;

const CardMetaFeature = styled.div`
  ${tw`flex items-center mt-4 mr-4 last:mr-0`}
  svg {
    ${tw`w-5 h-5 mr-1`}
  }
`;
const CardAction = tw(PrimaryButtonBase)`w-full mt-6`;

export default ({
  subheading = "Our Portfolio",
  headingHtmlComponent = (
    <>
      We've done some <span tw="text-primary-500">amazing projects.</span>
    </>
  ),
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam.",
  linkText = "View all Projects",
  cardLinkText = "Read Case Study",
  textOnLeft = false
}) => {
  const cards = [
    {
      imageSrc:
        "https://images.unsplash.com/photo-1563461660947-507ef49e9c47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80",
      title: "Personalized Ad Campaign using Google AdWords",
      locationText: "New York"
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1573165231977-3f0e27806045?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80",
      title: "Ranking #1 for keywords like Chocolate, Snack",
      locationText: "Palo Alto"
    }
  ];
  return (
		<Container>
			{/* <Content>
				<ThreeColumn>
					<HeadingColumn textOnLeft={textOnLeft}>
						<HeadingInfoContainer>
							<Subheading>{subheading}</Subheading>
							<HeadingTitle>{headingHtmlComponent}</HeadingTitle>
							<HeadingDescription>{description}</HeadingDescription>
							<PrimaryLink>
								{linkText} <ArrowRightIcon />
							</PrimaryLink>
						</HeadingInfoContainer>
					</HeadingColumn>
					<ThreeColumnGrid>
						{cards.map((card, index) => (
							<CardColumn key={index}>
								<Card>
									<CardImage imageSrc={card.imageSrc} />
									<CardText>
										<CardTitle>{card.title}</CardTitle>
										<CardMeta>
											<CardMetaFeature>
												<LocationIcon /> {card.locationText}
											</CardMetaFeature>
										</CardMeta>
										<CardAction>{cardLinkText}</CardAction>
									</CardText>
								</Card>
							</CardColumn>
						))}
					</ThreeColumnGrid>
				</ThreeColumn>
			</Content> */}
			<div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
				<div class="max-w-xl mb-6 sm:mx-auto sm:text-center md:mb-10 lg:max-w-2xl">
					<p class="mb-1 text-xs font-semibold tracking-wide uppercase md:mb-2">
						New History
					</p>
					<p class="text-base text-gray-700 md:text-lg">
						Sed ut perspiciatis unde omnis iste natus error sit voluptatem
						accusantium doloremque rem aperiam, eaque ipsa quae.
					</p>
				</div>
				<div class="grid gap-6 row-gap-5 lg:grid-cols-3">
					<div>
						<img
							class="object-cover w-full h-64 mb-6 rounded shadow-lg lg:h-80 xl:h-96"
							src="https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
							alt=""
						/>
						<h5 class="mb-2 text-xl font-bold leading-none sm:text-2xl">
							A slice of heaven
						</h5>
						<p class="text-gray-700">
							O for awesome, this chocka full cuzzie is as rip-off as a cracker.
							Meanwhile, in behind the bicycle shed, Hercules Morse.
						</p>
					</div>
					<div>
						<img
							class="object-cover w-full h-64 mb-6 rounded shadow-lg lg:h-80 xl:h-96"
							src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
							alt=""
						/>
						<h5 class="mb-2 text-xl font-bold leading-none sm:text-2xl">
							Disrupt inspire
						</h5>
						<p class="text-gray-700">
							I'll be sure to note that in my log. Smooth as an android's
							bottom, eh, Data? When has justice ever been as simple as a rule
							book?
						</p>
					</div>
					<div>
						<img
							class="object-cover w-full h-64 mb-6 rounded shadow-lg lg:h-80 xl:h-96"
							src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
							alt=""
						/>
						<h5 class="mb-2 text-xl font-bold leading-none sm:text-2xl">
							Storage shed
						</h5>
						<p class="text-gray-700">
							Yolo ipsum dolor sit amet, consectetur adipiscing elit. Ut ac
							suscipit leo. Carpe diem vulputate est nec commodo rutrum.
						</p>
					</div>
				</div>
			</div>
		</Container>
	);
};
