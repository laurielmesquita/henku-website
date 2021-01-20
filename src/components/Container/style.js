import styled from 'styled-components'

export const ContainerWrapper = styled.section`
  width: 100%;
  padding-right: var(--gd-gutter-x, 1.25rem);
  padding-left: var(--gd-gutter-x, 1.25rem);
  margin-right: auto;
  margin-left: auto;
<<<<<<< HEAD

  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }

  @media (min-width: 1400px) {
    max-width: 1386px;
  }
`

export const Row = styled.div`
  --gd-gutter-x: 2.5rem;
  --gd-gutter-y: 0;
  display: flex;
  flex-wrap: wrap;
  margin-top: calc(var(--gd-gutter-y) * -1);
  margin-right: calc(var(--gd-gutter-x) / -2);
  margin-left: calc(var(--gd-gutter-x) / -2);

  & > * {
    box-sizing: border-box;
    flex-shrink: 0;
    width: 100%;
    max-width: 100%;
    padding-right: calc(var(--gd-gutter-x) / 2);
    padding-left: calc(var(--gd-gutter-x) / 2);
    margin-top: var(--gd-gutter-y);
=======

  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }

  @media (min-width: 1400px) {
    max-width: 1386px;
>>>>>>> some-improvements
  }
`
