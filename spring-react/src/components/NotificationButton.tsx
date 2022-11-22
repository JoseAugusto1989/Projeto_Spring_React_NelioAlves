import axios from 'axios';
import * as React from 'react';
import { toast } from "react-toastify";
import icon from '../assets/img/notification.png';
import { Container, SizeImage } from './NotificationButton.styles';

type Props = {
    saleId?: number
}

const handleClick = (id: number) => {
//   axios.create(`/sales/${id}/notification`)
//     .then(response => {
//         console.log("SUCCESSUFULLY!!!")
//         toast.info("SMS enviado com sucesso!!!");
//     })
}

const NotificationButton = ({ saleId }: Props) => {
    return(
        // <Container onClick={() => handleClick(saleId)}>
        //     <SizeImage src={icon} alt="Notificar"/>
        // </Container>
        <p>test</p>
    )
}

export default NotificationButton;