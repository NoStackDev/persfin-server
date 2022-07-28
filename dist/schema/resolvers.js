import incomes from "./data";
const resolvers = {
    Query: {
        incomes() {
            return incomes;
        }
    }
};
export default resolvers;
