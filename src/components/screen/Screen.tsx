import React from "react";
import { useLayoutEffect, useRef, useState } from "react";
import {
  Screen as ScreenContainer,
  ScreenName,
  ScreenContent,
  Video,
  ScreenWithVideoContainer,
} from "../common/styled_components";

type ScreenProps = {
  screenName: string;
  video?: HTMLImageElement;
  bg?: string;
  children: React.ReactNode;
};

export const Screen = ({
  bg,
  video,
  screenName,
  children,
  ...props
}: ScreenProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    if (ref.current) {
      setWidth(ref.current.offsetWidth);
    }
  }, []);

  const isWithName = () => {
    return (
      <ScreenName>
        <p ref={ref} style={{ marginBottom: width / 2 }}>
          {screenName}
        </p>
      </ScreenName>
    );
  };

  const content = () => {
    return <ScreenContent screenName={screenName}>{children}</ScreenContent>;
  };

  return video ? (
    <ScreenWithVideoContainer {...props}>
      <Video src={video} autoPlay loop muted />
      <ScreenContainer video>
        {isWithName()}
        {content()}
      </ScreenContainer>
    </ScreenWithVideoContainer>
  ) : (
    <ScreenContainer bg={bg} screenName={screenName}>
      {isWithName()}
      {content()}
    </ScreenContainer>
  );
};
