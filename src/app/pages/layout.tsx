export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav></nav>
      <div
        style={{
          fontSize: 65,
          fontWeight: 800,
          display: "grid",
          justifyContent: "center",
          padding: 10,
          borderBottom: "solid 5px black",
        }}
      >
        {"L E A S E    I T"}
      </div>
      {children}
    </div>
  );
}
