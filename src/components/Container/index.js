import React from 'react'
import { ContainerWrapper } from './style'

const Container = ({ children, nameOfClass }) => (
  <ContainerWrapper className={nameOfClass}>{children}</ContainerWrapper>
)

export default Container
