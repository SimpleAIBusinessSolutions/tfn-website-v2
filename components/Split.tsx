type SplitData = {
  headline?: string;
  text?: string;
  image?: string;
};

function isVideoFile(url: string) {
  return /\.(mp4|webm|ogg|mov)$/i.test(url);
}

export default function Split({
  data,
}: {
  data: SplitData;
}) {

  if (!data) return null;

  const media = data.image || "";

  const isVideo =
    isVideoFile(media);

  return (
    <section className="section">

      <div className="container split">

        {media && (

          isVideo ? (

            <video
              src={media}
              autoPlay
              muted
              loop
              controls
              playsInline
              style={{
                width: "100%",
                borderRadius: 24,
                objectFit: "cover",
              }}
            />

          ) : (

            <img
              src={media}
              alt={data.headline || ""}
              style={{
                width: "100%",
                borderRadius: 24,
                objectFit: "cover",
              }}
            />

          )

        )}

        <div>

          <h2
            style={{
              fontSize: 42,
              marginTop: 0,
            }}
          >
            {data.headline}
          </h2>

          <p
            className="muted"
            style={{
              whiteSpace: "pre-line",
            }}
          >
            {data.text}
          </p>

        </div>

      </div>

    </section>
  );
}