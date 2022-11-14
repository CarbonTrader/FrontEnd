import axios from "axios";
import {BASE_API_URL} from "../environment";
import {
    deleteUser,
    exchange,
    getTraderCredits, getUser,
    getUserCredits,
    getUserKeys,
    getUserTransactions,
    logInWithEmailAndPassword, manyExchange,
    registerWithEmailAndPassword, retire, saleCredits
} from "./userService";

jest.mock("axios");

describe("UserService", () => {
    it("should call logInWithEmailAndPassword", async () => {
        const data = {
            email: "test",
            password: "test"
        };

        axios.post.mockResolvedValueOnce({data: {}});

        const result = await logInWithEmailAndPassword("test", "test");

        expect(axios.post).toHaveBeenCalledWith(`${BASE_API_URL}/auth/login`, data);
        expect(result).toEqual({data:{}});
    });

    it("should call getUserKeys", async () => {
        axios.get.mockResolvedValueOnce({data: {}});

        const result = await getUserKeys("test");

        expect(axios.get).toHaveBeenCalledWith(`${BASE_API_URL}/users/keys/test`);
        expect(result).toEqual({data:{}});
    });

    it("should call registerWithEmailAndPassword", async () => {
        const data = {
            name: "test",
            email: "test",
            password: "test",
            role: "test"
        };

        axios.post.mockResolvedValueOnce({data: {}});

        const result = await registerWithEmailAndPassword("test", "test", "test", "test");

        expect(axios.post).toHaveBeenCalledWith(`${BASE_API_URL}/auth/signup`, data);
        expect(result).toEqual({data:{}});
    });

    it("should call getUserCredits", async () => {
        axios.get.mockResolvedValueOnce({data: {}});

        const result = await getUserCredits("test");

        expect(axios.get).toHaveBeenCalledWith(`${BASE_API_URL}/users/credits/test`);
        expect(result).toEqual({data:{}});
    });

    it("should call getUserTransactions", async () => {
        axios.get.mockResolvedValueOnce({data: {}});

        const result = await getUserTransactions("test");

        expect(axios.get).toHaveBeenCalledWith(`${BASE_API_URL}/users/transactions/test`);
        expect(result).toEqual({data:{}});
    });

    it("should call getTraderCredits", async () => {
        axios.get.mockResolvedValueOnce({data: {}});

        const result = await getTraderCredits("test");

        expect(axios.get).toHaveBeenCalledWith(`${BASE_API_URL}/users/credits/test`);
        expect(result).toEqual({data:{}});
    });

    it("should call getUser", async () => {
        axios.get.mockResolvedValueOnce({data: {}});

        const result = await getUser("test");

        expect(axios.get).toHaveBeenCalledWith(`${BASE_API_URL}/users/test`);
        expect(result).toEqual({data:{}});
    });

    it("should call exchange", async () => {
        const transaction = {
            id: "tra1",
            serial: "test",
            recipient: "test",
            sender_email: "test",
            private_key_sender: "test",
            public_key_sender: "test",
        };

        const data = {
            id: "tra1",
            carbon_trader_serial: "test",
            recipient_email: "test",
            sender_email: "test",
            private_key_sender: "test",
            public_key_sender: "test",
        };

        axios.post.mockResolvedValueOnce({data: {}});

        await exchange(transaction);

        expect(axios.post).toHaveBeenCalledWith(`${BASE_API_URL}/transaction/exchange`, data);
    });

    it("should call retire", async () => {
        const transaction = {
            serial: "test",
            recipient: "test",
            sender_email: "test",
            private_key_sender: "test",
            public_key_sender: "test",
        };

        const data = {
            carbon_trader_serial: "test",
            recipient_email: "test",
            sender_email: "test",
            private_key_sender: "test",
            public_key_sender: "test",
        };

        axios.post.mockResolvedValueOnce({data: {}});

        await retire(transaction);

        expect(axios.post).toHaveBeenCalledWith(`${BASE_API_URL}/transaction/retire`, data);
    });

    it("should call saleCredits", async () => {
        const data = {
            email: "test",
            serial: "test",
            project_id: "test"
        };

        axios.post.mockResolvedValueOnce({data: {}});

        await saleCredits("test", "test", "test");

        expect(axios.post).toHaveBeenCalledWith(`${BASE_API_URL}/users/sale_credit`, data);
    });

    it("should call deleteUser", async () => {
        const data = {
            email: "test",
            serial: "test",
            project_id: "test"
        };

        axios.delete.mockResolvedValueOnce({data: {}});

        await deleteUser("test");

        expect(axios.delete).toHaveBeenCalledWith(`${BASE_API_URL}/auth/delete/test`);
    });

    it("should call manyExchange", async () => {
        const data = {
            amount: 0,
            recipient_email: null,
            cp_email: null,
            private_key_sender: "test",
            public_key_sender: "test",
        };

        const transaction = {
            cont: 0
        };

        axios.post.mockResolvedValueOnce({data: {}});

        await manyExchange(transaction, "test", "test");

        expect(axios.post).toHaveBeenCalledWith(`${BASE_API_URL}/transaction/many/exchange`, data);
    });
});