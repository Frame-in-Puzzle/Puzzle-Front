import { apiClient } from "../apiClient";

export interface PreuploadInfo {
  image_path: string;
  signed_url: string;
}

export const postS3ImageUpload = async (info: {
  type: string;
  filename: string;
  refId?: string;
}) => {
  return apiClient.post<PreuploadInfo>("/api/board/create-url", info);
};
