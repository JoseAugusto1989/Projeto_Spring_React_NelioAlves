import "react-datepicker/dist/react-datepicker.css";

import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";

import { Sale } from "../models/sale";
import SalesCardService from "../services/salesCardService";
import NotificationButton from "./NotificationButton";
import { ContainerSalesCard } from "./SalesCard.styles";

const SalesCard = () => {
  const [sales, setSales] = useState<Sale[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);

  const min = new Date(new Date().setDate(new Date().getDate() - 365));
  const max = new Date();

  const [minDate, setMinDate] = useState(new Date(min));
  const [maxDate, setMaxDate] = useState(new Date(max));

  useEffect(() => {
    const dmin = minDate.toISOString().slice(0, 10);
    const dmax = maxDate.toISOString().slice(0, 10);
    // inserir no get para filtrar a data selecionada `/sales?minDate=${dmin}&maxDate=${dmax}`

    const filters = { page, size, minDate: dmin, maxDate: dmax };
    SalesCardService.getAll(filters)
      .then((response) => {
        console.log(response.data);
        setSales(response.data.content);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [page, size, minDate, maxDate]);

  return (
    <ContainerSalesCard>
      <div className="dsmeta-card">
        <h2 className="dsmeta-sales-title">Vendas</h2>
        <div>
          <div className="dsmeta-form-control-container">
            <DatePicker
              selected={minDate}
              onChange={(date: Date) => setMinDate(date)}
              className="dsmeta-form-control"
              dateFormat="dd/MM/yyyy"
            />
          </div>
          <div className="dsmeta-form-control-container">
            <DatePicker
              selected={maxDate}
              onChange={(date: Date) => setMaxDate(date)}
              className="dsmeta-form-control"
              dateFormat="dd/MM/yyyy"
            />
          </div>
        </div>

        <div>
          <table className="dsmeta-sales-table">
            <thead>
              <tr>
                <th className="show992">ID</th>
                <th className="show576">Data</th>
                <th>Vendedor</th>
                <th className="show992">Visitas</th>
                <th className="show992">Vendas</th>
                <th>Total</th>
                <th>Notificar</th>
              </tr>
            </thead>
            <tbody>
              {sales.map((sale) => {
                return (
                  <tr key={sale.id}>
                    <td className="show992">{sale.id}</td>
                    <td className="show576">
                      {new Date(sale.date).toLocaleDateString()}
                    </td>
                    <td>{sale.sellerName}</td>
                    <td className="show992">{sale.visited}</td>
                    <td className="show992">{sale.deals}</td>
                    <td>{sale.amount.toFixed(2)}</td>
                    <td>
                      <div className="dsmeta-red-btn-container">
                        <div className="dsmeta-red-btn">
                          <NotificationButton saleId={sale.id} />
                        </div>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </ContainerSalesCard>
  );
};

export default SalesCard;
