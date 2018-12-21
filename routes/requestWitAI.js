import {Wit,log} from 'node-wit';
import botModel from '../models/BotResponseModel'


export function queryAI(req, res) {
    let response = {};
    const client = new Wit({accessToken: '6PS4KGWGHEYRMV7FOUED6O4BSQ7ARIW3'});
    console.log(req.query)
    client.message(req.query.request, {})
        .then((witResponse) => {
            let intentValue = witResponse.entities.intent[0].value;
            botModel.find({intent: intentValue},(err, botRes) => {
                if (err) {
                    response.error = err;
                }
                if (botRes[0] !== undefined ) {
                    response.message = botRes[0].message;
                    res.json(response);
                }
                res.status(400).json(response);
            });
    })
};