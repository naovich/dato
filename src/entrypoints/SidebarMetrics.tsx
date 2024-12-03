import { RenderItemFormSidebarPanelCtx } from "datocms-plugin-sdk";
import { Canvas } from "datocms-react-ui";
type PropTypes = {
  ctx: RenderItemFormSidebarPanelCtx;
};
export default function SidebarMetrics({ ctx }: PropTypes) {
  return <Canvas ctx={ctx}>Hello from the sidebar!</Canvas>;
}
