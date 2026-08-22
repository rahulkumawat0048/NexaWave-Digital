"use client";

import { useState } from "react";
import { ArrowUpRight, Star, ThumbsUp } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "M Kumawat",
    initials: "M",
    role: "Business Owner",
    location: "Rajasthan",
    date: "3 weeks ago",
    rating: 5,
    review:
      '"I was searching for the best web development company in Rajasthan and NexaWave Digital exceeded my expectations with a fast, responsive and professional website. Their expertise in website development helped my business grow online. I highly recommend NexaWave Digital to anyone looking for professional digital solutions in Rajasamand and Rajasthan."',
    category: "Real Estate",
    tag: "Corporate Website",
  },
  {
    id: 4,
    name: "Kalu K.",
    initials: "P",
    role: "Cafe Owner",
    location: "Rajasthan",
    date: "1 month ago",
    rating: 5,
    review:
      '"NexaWave Digital helped optimize my Google Business Profile and local SEO. Within a few weeks, we started getting more calls and inquiries from customers in Rajsamand and surrounding areas. Great team to work with. Thank you!"',
    category: "Cafe Owner",
    tag: "Online Store",
  },
  {
    id: 2,
    name: "Suman kk.",
    initials: "S",
    role: "Business Owner",
    location: "Rajsamand",
    date: "3 weeks ago",
    rating: 5,
    review:
      '"NexaWave Digital exceeded my expectations with a fast and responsive website. Their expertise in website development helped my business grow online in Rajasthan."',
    category: "Marble",
    tag: "Catalog & Automation",
  },
  
  
  {
    id: 3,
    name: "Rekha ",
    initials: "R",
    role: "Business Owner",
    location: "Rajsamand",
    date: "5 minutes ago",
    rating: 5,
    review:
      '"Aise professional developers milna mushkil hai. Humari requirement ke hisab se exact SEO-friendly website banakar di. Google search par humara brand name easily show ho raha hai."',
    category: "Restaurant",
    tag: "Landing Page",
  },
];

const tabs = ["All", "Real Estate", "Marble", "Restaurant", "E-commerce"];

export default function TestimonialsSection() {
  const [activeTab, setActiveTab] = useState("All");
  const filtered =
    activeTab === "All"
      ? reviews
      : reviews.filter((r) => r.category === activeTab);
  return (
    <section
      id="testimonials"
      aria-label="Client testimonials"
      className="bg-[#fbfafb] py-20 sm:py-28"
    >
      <div className="section-shell">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">What our clients say</p>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-[-.04em] text-[#211b22] sm:text-5xl">
            What our clients say about{" "}
            <span className="text-[var(--plum)]">NexaWave Digital</span>
          </h2>
          <div className="mt-6 flex items-center justify-center gap-3">
            <span className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-[#bd8a24] text-[#bd8a24]"
                />
              ))}
            </span>
            <strong className="font-display text-xl text-[#291f2b]">5.0</strong>
            <span className="text-xs text-[var(--muted)]">
              out of 5 · Google Reviews
            </span>
          </div>
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`border px-4 py-2 text-[10px] font-bold uppercase tracking-[.12em] transition-colors ${activeTab === tab ? "border-[var(--plum)] bg-[var(--plum)] text-white" : "border-[#ddd2de] bg-white text-[#6d6370] hover:border-[var(--plum)] hover:text-[var(--plum)]"}`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="mx-auto mt-10 grid max-w-5xl gap-5 md:grid-cols-2">
          {filtered.map((review) => (
            <article
              key={review.id}
              className="border border-[#e7dfe7] bg-white p-6 transition-colors hover:border-[var(--plum)]"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--lavender)] font-display font-bold text-[var(--plum)]">
                    {review.initials}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#291f2b]">
                      {review.name}
                    </h3>
                    <p className="mt-1 text-[10px] text-[var(--muted)]">
                      {review.role} · {review.location}
                    </p>
                  </div>
                </div>
                <span className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className={`h-3 w-3 ${i <= review.rating ? "fill-[#bd8a24] text-[#bd8a24]" : "text-gray-200"}`}
                    />
                  ))}
                </span>
              </div>
              <p className="mt-6 text-sm leading-7 text-[#655d67]">
                {review.review}
              </p>
              <div className="mt-6 flex items-center justify-between border-t border-[#eee8ee] pt-4">
                <span className="text-[10px] font-bold uppercase tracking-[.12em] text-[var(--plum)]">
                  {review.category}
                </span>
                <span className="text-[10px] text-[#aaa1ab]">
                  {review.date}
                </span>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a
            href="https://share.google/t1CFS3TRi33NauyNa" target="blank"
            className="inline-flex items-center gap-2 border border-[#d8cbd9] px-5 py-3 text-[10px] font-bold uppercase tracking-[.14em] text-[#625965] hover:border-[var(--plum)] hover:text-[var(--plum)]"
          >
            <ThumbsUp className="h-3.5 w-3.5 text-[var(--plum)]" /> See all
            Google Reviews <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}