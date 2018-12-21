import {queryAI} from './requestWitAI';

const routeIncoming = (app) => {
  // incoming message Routes
  app.route('/incoming')
    .get(queryAI);
};

export default routeIncoming;