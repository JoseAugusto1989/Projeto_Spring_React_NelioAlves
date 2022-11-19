import styled from "styled-components";

export const ContainerSalesCard = styled.div`
  .dsmeta-card {
    background-color: #283142;
    border-radius: 10px;
    padding: 30px 10px;
  }

  .dsmeta-container {
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
  }

  #sales {
    padding: 40px 10px;
  }

  .dsmeta-sales-title {
    color: #676fff;
    font-size: 24px;
    margin-bottom: 20px;
  }

  .dsmeta-form-control-container {
    margin-bottom: 16px;
    max-width: 300px;
  }

  .dsmeta-form-control {
    width: 100%;
    height: 46px;
    background-color: #1b2531;
    border: 1px solid #384459;
    border-radius: 5px;
    color: #9aaabe;
    padding: 0 20px;
    font-size: 18px;
  }

  .dsmeta-sales-table {
    width: 100%;
    border-spacing: 0;
    border-collapse: collapse;
  }

  .dsmeta-sales-table thead {
    height: 55px;
    font-size: 16px;
    color: #e9e9e9;
    font-weight: 700;
  }

  .dsmeta-sales-table tbody {
    font-size: 14px;
    font-weight: 400;
    color: #cfcfcf;
    text-align: center;
  }

  .dsmeta-sales-table tbody tr {
    height: 74px;
    border-top: 1px solid #5f6e82;
  }

  .dsmeta-sales-table tbody tr:hover > td {
    background-color: #384459;
  }

  .dsmeta-sales-table tbody tr:nth-child(odd) {
    background-color: #242c3b;
  }

  .dsmeta-red-btn-container {
    display: flex;
    justify-content: center;
  }

  .dsmeta-red-btn {
    height: 45px;
    width: 45px;
    background: rgba(255, 107, 114, 0.1);
    border: 1px solid #ff6b72;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .dsmeta-red-btn img {
    width: 19px;
  }

  .show576 {
    display: none;
  }

  .show992 {
    display: none;
  }

  @media (min-width: 576px) {
    .show576 {
      display: table-cell;
    }

    .dsmeta-card {
      padding: 35px;
    }

    .dsmeta-sales-table tbody tr {
      height: 55px;
    }

    .dsmeta-sales-table tbody {
      font-size: 18px;
    }
  }

  @media (min-width: 992px) {
    .show992 {
      display: table-cell;
    }
  }
`;
