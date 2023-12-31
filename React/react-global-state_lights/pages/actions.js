import Link from "../components/Link";
import QuickActions from "../components/QuickActions";

export default function Actions({ lights, onOff, onOn }) {
  return (
    <>
      <Link href="/">← Back home</Link>
      <h1>Quick Actions</h1>
      <QuickActions lights={lights} onOff={onOff} onOn={onOn} />
    </>
  );
}
