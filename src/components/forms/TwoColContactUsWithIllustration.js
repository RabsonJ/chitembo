import React from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';
import { css } from 'styled-components/macro'; //eslint-disable-line
import {
	SectionHeading,
	Subheading as SubheadingBase,
} from 'components/misc/Headings.js';
import EmailIllustrationSrc from 'images/email-illustration.svg';
import { PopupButton } from '@typeform/embed-react';

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto`;
const TextColumn = styled(Column)((props) => [
	tw`md:w-7/12 mt-16 md:mt-0`,
	props.textOnLeft
		? tw`md:mr-12 lg:mr-16 md:order-first`
		: tw`md:ml-12 lg:ml-16 md:order-last`,
]);

const Image = styled.div((props) => [
	`background-image: url("${props.imageSrc}");`,
	tw`rounded bg-contain bg-no-repeat bg-center h-full`,
]);
const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Heading = tw(
	SectionHeading
)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`my-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;

const SubmitButton = tw.button`mt-2
								px-8 py-3 rounded bg-yellow-800 text-gray-100
								hocus:bg-yellow-700 hocus:text-gray-200 focus:shadow-outline
								border-b-0`;

export default ({
	heading = (
		<>
			Feel free to <span tw="text-yellow-800">get in touch</span>
			<wbr /> with us.
		</>
	),
	description = 'For all enquiries, please email us by clicking the button below to access the contact form.',
	submitButtonText = 'Contact Us',
	textOnLeft = true,
}) => {
	// The textOnLeft boolean prop can be used to display either the text on left or right side of the image.

	return (
		<Container id="contact">
			<TwoColumn>
				<ImageColumn>
					<Image imageSrc={EmailIllustrationSrc} />
				</ImageColumn>
				<TextColumn textOnLeft={textOnLeft}>
					<TextContent>
						<Heading>{heading}</Heading>
						<Description>{description}</Description>
						<PopupButton
							id="EyoWaY6e"
							style={{ fontSize: 20 }}
							width="90%"
							hideHeaders="true"
							hideFooter="true"
							autoClose="3000"
						>
							<SubmitButton type="submit">{submitButtonText}</SubmitButton>
						</PopupButton>
					</TextContent>
				</TextColumn>
			</TwoColumn>
		</Container>
	);
};
