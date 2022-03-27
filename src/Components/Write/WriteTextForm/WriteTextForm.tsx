/** @jsxImportSource @emotion/react */
import React, {
  ChangeEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import Button from "../../Button/Button";
import * as S from "./Style";
import { BiHeading, BiBold, BiItalic, BiCheckboxChecked } from "react-icons/bi";
import { AiOutlineUnorderedList, AiOutlineOrderedList } from "react-icons/ai";
import { BsCodeSlash } from "react-icons/bs";
import { FiLink2 } from "react-icons/fi";
import { useRemark } from "react-remark";
import { useRecoilState } from "recoil";
import { isDragging, isPreview } from "../../../Atoms";
import { useBeforeunload } from "react-beforeunload";
import { postBoard, s3ImageUpload } from "../../../Lib/Api/post/post";
import Input from "../../Input/Input";
import WriteSelectItem from "../WriteSelectItem/WriteSelectItem";
import { useNavigate } from "react-router-dom";
interface WriteProps {
  onClick?: Function;
  data?: {
    contents: string;
    fieldList: ["BACKEND", "FRONTEND"];
    fileUrlList: any;
    languageList: ["SPRING", "REACT"];
    purpose: ["프로젝트", "대회", "서비스", "스터디"];
    status: ["모집중", "모집완료"];
    title: string;
  };
}
interface IFileTypes {
  id: number;
  object: File;
}

const WriteTextForm: React.FC<WriteProps> = ({ onClick = () => {} }) => {
  const [markdownSource, setMarkdownSource] = useRemark();
  const [markdownValue, setMarkdownValue] = useState("");
  const [title, setTitle] = useState("");
  const [preview, setPreview] = useRecoilState<boolean>(isPreview);
  const [drag, setDrag] = useState<boolean>(false);
  const navigate = useNavigate();
  const innerRef: any = useRef(null);
  const [files, setFiles] = useState<IFileTypes[]>([]);
  const fileId = useRef<number>(0);
  const dragRef = useRef<HTMLLabelElement | null>(null);

  const onChangeFiles = useCallback(
    (e: ChangeEvent<HTMLInputElement> | any): void => {
      let selectFiles: File[] = [];
      let tempFiles: IFileTypes[] = files;
      if (e.type === "drop") {
        selectFiles = e.dataTransfer.files;
        s3ImageUpload(selectFiles).then(() => {
          console.log("success");
        });
      } else {
        selectFiles = e.target.files;
      }

      for (const file of selectFiles) {
        tempFiles = [
          ...tempFiles,
          {
            id: fileId.current++,
            object: file,
          },
        ];
      }

      setFiles(tempFiles);
    },
    [files],
  );

  const handleDragIn = useCallback((e: DragEvent): void => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDragOut = useCallback((e: DragEvent): void => {
    e.preventDefault();
    e.stopPropagation();

    setDrag(false);
  }, []);

  const handleDragOver = useCallback((e: DragEvent): void => {
    e.preventDefault();
    e.stopPropagation();

    if (e.dataTransfer!.files) {
      setDrag(true);
    }
  }, []);

  const handleDrop = useCallback(
    (e: DragEvent): void => {
      e.preventDefault();
      e.stopPropagation();

      onChangeFiles(e);
      setDrag(false);
    },
    [onChangeFiles],
  );

  const initDragEvents = useCallback((): void => {
    if (dragRef.current !== null) {
      dragRef.current.addEventListener("dragenter", handleDragIn);
      dragRef.current.addEventListener("dragleave", handleDragOut);
      dragRef.current.addEventListener("dragover", handleDragOver);
      dragRef.current.addEventListener("drop", handleDrop);
    }
  }, [handleDragIn, handleDragOut, handleDragOver, handleDrop]);

  const resetDragEvents = useCallback((): void => {
    if (dragRef.current !== null) {
      dragRef.current.removeEventListener("dragenter", handleDragIn);
      dragRef.current.removeEventListener("dragleave", handleDragOut);
      dragRef.current.removeEventListener("dragover", handleDragOver);
      dragRef.current.removeEventListener("drop", handleDrop);
    }
  }, [handleDragIn, handleDragOut, handleDragOver, handleDrop]);

  useEffect(() => {
    initDragEvents();

    return () => resetDragEvents();
  }, [initDragEvents, resetDragEvents]);

  useBeforeunload((e: any) => {
    e.preventDefault();
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  const handlePost = () => {
    if (title === "" || null) {
      alert("제목을 입력해주세요.");
    } else if (markdownValue === "" || null) {
      alert("내용을 입력해주세요.");
    } else {
      postBoard(
        markdownValue,
        ["BACKEND", "FRONTEND"],
        ["SPRING", "REACT"],
        "PROJECT",
        "RECRUITMENT",
        title,
        [],
      ).then(() => {
        alert("글이 등록되었어요");
        navigate("/main");
      });
    }
  };

  const onToolbarClicked = (markdown: string) => {
    switch (markdown) {
      case "heading":
        innerRef.current.focus();
        innerRef.current.value += "# ";
        break;
      case "bold":
        innerRef.current.focus();
        innerRef.current.value += "** ** ";
        break;
      case "italic":
        innerRef.current.focus();
        innerRef.current.value += "*** *** ";
        break;
      case "list":
        innerRef.current.focus();
        innerRef.current.value += "- ";
        break;
      case "numberlist":
        innerRef.current.focus();
        innerRef.current.value += "1. ";
        break;
      case "code":
        innerRef.current.focus();
        innerRef.current.value += "` ` ";
        break;
      case "link":
        innerRef.current.focus();
        break;
      case "checkbox":
        innerRef.current.focus();
        innerRef.current.value += "- [ ] ";
        break;
      default:
        break;
    }
  };

  const MarkdownImg = [
    {
      id: "Heading",
      icon: (
        <BiHeading
          css={S.Markdown}
          onClick={() => onToolbarClicked("heading")}
        />
      ),
    },
    {
      id: "Bold",
      icon: (
        <BiBold css={S.Markdown} onClick={() => onToolbarClicked("bold")} />
      ),
    },
    {
      id: "Italic",
      icon: (
        <BiItalic css={S.Markdown} onClick={() => onToolbarClicked("italic")} />
      ),
    },
    {
      id: "List",
      icon: (
        <AiOutlineUnorderedList
          css={S.Markdown}
          onClick={() => onToolbarClicked("list")}
        />
      ),
    },
    {
      id: "NumberList",
      icon: (
        <AiOutlineOrderedList
          css={S.Markdown}
          onClick={() => onToolbarClicked("numberlist")}
        />
      ),
    },
    {
      id: "Code",
      icon: (
        <BsCodeSlash
          css={S.Markdown}
          onClick={() => onToolbarClicked("code")}
        />
      ),
    },
    {
      id: "Link",
      icon: (
        <FiLink2 css={S.Markdown} onClick={() => onToolbarClicked("link")} />
      ),
    },
    {
      id: "CheckBox",
      icon: (
        <BiCheckboxChecked
          css={S.Markdown}
          onClick={() => onToolbarClicked("checkbox")}
        />
      ),
    },
  ];

  return (
    <div css={S.Positioner}>
      <Input
        type="text"
        theme="WritePageInput"
        fontSize="h1"
        placeholder="프로젝트 이름을 입력하세요"
        fontWeight="600"
        width="100%"
        onChange={(currentTarget) => {
          setTitle(currentTarget.target.value);
        }}
        value={title}
      />
      <WriteSelectItem />
      <div css={S.ContentsContainer}>
        <nav css={S.NavigationBar}>
          <Button
            children="Write"
            theme={
              preview === false
                ? "BlackButtonWithWhiteText"
                : "WhiteButtonWithBlackText"
            }
            isShadow="Yes"
            size="Small"
            fontSize="h6"
            fontWeight="600"
            onClick={() => setPreview(false)}
          />
          <Button
            children="Preview"
            theme={
              preview === false
                ? "WhiteButtonWithBlackText"
                : "BlackButtonWithWhiteText"
            }
            isShadow="Yes"
            size="Small"
            fontSize="h6"
            fontWeight="600"
            onClick={() => setPreview(true)}
          />
          <div css={S.MarkdownContainer}>
            {MarkdownImg.map((item) => (
              <div css={S.ToolbarBlock}>
                <div css={S.ToolbarItem} onClick={() => onClick(item.id)}>
                  {item.icon}
                </div>
              </div>
            ))}
          </div>
        </nav>
        <hr css={S.Line} />
        {preview === false ? (
          // {drag === false ? (
          <div
            onSubmit={handleSubmit}
            onDrop={(e: any) => handleDrop(e)}
            onDragOver={(e: any) => handleDragOver(e)}
            onDragEnter={(e: any) => handleDragIn(e)}
            onDragLeave={(e: any) => handleDragOut(e)}
          >
            <textarea
              css={S.TextArea}
              onChange={({ currentTarget }) => {
                setMarkdownSource(currentTarget.value);
                setMarkdownValue(currentTarget.value);
              }}
              value={markdownValue}
              ref={innerRef}
            />
          </div>
        ) : (
          //  ) : (
          //   <div css={S.InputPositioner}>
          //   <input type="file" id="fileUpload" multiple={true} />
          //   <label
          //     className={drag ? "DragDrop-File-Dragging" : "DragDrop-File"}
          //     htmlFor="fileUpload"
          //     ref={dragRef}
          //   >
          //     <div>파일 첨부</div>
          //   </label>
          // </div>
          // )}
          <div css={S.TextArea} className="preview">
            {markdownSource}
          </div>
        )}
      </div>
      <div css={S.ButtonContainer}>
        <Button
          theme="GrayButtonWithBlackTextNoHover"
          children="취소"
          size="Regular"
          fontSize="h5"
          fontWeight="400"
          isShadow="No"
          onClick={() => navigate("/main")}
        />
        <Button
          theme="BlackButtonWithWithTextNoHover"
          children="글 등록"
          size="Regular"
          fontSize="h5"
          fontWeight="600"
          isShadow="No"
          onClick={() => {
            handlePost();
          }}
        />
      </div>
    </div>
  );
};

export default WriteTextForm;
