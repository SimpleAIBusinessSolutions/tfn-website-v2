type ChecklistSectionProps = {
  eyebrow?: string;
  headline?: string;
  points?: string[];
  accent?: string;
  background?: string;
  borderColor?: string;
};

export default function ChecklistSection({
  eyebrow,
  headline,
  points = [],
  accent = "#F97316",
  background,
  borderColor,
}: ChecklistSectionProps) {
  return (
    <div
      className="card"
      style={{
        padding: 50,
        height: "100%",
        background:
          background ||
          "linear-gradient(180deg,#111,#09090b)",
        border: `1px solid ${
          borderColor || "#222"
        }`,
      }}
    >
      <p
        style={{
          color: accent,
          fontWeight: 700,
          marginBottom: 8,
        }}
      >
        {eyebrow}
      </p>

      <h2
        style={{
          fontSize: 42,
          marginTop: 0,
        }}
      >
        {headline}
      </h2>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 18,
          marginTop: 30,
        }}
      >
        {points.map((item) => (
          <div
            key={item}
            style={{
              display: "flex",
              gap: 12,
              alignItems: "flex-start",
            }}
          >
            <span
              style={{
                color: "#22c55e",
                fontWeight: 700,
                fontSize: 20,
              }}
            >
              ✓
            </span>

            <p
  style={{
    margin: 0,
    lineHeight: 1.7,
    whiteSpace: "pre-line",
  }}
>
  {item}
</p>
          </div>
        ))}
      </div>
    </div>
  );
}