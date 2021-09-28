import { Container } from '../Summary/styles';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import total from '../../assets/total.svg';

export function Summary(props:any){
    return(
      <Container>
          <div>
              <header>
                  <p>Entradas</p>
                  <img src={incomeImg} alt="Entradas" />
              </header>
              <strong>R$1000,00</strong>
          </div>
          <div>
              <header>
                  <p>Saidas</p>
                  <img src={outcomeImg} alt="Saidas" />
              </header>
              <strong>- R$500,00</strong>
          </div>
          <div className="highlight-background">
              <header>
                  <p>Total</p>
                  <img src={total} alt="total" />
              </header>
              <strong>R$500,00</strong>
          </div>
      </Container>
    );
}