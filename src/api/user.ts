import request from "@/utils/request";

export async function queryProse(params: object): Promise<any> {
  return request({
    url: `/api/users/userlist`,
    method: "GET",
    params: params,
  });
}
