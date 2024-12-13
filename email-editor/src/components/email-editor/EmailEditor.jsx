import { Bold, Eraser, Italic, Underline } from "lucide-react";
import styles from "./EmailEditor.module.css";
import { useRef, useState, useEffect } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { emailService } from "../../services/email.service";

export function EmailEditor() {
  const [content, setContent] = useState(` <div> Enter email... </div> `);
  const [email, setEmail] = useState("");
  const [err, setErr] = useState("");
  const editorRef = useRef(null);
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationKey: ["create email"],
    mutationFn: (emailContent) => emailService.sendEmails(emailContent),
    onSuccess() {
      setContent("");
      setEmail("");
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

  const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-zA-Z]{2,}$/;
  const handleSendEmail = () => {
    if (!emailRegex.test(email)) {
      setErr("Error email!");
    } else {
      const emailContent = editorRef.current.innerHTML;
      const dateTime = new Date().toString().slice(4, 21);

      mutate({
        text: emailContent,
        email: email,
        date: dateTime,
      });
    }
  };

  if (err) {
    setTimeout(() => {
      setErr("");
    }, 3000);
  }

  return (
    <div>
      <h1>Email editor</h1>
      <div className={styles.card}>
        <form className={styles.form}>
          <input
            className={styles.input}
            type='email'
            placeholder='example@gmail.com'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p>{err}</p>
        </form>
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
