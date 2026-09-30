# Case Study Page Implementation

## Summary

Built a complete dynamic case-study system for the Next.js portfolio with the following structure:

## ✅ Files Created

### Core Data & Types
- **src/lib/projects.ts** - Single source of truth for all project data with TypeScript interfaces
  - `Project` interface with all case study fields
  - `projects` array with GetVax (complete) and Afya (stub)
  - `getProjectBySlug()` and `getAllSlugs()` helper functions

### Dynamic Route
- **src/app/work/[slug]/page.tsx** - Main case study page component
  - `generateStaticParams` for pre-rendering
  - `generateMetadata` for SEO & OG tags
  - Imports and orchestrates all section components
  - Reuses TestimonialsSection and ContactSection at bottom

- **src/app/work/[slug]/not-found.tsx** - 404 fallback for unknown project slugs

### Case Study Components (src/app/work/[slug]/components/)
1. **CaseHero.tsx** - Project name, year label, large tagline, cover image, scroll-to-top button
2. **CaseMeta.tsx** - Tab pills + 4-column meta grid (Role, Deliverables, Collaborators, Year)
3. **CaseAssignment.tsx** - Heading + prose paragraphs
4. **CaseChallenge.tsx** - Heading, bordered pull-quote, body text, bullet list, optional image
5. **CaseResearch.tsx** - Heading + bordered box of labeled insights
6. **CaseSolution.tsx** - Heading, intro, numbered feature blocks with bordered sub-points
7. **CaseLearnings.tsx** - Heading + bordered box of titled learning points
8. **CaseClosing.tsx** - Full-bleed closing image + "Next Project →" link

### Updated Files
- **src/app/components/ProjectsSection.tsx**
  - Added `slug?: string` to Project interface
  - Added `import Link from 'next/link'`
  - Updated project data to include `slug` field for GetVax and Afya
  - Modified ProjectCard to use `Link` for internal navigation when slug exists
  - Maintains external link behavior for projects without slugs
  - Preserves GetVax green background styling

### Assets
- **public/images/** - Created directory
- **public/images/placeholder-cover.png** - SVG placeholder for all images

## Routing Logic

Projects in ProjectsSection now support three navigation modes:

1. **Internal Case Study** (if `slug` exists): Links to `/work/${slug}` using Next.js Link
2. **External Link** (if `link` exists but no `slug`): Opens external URL in new tab
3. **No Link** (neither exists): Static card, no interaction

GetVax and Afya → navigate to `/work/getvax` and `/work/afya`
Petal Finance → keeps external link behavior (no slug defined)

## Styling Conventions

All components follow existing design system:
- Manrope font family
- Consistent vertical rhythm: `py-12 sm:py-16 md:py-20`
- `max-w-3xl` for prose, `max-w-5xl` for images/meta
- Bordered callouts: `border border-gray-200 rounded-lg p-6 sm:p-8`
- Mobile-responsive with sm/md/lg breakpoints
- Colors from existing palette (gray-50, gray-100, gray-200, gray-600, gray-900, etc.)

## Data Structure

GetVax is fully populated with:
- Complete assignment, challenge, research, solution, learnings sections
- Meta information (role, deliverables, collaborators, year)
- 6 tabs (Web App, Mobile App, Admin Dashboard, Website, Product Workshop, Design System)
- Placeholder images throughout

Afya is a stub with "Coming soon..." placeholders ready for content

## Next Steps

To add real content:

1. **Replace placeholder images**: Swap `/images/placeholder-cover.png` with real project screenshots
2. **Fill in Afya data**: Edit `src/lib/projects.ts` to add Afya case study content
3. **Add more projects**: Append to `projects` array in `src/lib/projects.ts`
4. **Update ProjectsSection**: Add `slug` field to any project that should have a case study

## Testing

Navigate to:
- `/work/getvax` - Full GetVax case study
- `/work/afya` - Afya stub case study
- `/work/invalid-slug` - 404 not-found page

Click project cards on homepage to test navigation.

## File Structure

```
src/
├── lib/
│   └── projects.ts                    # Single source of truth
├── app/
│   ├── components/
│   │   └── ProjectsSection.tsx        # Updated with Link routing
│   └── work/
│       └── [slug]/
│           ├── page.tsx               # Main case study page
│           ├── not-found.tsx          # 404 fallback
│           └── components/
│               ├── CaseHero.tsx
│               ├── CaseMeta.tsx
│               ├── CaseAssignment.tsx
│               ├── CaseChallenge.tsx
│               ├── CaseResearch.tsx
│               ├── CaseSolution.tsx
│               ├── CaseLearnings.tsx
│               └── CaseClosing.tsx
public/
└── images/
    └── placeholder-cover.png          # Placeholder image
```

## Notes

- No CMS or API fetching - all data is static in `projects.ts`
- Static site generation via `generateStaticParams`
- Reuses existing TestimonialsSection and ContactSection components
- No changes to existing card design - only wrapped in Link
- Mobile responsive throughout
- SEO-friendly with generateMetadata
