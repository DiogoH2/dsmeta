import axios from 'axios';
import { toast } from 'react-toastify';
import NotificationIcon from '../../assets/notification-icon.svg';
import { BASE_URL } from '../../utils/request-env';
import './style.css';

type Props ={
  saleId: number;

}

function handleClick(id : number){
  axios(`${BASE_URL}/sales/${id}/notification`)
      .then(response => {
        toast.info("SMS Enviado com Sucesso!!!");
      })
}

function NotificationButton( { saleId } : Props) {

    return(
        <div className="dsmeta-red-btn" onClick={() => handleClick(saleId)}>
          <img src={NotificationIcon} />
        </div>
    )
    
  }
  
  export default NotificationButton;