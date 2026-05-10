type FeatureItem = {
  title?: string;
  text?: string;
  image?: string;
};

function isVideoFile(url: string) {
  return /\.(mp4|webm|ogg|mov)$/i.test(url);
}

type FeatureGridData = {
  items?: FeatureItem[];
};

export default function FeatureGrid({
  data,
}: {
  data: FeatureGridData;
}) {

  if (!data?.items) return null;

  return (
    <section className="section">

      <div className="container">

        <div className="grid grid-3">

          {data.items.map(
            (item, i) => {

              const media =
                item.image || "";

                const isVideo =
    isVideoFile(media);

              return (
                <div
                  key={i}
                  className="card"
                  style={{
                    overflow: "hidden",
                  }}
                >

                  {media && (

                    isVideo ? (

                      <video
                        src={media}
                        autoPlay
                        muted
                        loop
                        playsInline
                        controls
                        style={{
                          width: "100%",
                          height: 220,
                          objectFit:
                            "cover",
                          borderRadius: 16,
                          marginBottom: 20,
                        }}
                      />

                    ) : (

                      <img
                        src={media}
                        alt={
                          item.title ||
                          ""
                        }
                        style={{
                          width: "100%",
                          height: 220,
                          objectFit:
                            "cover",
                          borderRadius: 16,
                          marginBottom: 20,
                        }}
                      />

                    )

                  )}

                  <h3>
                    {item.title}
                  </h3>

                  <p className="muted">
                    {item.text}
                  </p>

                </div>
              );
            }
          )}

        </div>

      </div>

    </section>
  );
}