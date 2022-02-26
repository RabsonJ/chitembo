import React, { useEffect, useState} from "react";
import styled from "styled-components";
import tw from "twin.macro";
import axios from 'axios'
//eslint-disable-next-line
import { css } from "styled-components/macro";
import { SectionHeading } from "components/misc/Headings.js";

import defaultCardImage from "../../images/shield-icon.svg";

import { ReactComponent as SvgDecoratorBlob3 } from "../../images/svg-decorator-blob-3.svg";

const Container = tw.div`relative`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-xl mx-auto py-20 md:py-24`}
`;
const Heading = tw(SectionHeading)`w-full`;

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 px-6 flex`}
`;

const Card = styled.div`
	${tw`flex flex-col mx-auto max-w-xs items-center px-6 py-10 border-2 border-secondary-100 rounded-lg mt-12`}
	.imageContainer {
		${tw`border-2 border-secondary-100 text-center rounded-full p-6 flex-shrink-0 relative`}
		img {
			${tw`w-8 h-8`}
		}
	}

	.textContainer {
		${tw`mt-6 text-center`}
	}

	.title {
		${tw`mt-2 font-bold text-xl leading-none text-gray-700`}
	}

	.description {
		${tw`mt-3 text-gray-600 text-sm leading-loose`}
	}
`;

const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-48 `}
`;

export default () => {

  const [services, setServices] = useState([]);

  useEffect(() => {
    const getRecords = async () => {
      try {
        const { data } = await axios.get(
					`https://api.airtable.com/v0/appz7kvM5UFGYYwLW/Services?maxRecords=6`,
					{
						headers: {
							Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_TOKEN}`,
						},
					}
				);
			setServices(data.records);
      } catch (err) {
        console.error(err);
      }
    }

    getRecords();
	}, []);

  return (
		<Container id="services">
			<ThreeColumnContainer>
				<Heading>
					Our Professional <span tw="text-yellow-800">Services</span>
				</Heading>
				{services.length > 0 ? (
					services.map((service, i) => (
						<Column key={i}>
							<Card>
								<span className="imageContainer">
									<img src={service.fields.icon || defaultCardImage} alt="" />
								</span>
								<span className="textContainer">
									<span className="title">
										{service.fields.name || 'Service'}
									</span>
									<p className="description">
										{service.fields.description ||
											'Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud. Sic Semper Tyrannis. Neoas Calie artel.'}
									</p>
								</span>
							</Card>
						</Column>
					))
				) : (
					<div>
						<p>Loading Services...</p>
					</div>
				)}
			</ThreeColumnContainer>
			<DecoratorBlob />
		</Container>
	);
};
