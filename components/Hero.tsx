
type HeroData = {
  eyebrow?: string;
  headline?: string;
  subtext?: string;
  cta?: string;
  media?: string;
};

function isVideoFile(url: string) {
  return /\.(mp4|webm|ogg|mov)$/i.test(url);
}

export default function Hero({
  data,
}: {
  data: HeroData;
}) {

  if (!data) return null;

  const media =
    data.media || "";

  const isVideo =
    isVideoFile(media);

  return (
    <section className="hero">

      {/* MEDIA BACKGROUND */}
      {media && (

        isVideo ? (

          <video
            autoPlay
            muted
            loop
            playsInline
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          >
            <source
              src={media}
              type="video/mp4"
            />
          </video>

        ) : (

          <div
            style={{
              position: "absolute",
              inset: 0,
              background: `url(${media}) center/cover no-repeat`,
            }}
          />

        )

      )}

      {/* OVERLAY */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(rgba(0,0,0,.65),rgba(0,0,0,.78))",
        }}
      />

      {/* CONTENT */}
      <div
        className="container"
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: 700,
        }}
      >

        <p
          style={{
            color: "#22c55e",
            fontWeight: 700,
          }}
        >
          {data.eyebrow}
        </p>

        <h1
          style={{
            fontSize:
              "clamp(42px,8vw,78px)",
            lineHeight: 1,
            margin: "10px 0",
          }}
        >
          {data.headline}
        </h1>

        <p
          className="muted"
          style={{
            fontSize: 20,
            maxWidth: 620,
          }}
        >
          {data.subtext}
        </p>

        {data.cta && (
          <div
            style={{
              marginTop: 24,
            }}
          >
            <a
              className="btn"
              href="#"
            >
              {data.cta}
            </a>
          </div>
        )}

      </div>
    </section>
  );
}