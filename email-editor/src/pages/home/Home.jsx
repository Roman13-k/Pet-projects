import { EmailEditor } from "../../components/email-editor/EmailEditor";
import { EmailList } from "../../components/email-list/EmailList";
export function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "65%",
        padding: "1.5rem",
      }}>
      <EmailEditor />
      <EmailList />
    </div>
  );
}
