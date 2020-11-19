exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("forms")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("forms").insert([
        {
          id: 1,
          utmeReg: "08/30GD005",
          amountDue: 50000,
        },
        {
          id: 2,
          utmeReg: "11/30GY007",
          amountDue: 70000,
        },{
          id: 3,
          utmeReg: "15GT007",
          amountDue: 90000,
        }
      ]);
    });
};
