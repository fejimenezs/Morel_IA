import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1">
        <Topbar />
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
}
