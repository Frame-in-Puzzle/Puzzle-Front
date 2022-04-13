import { apiClient } from "../apiClient";

export const postAttend = async (boardId: string | undefined) => {
  try {
    const { data } = await apiClient.post(`/attend/board/${boardId}`);
    return { data };
  } catch (e: any) {
    if (e.message === "Request failed with status code 400") {
      alert("이미 신청하셨어요");
    } else {
      alert(e);
    }
  }
};

export const patchAttend = async (
  boardId: string | undefined,
  attendId: number,
  attendStatus: string,
) => {
  try {
    const { data } = await apiClient.patch(`/attend/${boardId}`, {
      attendId: attendId,
      attendStatus: attendStatus,
    });
    return { data };
  } catch (e: any) {
    alert(e);
  }
};
