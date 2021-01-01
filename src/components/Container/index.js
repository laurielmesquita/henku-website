import React from 'react'
import { ContainerWrapper, Row } from './style'

const Container = ({ children, nameOfClass }) => (
  <ContainerWrapper className={nameOfClass}>
    <Row>{children}</Row>
  </ContainerWrapper>
)

export default Container
