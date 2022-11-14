import axios from "axios";
import {BASE_API_URL} from "../environment";
import {getGlobalTransactions} from "./transactionService";

jest.mock("axios");

describe("TransactionService", () => {
    it("should call getGlobalTransactions", async () => {
        axios.get.mockResolvedValueOnce({data: {}});

        const result = await getGlobalTransactions();

        expect(axios.get).toHaveBeenCalledWith(`${BASE_API_URL}/transaction/all`);
        expect(result).toEqual({});
    });
});