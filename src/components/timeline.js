import React from 'react'
import '../styles/future.css'
import styled from 'styled-components'


const StyledSectionFlex = styled.div`
  flex-wrap: wrap;
  max-width: 1440px;

  @media (max-width: 960px) {
    padding: 1rem;
    margin-left: 0;
    margin-top: 0rem;
    width: 100%;
    flex-direction: column;
  }
  @media (max-width: 640px) {
    display: none;
  }
  h1,
  h2 {
    max-width: 650px;
  }
  p {
    max-width: 650px;
  }
`



const Future = () => {


  return (
    <StyledSectionFlex>
<ul className="timeline-events">
	<li className="timeline-event-years-2">
		<h2>2017-2018</h2>
		<h3>Proof of Concept</h3>
		<h4>Start of development</h4>
	</li>
	<li className="timeline-event-years-4">
		<h2>2018-2021</h2>
		<h3>Research & Development</h3>
		<h4>Prototype with +1,000 Testers</h4>
	</li>
	<li className="timeline-event-years-3">
		<h2>2021-2022</h2>
		<h3>The Graph Integration</h3>
		<h4>Establishment Nerve Global GmbH</h4>
	</li>
	<li className="timeline-event-years-3">
		<h2>2022-2023</h2>
		<h3>Mainnet, NFT´s, Google Maps</h3>
		<h4>Establishment Foundation, Web3</h4>
	</li>
	<li className="timeline-event-years-3">
		<h2>2023 +</h2>
		<h3>Metaverse & AR</h3>
		<h4>Metaverse & AR</h4>
	</li>
</ul>
<ul className="timelines-years">
	<li>2018</li>
	<li>2019</li>
	<li>2020</li>
	<li>2021</li>
	<li>2022</li>
	<li>2023</li>
	<li>2024</li>
</ul>
  </StyledSectionFlex>
)
}

export default Future
