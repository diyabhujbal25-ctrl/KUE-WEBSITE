// Selected reviews from the supplied Judge.me export.
// Static content: update this list when you export new reviews.
// Customer emails, IP addresses and other private fields are excluded.

(() => {
  const reviews = [
    {
      name: "Akshata Barad",
      rating: 5,
      product: "Sports / Cricket Kit",
      text: "The material is soft and does not cause sweating even after long use. It fits perfectly and provides stability while walking or exercising."
    },
    {
      name: "Hemant Pandit",
      rating: 5,
      product: "Sports / Cricket Kit",
      text: "Good grip and durable material. Easy to wear and remove."
    },
    {
      name: "Alwin Narora",
      rating: 5,
      product: "Calf Compression Sleeve",
      text: "Breathable and comfortable material. Improves blood circulation and gives relief from calf pain."
    },
    {
      name: "Ravi Desai",
      rating: 4,
      product: "Calf Compression Sleeve",
      text: "Provides good compression and helps reduce muscle fatigue. Very useful during long walks and workouts."
    },
    {
      name: "Supriya Parekar",
      rating: 5,
      product: "KUE Knee Cap Support",
      text: "Soft yet supportive fabric. Does not roll down and stays in place. Great product for regular use"
    },
    {
      name: "Shivam mali",
      rating: 4,
      product: "Graduated Compression Socks",
      text: "Strong compression and good elasticity. Loved it!"
    },
    {
      name: "Vikash Khairwal",
      rating: 5,
      product: "Graduated Compression Socks",
      text: "Improves circulation and reduces leg fatigue. Soft, breathable, and suitable for long wear."
    },
    {
      name: "Sadhana mali",
      rating: 5,
      product: "Gym Essentials Kit",
      text: "Gives excellent knee support and compression. Helps in pain relief and joint stability during walking or exercise."
    },
    {
      name: "Sharvi Umap",
      rating: 5,
      product: "Compression Ankle Socks",
      text: "Provides strong ankle support with comfortable fit. Helps reduce pain and improves stability during daily activities and workouts"
    },
    {
      name: "Ankita Chavan",
      rating: 5,
      product: "Arm Sleeves",
      text: "Quality is better than expected. Highly recommended"
    },
    {
      name: "Raju Tejam",
      rating: 4,
      product: "Gym Essentials Kit",
      text: "Good support and durable product. Will buy again from KUE."
    },
    {
      name: "Sharvil John",
      rating: 5,
      product: "Sports / Cricket Kit",
      text: "Very good quality and comfortable to use. Worth the price"
    },
    {
      name: "Girish Rajasekhariah",
      rating: 5,
      product: "KUE Knee Cap Support",
      text: "Fits properly and provides the perfect support to knees. I used this while climbing down almost 800 MTRS. I did not feel any strain while getting down as I was wearing the knee cap. Thanks"
    },
    {
      name: "Suriyaprakash ilambalakumar",
      rating: 5,
      product: "Sports / Cricket Kit",
      text: "Provide good support to arm and knee. Socks are quite comfortable to wear."
    },
    {
      name: "Nikhil Agrawal",
      rating: 5,
      product: "Sports / Cricket Kit",
      text: "Given support during running and fielding. Helps to avoid cramps during fielding."
    },
    {
      name: "Tinku",
      rating: 5,
      product: "Sports / Cricket Kit",
      text: "Good product.... Give excellent support during batting and fielding."
    },
    {
      name: "Vedant",
      rating: 5,
      product: "Sports / Cricket Kit",
      text: "Easy to wear, gives even compression, great colour and quality"
    },
    {
      name: "Bhavik Desai",
      rating: 5,
      product: "Sports / Cricket Kit",
      text: "The fitting, the comfort, the stretch is so perfect. Even during the high intensity movements it doesn't loose its grip. Highly recommended."
    },
    {
      name: "Dhinakaran",
      rating: 5,
      product: "Gym Essentials Kit",
      text: "Comfortable for sports.i collapse for size. Guide me as friendly, today I received elbove cap perfectly 👌 fit. Fron coimbatore  ( Tamilnadu)Thanks for kue. 🫡Surely Recommend for team mates"
    },
    {
      name: "Abdul Mannan Chishty",
      rating: 4,
      product: "KUE Knee Cap Support",
      text: "Good support for the weak knees when on the move."
    }
  ];

    function initReviews() {
    const grid = document.getElementById("kueReviewGrid");
    const prev = document.getElementById("kueReviewsPrev");
    const next = document.getElementById("kueReviewsNext");

    if (!grid || !prev || !next || grid.dataset.ready) return;
    grid.dataset.ready = "true";

    function element(tag, className, text) {
      const node = document.createElement(tag);
      node.className = className;
      if (text !== undefined) node.textContent = text;
      return node;
    }

    // Render all 20 reviews into the slider.
    reviews.forEach((review, index) => {
      const card = element("article", "kue-review-card");
      card.setAttribute(
        "aria-label",
        `Review ${index + 1} of ${reviews.length}`
      );

      const top = element("div", "kue-review-top");
      const rating = element(
        "span",
        "kue-review-rating",
        `${review.rating} / 5`
      );

      rating.setAttribute(
        "aria-label",
        `Rated ${review.rating} out of 5 stars`
      );

      top.append(
        rating,
        element("span", "kue-review-source", "Customer review")
      );

      const quote = element(
        "blockquote",
        "kue-review-quote",
        review.text
      );

      const footer = element("footer", "kue-review-author");

      footer.append(
        element("strong", "kue-review-name", review.name),
        element("span", "kue-review-product", review.product)
      );

      card.append(top, quote, footer);
      grid.append(card);
    });

    function updateButtons() {
      const maxScroll = grid.scrollWidth - grid.clientWidth;
      prev.disabled = grid.scrollLeft <= 2;
      next.disabled = grid.scrollLeft >= maxScroll - 2;
    }

    function slide(direction) {
      const card = grid.querySelector(".kue-review-card");
      if (!card) return;

      const gap = parseFloat(getComputedStyle(grid).columnGap) || 0;
      const step = card.getBoundingClientRect().width + gap;

      grid.scrollBy({
        left: direction * step,
        behavior: window.matchMedia(
          "(prefers-reduced-motion: reduce)"
        ).matches ? "auto" : "smooth"
      });
    }

    prev.addEventListener("click", () => slide(-1));
    next.addEventListener("click", () => slide(1));
    grid.addEventListener("scroll", updateButtons, { passive: true });

    // Keyboard support when the slider is focused.
    grid.addEventListener("keydown", (event) => {
      if (event.target !== grid) return;

      if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
        event.preventDefault();
        slide(event.key === "ArrowLeft" ? -1 : 1);
      }
    });

    if ("ResizeObserver" in window) {
      new ResizeObserver(updateButtons).observe(grid);
    } else {
      window.addEventListener("resize", updateButtons);
    }

    updateButtons();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initReviews);
  } else {
    initReviews();
  }
})();