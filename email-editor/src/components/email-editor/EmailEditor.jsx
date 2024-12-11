import { Bold, Eraser, Italic, Underline } from "lucide-react";
import styles from "./EmailEditor.module.css";
import { useRef, useState, useEffect } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { emailService } from "../../services/email.service";

export function EmailEditor() {
  const [content, setContent] = useState(` <div> Enter email... </div> `);

  const editorRef = useRef(null);

  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationKey: ["create email"],
    mutationFn: (emailContent) => emailService.sendEmails(emailContent),
    onSuccess() {
      setContent("");
      queryClient.refetchQueries({ queryKey: ["email list"] });
    },
  });

  const applyFormat = (command) => {
    const selection = window.getSelection();
    if (!selection.rangeCount) return;

    const range = selection.getRangeAt(0);
    const span = document.createElement("span");

    switch (command) {
      case "bold":
        span.style.fontWeight = "bold";
        break;
      case "italic":
        span.style.fontStyle = "italic";
        break;
      case "underline":
        span.style.textDecoration = "underline";
        break;
      default:
        return;
    }

    range.surroundContents(span);
  };

  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.innerHTML = content;
    }
  }, [content]);

  const handleSendEmail = () => {
    setContent(editorRef.current.innerHTML);
    mutate(editorRef.current.innerHTML);
  };

  return (
    <div>
      <h1>Email editor</h1>
      <div className={styles.card}>
        <div
          ref={editorRef}
          className={styles.editor}
          contentEditable
          spellCheck='false'></div>
        <div className={styles.actions}>
          <div className={styles.tools}>
            <button
              accessKey='E'
              onClick={() => (editorRef.current.innerHTML = "")}>
              <Eraser size={17} />
            </button>
            <button accessKey='b' onClick={() => applyFormat("bold")}>
              <Bold size={17} />
            </button>
            <button accessKey='i' onClick={() => applyFormat("italic")}>
              <Italic size={17} />
            </button>
            <button accessKey='u' onClick={() => applyFormat("underline")}>
              <Underline size={17} />
            </button>
          </div>
          <button disabled={isPending} onClick={handleSendEmail}>
            Send now
          </button>
        </div>
      </div>
    </div>
  );
}
