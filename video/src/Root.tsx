import { Composition } from "remotion";
import { SovietEngineerPreview } from "./SovietEngineerPreview";

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="SovietEngineerPreview"
      component={SovietEngineerPreview}
      durationInFrames={840}
      fps={30}
      width={1080}
      height={1080}
    />
  );
};
