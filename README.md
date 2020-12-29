# Run Tests
Run `npm install` on the root folder.
Run `npm test`.
I'm using Jest to execute the tests.
The js files inside /test folder contain the tests that call the Business modules.

# Data / Schemas
The /data folder contains the json with the data used in the tests.
- _schema.json_: contains the main data, described on the part 1 of the Challenge. 
- _schema-additional.json_: contains the redundancy data for optimizing queries and filters, as described on part 3 of the Challenge.

# Modules organisation
## Business
The /business folder contains the modules that implement the business rules, attending to the part 2 of the Challenge.

## Repository
The /repository folder contains the modules which would access the databases. In this case it accesses the data mocked in the json files contained in the /data folder.