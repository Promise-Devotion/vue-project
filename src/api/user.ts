import request from "@/utils/service";

export default {
  // 代发货列表查询
  getBillList(params: any) {
    return request({
      url: `/bill-list`,
      method: "GET",
      params: params,
    });
  },
}

