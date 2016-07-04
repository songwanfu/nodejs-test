
module.exports = function (orm, db) {
  db.models.agent = db.define('agent', {
    id : { type: 'number', required: false },
    name : { type: 'text', required: true},
    code : { type: 'text', required: true},
    contract_id : { type: 'text', required: true},
    profit_proportion : { type: 'text', required: true},
    profit_return : { type: 'text', required: true},
    contractor : { type: 'text', required: true},
    start_time : { type: 'text', required: true},
    end_time : { type: 'text', required: true},
    create_time : { type: 'text', required: true},
  });
}
