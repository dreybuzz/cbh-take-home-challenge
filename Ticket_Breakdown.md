# Guesses

    - Application uses MVC pattern.
    - Database is MySQL
    - GraphQL is used

# 1. Create Facility ID column/field in Agent model

    - ETA: 2 Hours
    - Acceptance Criteria: Agent model should have an additional field - "custom_facility_id" with the following properties:
        * Unique
        * Nullable
        * Length - 32

    - Implementation: Add new field/column with the following properties to Agent model:
        {
            name: "custom_facility_id",
            type: "string",
            function: uuidv4,
            length: 32,
            unique: true,
            nullable: true
        }

# 2. Add "custom_facility_id" to Shift Model

        - ETA: 3 Hours
        - Acceptance Criteria: Shift model should use custom_facility_id rather than agent_id
        - Implementation: Update Shift model to store "custom_facility_id" of the Agent as opposed to the "id"

# 3. Adjust getShiftsByFacility(id) function to return shifts with the new custom_facility_id

    - ETA: 1 Hour
    - Acceptance Criteria: getShiftsByFacility(id) function should return the custom_facility_id of the Agent on each Shift rather than the "id"
    - Implementation: Update graph request field from "id" to "custom_facility_id"

# 4. Adjust generateReport() function to use custom_facility_id

    - ETA: 1 Hour
    - Acceptance Criteria: Generated reports should use custom_facility_id field as opposed to the "id" field
    - Implementation: Update generateReport() function to use custom_facility_id field
