import { selected } from "../../Type/types";

export const fieldList: selected[] = [
  { name: "전체", value: "ALL" },
  { name: "프론트엔드", value: "FRONTEND" },
  { name: "백엔드", value: "BACKEND" },
  { name: "게임", value: "GAME" },
  { name: "iOS", value: "IOS" },
  { name: "Android", value: "ANDROID" },
  { name: "AI", value: "AI" },
];

export const purposeList: selected[] = [
  { name: "프로젝트", value: "PROJECT" },
  { name: "대회", value: "CONTEST" },
  { name: "서비스", value: "SERVICE" },
  { name: "스터디", value: "STUDY" },
];

export const stateList: selected[] = [
  { name: "모집중", value: "RECRUITMENT" },
  { name: "모집완료", value: "COMPLETE" },
];

export const languageList = {
  Frontend: [
    { name: "Javascript", value: "JS" },
    { name: "Typescript", value: "TS" },
    { name: "React", value: "REACT" },
    { name: "Vue", value: "VUE" },
    { name: "Next", value: "NEXT" },
  ],
  Backend: [
    { name: "Java", value: "JAVA" },
    { name: "Spring", value: "SPRING" },
    { name: "Spring Boot", value: "SPRINGBOOT" },
    { name: "Go", value: "GO" },
    { name: "django", value: "DJANGO" },
    { name: "express", value: "EXPRESS" },
    { name: "nest", value: "NEST" },
  ],
  AI: [
    { name: "Pytorch", value: "PYTORCH" },
    { name: "Tensorflow", value: "TENSORFLOW" },
  ],
  Android: [{ name: "Kotlin", value: "KOTLIN" }],
  iOS: [{ name: "Swift", value: "SWIFT" }],
  Game: [
    { name: "Unity", value: "UNITY" },
    { name: "C#", value: "C#" },
    { name: "Unreal Engine", value: "UNREALENGINE" },
  ],
};
