import styled from 'styled-components'

export const Styles = styled.div`
  padding: 1rem;
  width: 90%;

  table {
    border-spacing: 0;
    border: 1px solid black;
    width: 100%;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }

      .div-filter {
        margin-top: 10px;
      }
    }
  }
`

export const bgColors = {
  RD: 'rgba(207, 0, 15, 0.4)',
  BL: 'rgba(31, 58, 147, 0.4)',
  YL: 'rgba(238, 238, 0, 0.4)',
  OR: 'rgba(248, 148, 6, 0.4)',
  GR: 'rgba(191, 191, 191, 1)',
  SV: 'rgba(191, 191, 191, 0.4)',
}
