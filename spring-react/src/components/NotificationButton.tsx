import Button from '@mui/material/Button';
import * as React from 'react';
import { Container, SizeImage } from './NotificationButton.styles';
import icon from "../assets/img/notification.png"

const NotificationButton = () => {
    return(
        <Container>
            <SizeImage src={icon} alt="Notificar"/>
        </Container>
    )
}

export default NotificationButton;