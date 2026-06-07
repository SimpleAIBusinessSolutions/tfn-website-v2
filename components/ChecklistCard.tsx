type ChecklistCardProps = {
  title?: string;
  eyebrow?: string;
  points?: string[];
};

export default function ChecklistCard({
  title,
  eyebrow,
  points,
}: ChecklistCardProps) {
  return (
    <div className="card">
      <p
        style={{
          color: "#F97316",
          fontWeight: 700,
        }}
      >
        {eyebrow}
      </p>

      <h2>{title}</h2>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 12,
        }}
      >
        {points?.map((point, i) => (
          <div key={i}>
            ✓ {point}
          </div>
        ))}
      </div>
    </div>
  );
}