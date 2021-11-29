import React, { useState } from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled, { css } from "styled-components/macro"; //eslint-disable-line
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import { ReactComponent as ChevronDownIcon } from "feather-icons/dist/icons/chevron-down.svg";

const PrimaryBackgroundContainer = tw(Container)`-mx-8 px-8 bg-gray-900 text-gray-100`;

const HeadingContainer = tw.div``;
const Subheading = tw(SubheadingBase)`text-center text-gray-100 mb-4`;
const Heading = tw(SectionHeading)``;
const Description = tw(SectionDescription)`mx-auto text-center text-gray-400`;

const FaqsContainer = tw.div`mt-10 sm:mt-16 w-full flex-1 lg:flex justify-between items-start max-w-screen-lg mx-auto`;
const FaqsColumn = tw.div`w-full lg:max-w-lg lg:mr-12 last:mr-0`;
const Faq = tw.div`select-none cursor-pointer border-b-2 border-yellow-600 hover:border-yellow-800 transition-colors duration-300 py-6`;
const Question = tw.div`flex justify-between items-center`;
const QuestionText = tw.div`text-sm sm:text-lg tracking-wide`;
const QuestionToggleIcon = styled(motion.span)`
  ${tw`ml-2 transition duration-300`}
  svg {
    ${tw`w-6 h-6`}
  }
`;
const Answer = tw(motion.div)`hidden text-sm font-normal mt-4 text-gray-300`;

export default ({
	subheading = '',
	heading = 'Frequently Asked Questions',
	description = "Some of the common questions asked by our potential clients. If you can't find what you're looking for, please get in touch with us.",
	faqs = [
		{
			question: 'Is consultation free of charge ?',
			answer:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
		},
		{
			question: 'Do you have a refund policy ?',
			answer:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		},
		{
			question: 'How long do 3D designs usually take ?',
			answer:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		},
		{
			question: 'Where can I reach you for support ?',
			answer:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		},
		{
			question: 'What kind of payment methods are available ? ',
			answer:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		},
		{
			question: 'At what point is the client expected to pay ?',
			answer:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		},
	],
}) => {
	const faqCol1 = [];
	const faqCol2 = [];
	const [activeQuestionIndex, setActiveQuestionIndex] = useState(null);

	const toggleQuestion = (questionIndex) => {
		if (activeQuestionIndex === questionIndex) setActiveQuestionIndex(null);
		else setActiveQuestionIndex(questionIndex);
	};

	faqs.map((faq, index) => {
		const renderedFaq = (
			<Faq key={index} onClick={() => toggleQuestion(index)}>
				<Question>
					<QuestionText>{faq.question}</QuestionText>
					<QuestionToggleIcon
						variants={{
							collapsed: { rotate: 0 },
							open: { rotate: -180 },
						}}
						initial="collapsed"
						animate={activeQuestionIndex === index ? 'open' : 'collapsed'}
						transition={{ duration: 0.02, ease: [0.04, 0.62, 0.23, 0.98] }}
					>
						<ChevronDownIcon />
					</QuestionToggleIcon>
				</Question>
				<Answer
					variants={{
						open: {
							opacity: 1,
							height: 'auto',
							marginTop: '16px',
							display: 'block',
						},
						collapsed: {
							opacity: 0,
							height: 0,
							marginTop: '0px',
							display: 'none',
						},
					}}
					initial="collapsed"
					animate={activeQuestionIndex === index ? 'open' : 'collapsed'}
					transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
				>
					{faq.answer}
				</Answer>
			</Faq>
		);

		if (index % 2 === 0) faqCol1.push(renderedFaq);
		else faqCol2.push(renderedFaq);

		return null;
	});
	return (
		<PrimaryBackgroundContainer>
			<ContentWithPaddingXl>
				<HeadingContainer>
					{subheading && <Subheading>{subheading}</Subheading>}
					<Heading>{heading}</Heading>
					<Description>{description}</Description>
				</HeadingContainer>
				<FaqsContainer>
					<FaqsColumn>{faqCol1}</FaqsColumn>
					<FaqsColumn>{faqCol2}</FaqsColumn>
				</FaqsContainer>
			</ContentWithPaddingXl>
		</PrimaryBackgroundContainer>
	);
};
