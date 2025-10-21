import { TypingText } from "../TypingText";

export const ReadmeBuffer = () => {
  return (
    <div className="space-y-2">
      <TypingText
        text={`
-- ███████╗██╗   ██╗██╗     ██╗         ███████╗████████╗ █████╗  ██████╗██╗  ██╗
-- ██╔════╝██║   ██║██║     ██║         ██╔════╝╚══██╔══╝██╔══██╗██╔════╝██║ ██╔╝
-- █████╗  ██║   ██║██║     ██║  █████╗ ███████╗   ██║   ███████║██║     █████╔╝
-- ██╔══╝  ██║   ██║██║     ██║  ╚════╝ ╚════██║   ██║   ██╔══██║██║     ██╔═██╗
-- ██║     ╚██████╔╝███████╗███████╗    ███████║   ██║   ██║  ██║╚██████╗██║  ██╗
-- ╚═╝      ╚═════╝ ╚══════╝╚══════╝    ╚══════╝   ╚═╝   ╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝`}
        className="text-cat-mauve whitespace-pre"
        speed={5}
      />
      <div className="pt-6 space-y-4">
        <TypingText
          text="> Full-Stack Developer"
          className="text-cat-blue text-lg"
          delay={600}
        />
        <div className="pt-4 text-cat-subtext space-y-2">
          <TypingText
            text="Welcome to my interactive portfolio. Navigate using vim-style commands:"
            delay={1000}
          />
          <div className="pl-4 pt-2 space-y-1 text-cat-text">
            <TypingText
              text="• Press Ctrl+P to open the fuzzy finder"
              delay={1400}
            />
            <TypingText
              text="• Browse projects, read about.lua, or explore code"
              delay={1600}
            />
            <TypingText
              text="• Type :contact in the command bar for contact info"
              delay={1800}
            />
          </div>
        </div>
        <div className="pt-6 text-cat-green">
          <TypingText
            text={`print("Let's build something amazing together")`}
            delay={2200}
          />
        </div>
      </div>
    </div>
  );
};
