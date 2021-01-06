import styled from 'styled-components'

export const ContainerWrapper = styled.section`
  max-width: var(--container);
  padding-right: 0.9375rem;
  padding-left: 0.9375rem;
  margin-right: auto;
  margin-left: auto;
`

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;

  & > * {
    flex-shrink: 0;
    width: 100%;
    max-width: 100%;
    padding-right: 0.9375rem;
    padding-left: 0.9375rem;
  }
`
