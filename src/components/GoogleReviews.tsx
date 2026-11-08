import { Star } from "lucide-react"
import { GOOGLE_RATING, GOOGLE_REVIEWS } from "../data/reviews"
import { SITE } from "../data/site"
import { Container } from "./ui"

function Stars({ rating }: { rating: number }) {
  return (
    <p className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, index) => (
        <Star
          key={index}
          className={`h-4 w-4 ${index < rating ? "fill-ember text-ember" : "text-line"}`}
          aria-hidden="true"
        />
      ))}
    </p>
  )
}

export default function GoogleReviews() {
  return (
    <section className="py-16 sm:py-24" aria-labelledby="reviews-heading">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Google reviews</p>
            <h2 id="reviews-heading" className="h-display mt-4 text-4xl sm:text-5xl">
              What sites say after the steel is up.
            </h2>
            <p className="mt-4 flex flex-wrap items-center gap-3 text-sm font-semibold text-navy">
              <Stars rating={5} />
              <span>
                {GOOGLE_RATING.value} from {GOOGLE_RATING.count} Google reviews
              </span>
            </p>
          </div>
          <a
            href={SITE.map.reviews}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-bold text-navy underline decoration-orange decoration-2 underline-offset-[6px] hover:text-ember"
          >
            Read them on Google
          </a>
        </div>

        <ul className="mt-10 grid gap-5 md:grid-cols-2">
          {GOOGLE_REVIEWS.map((review) => (
            <li key={review.author} className="border border-line bg-paper p-6">
              <Stars rating={review.rating} />
              <blockquote className="mt-4 text-base leading-relaxed text-ink/80">“{review.body}”</blockquote>
              <p className="mt-4 text-sm font-bold text-navy">{review.author}</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-ink/50">Google review</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
