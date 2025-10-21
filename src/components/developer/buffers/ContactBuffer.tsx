export const ContactBuffer = () => {
  return (
    <div className="space-y-6 font-mono text-sm leading-relaxed">
      <div className="text-cat-overlay0">-- Contact Information --</div>

      <div className="space-y-4">
        <div>
          <span className="text-cat-blue">echo</span>{" "}
          <span className="text-cat-green">"Let's connect!"</span>
        </div>

        <div className="ml-4 space-y-2">
          <div>
            <span className="text-cat-mauve">GitHub:</span>{" "}
            <a
              href="https://github.com/matt-wil"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cat-blue underline hover:text-cat-sky"
            >
              github.com/matt-wil
            </a>
          </div>

          <div>
            <span className="text-cat-mauve">Email:</span>{" "}
            <a
              href="mailto:dark.moder.coder@gmail.com"
              className="text-cat-blue underline hover:text-cat-sky"
            >
              dark.moder.coder@gmail.com
            </a>
          </div>

          <div>
            <span className="text-cat-mauve">LinkedIn:</span>{" "}
            <a
              href="https://linkedin.com/in/matt-s-williams"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cat-blue underline hover:text-cat-sky"
            >
              linkedin.com/in/matt-s-williams
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-cat-surface0 pt-4">
        <div className="text-cat-overlay0">
          -- Available 24/7 for collaboration and interesting projects --
        </div>
      </div>
    </div>
  );
};
