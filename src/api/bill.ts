import request from "@/utils/service";

export default {
  getBillList(params: { id: string }) {
    return request({
      url: "bill-list",
      method: "GET",
      params: params,
    });
  },
};
