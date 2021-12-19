import React, { useEffect, useState} from "react";
import axios from 'axios'
import tw from "twin.macro";
import styled from "styled-components";
import {css} from "styled-components/macro"; //eslint-disable-line
import { SectionHeading as HeadingTitle } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { ReactComponent as TagIcon } from "feather-icons/dist/icons/tag.svg";

import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;
const ThreeColumn = tw.div`flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap`;
const Column = tw.div`mt-16 mx-5`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-sm`;

const Card = tw.div`lg:mx-4 xl:mx-8 max-w-sm flex flex-col h-full`;
const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`bg-cover bg-center h-80 lg:h-64 rounded rounded-b-none`
]);

const Details = tw.div`p-6 rounded rounded-t-none flex-1 flex flex-col lg:block lg:text-left`;
const MetaContainer = tw.div`flex items-center`;
const Meta = styled.div`
  ${tw`text-secondary-100 font-medium text-sm flex items-center leading-none mr-6 last:mr-0`}
  svg {
    ${tw`w-4 h-4 mr-1`}
  }
`;

const Title = tw.h5`mt-4 leading-snug font-bold text-lg`;
const Description = tw.p`mt-2 text-sm text-secondary-100`;
const Link = styled(PrimaryButtonBase).attrs({as: "a"})`
  ${tw`inline-block mt-4 text-sm font-semibold`}
`

export default ({
	heading = (
		<>
			Our <span tw="text-yellow-800">Amazing Work.</span>
		</>
	),
	description = 'Some amazing of the amazing work we have done for our clients.',
}) => {
	  const [works, setWorks] = useState([]);

  useEffect(() => {
    const getRecords = async () => {
      try {
        const { data } = await axios.get(
					`https://api.airtable.com/v0/appz7kvM5UFGYYwLW/Images?maxRecords=6`,
					{
						headers: {
							Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_TOKEN}`,
						},
					}
				);
			setWorks(data.records);
			console.log(data.records)
      } catch (err) {
        console.error(err);
      }
    }

    getRecords();
  }, []);
	
	return (
		<Container>
			<Content>
				{works.length > 0 ? (
					<span>
						<HeadingInfoContainer>
							<HeadingTitle>{heading}</HeadingTitle>
							<HeadingDescription>{description}</HeadingDescription>
						</HeadingInfoContainer>
						<ThreeColumn>
							<Carousel plugins={[
								'infinite',
								'arrows',
								{
									resolve: slidesToShowPlugin,
									options: {
									numberOfSlides: 3
									}
								},
							]}
							  breakpoints={{
								740: {
									plugins: [
									'infinite',
									'arrows',
									{
										resolve: slidesToShowPlugin,
										options: {
										numberOfSlides: 1
										}
									},
								]
								},
								1300: {
									plugins: [
									'infinite',
									'arrows',
									{
										resolve: slidesToShowPlugin,
										options: {
										numberOfSlides: 2
										}
									},
								]
								}
							}}

							>
								{works.filter(work => work.fields?.images !== undefined).map((work) => (
									<Column key={work.id}>
										<Card>
											<Image imageSrc={work.fields?.images !== undefined ? work.fields?.images[0].url : ''} />
											<Details>
												<MetaContainer>
													<Meta>
														<TagIcon />
														{/* <div>{work.fields?.service !== undefined ? work.fields?.service[0] : 'Design'}</div> */}
														<div>Design</div>
													</Meta>
												</MetaContainer>
												<Title>{work.fields.title}</Title>
												<Description>{work.fields.description}</Description>
											</Details>
										</Card>
									</Column>
								))}
								</Carousel>
							</ThreeColumn>
					</span>		
				) : null}
				{/* <Link href='/'>Read Post</Link> */}
			</Content>
		</Container>
	);
};
