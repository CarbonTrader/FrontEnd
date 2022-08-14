import axios from "axios";

export default axios.create({
    baseURL: "https://carbontrader-1111-default-rtdb.firebaseio.com/"
})