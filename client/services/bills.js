import api from "./api";

export default {
    bills() {
        return api().get("/bills");
    }
}
