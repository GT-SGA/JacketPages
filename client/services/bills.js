import api from "./api";

export default {
    bills(submitter) {
        return api().get(`/bills?submitter=${submitter}`);
    }
}
