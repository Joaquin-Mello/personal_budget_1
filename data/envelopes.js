let envelopes = [
    { id: 1, category: 'Groceries', balance: 300 },
    { id: 2, category: 'Rent', balance: 1000 }
  ];
  
let nextId = 3;

function getAll() {
  return envelopes;
}

function getById(id) {
  return envelopes.find(env => env.id === id);
}

function create(category, balance) {
  const newEnv = { id: nextId++, category, balance };
  envelopes.push(newEnv);
  return newEnv;
}

function update(id, category, balance) {
  const envelope = getById(id);
  if (envelope) {
    envelope.category = category;
    envelope.balance = balance;
  }
  return envelope;
}

function remove(id) {
  const index = envelopes.findIndex(env => env.id === id);
  if (index !== -1) {
    return envelopes.splice(index, 1)[0];
  }
  return null;
}

function transfer(fromId, toId, amount) {
  const from = getById(fromId);
  const to = getById(toId);
  if (from && to && from.balance >= amount) {
    from.balance -= amount;
    to.balance += amount;
    return { from, to };
  }
  return null;
}
  
module.exports = { getAll, getById, create, update, remove, transfer };
