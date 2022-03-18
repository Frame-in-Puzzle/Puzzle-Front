import DetailContent from "./DetailContent";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Templates/Detail/DetailContent",
  component: DetailContent,
} as ComponentMeta<typeof DetailContent>;

const content =
  "새로움과 배움이 가득했던 대학생활과 달리 회사는 생각보다 정적이었다.사람들이 열광하는 서비스를 만들어나가고 싶었는데, 그런 팀으로 가지는못했다. 개발을 많이 할 수 있는 팀으로 갔지만, 사람들이 열광하는 서비스를만들어갈 기회를 얻지는 못했다. 경력을 쌓고 나가야겠다는 생각도 했다. 잠시스쳐지나가는 프로젝트들을 하겠지만, 개발을 좋아하기 때문에 열심히 배운다면성장할 것이라고 생각했다. 그러다가 다른 곳에 붙어서 나간다면 그것이최선이었다. 하지만 면접의 벽은 높았다. 면접을 볼때마다 회사일이 바쁘다는핑계로 소홀히 해온 기본기의 중요성을 느꼈다. 아직은 준비가 안된 것이었고,그렇기 때문에 탈락할수 밖에 없었다. 기본기를 쌓아야 했다. 그리고 그러기";

export const detailContent: ComponentStory<typeof DetailContent> = () => (
  <DetailContent contents={content} />
);
