/** @jsxImportSource @emotion/react */
import React from "react";
import * as S from "./Style";
import { FaGithubSquare } from "react-icons/fa";

interface ModalProps {
  modalState: boolean;
  closeModal: (e: any) => void;
}

const SigInModal: React.FC<ModalProps> = ({ modalState, closeModal }) => {
  return modalState ? <FaGithubSquare /> : <></>;
};

export default SigInModal;
