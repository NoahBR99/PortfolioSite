import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import FigmaEmbed from '../../components/FigmaEmbed/FigmaEmbed';
import ProjectSelector from '../../components/ProjectSelector/ProjectSelector';
import WorkHero from '../../components/WorkHero/WorkHero';
import WorkDetail from '../../components/WorkDetail/WorkDetail';
import kromLogo from '../../assets/images/studiokrom_logo.png';
import philipsLogo from '../../assets/images/philips_logo.jpg';
import kromAffinityMap from '../../assets/images/affinity map krom.jpg';
import kromUiPrototype from '../../assets/images/krom ui prototype.png';
import kromUiHover from '../../assets/images/Timer Hover.png';
import kromStoryboard from '../../assets/images/Storyboard krom.png';
import kromGuidelines from '../../assets/images/image (5).png';
import philipsMyshopper from '../../assets/images/Myshopper.png';
import philipsL2 from '../../assets/images/Website Philips L2.png';
import philipsSketches from '../../assets/images/Sketches.png';
import philipsAffinityMap from '../../assets/images/Frame 50.png';
import './WorkPage.css';

const PROJECT_IDS = ['philips', 'studio-krom'];

const WorkPage = ({ onOpenLightbox }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const detailRef = useRef(null);
  const initialProject = PROJECT_IDS.includes(location.hash.replace('#', ''))
    ? location.hash.replace('#', '')
    : 'philips';
  const [activeProject, setActiveProject] = useState(initialProject);

  const kromMedia = [
    {
      id: 'krom-ui',
      title: 'Main menu prototype',
      summary: 'Default and hover states for the extension UI.',
      tone: 'rose',
      wide: true,
      thumbClass: 'clean',
      galleryClass: 'compact',
      src: kromUiPrototype,
      alt: 'Studio Krom extension UI prototype',
      images: [
        {
          src: kromUiPrototype,
          alt: 'Studio Krom extension UI prototype',
          className: 'is-primary'
        },
        { src: kromUiHover, alt: 'Studio Krom hover state UI' }
      ]
    },
    {
      id: 'krom-research',
      title: 'Affinity mapping session',
      summary: 'Synthesis board from interviews and research.',
      tone: 'cream',
      frame: 'photo',
      src: kromAffinityMap,
      allowZoom: true,
      alt: 'Affinity mapping board used for research synthesis'
    },
    {
      id: 'krom-storyboard',
      title: 'Storyboard',
      summary: 'Key moments in the user journey and concept flow.',
      tone: 'peach',
      frame: 'photo',
      src: kromStoryboard,
      alt: 'Storyboard for the Studio Krom concept'
    },
    {
      id: 'krom-guidelines',
      title: 'Design guidelines',
      summary: 'Typography, spacing, and accessibility decisions.',
      tone: 'cream',
      frame: 'photo',
      src: kromGuidelines,
      alt: 'Studio Krom design guidelines'
    }
  ];

  const philipsMedia = [
    {
      id: 'philips-l2',
      title: 'L2 category redesign',
      summary: 'Clear product cards, filters, and comparison cues.',
      tone: 'rose',
      wide: true,
      frame: 'browser-full',
      src: philipsL2,
      allowZoom: true,
      alt: 'Philips Myshop L2 category page redesign'
    },
    {
      id: 'philips-myshopper',
      title: 'MyShopper assistant',
      summary: 'Guided decision support for product selection.',
      tone: 'cream',
      src: philipsMyshopper,
      alt: 'Philips Myshopper assistant concept'
    },
    {
      id: 'philips-sketches',
      title: 'Sketches',
      summary: 'Early flow and layout explorations.',
      tone: 'peach',
      frame: 'photo',
      src: philipsSketches,
      allowZoom: true,
      alt: 'Philips Myshop early sketches'
    },
    {
      id: 'philips-affinity-map',
      title: 'Affinity map',
      summary: 'Synthesis board from research insights.',
      tone: 'cream',
      frame: 'photo',
      src: philipsAffinityMap,
      allowZoom: true,
      alt: 'Philips Myshop affinity map'
    }
  ];

  const projects = [
    {
      id: 'philips',
      label: 'Philips',
      logoSrc: philipsLogo,
      detailProps: {
        id: 'philips',
        eyebrow: 'UX/UI Internship',
        title: 'Philips',
        logoSrc: philipsLogo,
        profile:
          'Philips is a global health technology company; Philips MyShop is its internal employee webshop for current and former staff.',
        lead: 'Led UX/UI improvements for Philips Myshop (internal webshop), targeting clearer product discovery, comparison, and decision confidence for a 40-70+ audience.',
        note: 'High-level summary only to respect internal constraints.',
        metaItems: [
          { label: 'Role', value: 'UX/UI Design Intern' },
          { label: 'Team', value: 'Sole UX designer' },
          { label: 'Focus', value: 'Product discovery + confidence' },
          { label: 'Tools', value: 'Figma, FigJam, research synthesis' },
          { label: 'Timeline', value: '2025-2026' }
        ],
        summaryItems: [
          'Refocused scope to L2 discovery and comparison to drive the biggest impact.',
          'Synthesized heuristics, a 42-response survey, and competitive insights into a clear problem statement.',
          'Designed a hi-fi prototype for Home -> L2 -> Compare -> PDP plus the MyShopper assistant concept.'
        ],
        roleItems: [
          'Planned and executed heuristics, survey analysis, and competitive benchmarking.',
          'Synthesized findings through affinity mapping, journey mapping, and UX principles.',
          'Designed and iterated the hi-fi prototype with stakeholder feedback.'
        ],
        impactItems: [
          'Aligned stakeholders on an evidence-backed direction for L2 clarity and comparison.',
          'Delivered a research dossier and design rationale used for decision-making.',
          'Set up usability validation to measure clarity and decision confidence.'
        ],
        mediaItems: philipsMedia,
        challenge:
          'Confidence dropped on L2 pages: users struggled to differentiate models, compare options, and trust their final choice.',
        approachItems: [
          'Applied Double Diamond + DOT to structure discovery and define phases.',
          'Triangulated heuristics, the 42-response survey, competitive analysis, affinity mapping, and journey mapping.',
          'Prototyped L2 improvements and the MyShopper assistant concept, iterating with stakeholder and expert review.'
        ],
        outcome:
          'Delivered a research-backed hi-fi prototype and test plan to validate clarity, comparison, and decision confidence improvements.',
        delay: '60ms',
        sectionClassName: 'section-rose project-philips'
      }
    },
    {
      id: 'studio-krom',
      label: 'Studio Krom',
      logoSrc: kromLogo,
      detailProps: {
        id: 'studio-krom',
        eyebrow: 'Case study',
        title: 'Studio Krom',
        logoSrc: kromLogo,
        profile:
          'Krom is a design and technology studio creating experimental interactive experiences across digital and physical media.',
        lead: 'Scoped a broad accessibility brief to cognitive accessibility for adults and adolescents with ADHD, then designed a calm, focus-first extension concept.',
        metaItems: [
          { label: 'Role', value: 'UX + UI + Front-End' },
          { label: 'Team', value: 'Team project (collaborative)' },
          { label: 'Focus', value: 'Cognitive accessibility (ADHD)' },
          { label: 'Tools', value: 'Figma, React, Chrome extensions' },
          { label: 'Timeline', value: '2025' }
        ],
        summaryItems: [
          'Scoped the brief to cognitive accessibility for adults and adolescents with ADHD.',
          'Ran research and synthesis to validate focus triggers and needs.',
          'Delivered a hi-fi prototype and React extension foundation.'
        ],
        roleItems: [
          'Research planning, interviews, and synthesis.',
          'UX/UI design system and Figma prototyping.',
          'Front-end proof of concept in React.',
          'Usability testing and iteration.'
        ],
        impactItems: [
          'Concept won Best Digital Accessibility Concept.',
          'Client feedback informed must-have priorities and scope.',
          'Testing refined UI clarity, including input styling and tooltips.'
        ],
        mediaItems: kromMedia,
        challenge:
          'The brief covered all accessibility types, so we needed a focused scope backed by research while still supporting a wider audience.',
        approachItems: [
          'Aligned on ADHD as the target audience with Studio Krom.',
          'Secondary + primary research, interviews, and competitive analysis, synthesized into affinity maps, persona, and POV statements.',
          'Style guide with Lexend, Figma prototypes, and usability testing loops.',
          'React extension proof-of-concept with HashRouter and scaffolding for the core menu experience.'
        ],
        outcome:
          'Delivered a high-fidelity prototype and extension foundation, with testing insights that improved clarity; the concept won Best Digital Accessibility Concept.',
        delay: '120ms',
        sectionClassName: 'section-white project-krom'
      }
    }
  ];

  const figmaEmbeds = {
    'studio-krom': {
      title: 'Studio Krom prototype',
      description:
        'Explore the high-fidelity main menu and feature flows built from the style guide.',
      embedUrl:
        'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FglM80AdHJLQWrTDqw6iGZN%2FCenter-Prototype%3Fnode-id%3D288-876%26t%3DKerX1sYvjOi6IBEt-0%26scaling%3Dscale-down-width%26content-scaling%3Dfixed%26page-id%3D0%253A1%26starting-point-node-id%3D288%253A876%26hide-ui%3D1',
      aspectRatio: '1920 / 1080'
    },
    philips: {
      title: 'Philips Myshop prototype',
      description:
        'Explore the L2 redesign, comparison flow, and MyShopper assistant concept.',
      embedUrl:
        'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F7xniDWuhETUNuT4JBzEOev%2FPhilips-Myshop-Prototype-V1.2--Current-%3Fnode-id%3D326-60%26t%3DGEwLpXoZniRFFy3S-0%26scaling%3Dscale-down-width%26content-scaling%3Dfixed%26page-id%3D236%253A3%26hide-ui%3D1',
      aspectRatio: '1280 / 834'
    }
  };

  const figmaThemes = {
    'studio-krom': 'project-krom',
    philips: 'project-philips'
  };

  const activeData =
    projects.find((project) => project.id === activeProject) || projects[0];
  const activeEmbed = figmaEmbeds[activeProject];

  const handleSelect = (id) => {
    if (id === activeProject) {
      return;
    }

    setActiveProject(id);
    navigate(`/work#${id}`, { replace: true });
  };

  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash && hash !== activeProject && PROJECT_IDS.includes(hash)) {
      setActiveProject(hash);
    }
  }, [location.hash, activeProject]);

  useLayoutEffect(() => {
    if (!detailRef.current) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    gsap.killTweensOf(detailRef.current);

    if (prefersReducedMotion) {
      gsap.set(detailRef.current, { clearProps: 'opacity,transform' });
      return;
    }

    gsap.set(detailRef.current, { autoAlpha: 0, y: 16 });
    gsap.to(detailRef.current, {
      autoAlpha: 1,
      y: 0,
      duration: 0.45,
      ease: 'power3.out'
    });
  }, [activeProject]);

  return (
    <main id="main" className="page work-page">
      <WorkHero />
      <ProjectSelector
        projects={projects}
        activeProject={activeProject}
        onSelect={handleSelect}
      />
      <div ref={detailRef} className="work-detail-shell" key={activeProject}>
        <WorkDetail
          {...activeData.detailProps}
          enableReveal={false}
          onOpenLightbox={onOpenLightbox}
        />
        {activeEmbed && (
          <FigmaEmbed
            title={activeEmbed.title}
            description={activeEmbed.description}
            embedUrl={activeEmbed.embedUrl}
            themeClassName={figmaThemes[activeProject]}
            aspectRatio={activeEmbed.aspectRatio}
          />
        )}
      </div>
    </main>
  );
};

export default WorkPage;
