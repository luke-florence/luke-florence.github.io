import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Luke",
  lastName: "Florence",
  name: `Luke Florence`,
  role: (
    <>
      PhD Candidate in Biological Sciences (Forest Ecosystems)
      <br />
      Environmental Data Science & Spatial Data Analytics
    </>
  ),
  avatar: "/images/avatar.png",
  email: "L.Florence@latrobe.edu.au",
  location: "Melbourne|Australia", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English — native/primary fluency", "Spanish — limited working proficiency"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/LukeLikesDirt",
    essential: true,
  },
  {
    name: "Google Scholar",
    icon: "googleScholar",
    link: "https://scholar.google.com.au/citations?user=S_OEPyQAAAAJ&hl=en&oi=sra",
    essential: true,
  },
  {
    name: "ORCID",
    icon: "orcid",
    link: "https://orcid.org/0000-0002-1901-7772",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name} — Environmental Data Science & Spatial Data Analytics`,
  description: `Portfolio of ${person.name}, a PhD candidate applying environmental data science and spatial data analytics to environmental challenges in Australia.`,
  headline: <>Environmental data science and spatial analytics for Australia's environmental challenges</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Environmental Niches in Forest Trees</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/environmental-niches-forest-trees",
  },
  subline: (
    <>
      I'm Luke — a PhD candidate in biological sciences (forest ecosystems) at La Trobe University. I thrive on <Text as="span" weight="strong">synthesising messy, high-dimensional data into clear, fundamental insights and decision-relevant answers</Text>, using broad-scale spatial analytics, causal inference, and reproducible pipelines to map Australian biogeography and understand how ecosystems respond to environmental change. I work across R, Python, and HPC, and teach other researchers to do the same.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `About ${person.name} — ecological data scientist and PhD candidate working in environmental data science and spatial data analytics.`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        <Text as="p" variant="body-default-l">
          I'm an ecological data scientist and PhD candidate at La Trobe University, where my research applies large-scale spatial analytics, frequentist and Bayesian spatial modelling, and causal inference to questions about how Australia's forests are shaped by climate, soil, and evolutionary history. My work sits at the intersection of <strong>biogeography</strong>, <strong>statistical ecology</strong>, and <strong>reproducible computing</strong>.
        </Text>
        <Text as="p" variant="body-default-l">
          I build pipelines that turn messy, high-dimensional datasets — DNA sequences, environmental rasters, species occurrences spanning hundreds of thousands of observations — into clear, fundamental insights and decision-relevant answers. I work across R, Python, and high-performance computing, and I care about open, version-controlled science that other researchers can reuse and extend. I'm currently looking for postdoctoral research positions and applied data-driven roles in government and research institutions where rigorous spatial and statistical analysis can inform environmental decision-making.
        </Text>
        <Text as="p" variant="body-default-l">
          I use AI tools to accelerate my daily research workflow, and I'm interested in how agentic tools are changing how scientists write and review code and synthesise data.
        </Text>
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Research & Teaching Experience",
    experiences: [
      {
        company: "La Trobe University",
        timeframe: "2023 – present",
        role: "PhD Researcher — Biological Sciences (Forest Ecosystems)",
        achievements: [
          <>
            Lead analyst on three first-author studies integrating regional to continent-scale spatial data with cutting-edge statistical models and clear communication to understand the ecology and biogeography of Australia's forests
          </>,
          <>
            Developed a novel taxonomically-informed DNA clustering method published in <em>Scientific Data</em> (Florence et al. 2025), releasing the pipeline and curated dataset as open resources on biodiversity data platform (GBIF and ALA)
          </>,
          <>
            Lead analyst on an <em>Ecology Letters</em> manuscript (under review) applying MaxEnt species distribution models, Bayesian spatial models (INLA-SPDE), and phylogenetic inference at continental scale
          </>,
          <>
            Manage terabyte-scale sequence data on HPC infrastructure with reproducible, version-controlled pipelines
          </>,
          <>
            Also a co-author on peer-reviewed work spanning plant ecology, fungal ecology, fire ecology, and ecological restoration
          </>,
        ],
        images: [],
      },
      {
        company: "La Trobe University",
        timeframe: "2024 – present",
        role: "Teaching Assistant & Peer Learning Facilitator (Code Club)",
achievements: [
          <>
            Developed the R workshop curriculum for the third‑year undergraduate subject <em>Quantitative Research Methods</em>, including hands‑on tutorials on data exploration, visualisation, and introductory‑to‑intermediate statistical modelling
          </>,
          <>
            Teach best-practices in environmental data science and reproducible R workflows to postgraduate and honours students; design and deliver hands-on workshops on version control, data wrangling, and statistical modelling
          </>,
          <>
            Mentor students on analytical design in ecological thesis projects, translating complex statistical and bioinformatic concepts for non-specialist learners
          </>,
        ],
        images: [],
      },
      {
        company: "NSW Department of Primary Industries — Wollongbar Institute",
        timeframe: "2020 – 2021",
        role: "Research Intern",
        achievements: [
          <>
            Integrated analytical chemistry (LC-MS) with environmental and agricultural datasets to support a soil-health monitoring program used by NSW DPI scientists and decision-makers
          </>,
          <>
            Prepared datasets and analytical outputs for internal stakeholders, gaining first-hand experience of the standards and expectations of delivering technical work inside a government science setting
          </>,
        ],
        images: [],
      },
      {
        company: "La Trobe University & Southern Cross University",
        timeframe: "2021 – 2022",
        role: "Research Assistant",
        achievements: [
          <>
            Supported high-throughput DNA sequencing, bioinformatics, and field-based environmental sampling projects across two research groups
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "PhD, Biological Sciences (Forest Ecosystems) — La Trobe University",
        description: <>2023 – submitting mid-2026</>,
      },
      {
        name: "BSc (Honours), Microbiology — La Trobe University",
        description: (
          <>2022 · First Class Honours · Top of cohort, with a Commendation for Academic Excellence</>
        ),
      },
      {
        name: "Bachelor of Environmental Science — Southern Cross University",
        description: (
          <>2019 – 2021 · GPA 6.83 / 7.00 · Multiple Academic Excellence Awards</>
        ),
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Spatial & statistical modelling",
        description: (
          <>
            Continent-scale spatial analysis, frequentist and Bayesian spatial models (INLA-SPDE), species distribution modelling (MaxEnt), GLMs / GLMMs, causal inference with observational data, phylogenetic inference, and uncertainty quantification.
          </>
        ),
        tags: [],
        images: [],
      },
      {
        title: "Bioinformatics & DNA metabarcoding",
        description: (
          <>
            End-to-end design and execution of DNA metabarcoding pipelines — from raw sequence to ecological inference — including quality control, denoising, taxonomic clustering, curated reference-database construction, and reproducible HPC workflows for terabyte-scale sequence data. Published a novel taxonomically-informed clustering method in <em>Scientific Data</em> (2025).
          </>
        ),
        tags: [],
        images: [],
      },
      {
        title: "Coding & reproducibility",
        description: (
          <>
            Advanced R, working Python, UNIX/Shell, Git/GitHub, and Markdown. SLURM-scheduled high-performance computing, parallel pipelines, and end-to-end reproducible, version-controlled workflows.
          </>
        ),
        tags: [],
        images: [],
      },
      {
        title: "Communication & teaching",
        description: (
          <>
            Peer-reviewed publication and international conference presentation; technical teaching of R, version control, and statistical modelling; plain-English writing for non-specialist audiences. Facilitator of the <strong>La Trobe Code Club</strong>, a student-led community for reproducible ecology and data science.
          </>
        ),
        tags: [],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Research",
  title: `Research Projects – ${person.name}`,
  description: `Research projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
