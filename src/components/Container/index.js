import React from 'react'
import { ContainerWrapper, Row } from './style'

const Container = ({ children }) => (
  <ContainerWrapper>
    <Row>{children}</Row>
  </ContainerWrapper>
)

export default Container
