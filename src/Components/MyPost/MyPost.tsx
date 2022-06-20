/** @jsxImportSource @emotion/react */
import MyPostItem from "../MyPostItem/MyPostItem";
import * as S from "./Style";
import * as I from "../../Assets";
import useSWR from "swr";
import { apiClient } from "../../Lib/Api/apiClient";
import { useParams } from "react-router-dom";

type mypost = {
  boardId: number;
  title: string;
  thumbnail: string;
  contents: string;
  fields: string[];
  date: string;
  status: string;
  introduce: string;
};

interface MyPostProps {
  data: { content: mypost[] };
}

const MyPost = () => {
  const { sub } = useParams();

  const { data, error } = useSWR<MyPostProps>(
    `/profile/${sub}/board/?page=0`,
    apiClient.get,
  );

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <div>
      <div css={S.Title}>
        <h1>내 작성글</h1>
      </div>
      {data.data.content.map(
        (
          { boardId, title, thumbnail, introduce, fields, date, status },
          idx,
        ) => (
          <MyPostItem
            boardId={boardId.toString()}
            title={title}
            thumbnail={thumbnail === null ? <I.MyPostDefaultImg /> : thumbnail}
            introduce={introduce}
            fields={fields}
            date={date}
            status={status === "RECRUITMENT" ? "모집중" : "모집완료"}
            key={idx}
          />
        ),
      )}
    </div>
  );
};

export default MyPost;
