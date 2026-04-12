import Link from "next/link";

export default function Footer({ pages }) {
  return (
    <footer style={{ borderTop:'1px solid #222', padding:'60px 0', marginTop:60 }}>
      <div className="container" style={{ textAlign:'center' }}>
        <div style={{ display:'flex', justifyContent:'center', gap:18, flexWrap:'wrap', marginBottom:24 }}>
          {pages.map((p, i) => (
            <Link key={i} href={p.slug}>{p.name}</Link>
          ))}
        </div>

        <img src="/tlogo.jpg" alt="tlogo.jpg" style={{ height:90, width:'auto', margin:'0 auto 14px' }} />
        <p className="muted">Stronger. Fitter. Better.</p>
      </div>
    </footer>
  );
}
