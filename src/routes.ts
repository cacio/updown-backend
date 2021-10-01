import {Router} from 'express';
import { getRepository } from 'typeorm';

import ClientesControllers from './controllers/ClientesControllers';
import LicencaPcControlles from './controllers/LicencaPcControlles'

const routes = Router();

/*
* Clientes
*/
routes.get('/clientes',ClientesControllers.index);
routes.get('/clientes/:id',ClientesControllers.show);
routes.post('/clientes',ClientesControllers.create);

/*
*   Licença Pc 
*/
routes.get('/licencapc/:id',LicencaPcControlles.show);
routes.get('/licencapc/cliente/:idcli',LicencaPcControlles.showPorCliente);
routes.post('/licencapc',LicencaPcControlles.create);

export default routes;