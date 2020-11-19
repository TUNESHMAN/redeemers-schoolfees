exports.up = function (knex) {
  // Create the forms table
  return knex.schema.createTable("forms", (table) => {
    table.increments(); //This will create primary keys that auto-increments
    table.string("utmeReg", 128).unique().notNullable();
    table.integer("amountDue").notNullable();
  });
};

exports.down = function (knex) {
  // Destroy the forms table if it exists
  return knex.schema.dropTableIfExists("forms");
};
