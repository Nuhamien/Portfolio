export function mapHomePageResponse(response) {
  const data = response?.data || {};

  const heroImage = data?.heroImage?.url
    ? `${import.meta.env.VITE_STRAPI_URL}${data.heroImage.url}`
    : "";

  return {
    hero: {
      badge: data?.heroBadge || "",
      title: {
        main: data?.heroTitleMain || "",
        highlight: data?.heroTitleHighlight || "",
        sub: data?.heroTitleSuffix || "",
      },
      description: data?.heroDescription || "",
      image: {
        src: heroImage,
        alt: data?.heroImage?.alternativeText || "Hero image",
      },
      buttons: [
        {
          text: data?.heroPrimaryButtonText || "View Projects",
          target: data?.heroPrimaryButtonPath || "/projects",
          action: "navigate",
          variant: "primary",
        },
        {
          text: data?.heroSecondaryButtonText || "Contact Me",
          target: data?.heroSecondaryButtonPath || "/contact",
          action: "navigate",
          variant: "secondary",
        },
      ].filter((button) => button.text && button.target),
    },

    marquee: {
      enabled: data?.marqueeEnabled ?? false,
      separator: data?.marqueeSeparator || "•",
      items: Array.isArray(data?.marqueeItems) ? data.marqueeItems : [],
    },

    servicesPreview: {
      badge: data?.servicesBadge || "",
      title: {
        main: data?.servicesTitleMain || "",
        highlight: data?.servicesTitleHighlight || "",
        suffix: data?.servicesTitleSuffix || "",
      },
      description: data?.servicesDescription || "",
    },

    featuredProjects: {
      title: {
        main: data?.projectsTitleMain || "",
        sub: data?.projectsTitleSuffix || "",
        highlight: data?.projectsTitleHighlight || "",
      },
      button: {
        text: data?.projectsSectionButtonText || "See All",
        path: data?.projectsSectionButtonPath || "/projects",
      },
    },

    whyHireMe: {
      image: data?.whyHireMeImage?.url
        ? `${import.meta.env.VITE_STRAPI_URL}${data.whyHireMeImage.url}`
        : "",
      titleStart: data?.statsTitleMain || "",
      titleHighlight: data?.statsTitleHighlight || "",
      titleEnd: data?.statsTitleSuffix || "",
      description: data?.statsDescription || "",
      stats: [
        {
          value: data?.yearsOfExperience ?? 0,
          label: "Years of Experience",
        },
        {
          value: data?.projectsCompleted ?? 0,
          label: "Projects Completed",
        },
        {
          value: data?.certificationsCount ?? 0,
          label: "Certifications",
        },
      ],
      buttonText: data?.whyHireMeButtonText || "Hire Me",
      buttonLink: data?.whyHireMeButtonLink || "/contact",
    },

    experienceTimeline: {
      badge: data?.processBadge || "",
      title: {
        main: data?.processTitleMain || "",
        highlight: data?.processTitleHighlight || "",
      },
    },

    experienceSteps: Array.isArray(data?.processSteps)
      ? data.processSteps.map((step, index) => ({
          id: step?.id || index + 1,
          title: step?.title || "",
          description: step?.description || "",
        }))
      : [],

    testimonials: {
      enabled: data?.testimonialsEnabled ?? false,
      badge: data?.testimonialsBadge || "",
      title: {
        main: data?.testimonialsTitleMain || "",
        highlight: data?.testimonialsTitleHighlight || "",
      },
      description: data?.testimonialsDescription || "",
      placeholder: {
        quoteMark: data?.testimonialsPlaceholderQuoteMark || "“",
        title: data?.testimonialsPlaceholderTitle || "",
        description: data?.testimonialsPlaceholderDescription || "",
      },
    },

    testimonialItems: Array.isArray(data?.testimonialsItems)
      ? data.testimonialsItems.map((item, index) => ({
          id: item?.id || index + 1,
          name: item?.name || "",
          role: item?.role || "",
          rating: item?.rating || "",
          image: item?.image?.url
            ? `${import.meta.env.VITE_STRAPI_URL}${item.image.url}`
            : "",
          text: item?.text || "",
        }))
      : [],

    blogPreview: {
      title: {
        main: data?.blogTitleMain || "",
        sub: data?.blogTitleSub || "",
      },
      button: {
        text: data?.blogButtonText || "See All",
        path: data?.blogButtonPath || "/blog",
      },
    },

    blogPosts: Array.isArray(data?.blogPosts)
      ? data.blogPosts.map((post, index) => ({
          id: post?.id || index + 1,
          ...post,
        }))
      : [],

    homeCTA: {
      title: {
        line1: data?.ctaTitleMain || "",
        line2Start: data?.ctaTitleSuffix || "",
        line2Highlight: data?.ctaTitleHighlight || "",
      },
      input: {
        placeholder: data?.ctaInputPlaceholder || "Enter your email",
        buttonText: data?.ctaButtonText || "Contact Me",
      },
      highlights: Array.isArray(data?.ctaHighlights)
        ? data.ctaHighlights.map((item, index) => ({
            id: item?.id || index + 1,
            text: item?.text || "",
          }))
        : [],
    },
  };
}