import "@/app/globals.css";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-dev-theme="catppuccin">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
