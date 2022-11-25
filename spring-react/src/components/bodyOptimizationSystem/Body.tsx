import img from "../../assets/img/Rectangle 13.png";
import contImg from "../../assets/img/image 1.png";
import finanImg from "../../assets/img/image 2.png";
import relatImg from "../../assets/img/image 3.png";
import vendasImg from "../../assets/img/image 4.png";
import styled from "styled-components";

const ContainerMain = styled.div`
  background-color: white;
`;

const ContainerSystem = styled.div`
  background-color: white;
  margin: 20px;
`;

const ContainerList = styled.div`
  display: flex;
  margin: 85px;
  flex-direction: row;
`;

const ContainerImages = styled.div`
  padding: 0 250px 10px 10px;
`;

const BodyOptimization = () => {
  return (
    <ContainerMain>
      <div>
        <img src={img} alt="computer" />
      </div>

      <ContainerSystem>
        <h1>SISTEMA DE GESTÃO EMPRESÁRIAL</h1>
        <p>
          O OptimizationSystem é um sistema de gestão para empresas e pode fazer
          muito pelo seu negócio! Conheça como nosso software pode te ajudar!
        </p>
        <p>Algumas de nossas funcionalidades:</p>
      </ContainerSystem>

      <ContainerList>
        <ContainerImages>
          <p>Controle de estoque</p>
          <img src={contImg} alt="estoque" />
        </ContainerImages>

        <ContainerImages>
          <p>Financeiro</p>
          <img src={finanImg} alt="financeiro" />
        </ContainerImages>

        <ContainerImages>
          <p>Relatórios</p>
          <img src={relatImg} alt="relatorios" />
        </ContainerImages>

        <ContainerImages>
          <p>Controle de Vendas</p>
          <img src={vendasImg} alt="vendas" />
        </ContainerImages>
      </ContainerList>
    </ContainerMain>
  );
};

export default BodyOptimization;
