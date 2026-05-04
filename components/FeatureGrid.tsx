export default function FeatureGrid({ data }: any) {
  if (!data?.items) return null;

  return (
    <section className="section">
      <div className="container">
        <div className="grid grid-3">
          {data.items.map((item: any, i: number) => (
            <div key={i} className="card">
              <h3>{item.title}</h3>
              <p className="muted">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}