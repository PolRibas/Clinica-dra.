import axios from 'axios';

class ConsultasService {
  constructor() {
    this.consultas = axios.create({
      baseURL: 'https://clinica-api.com'
    });
  };

  newConsulta(consulta) {
    return this.consultas.post('/email', consulta)
    .then(({ data }) => { return data });
  };
  
};

const consultas = new ConsultasService();

export default consultas;