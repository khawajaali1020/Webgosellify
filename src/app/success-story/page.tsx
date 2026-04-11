import { FaCheckCircle } from "react-icons/fa";
import CTASection from "@/components/home/CTASection";

const clientStories = [
  {
    heading:
      "Celena's Store made $153,438 sales in 4 months with 35% ROI",
    videoId: "9DqDFAGLPrc",
    bullets: [
      "Over $58,200 in last month sales",
      "More than 35% ROI made",
      "0.02% Order defect rate",
      "ZERO account health issue",
    ],
  },
  {
    heading:
      "Thompson's Store made $691,224 sales in 11 months with 35% ROI",
    videoId: "2TxAECYAyM0",
    bullets: [
      "Over $95,000 in last month sales",
      "More than 35% ROI made",
      "0.02% Order defect rate",
      "ZERO account health issue",
    ],
  },
  {
    heading:
      "Joseph's Store made $8,780 sales in just 2 days with 25% ROI",
    videoId: "D8B-AKLZciA",
    bullets: [
      "Over $50,000 in last month sales",
      "More than 25% ROI made",
      "0.02% Order defect rate",
      "ZERO account health issue",
    ],
  },
];

export default function SuccessStoryPage() {
  return (
    <>
      {/* Hero Section */}
      <section style={{ background: "#f6f7f9", padding: "55px 0" }}>
        <div className="container-main text-center">
          <div className="section-header">
            <span className="typo-label">Proven Results</span>
            <h1 className="typo-h1">Client Success Stories</h1>
            <p className="typo-subtext" style={{ maxWidth: "520px", margin: "0 auto" }}>
              Real results from real clients. See how our managed stores
              consistently deliver strong ROI and healthy accounts.
            </p>
          </div>
        </div>
      </section>

      {/* Stories Section */}
      <section style={{ background: "#fff", padding: "55px 0" }}>
        <div className="container-main">
          <div className="flex flex-col gap-5">
            {clientStories.map((story) => (
              <div
                key={story.heading}
                className="rounded-xl"
                style={{
                  background: "#fff",
                  padding: "24px",
                  border: "1px solid #e8e8ee",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
                }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                  {/* YouTube Embed */}
                  <div
                    className="relative w-full rounded-lg overflow-hidden"
                    style={{ paddingBottom: "56.25%" }}
                  >
                    <iframe
                      className="absolute top-0 left-0 w-full h-full"
                      src={`https://www.youtube.com/embed/${story.videoId}`}
                      title={story.heading}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="typo-h3" style={{ marginBottom: "16px" }}>
                      {story.heading}
                    </h3>
                    <ul className="space-y-2.5">
                      {story.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex items-start gap-2.5"
                        >
                          <FaCheckCircle
                            className="flex-shrink-0"
                            style={{
                              color: "var(--color-primary)",
                              fontSize: "14px",
                              marginTop: "2px",
                            }}
                          />
                          <span className="typo-body">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </>
  );
}
