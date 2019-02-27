import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <Wrapper>
      <Right>This site was made with ❤️ in Gainesville, FL</Right>
      {/* <AllMyContactInfo /> */}
    </Wrapper>
  )
}

export default Footer

const Wrapper = styled.div`
  background: #272c2f;
`

const Right = styled.p`
  color: #faf8ea;
  text-align: right;
  margin: -10px 10px 0px 0px;
  padding-bottom: 5px;
  font-size: 12px;
  letter-spacing: -0.05em;
  font-weight: 100;
`