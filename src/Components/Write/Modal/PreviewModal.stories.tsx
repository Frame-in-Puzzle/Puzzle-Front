import PreviewModal from "./PreviewModal";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Components/Write/PreviewModal",
  component: PreviewModal,
} as ComponentMeta<typeof PreviewModal>;

export const tagModal: ComponentStory<typeof PreviewModal> = () => (
  <PreviewModal onSubmit={function (): void {}} />
);
